import React from 'react'

const Users = (props) => {
    let data=props.data
  return (
    <div>
        <table border="3px" style={{textAlign:"center",fontWeight:"bolder"}}>
            <tr>
                <th>StudentName</th>
                <th>RollNo</th>
                <th>Class</th>
                <th>Subjects</th>
                <th>Marks</th>
                <th>Grade</th>
                <th>Photo</th>
            </tr>
            {data.map((x)=>{return <tr>
                <td>{x.studentName}</td>
                <td>{x.rollNo}</td>
                <td>{x.class}</td>
                <td><ul>{x.subjects.map((x)=>{return<li>{x}</li>})}</ul></td>
                <td><ul>{x.marks.map((x)=>{return<li>{x}</li>})}</ul></td>
                <td>{x.grade}</td>
                <td><img src={x.photo} alt="" style={{height:"50px",width:"50px"}}></img></td>
            </tr>})}
        </table>
    </div>
  )
}

export default Users