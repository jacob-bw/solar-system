import $ from 'jquery';
import utilities from '../../helpers/utilities';

const cardListEvents = () => {
  $('body').on('mouseenter', '.card', (e) => {
    $(e.target).children().removeClass('hide');
  });

  $('body').on('mouseleave', '.card', (e) => {
    $(e.target).children().addClass('hide');
  });

  $('body').on('click', '.card', () => {
    utilities.printToDOM('planet-zone', '');
    utilities.printToDOM('single-color', 'this is a single item.  maybe we should call another component?');
  });
};

export default { cardListEvents };
