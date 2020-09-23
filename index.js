// --------------PAGINATION PRACTISE-----------------

let data = require('./data');
let data_length = data.length;

function paginate(page, limit) {
  // if requested page number is greater than what we have then always load the last page
  let total_pages = Math.round(data_length / limit);
  if (page > total_pages) {
    console.log('Data for requested page is not available. Loading data for last page...')
    page = total_pages;
  }

  let pageNumber = page <= 0 ? 1 : page;
  let itemsPerPage = limit <=0 ? 1: limit;
  let itemsAfter = (pageNumber - 1) * itemsPerPage;

  // restrict the user to view data till the last available index
  let endOn = (itemsAfter + itemsPerPage) < data_length ? (itemsAfter + itemsPerPage) : data_length;

  console.log("itemsAfter", pageNumber, total_pages, itemsAfter, itemsAfter + itemsPerPage, endOn);

  return data.slice(itemsAfter, endOn)
}

// Normal 1st page loading
// console.log(JSON.stringify(paginate(1,10)));

// Will load one record 
// console.log(JSON.stringify(paginate(0,0)));

// Will load the last record of the page more than last page
// console.log(JSON.stringify(paginate(201,10)));

// Please put custom validations on negative values of page number and limit
// console.log(JSON.stringify(paginate(-1, -1)));

