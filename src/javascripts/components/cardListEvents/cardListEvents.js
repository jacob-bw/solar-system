import $ from 'jquery';

const hideInfo = () => {
  $('.card-text').hide();
};

const hoverName = (e) => {
  $(e.target).find('.planetName').toggleClass('hide');
};

const hidePlanetName = () => {
  $('.card').hover(hoverName);
};

const imageHover = (e) => {
  $(e.target).find('img').toggleClass('hide');
};

const imageShow = () => {
  $('.card').hover(imageHover);
};

const hoverEvent = () => {
  hidePlanetName();
  imageShow();
  // $('body').on('mouseenter', '.card', (e) => {
  //   $(e.target).find('.planetName').removeClass('hide');
  // });

  // $('body').on('mouseleave', '.card', (e) => {
  //   $(e.target).children().addClass('hide');
  // });

  // $('body').on('click', '.card', (e) => {
  //   utilities.printToDOM('planet-zone', '');
  //   utilities.printToDOM('single-color', 'this is a single item.  maybe we should call another component?');
  // });
};

const cardListEvents = () => {
  hideInfo();
  hoverEvent();
};

export default { cardListEvents };
