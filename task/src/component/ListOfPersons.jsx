import React, { useEffect, useState } from "react";
import { listPersons } from "../service/personService";
import { useNavigate } from "react-router-dom";
import "./home.css";

const ListOfPersons = () => {
  const [persons, setPersons] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [searchName, setSearchName] = useState("");
  const navigator = useNavigate();

  useEffect(() => {
    listPersons()
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleGmailLogin = () => {
    window.location.href = 'https://gmail.com/';
  };
  function addPerson() {
    navigator("/add-persons");
  }

  function updatePerson(id) {
    navigator(`/edit-person/${id}`);
  }

  function getPerson(id) {
    navigator(`/get-person/${id}`);
  }

  function home() {
    navigator("/");
  }

  function getByName(Name){
    navigator(`/person/name/${Name}`)
  }
  // Function to handle search by ID
  // function searchById(event) {
  //   event.preventDefault();
  //   const filteredPerson = persons.find((person) => person.id === parseInt(searchId));
  //   if (filteredPerson) {
  //     getPerson(filteredPerson.id);
  //   } else {
  //     alert("Person not found with the given ID.");
  //   }
  // }

  //Function to Handle Search by Name
  function searchByName(event){
    event.preventDefault();
    const filterPerson=persons.find((person)=>person.name===searchName);
    if(filterPerson){
      getByName(filterPerson.name);
    }else{
      alert("Person not found with the given Name.");
    }
  }

  return (
    <div className="container" >
      <button className="btn btn-primary mb-2" id='lbtn' onClick={addPerson}>
        Add Person
      </button>
      <button className="btn btn-primary mb-2"id='lbtn' onClick={home}>
        Home
      </button>
      <form className="search" onSubmit={searchByName}>
        <input
          className="c"
          type="text"
          placeholder="Search by Name"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <h2 className="text-center" id="head">
        List Of Persons
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
            <th>Gmail</th>
          </tr>
        </thead>
        <tbody>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>{person.userName}</td>
              <td>{person.password}</td>
              <td>{person.userType}</td>
              <td>
                <button className="btn btn-info" onClick={() => updatePerson(person.id)}>
                  Update
                </button>
              </td>
              <td>
              <button
        onClick={handleGmailLogin} id="mail" formTarget="_blank"
      >
        Go to Gmail
      </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListOfPersons;
