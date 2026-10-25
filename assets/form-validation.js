"use strict";

(() => {
  const messages = {
    required: "Please complete this field.",
    nameShort: "Enter a name with at least 2 characters.",
    email: "Enter a valid email address, such as name@example.com.",
    messageShort: "Write a message with at least 10 characters.",
    passwordShort: "Use at least 8 characters for the password.",
    passwordMismatch: "The passwords do not match."
  };

  function showStatus(status, message, kind = "success") {
    if (!status) return;
    status.textContent = message;
    status.classList.toggle("is-error", kind === "error");
    status.hidden = false;
  }

  function validateField(field) {
    const value = field.value.trim();
    const name = field.name;
    let message = "";

    if (field.required && !value) {
      message = messages.required;
    } else if (field.type === "email" && value && field.validity.typeMismatch) {
      message = messages.email;
    } else if (name === "name" && value.length < 2) {
      message = messages.nameShort;
    } else if (name === "message" && value.length < 10) {
      message = messages.messageShort;
    } else if (name === "password" && value.length < 8) {
      message = messages.passwordShort;
    } else if (field.dataset.equals) {
      const other = document.getElementById(field.dataset.equals);
      if (other && field.value !== other.value) message = messages.passwordMismatch;
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
      field.addEventListener("input", () => {
        if (touched.has(field) || attempted) validateField(field);
        if (field.name === "password") {
          const confirmation = fields.find((item) => item.dataset.equals === field.id);
          if (confirmation && (touched.has(confirmation) || attempted)) validateField(confirmation);
        }
        if (status) status.hidden = true;
      });
      field.addEventListener("change", () => {
        if (touched.has(field) || attempted) validateField(field);
      });
    });

    form.querySelectorAll("[data-toggle-password]").forEach((toggle) => {
      toggle.addEventListener("click", () => {
        const password = document.getElementById(toggle.getAttribute("aria-controls"));
        if (!password) return;
        const visible = password.type === "password";
        password.type = visible ? "text" : "password";
        toggle.textContent = visible ? "Hide" : "Show";
        toggle.setAttribute("aria-pressed", String(visible));
      });
    });

    form.querySelector("[data-form-trigger]")?.addEventListener("click", () => form.requestSubmit());

    // Enter submits to the local validation handler; the forms have no data endpoint.
    form.addEventListener("keydown", (event) => {
      if (event.key === "Enter" && event.target.tagName !== "TEXTAREA" && event.target.tagName !== "BUTTON") {
        event.preventDefault();
        form.requestSubmit();
      }
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      attempted = true;
      const valid = fields.map(validateField).every(Boolean);
      if (!valid) {
        const firstInvalid = fields.find((field) => !field.validity.valid);
        showStatus(status, "Please review the highlighted fields and try again.", "error");
        firstInvalid?.focus();
        return;
      }

      const kind = form.dataset.formKind;
      if (kind === "signup") {
        fields.filter((field) => field.type === "password").forEach((field) => {
          field.value = "";
          field.setCustomValidity("");
          field.setAttribute("aria-invalid", "false");
        });
        showStatus(status, "The details passed local validation. No account was created and no password was saved.");
      } else if (kind === "login") {
        fields.filter((field) => field.type === "password").forEach((field) => {
          field.value = "";
          field.setCustomValidity("");
          field.setAttribute("aria-invalid", "false");
        });
        showStatus(status, "The details passed local validation. This prototype did not sign you in or send your credentials.");
      } else {
        showStatus(status, "Your message passed local validation. This simulation did not send or store it.");
      }
    });
  });
})();
