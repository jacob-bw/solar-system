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
            <img src='${planetCard[i].imageUrl}' class='card-title' alt='picture of ${planetCard[i].name}'>
            <h5 class='card-title d-none'>${planetCard[i].name}</h5>
           </div>
        </div>
      </div>
    </div>
    `;
    console.error(planetCard[i].name);
    utilities.printToDOM('planet-zone', domString);
  }
};

// const hideInfo = () => {
//   $('.card-text').hide();
// };

// const hoverName = (e) => {
//   $(e.target).find('#h4').toggleClass('d-none');
// };

// const hideName = () => {
//   $('.card').hover(hoverName);
// };

// const hoverImg = (e) => {
//   $(e.target).find('img').toggleClass('d-none');
// };

// const showImg = () => {
//   $('.card').hover(hoverImg);
// // };

// const hoverEvent = () => {
//   $(e.target).find('card-title').toggleClass()
// };

export default { printPlanetCards };
