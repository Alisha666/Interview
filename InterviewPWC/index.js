import React, { useState } from 'react';

const studentList = [
  { studentId: 1, name: 'Rohan Das', department: 'Electronics', grade: 'A' },
  { studentId: 2, name: 'Samrat Singh', department: 'Mechanical', grade: 'B' },
  { studentId: 3, name: 'Ray Mazumdar', department: 'Computer Science', grade: 'A+' },
  { studentId: 4, name: 'Harvinder Chatterjee', department: 'Electronics', grade: 'A' }
];

const StudentFilter = () => {
  const [department, setDepartment] = useState('');
  const [grade, setGrade]  = useState('');
  const [filteredStudents, setFilteredStudents] = useState([]);

  const handleFilter = () => {
    const filteredData = studentList.filter(
      student => student.department.toLowerCase() === department.toLowerCase()
        && student.grade.toLowerCase() === grade.toLowerCase()
    );
    setFilteredStudents(filteredData);
  };

  return (
    <div>
      <div>
        <label>Department:</label>
        <input
          type="text"
          value={department}
          onChange={e => setDepartment(e.target.value)}
        />
      </div>
      <div>
        <label>Grade:</label>
        <input
          type="text"
          value={grade}
          onChange={e => setGrade(e.target.value)}
        />
      </div>
      <button onClick={handleFilter}>Filter</button>

      {filteredStudents.length > 0 ? (
        <ul>
          {filteredStudents.map(student => (
            <li key={student.studentId}>
              Name: {student.name}, Department: {student.department}, Grade: {student.grade}
            </li>
          ))}
        </ul>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
};

export default StudentFilter;

