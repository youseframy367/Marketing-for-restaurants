import Header from "../partes/header";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function DetailsRestaurant() {
const navigate=useNavigate()
  const location = useLocation();
  const restaurant = location.state?.data; // هنا نستقبل الكائن المرسل


  const Varieties =[
    {src:"/imgBegScren/2e9d95ab82a746ed9e44c20e6b2493050b5e1062.png", name:"Pizza"},
    { src:"/imgBegScren/f5a6cbe7733c2683d669c8e555d51d14ec5b50c8.jpg", name:"Pasta"},
    {src:'/imgBegScren/35775e5ea7423a465e74ac625b29a555d3e3f472.png' , name:"Lazania"},
    {src:'/imgBegScren/ebb2bf4ebaa4059fbb77262190d19a8edb5ea2b6.jpg' ,name:"Seafood"},
    {src:"/imgBegScren/8b037e558a7fd464465da02ca2bef7eff6ed0cb2.jpg", name:"Beef"},

  ]

  return (
    <>
      <Header />

      {/* قسم الخلفية */}
      <div
        className="relative w-full h-[607px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: `url(${restaurant.img})`,
        }}
      >
        <div style={{
    backgroundImage: `url(${Varieties[0].src})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius:"20px",
    width:"9%",
    display:"flex",
    justifyContent:'center',
    alignItems:"center",
                      margin:"5px",
                      height:'160px',
                      position:'absolute',
                      top:"400px",
                      left:"90%"

        }}>
<h2 style={{
    color:"#ffff",
    fontWeight:'500',
    fontSize:"20px",
    position:'relative',
    zIndex:999,
    fontFamily: "'Poppins', sans-serif"

}}>+{Varieties.length}</h2>
        </div>
        {/* طبقة التعتيم */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.5)]"></div>
        <button style={{
            position:"absolute",
            top:'30px',
            left:"20px",
            background:"rgba(255, 255, 255, 0.48)",
            width:"50px",
            height:"50px",
            borderRadius:'50%',
border: "0,5px solid #ffffff",
display:"flex",
justifyContent:"center",
alignItems:"center",
                boxShadow: "0px 4px 4px 0px #00000040",
        }}
        onClick={()=>{
            navigate(-1)
        }}>
            <img src="/imgBegScren/Vector(13).png" width="14px" height="30px"></img>
        </button>

        {/* النص */}
        <p
        data-aos="fade-up"
          className="relative text-white text-center text-[80px] font-semibold"
          style={{
            fontFamily: "'Poppins', sans-serif",
            lineHeight: "115px",
            letterSpacing: "0px",
            zIndex: 10,
          }}
        >
          Pane Vino - InterContinental <br /> Cairo Semiramis
        </p>
      </div>

      {/* الصندوق الأبيض أسفل الصورة */}
      <div
      data-aos="fade-up"
        style={{
          width: "80%",
          margin: "-80px auto",
          height: "160px",
          borderRadius: "26px",
          background: "#fff",
          position:"relative",
          zIndex:999,
          border: "1px solid rgba(0, 0, 0, 0.5)",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          display:"flex",
                    alignItems:"center",

          direction:"rtl",
          padding:"0px"

        }}
      >
        <div style={{
            margin:"0px",
            height:'160px',
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            background:"#E22023",
            width:"128px",

            borderRadius:'0px 25px 25px 0px'

        }}>
            <img src="/imgBegScren/Vector(15).png"></img>
        </div>

        <div style={{
            display:"flex",
            justifyContent:"space-between",
            width:"96%",
            padding:"2%"
        }}>
            <p style={{
                display:'flex',
                alignItems:"center",
                gap:'10px',
                color:'#E22023',
                fontWeight:"400",
                fontSize:"18px",
                padding:"10px",
                background:"rgba(226, 32, 35, 0.1)"
            }}>

                <img src="/imgBegScren/Vector(16).png"></img>
                Select number of people
                                <img src="/imgBegScren/user 1.png"></img>

            </p>
  <p style={{
                display:'flex',
                alignItems:"center",
                gap:'10px',
                color:'#E22023',
                fontWeight:"400",
                fontSize:"18px",
                padding:"10px",
                background:"rgba(226, 32, 35, 0.1)"
            }}>

                <img src="/imgBegScren/Vector(16).png"></img>
Please select a time                                <img src="/imgBegScren/clock 1.png"></img>

            </p>

  <p style={{
                display:'flex',
                alignItems:"center",
                gap:'10px',
                color:'#E22023',
                fontWeight:"400",
                fontSize:"18px",
                padding:"10px 20px 10px 10px",
                background:"rgba(226, 32, 35, 0.1)"
            }}>

Please select a date                               <img src="/imgBegScren/calendar 1.png"></img>

            </p>


        </div>



      </div>
    </>
  );
}
