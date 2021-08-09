
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


## Features
**Overview**

This section consists of an image gallery and product info. The gallery features vertical and horizontal carousels that display all images
for the currently selected style. Clicking on the big image will show a pop-up where the image can be zoomed in.

The right side and underneath the gallery has product information. This includes average rating, category, product name, style name, social
media share buttons, and product description.

In the same section are selectors for the different styles of that product. Clicking on each one will update the gallery image, as well
as the sizes and quantity available.

[*Style selection*]
![Style selection](https://media.giphy.com/media/Z7mzGy0Mof7ztsyobm/giphy.gif)

Each style and product has different corresponding sizes and quantities per size. Adding to cart will send a POST request to the API, and adding to cart without
selecting size or quantity will result in an error message.

[*Add to cart*]
![Add to cart](https://media.giphy.com/media/tPVKr6J5vWuAyIeI5w/giphy.gif)

**Related Products**

This section shows products that are related to the current product page. If there are more than 4 related products, it will show as
a carousel that you can scroll through with buttons. Each related product card has the product image, category, product name, price,
and average rating.

Clicking on a Related Product card will change the main product to that selected product, which re-renders all data on the page.

Clicking on the icon on the top right will display a comparison modal, comparing the current product at the top and the selected
related product. It takes properties from both products and show it in a table.

[*Related Products*]
![Related Products](https://media.giphy.com/media/9kgoK8l3a6dIr6RFB4/giphy.gif)

**Your Outfit**

This section shows products that have been added by the user. Clicking on the 'Add Outfit' card will add the current product to the Your
Outfit row. The products added are saved in the visitor's local storage and will persist after refreshing the page. Clicking on the X button
on the top right of the card will remove the product from the list.

Similar to Related Products, if there are more than 4 cards in the row, it will become a scrollable carousel. Each card has
the product image, category, product name, price, and average rating.

[*Your Outfit*]
![Alt Text](https://media.giphy.com/media/j292wbLqisBCDb56ej/giphy.gif)

**Ratings and Reviews**

The ratings and reviews module is composed of two major components, the review breakdown and the reviews container.
The data for this module is retrieved from an API via a GET request when the page is initially rendered, the data is by
default sorted by relevance.

In the reviews container the total number of reviews is displayed at the top along with an option for sorting, changing this
sorting option will send a GET request to the API with the newly selected sorting option. The data retains this sorting until
the page is refreshed or a new option is chosen.

[*Sort reviews by relevence/newest/helpful*]
![Alt Text](https://media.giphy.com/media/GXQeK62Y1JiDntHFB4/giphy.gif)

[*Filter reviews by star rating*]
![Alt Text](https://media.giphy.com/media/BkWQUc5dlf7UBYAk3j/giphy.gif)

On the bottom of the reviews container there are a more reviews button and a new reviews button. The more reviews button will
show an additional two reviews everytime it is clicked, until there the total reviews for that product are displayed. The
new review button will open a modal where the user can add a new review that will be posted to the API via a POST request

[*More reviews*]
![Alt Text](https://media.giphy.com/media/iGabfmnWnjhpBvR6eE/giphy.gif)

[*New review*]
![Alt Text](https://media.giphy.com/media/w00pDazMSGxIeqgEWK/giphy.gif)