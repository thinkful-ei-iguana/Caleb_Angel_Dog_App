let STORE = {};

const grabData = function (response) {
  STORE.message = response.message;
  STORE.code = response.code;
};

const handleResponse = function () {
  if (STORE.code === 404 ){
    console.error(STORE.message);
  } else {
    let hTMLstring = generateHTML(STORE.message);
    renderHTML(hTMLstring);
  }
};

const generateHTML = function (dogImageArray) {
   let randomGenerator = Math.floor(Math.random() * (Math.floor(dogImageArray.length)));
   console.log(randomGenerator);
   return `<img src="${dogImageArray[randomGenerator]}" alt="random-dog">`;
  
};

const renderHTML = function (hTMLstring) {
  $('#dog-image-container').html(hTMLstring);
};

let getDogImages = function (breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => response.json())
    .then(responseJson => 
      grabData(responseJson))
    .then(handleResponse);
};

const handleNewItemSubmit = function () {
  $('#Dog-App-Random-Images').submit(function (event) {
    event.preventDefault();
    let dogBreed = $('.Random-Dog-Photo-App').val();
    $('.Random-Dog-Photo-App').val('');
    getDogImages (dogBreed);
  });
};

$(handleNewItemSubmit());
