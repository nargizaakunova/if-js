import Student from './Student.js';

export default class Students {
  constructor(studentsData) {
    this.students = studentsData.map((data) => new Student(data));
  }

  getInfo() {
    const sortedArrOfStudents = this.students
      .sort((a, b) => a.course - b.course)
      .map(
        (student) =>
          `${student.fullName} - ${student.courseName}, ${student.course} курс`,
      );
    return sortedArrOfStudents;
  }
}
