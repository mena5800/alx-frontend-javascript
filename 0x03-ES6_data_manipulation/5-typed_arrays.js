export default function createInt8TypedArray(students) {
  return students.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0,
  );
}
