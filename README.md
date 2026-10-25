# QuickBite

QuickBite is a lightweight static website for a proposed campus food-service concept, created for a SIWES Week 5 Software Engineering assignment. It uses HTML5, CSS3, and a small vanilla JavaScript file. There is no framework, build step, database, or account service.

## Pages and assets

- `index.html` — concept introduction and campus-life imagery.
- `about.html` — project overview and potential discovery journey.
- `gallery.html` — responsive image grid and editorial sample reflections (not customer testimonials or verified interviews).
- `contact.html` — client-side message form validation in simulation mode.
- `signup.html` and `login.html` — responsive account form previews with field validation, password confirmation, and password visibility controls.
- `style.css` — shared responsive styles, interaction states, and reduced-motion support.
- `assets/form-validation.js` — vanilla JavaScript validation and form-preview feedback; it does not send or save form data.
- `assets/quickbite-logo.svg`, `assets/quickbite-logo-light.svg`, and `assets/favicon.svg` — brand marks for light backgrounds, dark backgrounds, and browser tabs.
- `assets/quickbite-bowl.svg` — original local meal illustration.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) and use the navigation to visit all six pages. Use the browser's responsive mode to review mobile, tablet, and desktop widths. The relative page and asset paths also work from the GitHub Pages project path `/QuickBite/`.

## Form behavior and limitations

The Contact, sign-up, and login forms use browser validation attributes plus inline client-side checks for required fields, email format, message length, password length, and matching confirmation. Field errors are connected to their inputs and announced to assistive technology. The password visibility controls are keyboard operable.

These forms are demonstrations only. The Contact page keeps the former FormSubmit address as an inactive data attribute for reference; it has no submission action. Valid checks show a local status message only. No messages are sent, no account is created, and passwords are not saved or authenticated. Do not enter real passwords. Secure login and account creation require a real backend or authentication provider.

## Manual checks

No test runner or third-party packages are required. With the local server running:

1. Visit each page and follow every header and footer navigation link.
2. On Contact, try empty fields, an invalid email, a message shorter than 10 characters, then valid values. Confirm errors appear by the fields and valid values show a simulation notice without sending data.
3. On Sign up, try empty fields, an invalid email, a password shorter than 8 characters, mismatched passwords, then matching valid values. Confirm the successful check clears password fields and states that no account was created.
4. On Log in, try missing and invalid values, then valid-format values. Confirm the page reports local validation only and clears the password.
5. Test password visibility controls with the keyboard and review the pages at narrow mobile, tablet, and desktop widths. Check the browser console for errors.

## Images

Campus and food photographs load from the [Unsplash image CDN](https://images.unsplash.com/) and require an internet connection. They have descriptive alt text and are hidden if a remote image fails. The selected photos are illustrative and do not depict real QuickBite users, vendors, or events. The bowl illustration and logo artwork are local SVG files stored in `assets/`.
