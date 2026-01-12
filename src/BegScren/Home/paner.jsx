
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


export default function Banner() {

   const iconStyle = {
    color: "#E22023",
    fontSize: "20px",
    margin: "0 10px",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

  return (
    <div
      style={{
        margin: '0px',
        width: "100%",
        height: '70vh',
        display:"flex",
        flexDirection:'column',
        justifyContent:"space-between",
        alignItems:'center',
        backgroundImage: `url('/imgBegScren/bg.png')`,
        backgroundSize: 'cover', // لتغطية كامل العنصر
        backgroundPosition: 'center', // لمحاذاة الصورة في الوسط
      }}
    >






  {/* أيقونات التواصل */}
      <div style={{ display: "flex", alignItems: "center", marginTop: "50px" }}>
<a
  href="https://www.facebook.com/share/1GK7wnD318/"
  target="_blank"
    rel="noopener noreferrer">

  <FaFacebookF style={iconStyle} />
  </a>
        <a 
  href="https://www.instagram.com/hvshim10?igsh=c3o2aTA5eGM3ejF6" 
  target="_blank" 
  rel="noopener noreferrer"
>
        <FaInstagram style={iconStyle} />
        </a>

               <a 
  href="www.linkedin.com/in/dev-master-78005b393" 
  target="_blank" 
  rel="noopener noreferrer"
>
        <FaLinkedinIn style={iconStyle} />
        </a>

        <a 
  href="https://wa.me/201055395693" 
  target="_blank" 
  rel="noopener noreferrer"
>
        <FaWhatsapp style={iconStyle} />
        </a>
      </div>









        <div style={{
display:'flex',
flexDirection:'column',
justifyContent:"center",
alignItems:'center',
marginTop:"-20px"       
 }}>
        <p style={{
            color:'#2C2F24',
            fontWeight:"400",
            fontSize:"100px",
            lineHeight:'96px',
            textAlign:"center",
             fontFamily: "'Playfair Display', serif",
        }}>
Best food for<br/>
your taste


            </p>
            <p style={{
                color:"#2C2F24",
                fontSize:"20px",
                lineHeight:"32px",
                fontWeight:'400',
                textAlign:'center',
                marginTop:"10px",
          fontFamily: "'Poppins', sans-serif",

            }}>  Discover delectable cuisine and unforgettable <br/> moments in our welcoming, culinary haven.
            </p>
     <button
  style={{
    fontWeight: "600",
    fontSize: "16px",
    lineHeight: "24px",
    color: "#fff",
    background: "#E22023",
    padding: "20px 32px",
    borderRadius: "118px",
    border: "none",
    outline: "none",
    fontFamily: "'Poppins', sans-serif",
    cursor: "pointer",
    display:'flex',
    alignItems:"center",
    gap:"10px",
    margin:'30px',

    transition: "transform 0.2s ease", // الحركة بسلاسة
  }}
  onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
  onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
>
  Join as Restaurant Owner
  <img src='/imgBegScren/uil_arrow-up(4).png'></img>
</button>








 







        </div>





            <div
  style={{
    width: "150px",
    height: "150px",
    position: "relative",
    marginTop: "-20px",
  }}
>
  {/* الصورة في المنتصف */}
  <div
    style={{
      width: "100px", // حجم الصورة
      height: "100px",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img src="/imgBegScren/Group(8).png" alt="center"  />
  </div>

 <svg
    width="150"
    height="150"
    viewBox="0 0 200 200"
    
    style={{ fontSize:"16.12px" ,display:"grid",gap:"10,8px"}}
  >
    <defs>
      <path
        id="circlePath"
        d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
      />
    </defs>

    <text
      fill="#E22023"
      fontSize="16,12px"
        letterSpacing="2px" // مسافة الأحرف
      fontFamily="Inter"
      fontWeight="400"
      style={{
        transformOrigin: "100px 100px", // مركز الدائرة
        animation: "rotateText 20s linear infinite",
      }}
    >
      <textPath href="#circlePath" lengthAdjust="spacingAndGlyphs">
        {("scroll down for work together • ").repeat(20)}
      </textPath>
    </text>

    <style>
      {`
        @keyframes rotateText {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}
    </style>
  </svg>

</div>

 {/* النص الدائري */}


    </div>
  );
}
