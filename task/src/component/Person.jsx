import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPerson, createPerson, updatePerson } from "../service/personService";

const Person = () => {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const { id } = useParams();
  const [errors, setErrors] = useState({
    name: "",
    userName: "",
    password: "",
    userType: "",
  });

  const navigator = useNavigate();

  useEffect(() => {
    if (id) {
      getPerson(id)
        .then((response) => {
          setName(response.data.name);
          setUserName(response.data.userName);
          setPassword(response.data.password);
          setUserType(response.data.userType);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault(); // Prevent form submission
    if (validateForm()) {
      const person = { name, userName, password, userType };
      if (id) {
        updatePerson(id, person)
          .then((response) => {
            console.log(response.data);
            navigator("/persons");
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        createPerson(person,person.userType)
          .then((response) => {
            console.log(response.data);
            navigator("/persons");
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };
    if (!name.trim()) {
      errorsCopy.name = "Name is required";
      valid = false;
    } else {
      errorsCopy.name = "";
    }

    if (!userName.trim()) {
      errorsCopy.userName = "UserName is required";
      valid = false;
    } else {
      errorsCopy.userName = "";
    }

    if (!password.trim()) {
      errorsCopy.password = "Password is required";
      valid = false;
    } else {
      errorsCopy.password = "";
    }

    if (!userType.trim()) {
      errorsCopy.userType = "UserType is required";
      valid = false;
    } else {
      errorsCopy.userType = "";
    }

    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    return id ? <h2 className="text-center">Update Person</h2> : <h2 className="text-center">Add Person</h2>;
  }

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3">
          {pageTitle()}
          <div className="card-body">
            <form>
              <div className="form-group mb-2">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  placeholder="Enter Person Name"
                  name="name"
                  value={name}
                  className={`form-control ${errors.name ? "is-invalid" : ""}`}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">User Name</label>
                <input
                  type="text"
                  placeholder="Enter Person UserName"
                  name="userName"
                  value={userName}
                  className={`form-control ${errors.userName ? "is-invalid" : ""}`}
                  onChange={(e) => setUserName(e.target.value)}
                />
                {errors.userName && (
                  <div className="invalid-feedback">{errors.userName}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Password:</label>
                <input
                  type="password"
                  placeholder="Enter Person Password"
                  name="password"
                  value={password}
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <div className="invalid-feedback">{errors.password}</div>
                )}
              </div>
              <div className="form-group mb-2">
                <label className="form-label">Person Type:</label>
                <select
                  className={`form-control ${errors.userType ? "is-invalid" : ""}`}
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                >
                  <option value="">Select Person Type</option>
                  <option value="GST">GST</option>
                  <option value="IncomeTax">IncomeTax</option>
                </select>
                {errors.userType && (
                  <div className="invalid-feedback">{errors.userType}</div>
                )}
              </div>
              <button
                className="btn btn-success"
                onClick={saveOrUpdateEmployee}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Person;
