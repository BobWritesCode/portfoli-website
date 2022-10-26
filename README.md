# My Portfolio Website

Thank you for checking out my project in creating my portfolio website.


## Contents
  - [Live Site](#live-site)
  - [Repository](#repository)
  - [Overall Objective](#overall-objective)
  - [Design Objectives](#design-objectives)
  - [Design Outcome](#design-outcome)
  - [Typography](#typogaphy)
  - [Features](#features)
   - [Reveal Sections](#reveal-sections)
   - [Image Preview](#image-preview)
  - [Bugs](#bugs)
    - [Resolved](#resolved)
    - [Unresolved](#unresolved)
  - [Credit](#credits)
---
## Live Site
Live site: [My portfolio website](https://bobwritescode.github.io/portfoli-website/).

---
## Repository
Repository: [GitHub](https://github.com/BobWritesCode/portfoli-website).

---
## Overall Objective

To create a portfolio website I could use to showcase my projects and provide relevant information about me as a developer in one place.

---
## Design Objectives

The site must:
 - Be easy to navigate for all users.
 - Have clear defined sections.
 - Be obvious what / who the site is about immediately.

---

## Design Outcome

After a few different ideas. I landed on a code editor theme. Inspired by Visual Studios.

![Design](./assets/imgs/readme-design.png)

I created modules so each section would be in its own code block theme.

![Design2](./assets/imgs/readme-design2.png)

---
## Typography

I use 2 different fonts which are:
- For the main font I user [Manrope from Google Fonts](https://fonts.google.com/specimen/Manrope).
- For the coding style front I use [Source Code Pro from Google Fonts](https://fonts.google.com/specimen/Source+Code+Pro).

---
## Features

### Reveal Sections

As you scroll down the site there is a a nice simple animation of the modules coming in from the right side. I used [original code](https://alvarotrigo.com/blog/css-animations-scroll/#:~:text=What%20are%20CSS%20Scroll%20Animations,text%2C%20images%2C%20and%20videos) which I modified slightly to provide the functionality I was after.

I added in that when the user is at the top of the page then all modules except the top module would be hidden.

I also changed the animation to come in from the right instead from the bottom.

Having the code though come in from the right, caused the page to widen further than expected. So I had to add an overflow restriction and restrict zooming out on mobile devices.

```html
<!--minimum-scale=1.0 stop zooming out -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
```

```javascript
// Every time the page scroll run these functions
window.addEventListener("scroll", function () {
   reveal();
   closeDropMenu();
});
```

```javascript
/**
 * Activates the reveal effect when scrolling through the page.
 */
function reveal() {
   var reveals = document.querySelectorAll(".reveal");

   var windowHeight = window.innerHeight;
   var elementVisible = windowHeight * 0.80;

   var siteTop = topOfPage.getBoundingClientRect().top;

   for (var i = 0; i < reveals.length; i++) {
      var elementTop = reveals[i].getBoundingClientRect().top;
      
      if (elementTop < elementVisible && !(siteTop == 0))  {
         reveals[i].classList.add("active");
      } else {
         reveals[i].classList.remove("active");
      }
   }
}
```

```css
/* Reveal module from right to left */
.reveal {
	position: relative;
	transform: translateX(150px);
	opacity: 0;
	transition: 2s all ease;
}

.reveal.active {
	transform: translateY(0);
	opacity: 1;
}
```

### Image Preview

To view the certificates I added a popup style image preview. The main challenge was stopping the screen scrolling when the image appeared. 

To avoid that happening I created a container that is always there but you can't see.

```html 
<!-- Image Preview -->
<div id="image-preview-container">
   <div>
      <div>
      <img src="">
      <button id="btn-close-preview" onclick="closePreview()">CLOSE</button>
      </div>
   </div>
</div>
```

```css
#image-preview-container {
	display: none;
	position: fixed;
	top: 0;
	width: 100vw;
	height: 100vh;
	z-index: 96;
	z-index: 99 !important;
}

#image-preview-container > div {
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(18, 29, 29, 0.8);
	z-index: 99 !important;
}

#image-preview-container > div > div {
	display: flex;
	flex-direction: column;
	position: fixed;
	max-width: 75vw;
	max-height: 75vh;
	z-index: 99 !important;
}

#image-preview-container img {
	border: var(--gold) solid 8px;
	max-width: 75vw;
	max-height: 75vh;
	z-index: 99 !important;
}
```
---
## Bugs

### Resolved

#### Bug 1 - **MOBILE: White space on right side of screen.**

[971e9ad](https://github.com/BobWritesCode/portfoli-website/commit/971e9ad173ab8d6dcd9ff69726bd38992226dcd1)

**Problem**: While site viewed perfectly on PC, on mobile phones there seemed to be a white space on the right side due to the elements coming in from that side as you scrolled down.

**Solution**: The solution was either putting the site in a `div` wrapper and applying the below CSS or/and restricting the user from zooming.

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

#### Bug 2 - **MOBILE: White space appearing at bottom of page as you scroll down**

**Problem**: White space seems to be caused by mobile interface continually trying to put footer too early.

**Solution**: *Unknown* - The problem seemed to disappear at some point during one of my commits.

### Unresolved

There are currently no unresolved bugs I am aware of.

---
## Credits

- Thank you **Zack Owen** for helping to solve [Bug 1](#Bug-1).
- [Original code](https://alvarotrigo.com/blog/css-animations-scroll/#:~:text=What%20are%20CSS%20Scroll%20Animations,text%2C%20images%2C%20and%20videos) for reveal animation before modifications I made.