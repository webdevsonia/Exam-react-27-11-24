import React from 'react'

export default function UserProfilecard({title,Name,Email,imgurl,ContactNum,Course}) {
  return (
    <div style={{ textAlign:'center', alignItems:'center', justifyContent:'center', display:'flex',flexDirection:'column', borderStyle:'solid',borderWidth:'2px',margin:'20px',borderRadius:50}}>
        <h1 >{title}</h1>
        <img src={imgurl} alt={title} style={{width:'300px',height: 'auto',display:'flex',borderRadius:50, }}/>
        <p> NAME :- {Name}</p>
        <p>EMAIL :- {Email}</p>
        <p>CONTECT :- {ContactNum}</p>
        <p>COURSE :- {Course}</p>  
    </div>

    
  )
}
