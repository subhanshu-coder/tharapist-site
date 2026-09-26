# Dr. Maya Reynolds Therapy Website

A responsive homepage redesign for the internship assignment. Built with Next.js, React, Tailwind CSS, and custom CSS. The color system uses deep sage, warm ivory, and clay.

## Run locally

```bash
npm ci
npm run dev
```

Open `http://localhost:3000`.

## Profile details used

The homepage is based on the supplied Dr. Maya Reynolds Google Doc: Santa Monica practice, in-person and California telehealth sessions, adult clients, anxiety, panic, trauma, burnout, perfectionism, and the listed CBT, EMDR, mindfulness, and body-oriented methods. The portrait and office photos supplied in that profile are included as local files under `public/images`.

The source profile lists the office address as `123th Street 45 W, Santa Monica, CA 90401`; this may contain a typo and should be confirmed before public launch. No phone number, email, scheduling URL, hours, insurance details, or credentials beyond those stated in the profile have been invented. Contact buttons currently link to the on-page contact section as a design placeholder; connect a real contact or scheduling destination before launch.

## Walkthrough notes

See `walkthrough-script.md` for a client-facing desktop and mobile demo script.

## GitHub Pages deployment

The GitHub Actions workflow builds a static export for the repository path `/tharapist-site` and deploys the `out` folder to GitHub Pages. It runs `npm ci` from `package-lock.json`; install without `--legacy-peer-deps` so npm follows the committed peer dependency tree.
# tharapist-site
# tharapist-site
# tharapist-site
