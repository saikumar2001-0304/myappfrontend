import React, { useEffect, useState } from 'react'
import './home.css'
import { countGst, countIncome, totalCount } from '../service/personService';
import { Await } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Home = () => {

    const [income, setIncome] = useState("");
    const [gst, setGst] = useState("");
    const[total,setTotal]=useState("");

    const navigator=useNavigate();

    // useEffect(()=> {
    //     const fetchdetails = async() => {
    //         const response = await axios.get('http://localhost:9898/person/gst');
    //         setGst(response.data);
    //     };
    //     fetchdetails();
    // },[]);

    useEffect(() => {
        countGst()
        .then((response)=>{
            setGst(response.data);
        })

        countIncome()
        .then((response)=>{
            setIncome(response.data);
        })
        totalCount()
        .then((response)=>{
          setTotal(response.data);
        })
      });

      function getList(){
        navigator('/persons')
    }
    function getGstList(){
      navigator('/gst-persons')
    }
    function getIncomeList(){
      navigator('/income-persons')
    }
  return (
    <div className='container'>
      <div  className='a'>
      <h1 onClick={getGstList}>GST</h1>
      <h2>{gst}</h2>
    </div>
    <div className='b'>
      <h1 onClick={getIncomeList}>IncomeTax</h1>
      <h2>{income}</h2>
    </div>
    
    <div>
    <button id='btn' onClick={getList}><h2>TOTAL</h2><h3>{total}</h3></button>
    </div>
    </div>
  )
}

export default Home
