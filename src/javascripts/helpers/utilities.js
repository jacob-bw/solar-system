import $ from 'jquery';

const printToDOM = (divID, toPrint) => {
  $(`#${divID}`).html(toPrint);
};

export default { printToDOM };
