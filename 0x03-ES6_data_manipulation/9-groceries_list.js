export default function updateStudentGradeByCity(students) {
  return students.reduce(
    (accumulator, currentValue) => accumulator + currentValue.id,
    0,
  );
}
