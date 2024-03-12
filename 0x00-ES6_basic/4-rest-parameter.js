export default function returnHowManyArguments(...args) {
  let counter = 0;

  // eslint-disable-next-line no-unused-vars
  for (const _ of args) {
    counter += 1;
  }

  return counter;
}
