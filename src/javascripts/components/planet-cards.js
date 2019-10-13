import planetData from '../helpers/data/planets';
import utilities from '../helpers/utilities';
import './planet-cards.scss';

const printPlanetCards = () => {
  const planetCard = planetData.getPlanets();
  let domString = '';
  for (let i = 0; i < planetCard.length; i += 1) {
    domString += `
    <div class='row'>
      <div class='col-4'>
        <div class='card'>
          <div class='card-body'>
            <img src='${planetCard[i].imageUrl}' class='card-title d-none' alt='picture of ${planetCard[i].name}'>
            <h5 class='card-title'>${planetCard[i].name}</h5>
            <div class="card-text">${planetCard[i].description}</div>
            <div class="card-text">Number of Moons: ${planetCard[i].numberOfMoons}</div>
            <div class="card-text">Name of Largest Moon: ${planetCard[i].nameOfLargestMoon}</div>
            <div class="card-text">Is this Planet a Gas Giant? ${planetCard[i].isGasPlanet}</div>
          </div>
        </div>
      </div>
    </div>
    `;
    console.error(planetCard[i].name);
    utilities.printToDOM('planet-zone', domString);
  }
};

// const hoverEffect = () => {
//   const j = 1;
// };

export default { printPlanetCards };
