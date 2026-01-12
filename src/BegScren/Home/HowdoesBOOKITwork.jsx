import React from "react";

export default function HowBOOKwork() {
  const steps = [
    { img: "/imgBegScren/discovery-P5MAT2JY 1(1).png", text: "Discover the perfect restaurant for any occasion" ,width:"357" },
    { img: "/imgBegScren/Reservations - 64x64.png", text: "Easily manage your reservations" ,width:"360"},
    { img: "/imgBegScren/Clip path group.png", text: "Full visibility into available reservations; timely notifications", width:"390" },
    { img: "/imgBegScren/rrrr.png", text: "Earn rewards for dining out" ,width:'390' },
  ];

  return (
    <div style={{ width: "100%", marginTop:"50px", padding: "20px" }}>
      {/* العنوان */}
      <div>
        <p style={{
          color: "#172432",
          fontSize: '64px',
          fontWeight: 400,
          fontFamily: "'Playfair Display', serif",
          marginBottom: "10px"
        }}>
          How does BOOK IT work?
        </p>
        <hr style={{
          width: "350px",
          height: "3px",
          background: "#E22023",
          border: "none",
          borderRadius: "2px",
          margin: "10px 0"
        }} />
        <p style={{
          fontWeight: 400,
          fontSize: '24px',
          color: '#767E86',
          marginTop: '0px',
  fontFamily: "'Rubik', sans-serif"
        }}>
          Book your table in just a few simple steps and enjoy a seamless dining experience.
        </p>
      </div>

      {/* الكروت */}
      <div style={{
        display: "flex",
        flexWrap:"nowrap",  
        gap: "20px",
        justifyContent: "space-between",
        marginTop: "40px"
      }}>
        {steps.map((step, index) => (
          <div key={index} style={{
            width:`${step.width}px`,
            display: 'flex',
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <div style={{ height: '200px', display: "flex", justifyContent: "center", alignItems: "center" }}>
              <img src={step.img} alt="" style={{ maxHeight: "178px", maxWidth: "197px", objectFit: "contain" }} />
            </div>
            <p style={{
              color: '#767E86',
              fontSize: '22px',
              fontWeight: 400,
              lineHeight: '35px',
              fontFamily: "'Rubik', sans-serif",
              marginTop: "10px",
              width:'100%'
              
            }}>
              {step.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
