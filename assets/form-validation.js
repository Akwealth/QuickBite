"use strict";

(() => {
  const messages = {
    required: "Please complete this field.",
    nameShort: "Enter a name with at least 2 characters.",
    email: "Enter a valid email address, such as name@example.com.",
    messageShort: "Write a message with at least 10 characters."
  };

  function showStatus(status, message, isError = false) {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("is-error", isError);
    status.hidden = false;
  }

  function validateField(field) {
    const value = field.value.trim();
    let message = "";

    if (field.required && !value) {
      message = messages.required;
    } else if (field.type === "email" && value && field.validity.typeMismatch) {
      message = messages.email;
    } else if (field.name === "name" && value.length < 2) {
      message = messages.nameShort;
    } else if (field.name === "message" && value.length < 10) {
      message = messages.messageShort;
    }

    field.setCustomValidity(message);
    field.setAttribute("aria-invalid", String(Boolean(message)));

    const error = document.getElementById(`${field.id}-error`);
    if (error) {
      error.textContent = message;
      error.hidden = !message;
    }
    return !message;
  }

  document.querySelectorAll("[data-validate-form]").forEach((form) => {
    const fields = Array.from(form.querySelectorAll("[data-validate]"));
    const status = form.querySelector("[data-form-status]");
    const touched = new WeakSet();
    let attempted = false;

    fields.forEach((field) => {
      field.setAttribute("aria-invalid", "false");
      field.addEventListener("blur", () => {
        touched.add(field);
        validateField(field);
      });
      field.addEventListener("invalid", () => {
        touched.add(field);
        validateField(field);
        showStatus(status, "Please review the highlighted fields and try again.", true);
      });
      field.addEventListener("input", () => {
        if (touched.has(field) || attempted) validateField(field);
        if (status) status.hidden = true;
      });
      field.addEventListener("change", () => {
        if (touched.has(field) || attempted) validateField(field);
      });
    });

    form.addEventListener("submit", (event) => {
      attempted = true;
      const valid = fields.map(validateField).every(Boolean);
      if (!valid) {
        event.preventDefault();
        const firstInvalid = fields.find((field) => !field.validity.valid);
        showStatus(status, "Please review the highlighted fields and try again.", true);
        firstInvalid?.focus();
        return;
      }

      showStatus(status, "Form validation passed. FormSubmit is configured, but email delivery has not been verified.");
      // Keep the configured FormSubmit action for valid entries; delivery is unverified.
    });
  });
})();
