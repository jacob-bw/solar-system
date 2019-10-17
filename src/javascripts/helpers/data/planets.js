const planets = [
  {
    name: 'Mercury',
    imageUrl: 'src/images/planet-images/mercury.jpg',
    description: 'Mercury is the smallest and innermost planet in the Solar System. Its orbit around the Sun takes only 87.97 days. It is named after the Roman deity Mercury.',
    isGasPlanet: false,
    numberOfMoons: '0',
    nameOfLargestMoon: 'N/A',
  },
  {
    name: 'Venus',
    imageUrl: 'src/images/planet-images/venus.jpg',
    description: 'Venus is the second planet from the Sun. It is the second-brightest natural object in the night sky after the Moon, Venus is rarely visible to the naked eye in broad daylight.',
    isGasPlanet: false,
    numberOfMoons: '0',
    nameOfLargestMoon: 'N/A',
  },
  {
    name: 'Earth',
    imageUrl: 'src/images/planet-images/earth.jpg',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
    isGasPlanet: false,
    numberOfMoons: '1',
    nameOfLargestMoon: 'Luna',
  },
  {
    name: 'Mars',
    imageUrl: 'src/images/planet-images/mars.jpg',
    description: 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. Mars is often referred to as the "Red Planet".',
    isGasPlanet: false,
    numberOfMoons: '2',
    nameOfLargestMoon: 'Phobos',
  },
  {
    name: 'Jupiter',
    imageUrl: 'src/images/planet-images/jupiter.jpg',
    description: 'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is two-and-a-half times that of all the other planets in the Solar System combined.',
    isGasPlanet: true,
    numberOfMoons: '67',
    nameOfLargestMoon: 'Ganymede',
  },
  {
    name: 'Saturn',
    imageUrl: 'src/images/planet-images/saturn.jpg',
    description: 'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius about nine times that of Earth.',
    isGasPlanet: true,
    numberOfMoons: '62',
    nameOfLargestMoon: 'Titan',
  },
  {
    name: 'Uranus',
    imageUrl: 'src/images/planet-images/uranus.jpg',
    description: 'Uranus is the seventh planet from the Sun. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
    isGasPlanet: true,
    numberOfMoons: '27',
    nameOfLargestMoon: 'Titania',
  },
  {
    name: 'Neptune',
    imageUrl: 'src/images/planet-images/neptune.jpg',
    description: 'Neptune is the eighth and farthest known planet from the Sun in the Solar System. In the Solar System, it is the fourth-largest planet by diameter and third-most-massive planet.',
    isGasPlanet: true,
    numberOfMoons: '14',
    nameOfLargestMoon: 'Triton',
  },
];

const getPlanets = () => planets;

export default { getPlanets };
