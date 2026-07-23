# Alexis Bazire — Portfolio

A one-page portfolio built with **Next.js (App Router)**, **TypeScript** and **Tailwind CSS v4**.
Fully static, no database, no backend, ready to deploy on Vercel.

---

## 1. Run the project locally

You need **Node.js 20 or newer**.

```bash
npm install     # first time only
npm run dev     # start the development server
```

Then open **http://localhost:3000**. The page reloads automatically when you save a file.

Other useful commands:

```bash
npm run build   # production build (must succeed before deploying)
npm run start   # run the production build locally
npm run lint    # check code quality
```

---

## 2. Update the text

The site exists in **two languages**: French at `/` and English at `/en`.

| File | What it holds |
| ---- | ------------- |
| `src/data/fr.ts` | Every French string |
| `src/data/en.ts` | Every English string |
| `src/data/shared.ts` | Email, LinkedIn, CV link, photo, site URL — identical in both |

Open the file for the language you want, change the text between the quotes,
save. You never need to open a component to change wording.

**Change a text in one language, change it in the other too.** The two files
share the same structure, and TypeScript enforces it: if you add a field to one
and forget the other, `npm run build` fails and tells you exactly what is
missing. That is deliberate — it is what stops the two versions from drifting
apart.

Each language file is organised in clearly named blocks:

| Block        | What it controls                                             |
| ------------ | ------------------------------------------------------------ |
| `site`       | Page title, meta description, social sharing text             |
| `personal`   | Job title, location, availability, photo alt text             |
| `navigation` | The links in the sticky menu                                  |
| `hero`       | Everything at the top of the page (headline, buttons, badge)  |
| `work`       | Title and intro of the "Selected Work" section                |
| `projects`   | The three case studies                                        |
| `about`      | About text and the three "how I work" points                  |
| `skills`     | The three skill categories and their items                    |
| `experience` | The timeline entries and the education block                  |
| `contact`    | Closing section (title, text, button labels)                  |
| `awareness`  | The short "Business & Market Awareness" band                   |
| `footer`     | Footer sentence                                               |
| `ui`         | Buttons and labels not tied to a section                      |

**Tips**

- Adding an item to a list (a skill, a contribution, a timeline entry) is just
  adding a new line inside the `[ ... ]` brackets. Keep the commas.
- Adding a project = copying an existing block inside `projects: [ ... ]` and
  giving it a unique `id`. The **first project in the list is automatically
  displayed as the large, featured case study**; the others use the compact layout.
- Changing the order of the timeline = moving the blocks up or down.
- Navigation labels can be translated freely, but the `href` values
  (`#work`, `#about`, `#skills`, `#experience`, `#contact`) must stay the same
  in both languages — they point at section ids in the markup.
- Project `id` values must also match across languages.

### Changing the default language

French is the default and sits at `/`. To swap the two, edit `defaultLocale` in
`src/data/shared.ts`, then move the pages: `src/app/(fr)` serves `/` and
`src/app/(en)/en` serves `/en`.

---

## 3. Replace the project images

Project images live in `public/projects/` and are referenced from
the language files.

1. Export your image as **WebP** (JPG/PNG also work), ideally in a **portrait 3:4
   ratio**, around **1200 px wide**, under ~300 KB.
2. Drop it into `public/projects/`.
3. Make sure the file name matches the `src` value in the data file:

   ```ts
   images: [
     {
       src: "/projects/spotme-01.webp",
       alt: "SpotMe interface: profile discovery screen.",
       caption: "Discovery",
     },
     // ...
   ]
   ```

   The `src` path is the same in both languages; only `alt` and `caption`
   get translated.

**If a file is missing, nothing breaks.** A clean placeholder is displayed
instead of a broken image, so the site can go live before the visuals are ready.

Always keep the `alt` text meaningful — it is what screen readers announce.

To add images to a project that has none, replace `images: []` with the structure
above. To remove all images from a project, set `images: []`.

---

## 4. Add the CV link

In `src/data/shared.ts`, find:

```ts
cvUrl: "",
```

