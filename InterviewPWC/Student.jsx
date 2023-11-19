import React ,{useState}  from 'react';

const studentList = [
    { studentId: 1, name: 'Rohan Das', department: 'Electronics', grade: 'A'},
    { studentId: 2, name: 'Samrat Singh', department: 'Mechanical', grade: 'B'},
    { studentId: 3, name: 'Ray Mazumdar', department: 'Computer Sceince', grade: 'A+'},
    { studentId: 4, name: 'Harvinder Chatterjee', department: 'Electronics', grade: 'A'}
]


const StudentFilter=()=>{
    const[dept, setDept] = useState('');
    const[grade, setGrade] = useState('');
    const[filterdata,setFilterdata] = useState([]);

    const handleFilter=()=>{
        const result = studentList.filter(student=>student.department.toLowerCase() === department.toLowerCase() &&
        student.grade.toLowerCase() === grade.toLowerCase()
        );
        setFilterdata(result);
    } 
    return (
        <div>
            <div>
            <label>Department:</label>
            <input type = "text" 
                    value={dept}
                    onChange ={e=> setDept(e.target.value)}/>
            </div>
            <div>  
            <label>Grade:</label>
            <input type = "text" 
                    value={grade}
                    onChange={e=> setGrade(e.target.value)}/>
            </div>
            <button onClick={handleFilter}>Filter</button>
            {filterdata.length > 0?(
                <ul>
                    {filterdata.map(student => (
                        <li key={student.tudentId}>
                        Name:{student.name} department:{student.department} grade:{student.grade}
                        </li>
                    ))}
                </ul>
            ):(<p>No student found</p>)};
        </div>
        
      );
    
};
export default StudentFilter;
