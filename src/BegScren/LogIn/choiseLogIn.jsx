import { useState } from "react";
import { Oval } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";

export default function ChoiceLog() {
  const navigate=useNavigate()
  const [activ, setActiv] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // حالة الهوفر
   const handleStart = () => {
  setIsLoading(true);
  setTimeout(() => {
    setIsLoading(false);
    setIsActive(false); // بدل setIsPressed
    navigate("/home");
  }, 4000);
};


  return (
    <div
      style={{
        width: "100%",
        paddingTop:'5%',
        height: "100%",
        display: "flex",
        overflow: "hidden",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#F8F5F9",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
    
      <img src="/imgBegScren/logo.png" width="180" height="160" style={{ marginTop: "-10px" }} />

      <p style={{ color: "#E22023", fontSize: "60px", fontWeight: "600",marginTop:"-50px",  fontFamily: "'Poppins', sans-serif"}}>
        Choose Login Method
      </p>

      <p style={{ color: "rgba(85,85,85,0.38)", fontSize: "22px", width: "70%", textAlign: "center", fontWeight:"400",lineHeight:"100%" , fontFamily: "'Poppins', sans-serif",letterSpacing:"-2%"}}>
        Join our platform as a restaurant owner to manage all your operations effortlessly, from tracking orders and updating your menu to managing reservations and delivering the best experience to your customers
      </p>

      {/* المربعات */}
      <div style={{ display: 'flex', gap: '90px', margin: '30px', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div
          style={{
            width: '360px',
            height: '281px',
            border: activ?'4px solid' :'1px solid',
            borderColor: activ ? "#E22023" :'rgba(16, 24, 40, 0.05)' ,
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: "0px",
            cursor: "pointer",
          }}
          onClick={() => setActiv(true)}
        >
          <img src="/imgBegScren/iconUser.png" width="124px" />
          <p style={{ color: activ ? "#BF360C" : '#000000', fontWeight: '500', fontSize: '20px' }}>Are you a customer</p>
          <p style={{ fontSize: '10px', fontWeight: '500', textAlign: 'center', lineHeight: '100%',margin:"5%", color: "rgba(85, 85, 85, 0.38)",width:"90%" }}>
            Log in to explore diverse menus, place orders effortlessly, track your current orders, and enjoy a seamless and delightful dining experience
          </p>
        </div>

        <div
          style={{
            width: '360px',
            height: '281px',
            border : activ?'1px solid':'4px solid',
            borderColor: activ ? 'rgba(72, 72, 72, 0.5)' : "#E22023",
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0px',
            cursor: "pointer",
          }}
          onClick={() => setActiv(false)}
        >
          <img src="/imgBegScren/onerIcon.png" width="124px" />
          <p style={{ color: activ ? '#000000' : "#BF360C", fontWeight: '500', fontSize: '20px' }}>Are you a business owner</p>
          <p style={{ fontSize: '10px', fontWeight: '500', textAlign: 'center', lineHeight: '100%',margin:"5%", color: "rgba(85, 85, 85, 0.38)",width:"90%" }}>
            Join our platform to efficiently manage your restaurant, from tracking orders and updating menus to organizing reservations and delivering an exceptional experience to your customers
          </p>
        </div>
      </div>

      {/* زر Start Now */}
      <button
        style={{
          padding: "24px 300px",
            fontFamily: "'Poppins', sans-serif",
          marginTop:'20px',
        
          background:isLoading?"#E22023": "rgba(0,0,0,0.5)" , // لون عند الهوفر  
          color: "#FFF",
          fontSize: "20px",
          fontWeight: "500",
          border: "none",
          outline: "none",
          borderRadius: "11px",
          cursor: "pointer",
          transition: "background 0.25s ease, transform 0.15s ease",
        }}
        onClick={() => {
          setIsActive(true);
          handleStart();
        }}
     
        disabled={isLoading} // يمنع الضغط أثناء التحميل
      >
        Start Now
      </button>

        {/* Spinner يظهر أثناء التحميل */}
      {isLoading && (
        <div style={{
          width:"100%",
          height:"100%",
          position:'fixed',
          top:'0px',
          left:'0px',
          background:'rgba(22, 22, 22, 0.3)'
        }}>
        <Oval
          height={60}
          width={60}
          color="#E22023"
          
          wrapperStyle={{ margin: "20px" ,position:"relative", top:"87%",left:'45%'}}
        />
        </div>
      )}

    </div>
  );
}
