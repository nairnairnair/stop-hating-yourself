//radio button stuff

var radioButtons = document.getElementsByName('name');
var messageButton = document.querySelector('.button');
var healBell = document.querySelector('.heal-bell')
var messageOutput = document.querySelector('.quote-output')
var deleteButton = document.querySelector('.delete-button')

//wow, where did this come from?
function getRandomIndexAffirmation(affirmations) {
  return messageOutput.innerText = affirmations[Math.floor(Math.random() * affirmations.length)];
};

function getRandomIndexMantra(mantras) {
  return messageOutput.innerText = mantras[Math.floor(Math.random() * mantras.length)];
};

messageButton.addEventListener('click', bellOffQuoteOn);
deleteButton.addEventListener('click', quoteSplicer);

function bellOffQuoteOn() {
  messageOutput.classList.remove('hidden');
  healBell.classList.add('hidden');
  deleteButton.classList.remove('hidden');
  if (document.getElementById('affirmation').checked) {
    getRandomIndexAffirmation(affirmations);
  } else if (document.getElementById('mantra').checked) {
    getRandomIndexMantra(mantras);
  };
};

function quoteSplicer(event) {
  event.preventDefault();
    var hatedQuote = messageOutput.innerText;
    if (document.getElementById('affirmation').checked) {
      for (var i = 0; i <= affirmations.length ; i++) {
          if(affirmations[i] === hatedQuote) {
             affirmations.splice(i, 1);
          }
      } return messageOutput.innerText = '💥 AFFIRMATION VANQUISHED 💥'
    } else if (document.getElementById('mantra').checked) {
      for (var i = 0; i <= mantras.length ; i++) {
          if(mantras[i] === hatedQuote) {
             mantras.splice(i, 1);
          }
      } return messageOutput.innerText = '💥 MANTRA OBLITERATED 💥'
    };
};
