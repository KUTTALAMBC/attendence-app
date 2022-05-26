import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Attendancelist() {
  const [atten, setAtten] = useState([]);
  let params = useParams();
  useEffect(async () => {
    try {
      let attendanceData = await fetch(
        `https://61c46bbbf1af4a0017d99520.mockapi.io/attendance?useridd=${params.id}`
      );
      let attendanceList = await attendanceData.json();
      setAtten(attendanceList);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Student List</h1>
        <Link
          to={`/addatt/${params.id}`}
          class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i class="fas fa-download fa-sm text-white-50"></i>Add attendance
        </Link>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">Attendance</h6>
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
                  <th>Date</th>
                  <th>Attendance</th>
                </tr>
              </thead>

              <tbody className="text-center">
                {atten.map((atten) => {
                  return (
                    <tr>
                      <td>{atten.date}</td>
                      <td>{atten.attendance}</td>
                    </tr>
                  );
                })}
              </tbody>
              <hr />
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Attendancelist;
