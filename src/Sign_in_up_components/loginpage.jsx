import React from 'react'

function loginpage() {
  return (
    <div style={{display:'flex', flexDirection:'column', width:'400px',height:'300px', margin:'100px auto', padding:'50px', border:'1px solid #ccc', borderRadius:'8px', boxShadow:'0 2px 8px rgba(0,0,0,0.1)', background:'#fff'}}>
      <h2 style={{textAlign:'center', marginBottom:'24px'}}>Login</h2>
      <form>
        <input
          type="text"
          placeholder="Enter your registered email"
          style={{width:'100%', padding:'10px', marginBottom:'16px', borderRadius:'4px', border:'1px solid #ccc'}}
        />
        <input
          type="password"
          placeholder="Password"
          style={{width:'100%', padding:'10px', marginBottom:'16px', borderRadius:'4px', border:'1px solid #ccc'}}
        />
        <div style={{display:'flex', justifyContent:'center'}}>
          <button
            type="submit"
            style={{width:'30%', padding:'10px', borderRadius:'4px', border:'none', background:'#1976d2', color:'#fff', fontWeight:'bold', cursor:'pointer'}}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default loginpage
