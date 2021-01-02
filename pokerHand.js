const isFlush = (cards) => { return cards.every(card => card.substr(-1) === cards[0].substr(-1))}

// cards.every is going to return a boolean. We are checkng if every second letter of each element of "cards" is
// equal to cards[0].susbtr(-1), which is to say, "S".


    



console.log(isFlush(["AS", "3S", "9S", "KS", "4S"])); //true
console.log(isFlush(["AS", "3S", "9S", "KF", "4S"])); //false