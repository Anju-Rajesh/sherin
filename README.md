# Belated Birthday Surprise 💗

A mobile-first digital scrapbook built with React, Vite, Tailwind CSS and Framer Motion.
No backend, no database, no paid services. Works on GitHub Pages.

## Project layout

```
index.html                 entry point
vite.config.js             base: './' (relative paths, GitHub Pages ready)
src/content.js             ALL text + photo lists (edit this file)
src/components/            one file per section
public/photos/solo/        her individual photos
public/photos/together/    your photos together
public/music/              background song (song.mp3)
public/favicon.svg         custom favicon
.github/workflows/deploy.yml   auto-deploy to GitHub Pages
```

## 1. Preview on your computer

Install Node.js 18 or newer from nodejs.org, then in this folder:

```bash
npm install
npm run dev
```

Open the address it prints (usually http://localhost:5173). Press `F12` and use the phone icon to preview a phone screen.

## 2. Add your photos

Missing photos show a dashed "Your photo goes here" box that names the exact file it wants, so you can see what is still missing.

1. Her solo photos go in `public/photos/solo/` named `solo-1.jpg` to `solo-6.jpg`.
2. Your photos together go in `public/photos/together/` named `together-1.jpg` to `together-5.jpg`.
3. Using `.png`, `.jpeg` or `.webp`, or different names? Open `src/content.js` and change the `src` line for that photo.
4. Want more or fewer photos? Add or delete lines in the `photos` lists in `src/content.js`.
5. Set `aspect` for each photo to `portrait`, `square` or `landscape` so nothing important is cropped.

Rules that avoid broken images on GitHub Pages:
- File names are case-sensitive. `solo-1.jpg` is not `Solo-1.JPG`.
- Avoid spaces in names.
- Resize photos before adding them: about 1200 px on the long side, under 300 KB each. Free tool: squoosh.app. This keeps the site fast on mobile data.

## 3. Add music

Put a track at `public/music/song.mp3` (or change `music.src` in `src/content.js`). It only plays after she taps the Play music button at the top left.
Use a royalty-free track (for example from Pixabay Music), because the site will be public.

## 4. Edit the words

Everything she reads is in `src/content.js`. Change the text between the quotes. Keep the quotes and commas.
To sign with your real name, edit `signoff` in the `letter` section.

## 5. Put it on GitHub Pages

1. Create a GitHub account if needed, then click **New repository**. Name it anything, for example `for-you`. Choose **Public**. Do not tick "Add a README".
2. Upload the project. Easiest and most reliable is git (install from git-scm.com), run inside this folder:
   ```bash
   git init
   git add .
   git commit -m "Birthday surprise"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/for-you.git
   git push -u origin main
   ```
   Do not upload `node_modules` or `dist` (the included `.gitignore` already skips them).
   If you use the browser upload instead: the hidden `.github` folder is often skipped by drag and drop. After uploading, click **Add file > Create new file**, type `.github/workflows/deploy.yml` as the name, and paste in the contents of that file.
3. In the repo go to **Settings > Pages**. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Open the **Actions** tab. The "Deploy to GitHub Pages" run starts automatically and takes about 1 to 2 minutes. Wait for the green tick.
5. Your link is `https://YOUR-USERNAME.github.io/for-you/`. Send it to her.

To change anything later, edit files, then `git add . && git commit -m "update" && git push`. The site redeploys by itself.

## 6. Check before you send

- Open the public link on your own phone, not localhost.
- Tap everything: Open Your Little Surprise, Play music, every photo (swipe left/right in the viewer), Open My Letter, each wish card, the hug button.
- Photos missing? Check file name, extension and capital letters.
- Old version showing? Hard refresh, or wait 1 to 2 minutes after the Action finishes.

## Troubleshooting

| Problem | Fix |
|---|---|
| Blank page on the public link | Check `base: './'` is still in `vite.config.js`, and Settings > Pages Source is "GitHub Actions". |
| Action fails | Open the failed run in the Actions tab and read the red step. Most often a typo in `src/content.js` (missing quote or comma). |
| Photos show the dashed placeholder | File name or extension does not match `src/content.js`. |
| Music button says "Music file not added yet" | `public/music/song.mp3` is missing or named differently. |
| Page refresh breaks | It will not. The site is a single page with no routes, so refresh and shared links always work. |
