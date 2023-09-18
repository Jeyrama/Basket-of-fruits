/*
There are 6 types of fruits in the basket: Apples, Pears, Oranges, Lemons, Bananas and Tomatoes.
Your task: given a total number of fruits as an argument (always positive), 
return the highest possible number of Bananas, while following ALL the rules below:

  There are 17 more Oranges than Apples.
  There are 40% less Pears than Oranges.
  There are 5/6 more Lemons than Pears.
  There are 3x less Apples than Bananas.

There might be some Tomatoes left in the basket after you sort them 
(we dont want the Tomatoes, people think they are vegetables and it gets confusing).
If there are not enough total fruits to follow the rules, return "false".
All fruits must ALWAYS be counted as whole numbers.
*/


// Solution

const countBananas = total => 
  total < 66 ? false : 30 * ((total - 66) / 67 | 0) + 9

// or

function countBananas(totalFruits) {
  for (let bananas = totalFruits; bananas >= 1; bananas--) {
      let apples = bananas / 3;
      let oranges = apples + 17;
      let pears = oranges * 0.6;
      let lemons = pears + (5 / 6) * pears;

      let total = apples + oranges + pears + lemons + bananas;

      // Ensure all fruits are counted as whole numbers
      if (Math.floor(apples) === apples && 
          Math.floor(oranges) === oranges &&
          Math.floor(pears) === pears &&
          Math.floor(lemons) === lemons &&
          total <= totalFruits) {
          return bananas;
      }
  }
  return false;
}
