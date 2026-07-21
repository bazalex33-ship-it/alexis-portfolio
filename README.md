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

**Everything you can read on the site lives in one file:**

```
src/data/portfolio.ts
```

Open it, change the text between the quotes, save. That's it — you never need to
open a component to change wording.

The file is organised in clearly named blocks:

| Block        | What it controls                                             |
| ------------ | ------------------------------------------------------------ |
| `site`       | Page title, meta description, site URL, social sharing text   |
| `personal`   | Name, job title, location, email, LinkedIn, CV link           |
| `navigation` | The links in the sticky menu                                  |
| `hero`       | Everything at the top of the page (headline, buttons, badge)  |
| `work`       | Title and intro of the "Selected Work" section                |
| `projects`   | The three case studies                                        |
| `about`      | About text and the three "how I work" points                  |
| `skills`     | The three skill categories and their items                    |
| `experience` | The timeline entries and the education block                  |
| `contact`    | Closing section (title, text, button labels)                  |
| `footer`     | Footer sentence                                               |

**Tips**

- Adding an item to a list (a skill, a contribution, a timeline entry) is just
  adding a new line inside the `[ ... ]` brackets. Keep the commas.
- Adding a project = copying an existing block inside `projects: [ ... ]` and
  giving it a unique `id`. The **first project in the list is automatically
  displayed as the large, featured case study**; the others use the compact layout.
- Changing the order of the timeline = moving the blocks up or down.
- Navigation links must match the section ids (`#work`, `#about`, `#skills`,
  `#experience`, `#contact`). If you rename one, rename the section id too.

---

## 3. Replace the project images

Project images live in `public/projects/` and are referenced from
`src/data/portfolio.ts`.

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

**If a file is missing, nothing breaks.** A clean placeholder is displayed
instead of a broken image, so the site can go live before the visuals are ready.

Always keep the `alt` text meaningful — it is what screen readers announce.

To add images to a project that has none, replace `images: []` with the structure
above. To remove all images from a project, set `images: []`.

---

## 4. Add the CV link

In `src/data/portfolio.ts`, find:

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
4. After the first deployment, copy the final URL into `src/data/portfolio.ts`:

   ```ts
   export const site = {
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
│  ├─ layout.tsx            # fonts, metadata, Open Graph, Twitter card
│  ├─ page.tsx              # the single page: assembles all sections
│  ├─ globals.css           # theme variables, base styles, animations
│  ├─ icon.tsx              # generated favicon placeholder
│  ├─ opengraph-image.tsx   # generated social sharing image
│  ├─ twitter-image.tsx
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
│  └─ ui/                   # Button, Reveal (scroll animation), SectionHeading
└─ data/
   └─ portfolio.ts          # ← ALL CONTENT LIVES HERE
public/
└─ projects/                # project images
```

## Accessibility & performance notes

- Semantic HTML, one `h1`, correct heading order, skip-to-content link.
- Full keyboard navigation with visible focus rings.
- All animations respect the `prefers-reduced-motion` system setting.
- The page is fully pre-rendered at build time; only the sticky nav, the scroll
  progress bar, the reveal animations and the copy button run on the client.
- No horizontal scrolling on mobile.
