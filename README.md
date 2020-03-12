
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

### The Single Drink page 

### The Search Form page 
- The form consists of (a) a search field, where a user can search by typing in the name of a drink, (b) a dropdown menu which included a list of ingredients that the user can search by, (c)an 'Alcoholic?' tickbox where the user can filter drinks by alcoholic/non-alcoholic and (d) a submit button to submit that form.

- Getting the field, dropdown menu and tickbox to render on the page was straightforward using Bulma. 
- The challenge of mutual exclusivity with API 
  -  The API is limiting in that filters cannot be combined. This meant that we could not, for example, fetch alcoholic drinks with the ingredient lemon. As a result of this, we had to tailor our UX. As soon as one of filters are applied, the other filters are disabled. This ensured that the user can only apply one filter to his or her search. Below is an example for the ingredient dropdown menu field. If search field or isAlcoholic checkbox field is true (i.e used), then disabled=true. We relied on the state to keep track of the status of the fields.


  ```js
      <div className="field">
        <label className="label">Ingredient</label>
        <div className="control">
          <div className="select">
            <select
              onChange={(event) => this.handleChange(event)}
              name="ingredient"
              disabled={this.state.searchName || this.state.isAlcoholic}
            >
              <option value="">Select ingredient</option>
              {this.state.ingredients.map((ingredient, index) => {
                return <option key={index}> {ingredient.strIngredient1} </option>
              })}
            </select>
          </div>
        </div>
      </div>

  ```

- The mini challenge of fetching from the right endpoint depending on the filter the user chose and passing the link down 
   - Because the endpoints for the different filters were different, we had to write a function to ensure that we generated the right url to fetch from so that it returns the data matching the user's filtered requirements. Below is the code for  searchResultLink(). It's purpose is to generate the correct link to conduct the fetch request.
 

  ```js
   SearchResultLink() {
    const { searchName, ingredient, isAlcoholic } = this.state
    let linkToFetch = 'https://www.thecocktaildb.com/api/json/v1/1/'
    const searchCheck = searchName === null
    const ingredientCheck = ingredient === null
    const alcoholicCheck = isAlcoholic === true

    //if alcholic box ticked
    if (searchCheck && ingredientCheck && alcoholicCheck) {//i want if they are both false
      linkToFetch += 'filter.php?a=Alcoholic'
      console.log(linkToFetch)
      return linkToFetch
    }

    //if user decides to use search field 
    if (!searchCheck && ingredientCheck && !alcoholicCheck) {
      linkToFetch += `search.php?s=${searchName}`
      console.log(linkToFetch)
      return linkToFetch
    }

    // if dropdown menu used 
    if (searchCheck && !ingredientCheck && !alcoholicCheck) {
      linkToFetch += `filter.php?i=${ingredient}`
      console.log(linkToFetch)
      return linkToFetch
    }
  }
  ```

- The real challenge: passing the generated fetch link down to the SearchResult component 
   - This was really important because the SearchResult component had to receive the link (linkToFetch) in order to make a fetch request then render the data we get back from the fetch request. 
   - We tried several ways to pass linkToFetch down to the SearchResult component. 
       - For example we tried to pass the variable linkToFetch down [in hindsight, I think this did not work because the function SearchResultLink() was not called).
       - In this end, [this post](https://medium.com/@bopaiahmd.mca/how-to-pass-props-using-link-and-navlink-in-react-router-v4-75dc1d9507b4)was our saving grace. Using the following code, we were able to pass the correct link down to the SearchResult component successfully: 
  ```js
        <Link
          to={{
            pathname: '/searchResults',
            url: this.SearchResultLink() 
          }}
          className="button is-link">Search
        </Link>
  ```


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


