// Algorithm from codewars. Description: Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:
// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10
// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10
// Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

// Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.

//*===============  MY SOLUTION   =================== */
//create two variables where to store each creature's worth

const goodWorth = [
  1, //Hobbits
  2, //Men
  3, //Elves
  3, //Dwarves
  4, //Eagles
  10, //Wizards
];

const evilWorth = [
  1, //Orcs
  2, //Men
  2, //Wargs
  2, //Goblins
  3, //Uruk hai
  5, //Trolls
  10, //Wizards
];

function countWorth(points, worth) {
  points = points.split(" ");
  let pointsIntegrers = points.map((point) => Number(point));

  let result = 0;
  pointsIntegrers.forEach(function (point, index) {
    result += point * worth[index];
  });
  return result;
}

function goodVsEvil(goodPoints, evilPoints) {
  const totalGoodWorth = countWorth(goodPoints, goodWorth);
  console.log(totalGoodWorth);
  const totalEvilWorth = countWorth(evilPoints, evilWorth);
  console.log(totalEvilWorth);

  if (totalGoodWorth > totalEvilWorth) {
    return "Battle Result: Good triumphs over Evil";
  } else if (totalEvilWorth > totalGoodWorth) {
    return "Battle Result: Evil eradicates all trace of Good";
  }
  return "Battle Result: No victor on this battle field";
}

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
