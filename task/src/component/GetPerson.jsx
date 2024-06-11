import React, { useEffect, useState } from "react";
import { getPerson } from "../service/personService"; 
import { useNavigate, useParams } from "react-router-dom";
import "./home.css";

const GetPerson = () => {
  const [person, setPerson] = useState(null); 
  const { id } = useParams();
  const navigator = useNavigate();

  useEffect(() => {
    getPerson(id) 
      .then((response) => {
        setPerson(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  function updatePerson(id) {
    navigator(`/edit-person/${id}`);
  } 
  
  function home() {
    navigator("/");
  }

  return (
    <div className="container">
      <button className="btn btn-primary mb-2" id="lbtn" onClick={home}>
        Home
      </button>
      <h2 className="text-center" id="head">
        Person Details
      </h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Person Id</th>
            <th>Person Name</th>
            <th>Person userName</th>
            <th>Person Password</th>
            <th>Person Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {person && (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.userName}</td>
              <td>{person.password}</td>
              <td>{person.userType}</td>
              <td>
                <button
                  className="btn btn-info"
                  onClick={() => updatePerson(person.id)}
                >
                  Update
                </button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default GetPerson;
