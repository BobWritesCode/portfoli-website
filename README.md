# My Portfolio Website

---
## Live Site

Live site: [My portfolio website](https://bobwritescode.github.io/portfoli-website/)

---
## Bugs

### Resolved

#### White space on right side of screen on mobile.

[971e9ad](https://github.com/BobWritesCode/portfoli-website/commit/971e9ad173ab8d6dcd9ff69726bd38992226dcd1)

While site viewed perfectly on PC, on mobile phones there seemed to be a white space on the right side due to the elements coming in from that side as you scrolled down.

The solution was either putting the site in a `div` wrapper and applying the below CSS or/and restricting the user from zooming.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
```

```css
#site-wrapper {
  position: relative;
  overflow-x: hidden;
  width: 100%;
  max-width: 100%;
}
```
---