**While this value is empty, every "Download CV" button is automatically hidden.**
No broken link is ever displayed.

To publish the CV:

1. Put the PDF in the `public/` folder, e.g. `public/alexis-bazire-cv.pdf`.
2. Set the value:

   ```ts
   cvUrl: "/alexis-bazire-cv.pdf",
   ```

The button reappears in the Contact section and in the footer. An external link
(Google Drive, Notion…) also works — paste the full `https://…` URL.

---

## 5. Deploy on Vercel

1. Push the project to GitHub (or GitLab / Bitbucket).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Vercel detects Next.js automatically — **keep every default setting** and click
   **Deploy**. No environment variables are needed.
4. After the first deployment, copy the final URL into `src/data/shared.ts`:

   ```ts
   export const shared = {
     url: "https://your-domain.com",
     // ...
   };
   ```

   This makes the social sharing preview (LinkedIn, X, Slack) use correct
   absolute URLs.

Every later `git push` redeploys the site automatically.

**Custom domain:** Vercel dashboard → your project → *Settings* → *Domains*.

---

## 6. Change the colours

All colours are CSS variables defined once, at the top of `src/app/globals.css`:

```css
:root {
  --background: #f8f8f5;   /* page background        */
  --foreground: #14181f;   /* main text              */
  --muted:      #5c6472;   /* secondary text         */
  --line:       #e2e2dc;   /* borders                */
  --accent:     #1f45c8;   /* the single blue accent */
}
```

Change `--accent` and the whole site follows: buttons, links, hover states,
timeline markers and the scroll progress bar. If you pick a lighter blue, adjust
`--accent-hover` too so white text on the accent background stays readable.

---

## Project structure

```
src/
├─ app/
│  ├─ (fr)/                 # French site, served at /
│  │  ├─ layout.tsx         # fonts + <html lang="fr">
│  │  ├─ page.tsx
│  │  └─ opengraph-image.tsx
│  ├─ (en)/en/              # English site, served at /en
│  │  ├─ page.tsx
│  │  └─ opengraph-image.tsx
│  ├─ (en)/layout.tsx       # fonts + <html lang="en">
│  ├─ metadata.ts           # title, description, Open Graph, hreflang
│  ├─ globals.css           # theme variables, base styles, animations
│  ├─ icon.tsx              # generated favicon placeholder
│  ├─ robots.ts
│  └─ sitemap.ts
├─ components/
│  ├─ Header.tsx            # sticky nav + active section + mobile menu
│  ├─ Hero.tsx
│  ├─ ProjectSection.tsx    # featured + compact case studies
│  ├─ ProjectImage.tsx      # image with automatic placeholder fallback
│  ├─ About.tsx
│  ├─ Skills.tsx
│  ├─ ExperienceTimeline.tsx
│  ├─ Contact.tsx
│  ├─ CopyEmail.tsx         # copy-to-clipboard button
│  ├─ Footer.tsx
│  ├─ ScrollProgress.tsx
│  ├─ Portfolio.tsx         # assembles every section, in either language
│  ├─ og.tsx                # the generated sharing image
│  ├─ spotme/               # the interactive demo
│  └─ ui/                   # Button, Reveal (scroll animation), SectionHeading
└─ data/
   ├─ fr.ts                 # ← FRENCH CONTENT
   ├─ en.ts                 # ← ENGLISH CONTENT
   ├─ shared.ts             # ← email, links, photo, site URL
   ├─ types.ts              # the shape both languages must follow
   └─ index.ts              # getContent(locale)
public/
└─ projects/                # project images
```

## Accessibility & performance notes

- Semantic HTML, one `h1`, correct heading order, skip-to-content link.
- `<html lang>`, `og:locale` and `hreflang` are correct on both languages, so
  search engines treat them as one page in two languages rather than duplicates.
- Full keyboard navigation with visible focus rings.
- All animations respect the `prefers-reduced-motion` system setting.
- The page is fully pre-rendered at build time; only the sticky nav, the scroll
  progress bar, the reveal animations and the copy button run on the client.
- No horizontal scrolling on mobile.
