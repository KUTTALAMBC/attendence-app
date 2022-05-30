import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Studentlist() {
  const [students, setStudents] = useState([]);

  // useEffect(async () => {
  //   try {
  //     let StudentData = await fetch(
        
  //       "https://61c46bbbf1af4a0017d99520.mockapi.io/students"
  //     );
  //     let StudentLists = await StudentData.json();
  //     setStudents(StudentLists);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);
  useEffect(() => {
    (async ()=>{
       try {
         let StudentData = await fetch(
           
           "https://61c46bbbf1af4a0017d99520.mockapi.io/students"
         );
         let StudentLists = await StudentData.json();
         setStudents(StudentLists);
       } catch (error) {
         console.log(error);
       }
   })()
 }, []);
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Student List</h1>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div class="card-body">
          <div class="table-responsive">
            <table
              class="table table-bordered"
              id="dataTable"
              width="100%"
              cellspacing="0"
            >
              <thead className="text-center">
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Avatar</th>
                  <th>Action</th>
                </tr>
              </thead>
     

              <tbody className="text-center">
                {students.map((student) => {
                  return (
                    <tr>
                      <td>{student.id}</td>
                      <td>{student.name}</td>
                      <td>
                        <img src={student.avatar} />
                      </td>
                      <td>
                        <Link to={`/student/${student.id}`}>
                          <button className="btn btn-primary">view</button>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Studentlist;
