let STORE = [];

let validateInput = function (input) {
  if (input <= 0 || input > 50){
    return 3;
  } else {
    return input;
  }
};

const grabArray = function (response) {
  STORE = response.message;
};

const generateHTML = function (dogImageArray) {
  let hTMLstring = '';
  dogImageArray.forEach(image => {
    hTMLstring += `
    <img src="${image}" alt="random-dog">`;
  });
  return hTMLstring;
};

const renderHTML = function (hTMLstring) {
  $('#dog-image-container').html(hTMLstring);
};

let handleAfterFetch = function () {
  let hTMLstring = generateHTML(STORE);
  renderHTML(hTMLstring);
};

let getDogImages = function (number) {
  fetch('https://dog.ceo/api/breeds/image/random/' + number)
    .then(response => response.json())
    .then(responseJson => 
      grabArray(responseJson))
    .then(handleAfterFetch);
};

const handleNewItemSubmit = function () {
  $('#Dog-App-Random-Images').submit(function (event) {
    event.preventDefault();
    let numDogs = $('.Random-Dog-Photo-App').val();
    $('.Random-Dog-Photo-App').val('');
    getDogImages (validateInput(numDogs));
  });
};

$(handleNewItemSubmit());
