import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Studentlist() {
  const [value, setValue] = useState([]);

  useEffect(async () => {
    try {
      let data = await fetch(
        "https://61c46bbbf1af4a0017d99520.mockapi.io/students"
      );
      let sendData = await data.json();
      setValue(sendData);
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Student List</h1>
      </div>
      <div class="card shadow mb-4">
        <div class="card-header py-3">
          <h6 class="m-0 font-weight-bold text-primary">DataTables Examp le</h6>
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
                {value.map((main) => {
                  return (
                    <tr>
                      <td>{main.id}</td>
                      <td>{main.name}</td>
                      <td>
                        <img src={main.avatar} />
                      </td>
                      <td>
                        <Link to={`/student/${main.id}`}>
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
