import React from 'react'

function Searchbar() {
  return (
    <div>
      <form action="#" >
          <input type="text" placeholder='Search..' required="true" style={{height:"30px",width:"60vh",borderRadius:"25px",outline:"none",border:"1px solid black",fontSize:"20px",textAlign:"left",paddingLeft:"20px"}}/>
          <button style={{background:"none",backgroundColor:'transparent',border:"0px"}}><i className="fas fa-search fa-2x" style={{font:"20px",marginLeft:"5px"}} ></i></button>
      </form>
    </div>
  )
}

export default Searchbar
