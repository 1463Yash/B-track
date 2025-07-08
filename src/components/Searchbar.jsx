import React from 'react'

function Searchbar() {
  return (
    <div style={{marginTop:'10px',marginBottom:'20px'}}>
      <form action="" >
        <input type="text" name="" id="" placeholder='Search ..' style={{height: '40px',
      padding: '0 10px',
      fontSize: '1rem',
      borderRadius: '6px',
      border: '1px solid #ccc',
      outline: 'none',
      width: '40vw',}} />
        <button type='submit' style={{height: '40px',
      padding: '0 16px',
      fontSize: '1rem',
      borderRadius: '6px',
      backgroundColor: '#1589FF',
      color: 'white',
      border: 'none',
      cursor: 'pointer',marginLeft:'10px'}}>Search</button>
   
      </form>
      
    </div>
  )
}

export default Searchbar
