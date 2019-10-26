import planetData from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';
import './planet-cards.scss';

const printPlanetCards = () => {
  const planetCard = planetData.getPlanets();
  let domString = '';
  for (let i = 0; i < planetCard.length; i += 1) {
    domString += '<div class="col">';
    domString += '<div class="card">';
    domString += '<div class="card-body">';
    domString += `<h5 class="card-title">${planetCard[i].name}</h5>`;
    domString += `<class="card-title hide" src="${planetCard[i].imageUrl}" alt="..."></img>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';

    console.error(planetCard[i].name);
  }

  utilities.printToDOM('planet-zone', domString);
};

export default { printPlanetCards };
