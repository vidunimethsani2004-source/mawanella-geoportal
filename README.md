# Mawanella Village Geo-Platform

PL1106 — Communication Technologies, Assignment 2
Department of Town & Country Planning, University of Moratuwa

A one-page website about Mawanella (Kegalle District, Sri Lanka) — its geography, history and
culture, with a map and spatial data section at the end.

## Run it

Open `index.html` in any browser. No build step, no libraries, no installation.

## Files

```
index.html    The whole site
style.css     Styling
script.js     Menu toggle + feedback form
images/       Photographs
video/        Aerial clip
data/         Map data (GeoJSON + CSV)
```

## Before submitting

1. **Feedback email** — the form opens the visitor's mail app. Put your address in `script.js`:
   `var EDITOR_EMAIL = 'info@mawanella.example';`
2. **Social links** — in the footer of `index.html`, replace `href="#"` with your real pages.
3. **Check the coordinates** — the numbers in `data/` and the road distances on the page are
   approximate. Verify them against Google Maps before you hand it in.

## Photo credits

Also printed in the page footer — leave them there, the assignment requires acknowledgement.

| File | Source |
|---|---|
| `bathalegala.jpg` | Shehan Dileepa Ranawaka, Wikimedia Commons, CC BY-SA 4.0 |
| `utuwankanda.jpg` | Milan Shashintha, Wikimedia Commons, CC BY-SA 4.0 |
| `perahera.jpg` | Sri Dalada Maligawa Media & Special Projects Bureau |
| everything else | Author's own |

Map data © OpenStreetMap contributors (ODbL).

## Publishing

Easiest: drag this folder onto <https://app.netlify.com/drop> — instant public URL, no account.

Or GitHub Pages: push the files to a public repo (`index.html` at the root), then
Settings → Pages → deploy from `main` / root.
