import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { listGst } from '../service/personService';

const ListGst = () => {

    const[persons,setPersons]=useState([])

    const navigator=useNavigate();

    useEffect(()=>{
        listGst().then((response)=>{
            setPersons(response.data);
        }).catch(error=>{
            console.error(error);
        })

    })
    function home(){
        navigator('/');
    }
    function updatePerson(id){
        navigator(`/edit-person/${id}`)
    }
  return (
    <div className="container">
      <button className='btn btn-primary mb-2' id='lbtn'onClick={home} >Home</button>
      <h2 className='text-center' id='head'>List Of GST Persons</h2>
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
            {
                persons.map(person =>
                    <tr key={person.id}> 
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.userName}</td>
                    <td>{person.password}</td>
                    <td>{person.userType}</td>
                    <td>
                        <button className='btn btn-info' onClick={()=>updatePerson(person.id)}>Update</button>
                    </td>
                    </tr>
                )
            }
        </tbody>
      </table>
    </div>
  )
}

export default ListGst
