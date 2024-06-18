# Product Listing and Cart Management App

This repository contains a simple React application that displays a list of products and allows users to add items to a shopping cart. The project includes the following main components: `Product`, `ProductList`, `Cart`, and `CartItem`. The data for the products is stored in `data.js`, and the global cart state is managed using the `CartContext`.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [Contributing](#contributing)

## Installation

To set up the project locally, follow these steps:

1. Clone the repository:
    
    ```sh
    git clone https://github.com/Judith-20/shopping-cart.git

2. Navigate to the project directory:
    ```sh
    cd shopping-cart

3. Install the dependencies:
    ```sh
    npm install

## Usage

To start the development server, run:
    
    ```sh
    npm start 

This will launch the app in your default web browser. The app will automatically reload if you make changes to the code.

## Project Structure

The project structure is as follows:

    shopping-cart/
    │
    ├── public/
    │   ├── index.html
    │   └── ...
    │
    ├── src/
    │   ├── components/
    │   │   ├── Product.js
    │   │   ├── ProductList.js
    │   │   ├── Cart.js
    │   │   ├── CartItem.js
    │   │   └── main.css
    │   │
    │   ├── context/
    │   │   └── GlobalContext.js
    │   │
    │   ├── data/
    │   │   └── data.js
    │   │
    │   ├── App.js
    │   └── index.js
    │
    ├── package.json
    └── README.md

## Components

### Product

The `Product` component displays individual product details including the image, name, description, price, stock, and an "Add to Cart" button.

### ProductList

The `ProductList` component maps through the product data and renders a list of `Product` components.

### Cart

The `Cart` component displays the items added to the cart and calculates the total price. It also provides options to increment, decrement, or remove items from the cart.

### CartItem

The `CartItem` component displays details of each item in the cart along with options to modify the quantity or remove the item.

### Data

The product data is stored in `data.js` and exported as `product_data`.

### Context

The global cart state is managed using the `CartContext` in `GlobalContext.js`.

## Styling

The application styling is defined in main.css. The styles include layout, colors, typography, and hover effects for the product and cart items.

## Contributing

Contributions are welcome! If you have any suggestions or improvements, please create an issue or submit a pull request.