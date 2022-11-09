import { makeAllCaps, sortWords } from "./utils.js";

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

await makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })

await makeAllCaps(complicatedArray)
  .then(sortWords)
  .then(result => { console.log(result) })
  .catch(error => { console.log(error) })