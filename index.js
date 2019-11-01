let validateInput = function (input) {
  if (input <= 0 || input > 50){
    throw 'number must be greater than 0 and less than or equal to 50';
  } else {
    return true;
  }
};

let getDogImages = function (number) {
  console.log('function is running');
  fetch('https://dog.ceo/api/breeds/image/random/3')
    .then(response => response.json())
    .then(responseJson => 
      console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
};

const handleNewItemSubmit = function () {
  $('#Dog-App-Random-Images').submit(function (event) {
    event.preventDefault();
    const numDogs = $('.Random-Dog-Photo-App').val();
    $('.Random-Dog-Photo-App').val('');
    console.log(numDogs);
    // validateInput(numDogs);
    console.log(validateInput(numDogs));
    if (validateInput(numDogs) === true) {
      getDogImages (numDogs);
    }
  });
};

handleNewItemSubmit();
