/**
 * Retrieves a list of students.
 * @author Mesele Araba <https://github.com/meserezort>
 * @returns {{id: Number, firstName: String, location: String}[]}
 */
export default function getListStudents() {
  return [
    { id: 1, firstName: 'Mesele', location: 'Ethiopia' },
    { id: 2, firstName: 'Bereket', location: 'Ethiopia' },
    { id: 5, firstName: 'Atild', location: 'Morocco' },
  ];
}
