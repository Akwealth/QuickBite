# QuickBite

QuickBite is a lightweight static website for a proposed campus food-service concept, created for a SIWES Week 5 Software Engineering assignment. It uses plain HTML5 and CSS3, with small inline JavaScript image fallbacks; no framework, build step, or database is required. The site is a student concept and does not process orders.

## Pages and assets

- `index.html` — concept introduction and campus-life imagery.
- `about.html` — project overview and potential discovery journey.
- `gallery.html` — responsive image grid and three editorial sample reflections (not customer testimonials or verified interviews).
- `contact.html` — collaboration details and a required-field contact form.
- `style.css` — shared responsive styles, interaction states, and reduced-motion support.
- `assets/quickbite-logo.svg`, `assets/quickbite-logo-light.svg`, and `assets/favicon.svg` — brand marks for light backgrounds, dark backgrounds, and browser tabs.
- `assets/quickbite-bowl.svg` — original local meal illustration.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8000
```

Open [http://localhost:8000](http://localhost:8000) and use the navigation to check all four pages. Use your browser's responsive mode to review mobile, tablet, and desktop widths. The pages and local asset paths are relative, so they work from the GitHub Pages project path `/QuickBite/`.

## Images

Campus and food photographs are loaded from the [Unsplash image CDN](https://images.unsplash.com/) and require an internet connection. Images have descriptive alt text and are hidden gracefully if a remote image fails. The selected photos use Unsplash image IDs `1527529482837-4698179dc6ce`, `1528605248644-14dd04022da1`, `1547592180-85f173990554`, `1512621776951-a57141f2eefd`, `1490645935967-10de6ba17061`, and `1517248135467-4c7edcad34c4`. They are illustrative and do not depict real QuickBite users, vendors, or events. The bowl illustration and logo artwork are original SVG files stored in `assets/`.

## Contact form setup

The form posts to FormSubmit at `https://formsubmit.co/a.essien9639@miva.edu.ng`. It has not been activated or tested, so email delivery is not yet confirmed. Submit one test using the hosted or locally served site, open the activation email sent to `a.essien9639@miva.edu.ng`, and follow its confirmation link. Then submit another test and check the inbox and spam folder. See [FormSubmit documentation](https://formsubmit.co/documentation). The form service may show its own confirmation page after submission.
