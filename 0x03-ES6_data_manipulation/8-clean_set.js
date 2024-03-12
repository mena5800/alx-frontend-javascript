export default function cleanSet(mySet, startString) {
  let ans = '';

  for (const obj of mySet) {
    if (obj.startsWith(startString)) {
      ans += obj.slice(startString.length);
      ans += '-';
    }
  }
  ans = ans.slice(0, -1);

  return ans;
}
