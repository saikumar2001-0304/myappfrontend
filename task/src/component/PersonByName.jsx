import React, { useEffect, useState } from "react";
import { getName } from "../service/personService"; 
import { useNavigate, useParams } from "react-router-dom";
import "./home.css";

const PersonByName = () => {
    const [person, setPerson] = useState(null); 
    const { id } = useParams();
    const{name}=useParams();
    const navigator = useNavigate();
  
    useEffect(() => {
      getName(name) 
        .then((response) => {
          setPerson(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }, [name]);
  
    function updatePerson(id) {
      navigator(`/edit-person/${id}`);
    }
    
    function home() {
      navigator("/");
    }
    function list(){
        navigator("/persons");
    }
  
    return (
      <div className="container">
        <button className="btn btn-primary mb-2" id="lbtn" onClick={home}>
          Home
        </button>
        <button className="btn btn-primary mb-2" id="lbtn" onClick={list}>
          Back
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
}

export default PersonByName
