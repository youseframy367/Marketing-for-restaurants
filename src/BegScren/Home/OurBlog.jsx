
import { useState } from "react";

export default function   OurBlog (){



 


     const text = `In today’s fast-paced dining industry, managing reservations the traditional way is no longer enough. With increasing customer expectations and growing competition, smart reservation systems have become an essential tool for restaurants aiming to deliver a smooth and professional experience.
Digital reservation systems help restaurants organize bookings accurately, eliminate long waiting times, and reduce human errors. Instead of relying on phone calls or manual logs, customers can now reserve a table in just a few seconds, choosing the time that suits them best with complete ease.
From a management perspective, these systems provide a clear overview of daily reservations. Floor supervisors and operations managers can monitor peak hours,these systems provide a clear overview of daily reservations. Floor supervisors and operations managers can monitor peak hours, track available tables`



    return(
        < div data-aos="fade-up" style={{
            width:"100%",
            margin:'0px',
            padding:'20px',
            marginTop:'70px'
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
data-aos="fade-right"
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
            gap:'60px',
            marginTop:"50px",
            height:'630px',
            overflow:'hidden'

        }}>
            <img src="/imgBegScren/Component 11(1).png" width="400px" height="auto"></img>
            <div style={{
              width:"70%",
              marginTop:'90px',
              marginRight:'10px'
            }}>
                <p style={{
                    color:'#172432',
                    fontWeight:'400',
                    fontSize:'50px',
  fontFamily:" 'Playfair Display', serif",
                      marginBottom:"10px",
                    width:'95%',
                    marginTop:"-10px",
                    lineHeight:"70px",
                  
                    marginBottom:"20px"
                }}>
                     How Smart Reservations Improve the Dining Experience ?
                </p>

  <p style={{
    fontWeight:'200',
    fontSize:'18px',
    lineHeight:'50px',
    fontFamily: "'Rubik', sans-serif",
    color:"rgba(23, 36, 50, 0.5)",
    margin:0
  }}>
    {text}
  </p>
 




                </div>

        </div>
        
        
        </div>
    )
}