# Solar System

## Setup
* Create a new repository on GitHub called `solar-system`
* Connect the repository with a directory in `workspace/patterns_tools/exercises`
* Create a GitHub project and thoroughly plan out the project, breaking it into well-documented tickets.
* After pushing your base README.md to master, you should be working off branches

## Technical Requirements
* Single responsibility prinicple: Each function should be responsible for one thing.
* You should be using bootstrap - at minimum use the grid system but see what other components you can use
* Jquery for ALL dom manipulation.  There should be NO document.getElementById, document.getElementsByClassName, or document.addEventListener() anywhere in your code.  Use the appropriate jquery equivalent.

## Requirements
1. Create a file called `src/javascripts/helpers/data/planets.js` and fill it with information on each of the 8 planets in our solar system.  Each planet should have the following keys:
    * name
    * imageUrl
    * description
    * isGasPlanet (true/false)
    * numberOfMoons
    * nameOfLargestMoon
2. On page load each planet should appear as a card with ONLY the name displayed.  Like this:
![Solar System Mockup](https://github.com/nss-nightclass-projects/exercise-vault/blob/master/images/solarsystem*.png)
3.  When the user moves their mouse over a planet card the name should disappear and the image of the planet should take up the whole card.
4.  When the user clicks on a planet card all the cards disappear and the only thing displayed on the page is information about the planet they clicked on.
![Solar System Mockup](https://github.com/nss-nightclass-projects/exercise-vault/blob/master/images/solarsystem2.png)
5.  When the user clicks on the red X on a single planet that information goes away and all the original cards are displayed again.
6.  When the user types in the search bar, planet cards should only show up if they have what is typed in their name or description.