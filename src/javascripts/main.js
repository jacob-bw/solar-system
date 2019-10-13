import '../styles/main.scss';
import planets from './components/planet-cards';

console.error('see you, space cowboy');

// using .on selector on doc for 'planet-card' classes for hover

const init = () => {
  planets.printPlanetCards();
};

init();
