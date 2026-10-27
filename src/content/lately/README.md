# How to add a post to Lately

Every post is a folder in `src/content/lately/` with an `index.md` file in it.
The folder name becomes the post's address, so `src/content/lately/lisbon-again/`
shows up at `/lately/lisbon-again`. Posts are sorted by `date`, newest first, and
the three newest also appear on the homepage.

The kind of post is worked out from what you put in it: a `video` makes it a video
post, `photos` make it a photo post, a `quote` makes it a quote, and anything else
is a text post. Whatever you write below the second `---` is the text of the post.

## Photos (one or many)

```
src/content/lately/lisbon-again/
  index.md
  alfama.jpg
  tram.jpg
```

```md
---
date: 2026-10-20
title: Lisbon, again
photos:
  - ./alfama.jpg
  - ./tram.jpg
---

Went back for the light.
```

The first photo is the cover in the grid. Big photos are fine: they're resized
automatically when the site is built.

## Text

```md
---
date: 2026-10-18
---

Finished a book at 2am and started the next one at 2:05.
```

`title:` is optional for every kind of post.

## Quote

```md
---
date: 2026-10-12
quote: I am not afraid of storms, for I am learning how to sail my ship.
source: Louisa May Alcott
---
```

## Video

Put the video file (`.mp4` works everywhere) in the post's folder:

```md
---
date: 2026-10-03
title: Sweater no. 4
video: knitting.mp4
poster: ./knitting-cover.jpg
---

Six weeks of knitting in forty seconds.
```

`poster:` is an optional still image shown before the video plays. Keep videos
short and small (under ~20 MB) so the page stays quick.

## Hiding a post

Add `draft: true` under the date to hide it without deleting it.
