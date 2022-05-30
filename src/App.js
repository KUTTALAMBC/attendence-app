import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Dashboard from "./Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Studentlist from "./Studentlist";
import Attendancelist from "./Attendancelist";
import Addatt from "./Addatt";

function App() {
  return (
    <>
     <BrowserRouter>
      <div id="wrapper">
       
          <Sidebar />
          <div id="content-wrapper" class="d-flex flex-column">
            <div id="content">
              <Topbar />
              <div class="container-fluid">
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/student" element={<Studentlist />} />
                  <Route path="/student/:id" element={<Attendancelist />} />
                  <Route path="/addatt/:id" element={<Addatt />} />
                </Routes>
              </div>
            </div>
          </div>
       
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
