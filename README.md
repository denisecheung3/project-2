
### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, Software Engineering Immersive
# Cocktailicious 

by [Denise Cheung](https://github.com/denisecheung3) & [Ben Harris](https://github.com/)

## Overview

Cocktailicious is my second project with General Assembly during the software engineering immersive course. Ben and I had to **build a multi-page React web app** that consumes a **public API** within a mini **48 hour** hackathon. 

After deliberation, we have decicded to go with the CocktailDB API and built a website where users can: 
- View a list of drinks and filter by category (beer, cocktail, etc) 
- Search for drinks by name, ingredient or alcoholic/non-alcholic 
- Favourite any drinks they come across and access this in the 'favourites' tab 

Please do feel free to spice up your night and find a great drink with Cocktailicious [here](link), or find the  GitHub repo [here](link).

## Brief
- **Consume a public API** – this could be anything but it must make sense for your project.
- **Have several components** - At least one classical and one functional.
- **The app should include a router** - with several "pages".
- **Be deployed online** and accessible to the public.

## Technologies used
- JavaScript (ES6)
- React.js
- HTML, JSX
- CocktailDB API
- Webpack
- Git and GitHub
- Bulma, SCSS

## Approach

​

After deciding to go with the CocktailDB API, we wireframed the website and brainstormed what features we wanted to have:
  - A home page 
  - A navigation bar
  - An drinks page where users can filter drinks by categories (e.g: if user chose 'cocktail' in the dropdown menu, all cocktails will be shown. The user can click on a drink to view more information about that drink 
  - A page that shows more details of the drink the user clicked on 
  - A Search page with a search form so the user can search for drinks by name, ingredient or alcoholic/non-alcholic 
  - Ability for user to favourite drinks they like (stretch goal)
  - A 'favourite' page where the user can view the drinks they favourited (stretch goal)


The routing of our page are:
  1. The home page at path "/"
  2. The Drinks page at path "/Drinks"
  3. The Single Drink page at path "/drink/:id"
  4. The Search form page at path "/Search"
  5. A page to display the search results after search form is submitted at path "/searchResults"
  6. A page to display the user's favourited drinks at path="/favourites"



### The homepage  

### The Drinks page with dropdown menu to select a category (used DrinkCard component)

### The Single Drink page (used DrinkCard component)

### The Search Form page 

### The Search Results page 

### The Favourited Drinks page (used DrinkCard component) 

### The Shared Component : DrinkCard 






## Screenshots

![Homepage]()

![Drinks](./src/images/screenshots/search.png)

![Single Drink]

![Search Form]

![Search Results]

![Favourited Drinks]()

## Potential future features

- Ability to conduct a search by searching with multi-ingredients (need premium access to API) 
- Generate a random beverage by category (could be very interactive and engaging if this is a button on the homepage) 


## Bugs 



## Lessons learned

- The structure of the API can make a huge difference on the UI and the number of steps you need to take to get all the information you want! (E.g: needed to map through strIngredient and strMeasure) 


