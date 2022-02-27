import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Users() {
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   const { data: response } = await axios.get("https://api.nached.xyz/users");
  //   setUser(response);
  // }, []);
  return (
    <div className="container mt-5">
      <div className="table-responsive">
        <table
          className="table text-white table-hover"
          style={{ backgroundColor: "#a6b1e1", borderRadius: "8px" }}
        >
          <thead>
            <tr>
              <th colspan="2">#</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Creted AT</th>
              <th>Update AT</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="2">
                <h6>1</h6>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="../img/ellipse-1-1@2x.png"
                    width="30"
                  />
                  <span className="ml-2">Christan M.</span>
                </div>
              </td>
              <td>
                chdg@gmail.com
                <br />
              </td>
              <td className="font-weight-bold">0600000000</td>
              <td>10-02-2020</td>
              <td>10-02-2020</td>
              <td>
                <a href="#" className="p-1">
                  <img src="../img/icons8-write-24.png" alt="" />
                </a>
                <a href="#" className="p-1">
                  <img src="../img/icons8-delete-24.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <h6>2</h6>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="../img/ellipse-1-2@2x.png"
                    width="30"
                  />
                  <span className="ml-2">Christan M.</span>
                </div>
              </td>
              <td>
                chdg@gmail.com
                <br />
              </td>
              <td className="font-weight-bold">0600000000</td>
              <td>10-02-2020</td>
              <td>10-02-2020</td>
              <td>
                <a href="#" className="p-1">
                  <img src="../img/icons8-write-24.png" alt="" />
                </a>
                <a href="#" className="p-1">
                  <img src="../img/icons8-delete-24.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <h6>3</h6>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="../img/ellipse-1-3@2x.png"
                    width="30"
                  />
                  <span className="ml-2">Christan M.</span>
                </div>
              </td>
              <td>
                chdg@gmail.com
                <br />
              </td>
              <td className="font-weight-bold">0600000000</td>
              <td>10-02-2020</td>
              <td>10-02-2020</td>
              <td>
                <a href="#" className="p-1">
                  <img src="../img/icons8-write-24.png" alt="" />
                </a>
                <a href="#" className="p-1">
                  <img src="../img/icons8-delete-24.png" alt="" />
                </a>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <h6>4</h6>
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-circle"
                    src="../img/ellipse-1-4@2x.png"
                    width="30"
                  />
                  <span className="ml-2">Christan M.</span>
                </div>
              </td>
              <td>
                chdg@gmail.com
                <br />
              </td>
              <td className="font-weight-bold">0600000000</td>
              <td>10-02-2020</td>
              <td>10-02-2020</td>
              <td>
                <a href="#" className="p-1">
                  <img src="../img/icons8-write-24.png" alt="" />
                </a>
                <a href="#" className="p-1">
                  <img src="../img/icons8-delete-24.png" alt="" />
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
