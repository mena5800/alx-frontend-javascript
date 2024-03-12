export default function hasValuesFromArray(mySet, myArray) {
  let cond = true;
  for (const num of myArray) {
    if (!mySet.has(num)) {
      cond = false;
      break;
    }
  }

  return cond;
}
