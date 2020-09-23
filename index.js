// --------------PAGINATION PRACTISE-----------------
/*
  There are 3 things important for offset pagination.
  1. Total length of the records -> for calculation purposes
  2. The page number -> on which page you want to view the records
  3. The limit of records per page -> how many records you want to see per page.
*/
// Assume this is a pool of data.
let data = require('./data');
// Get the total length of the data
let data_length = data.length;

/**
 * page - Page number
 * limit - Limit of the record per page
 */
function paginate(page, limit) {
  // if requested page number is greater than what we have then always load the last page
  let total_pages = Math.round(data_length / limit);
  if (page > total_pages) {
    console.log('Data for requested page is not available. Loading data for last page...')
    page = total_pages;
  }

  // handling default values
  let pageNumber = page <= 0 ? 1 : page;
  let itemsPerPage = limit <=0 ? 1: limit;
  let itemsAfter = (pageNumber - 1) * itemsPerPage;

  // restrict the user to view data till the last available index
  let endOn = (itemsAfter + itemsPerPage) < data_length ? (itemsAfter + itemsPerPage) : data_length;

  // console.log("itemsAfter", pageNumber, total_pages, itemsAfter, itemsAfter + itemsPerPage, endOn);

  // returning only selected ranged data
  return data.slice(itemsAfter, endOn)
}

// Normal 1st page loading
console.log(JSON.stringify(paginate(1,10)));

// Will load one record 
// console.log(JSON.stringify(paginate(0,0)));

// Will load the last record of the page more than last page
// console.log(JSON.stringify(paginate(201,10)));

// Please put custom validations on negative values of page number and limit
// console.log(JSON.stringify(paginate(-1, -1)));

