
import { useState } from "react";
export default function   OurBlog (){

 


     const text = `In today’s fast-paced dining industry, managing reservations the traditional way is no longer enough. With increasing customer expectations and growing competition, smart reservation systems have become an essential tool for restaurants aiming to deliver a smooth and professional experience.
Digital reservation systems help restaurants organize bookings accurately, eliminate long waiting times, and reduce human errors. Instead of relying on phone calls or manual logs, customers can now reserve a table in just a few seconds, choosing the time that suits them best with complete ease.
`



    return(
        < div style={{
            width:"100%",
            margin:'0px',
            padding:'20px',
            marginTop:'50px'
        }}>
        <div>
<p style={{
color:"#172432",
fontSize:'64px',
fontWeight:'400',
  fontFamily:" 'Playfair Display', serif",
  marginBottom:"10px"
}}>
    Our Blog
</p>
<hr
  style={{
    width: "150px",
    height: "3px",
    background: "#E22023",
    border: "none",
    borderRadius: "2px",
    margin: "10px 0"
  }}
/>

<p style={{
    fontWeight:"400",
    fontSize:'24px',
    color:'#767E86',
    marginTop:'0px',
  fontFamily: "'Rubik', sans-serif",
  marginBottom:"20px"
}}>
Discover the latest news, tips, and stories from the world of dining.
</p>


            </div>
        <div style={{
            display:'flex',
            flexDirection:'row',
            width:'100%',
            gap:'80px',
            height:'630px',
            overflow:'hidden'

        }}>
            <img src="/imgBegScren/Component 11(1).png" width="30%" maxWidth="500px"></img>
            <div style={{
              width:"70%",
              marginTop:'90px'
            }}>
                <p style={{
                    color:'#172432',
                    fontWeight:'400',
                    fontSize:'54px',
  fontFamily:" 'Playfair Display', serif",
                      marginBottom:"10px",
                    width:'95%',
                    lineHeight:"100%",
                    marginBottom:"20px"
                }}>
                    How Smart Reservations Improve the Dining Experience
                </p>

  <p style={{
    fontWeight:'400',
    fontSize:'24px',
    lineHeight:'52px',
    fontFamily: "'Rubik', sans-serif",
    color:"#172432",
    margin:0
  }}>
    {text}
  </p>
 




                </div>

        </div>
        
        
        </div>
    )
}