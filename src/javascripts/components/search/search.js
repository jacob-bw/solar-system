import $ from 'jquery';
import utilities from '../../helpers/utilities';
import './search.scss';

const printSearchBar = () => {
  const domString = '<input id="searchInput" type="text" placeholder="Search...">';

  utilities.printToDOM('search', domString);
};

const searchBar = () => {
  $(document).ready(() => {
    $('searchInput').keyup(() => {
      const result = $('#searchInput').val();
      $('.planetCard').hide();
      $(`.planetCard:contains("${result}")`).closest('.planetCard').show();
    });
    if ($('#searchInput').val() === 'Search...') {
      $('.planetCArd').show();
    }
  });
};

export default { printSearchBar, searchBar };
