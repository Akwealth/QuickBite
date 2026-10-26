# QuickBite

QuickBite is a lightweight static website for a proposed campus food-service concept, created for a SIWES Week 5 Software Engineering assignment. It uses HTML5, CSS3, and a small vanilla JavaScript file. There is no framework, build step, or database.

## Pages and assets

- `index.html` — concept introduction and campus-life imagery.
- `about.html` — project overview and potential discovery journey.
- `gallery.html` — responsive image grid and editorial sample reflections (not customer testimonials or verified interviews).
- `contact.html` — contact details and a validated message form.
- `style.css` — shared responsive styles, interaction states, and reduced-motion support.
- `assets/form-validation.js` — vanilla JavaScript validation and accessible inline errors for the Contact form.
- `assets/quickbite-logo.svg`, `assets/quickbite-logo-light.svg`, and `assets/favicon.svg` — brand marks for light backgrounds, dark backgrounds, and browser tabs.
- `assets/quickbite-bowl.svg` — original local meal illustration.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) and use the navigation to visit all four pages. Use the browser's responsive mode to review mobile, tablet, and desktop widths. The relative page and asset paths also work from the GitHub Pages project path `/QuickBite/`.

## Form behavior and limitations

The Contact form validates its required fields, email format, name length, and message length before a valid submission can proceed. Errors appear beside their fields, are associated with each input for assistive technology, and clear as the user corrects the input.

The Contact form retains its FormSubmit action for `a.essien9639@miva.edu.ng`. Delivery has not been verified, and FormSubmit may require email activation before messages can be delivered. Do not treat validation feedback as confirmation that a message was delivered.

## Manual checks

No test runner or third-party packages are required. With the local server running:

1. Visit each page and follow every header and footer navigation link.
2. On Contact, try empty fields, an invalid email, a message shorter than 10 characters, then valid-format values. Invalid values should be blocked and show inline errors. A valid form proceeds to FormSubmit; use dummy details only, and do not treat the result as delivered unless receipt is verified.
3. Review the Contact page at narrow mobile, tablet, and desktop widths. Check the browser console for errors.

## Images

Campus and food photographs load from the [Unsplash image CDN](https://images.unsplash.com/) and require an internet connection. They have descriptive alt text and are hidden if a remote image fails. The selected photos are illustrative and do not depict real QuickBite users, vendors, or events. The bowl illustration and logo artwork are local SVG files stored in `assets/`.
