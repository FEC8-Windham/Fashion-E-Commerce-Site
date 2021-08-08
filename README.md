
# Frontend Capstone: Project Catwalk

Project Catwalk is an e-commerce webpage for streetwear fashion products. This webpage is heavily focused on the frontend and friendly, modern user design.

## Goals for the users
    1. Provide a sleek visual design that is easy to navigate - with dark mode!
    2. Easily view product images and information
    3. See related products and add items to your outfit list
    4. Check and add reviews and be able to sort them


## Stack
- React with Hooks
- Styled Components
- Axios
- Webpack + Babel
- Jest + Enzyme


## Webpage Outline
    1. Overview
    2. Related products
    3. Your Outfit
    4. Ratings and Reviews

*INSERT gif of whole webpage*
![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)


## Features
**Overview**

This section consists of an image gallery and product info. The gallery features vertical and horizontal carousels that display all images
for the currently selected style. Clicking on the big image will show a pop-up where the image can be zoomed in.

*INSERT gif of gallery*
![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

The right side and underneath the gallery has product information. This includes average rating, category, product name, style name, social
media share buttons, and product description.


In the same section are selectors for the different styles of that product. Clicking on each one will update the gallery image, as well
as the sizes and quantity available.

*INSERT gif of selecting different styles, click on size and quantity, add to cart*
![Style selection](https://media.giphy.com/media/Z7mzGy0Mof7ztsyobm/giphy.gif)

**Related Products**

This section shows products that are related to the current product page. If there are more than 4 related products, it will show as
a carousel that you can scroll through with buttons. Each related product card has the product image, category, product name, price,
and average rating.

*INSERT gif of scrolling through carousel*
![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

Clicking on a Related Product card will change the main product to that selected product, which re-renders all data on the page.

*INSERT gif of clicking on related product*

Clicking on the icon on the top right will display a comparison modal, comparing the current product at the top and the selected
related product. It takes properties from both products and show it in a table.

*INSERT image of modal*
![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

**Your Outfit**

This section shows products that have been added by the user. Clicking on the 'Add Outfit' card will add the current product to the Your
Outfit row. The products added are saved in the visitor's local storage and will persist after refreshing the page. Clicking on the X button
on the top right of the card will remove the product from the list.

*INSERT gif of adding an outfit*
![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

Similar to Related Products, if there are more than 4 cards in the row, it will become a scrollable carousel. Each card has
the product image, category, product name, price, and average rating.

*INSERT gif os crolling through carousel*
![Alt Text](https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif)

**Ratings and Reviews**

The ratings and reviews module is composed of two major components, the review breakdown and the reviews container.
The data for this module is retrieved from an API via a GET request when the page is initially rendered, the data is by
default sorted by relevance.

In the reviews container the total number of reviews is displayed at the top along with an option for sorting, changing this
sorting option will send a GET request to the API with the newly selected sorting option. The data retains this sorting until
the page is refreshed or a new option is chosen.

On the bottom of the reviews container there are a more reviews button and a new reviews button. The more reviews button will
show an additional two reviews everytime it is clicked, until there the total reviews for that product are displayed. The
new review button will open a modal where the user can add a new review that will be posted to the API via a POST request
