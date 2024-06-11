import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListOfPersons from "./component/ListOfPersons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Person from "./component/Person";
import Home from "./component/Home";
import ListGst from "./component/ListGst";
import ListIncome from "./component/ListIncome";
import GetPerson from "./component/GetPerson";
import PersonByName from "./component/PersonByName";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* //https://localhost:4000 */}
          <Route path="/" element={<Home/>}></Route>
        <Route path="/persons" element={<ListOfPersons />}></Route>
        <Route path="/gst-persons" element={<ListGst />}></Route>
        <Route path="/income-persons" element={<ListIncome />}></Route>
        <Route path="/get-person/:id" element={<GetPerson />}></Route>
        <Route path="/person/name/:name" element={<PersonByName />}></Route>
        <Route path="/add-persons" element={<Person />}></Route>
        <Route path="/edit-person/:id" element={<Person />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
