//radio button stuff

var radioButtons = document.getElementsByName('name');
var messageButton = document.querySelector('.button');
var healBell = document.querySelector('.heal-bell')
var messageOutput = document.querySelector('.quote-output')
// var deleteButton = document.querySelector('.delete-button')

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
  // deleteButton.classList.remove('hidden');
  if (document.getElementById('affirmation').checked) {
    getRandomIndexAffirmation(affirmations);
  } else if (document.getElementById('mantra').checked) {
    getRandomIndexMantra(mantras);
  };
};

//things to querySelector:
//radio button 1
//radio button 2
//both radio buttons together?
//message button
//bell icon
//the affirmation text, whenever that shows up

//if radioAffirmation.value = checked
//get a random

//Add the ability to delete a messge (ie: when a message shows up, show a button
//that says “I don’t like this message” (or something similar), and remove it from
//the list so that it will not show up any more. Make sure to alert the user in
//some way that the message has been removed.

//make hidden button

// deleteButton.addEventListener('click', quoteSplicer);

//event listener for them clicking the delete button
//select the quote that was just pulled by index number
//splice it out of the respective array
//inform the user that it has been removed

// function quoteSplicer(event) {
//   event.preventDefault();
//     if (document.getElementById('affirmation').checked)
//       {affirmations.splice(i, 1) return messageOutput.innerText = 'Affirmation Vanquished'
//     } else if (document.getElementById('affirmation').checked)
//       {mantras.splice(i, 1) return messageOutput.innerText = 'Mantra Obliterated'
//     };
// };


// function findQuote() {
//   var savedMiniCovers = document.querySelectorAll(".mini-cover");
//   for (var i = 0; i < savedMiniCovers.length; i++) {
//     savedMiniCovers[i].addEventListener("dblclick", deleteQuote);
//   };
// };
//
// function deleteQuote(event) {
//   event.preventDefault();
//   for (var i = 0; i < savedCovers.length; i++) {
//     if (event.target.parentNode.id === `${savedCovers[i].id}`) {
//       savedCovers.splice(i, 1);
//     };
