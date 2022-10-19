# My Portfolio Website

---
## Live Site

Live site: [My portfolio website](https://bobwritescode.github.io/portfoli-website/)

---
## Bugs

### Resolved

#### Bug 1
**MOBILE: White space on right side of screen.**

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

### Unresolved

#### Bug 2
**MOBILE: White space appearing at bottom of page as you scroll down**

Problem seems to be caused by mobile interface continually trying to put footer too early.

## Credits

Thank you **Zack Owen** for helping solving [Bug 1](#Bug-1).
