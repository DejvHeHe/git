import '../App.css';
import React, { useState} from 'react';
import { createList } from '../api';


function CreateForm({ text, onClose,loadData}) {
  const [inputValue, setInput]=useState("")
  
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return; // Don't submit empty input
    const data = { name: inputValue };
    console.log("Sending data:", data); // Check data format
    try {
      await createList(data); // Adjust this based on your API expectations
      loadData()
      onClose()
      
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };
  
  return (
    <div className='modalwindow'>
      <form onSubmit={handleSubmit}>
      <p>{text}</p>
      <input type='text' value={inputValue} onChange={(e) => setInput(e.target.value)} ></input>
      <button type='submit'>Potvrdit</button>
      <button onClick={onClose}>Zavřít</button>
      </form>      
    </div>

  );
}

export default CreateForm;
