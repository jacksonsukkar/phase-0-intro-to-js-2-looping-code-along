function writeCards(name, event) {
  let thankYouCards = [];
  for (let i = 0; i < name.length; i++) {
    thankYouCards.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`);
  }
  return thankYouCards;
};

function countDown(count) {
  while ( count > 0) {
      console.log(count);
      count -= 1;
  }
  console.log(count);
}