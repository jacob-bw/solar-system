import planetData from '../../helpers/data/planets';
import utilities from '../../helpers/utilities';
import './planet-cards.scss';

const printPlanetCards = () => {
  const planetCard = planetData.getPlanets();
  let domString = '<div class ="row">';
  for (let i = 0; i < planetCard.length; i += 1) {
    const singleArr = planetCard[i];
    domString += `
      <div class="col">
        <div class="card" id=${singleArr.name}>
          <div class="card-body">
            <h4 class="planetName">${singleArr.name} <span class="close hide"><button class="closeButton">x</button><span> </h4>
            <img src="${singleArr.imageUrl}" class="card-img-top hide">
            <p class="card-text">${singleArr.description}</p>
          </div>
        </div> 
      </div>   
    `;
    console.log(planetCard[i].name);
  }
  domString += '</div>';
  utilities.printToDOM('planet-zone', domString);
};

export default { printPlanetCards };
