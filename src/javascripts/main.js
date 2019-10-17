import '../styles/main.scss';
import planets from './components/planet-cards/planet-cards';
import events from './components/cardListEvents/cardListEvents';

console.error('see you, space cowboy');

// using .on selector on doc for 'planet-card' classes for hover

const init = () => {
  planets.printPlanetCards();
  events.cardListEvents();
};

init();
