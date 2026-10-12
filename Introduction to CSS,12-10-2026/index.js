// ------------------------------Introduction to CSS


// 1. What is CSS?

// CSS (Cascading Style Sheets) is a stylesheet language used to style HTML elements by 
// controlling colors, fonts, spacing, layouts, and responsiveness.


// Purpose and Advantages of CSS:

// CSS makes web pages attractive, organized, and user-friendly.

// Advantages:

// Styling: Adds colors, backgrounds, and fonts.
// Layout: Controls element positioning and spacing.
// Reusability: Applies the same styles to multiple elements.
// Maintainability: Makes styles easier to update.
// Responsiveness: Helps websites adapt to different screen sizes.
// Consistency: Maintains a uniform design across pages.

// HTML defines the content and structure.
// CSS controls the appearance and presentation.


// CSS Syntax:
// CSS syntax consists of a selector and a declaration block.

// selector {
//     property: value;
// }


// CSS Comments

// Comments explain code and are ignored by the browser.

// Syntax:

// /* This is a CSS comment */

// h1 {
//     color: green;
// }


// Types of CSS:
// There are three main ways to apply CSS to HTML.

// Inline CSS:
// Inline CSS applies styles directly to an HTML element using the style attribute.

// {/* <h1 style="color: red;">Hello World</h1> */}

// Internal CSS:
// Internal CSS is written inside the <style> tag in the HTML document's <head> section.

// <!DOCTYPE html>
// <html>
// <head>
//     <style>
//         h1 {
//             color: blue;
//         }
//     </style>
// </head>
// <body>
//     <h1>Hello World</h1>
// </body>
// </html>

// External CSS:
// External CSS is written in a separate .css file and connected to HTML using the <link> tag.

// <!DOCTYPE html>
// <html>
// <head>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <h1>Hello World</h1>
// </body>
// </html>


// CSS Selectors:
// CSS selectors are patterns used to select HTML elements so that CSS styles 
// can be applied to them.

// Universal Selector (*):
// The universal selector selects all HTML elements on a page.


// Element Selector:
// The element selector selects all elements with a particular HTML tag name.