const thankYouCards = [];
const myEvent = "party";
const names = ["Jamal", "Benjamin", "Arturo"];

function writeCards(names, eventName) {
  for (let i = 0; i < names.length; i++) {
    thankYouCards.push('Thank you, ' + names[i] + ' , for coming to my ' + eventName + '!');
    
  }
  
  return thankYouCards;
}
writeCards(names, myEvent);
console.log(thankYouCards)

function countDown() {
  let countDown = 10;
  while (countdown >= 0) {
    console.log(countdown--);
  }
}
