import '../App.css';
import React, { useState} from 'react';



function CreateForm({ text, onClose,loadData,createFunction}) {
  const [inputValue, setInput]=useState("")
  
  
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!inputValue.trim()) return; // Don't submit empty input
    const data = { name: inputValue };
    
    console.log("Sending data:", data); // Log data to check format
  
    try {
      if (createFunction) {  // Check if the function is set
        await createFunction(data); // Use the function passed via props
        loadData();
        onClose();
      } else {
        console.error("No function passed to createFunction!");
      }
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
