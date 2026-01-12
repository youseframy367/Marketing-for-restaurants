
    import styled from "styled-components";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";


   const iconStyle = {
    color: "#FFF",
    fontSize: "20px",
    margin: "0 10px",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };

 const EmailInput = styled.input`
    padding: 24px 40px;
    font-size: 20px;
    font-weight: 400;
    font-family: 'Rubik', sans-serif;
    color: rgba(226, 32, 35, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    outline: none;
    height:72px

    &::placeholder {
      color: rgba(226, 32, 35, 0.1); /* اللون مع شفافية 30% */
    }

    &:focus {
      border-color: #E22023; /* لون الإطار عند التركيز */
    }
  `;
export default function Footer(){


    return(
        <div style={{
            width:"100%",
            background:'#172432',
            color:'#fff',
            marginTop:"200px",
                                                                fontFamily: "'Rubik', sans-serif",

        }}>
            <div style={{
                width:"80%",
                marginLeft:'10%',
                background:'#fff',
                display:'flex',
                justifyContent:"center",
                alignItems:'center',
                gap:'20px',
                height:'230px',
                borderRadius:"26px",
  transform: "translateY(-50%)",            }}>
                <p style={{
                    color:"#767E86",
                    fontSize:'64px',
                    fontWeight:'400',
                                          fontFamily:" 'Playfair Display', serif",

                }}>
Our Newsletter
                </p>
                <div style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"10px"
                }}>
                    <label style={{
                        color:"#767E86",
                        fontSize:"20px",
                        fontWeight:'400',
                            fontFamily: "'Rubik', sans-serif",

                    }}>Email</label>
  <EmailInput
        type="email"
        placeholder="Enter your email"
      />

                    </div>
                    <button type="submit" style={{
                        background:"#E22023",
                        padding:"16px 40px",
                        fontSize:"20px",
                        fontWeight:'400',
                        color:"#fff",
                            fontFamily: "'Rubik', sans-serif",
                        borderRadius:"12px",
                        border:"none",
                        outline:'none',
                        marginTop:"5px"

                    }}>
Subscribe
                    </button>
            </div>

            <div style={{
                display:'flex',
                justifyContent:"space-between",
                width:'95%',
                padding:'0px 30px 10px',
            }}>
                <div style={{
                    marginTop:"-60px"
                }}>
                    <img src='/imgBegScren/log.png' style={{
                        width:"260px",
                        height:"auto",
                        marginBottom:"0px"
                    }}>
                    </img>
                    <p style={{
                        fontWeight:"400",
                        fontSize:"14px",
                        color:"#fff",
                        marginTop:'-70px',
                                                    fontFamily: "'Rubik', sans-serif",

                    }}>
                        Copyright © Book table 2025 All rights reserved
                    </p>
                </div>

                <div>
                    <p style={{
                        fontWeight:"500",
                        fontSize:'24px',
                                   fontFamily: "'Rubik', sans-serif"

                    }}>Menu</p>
                    <ul style={{
                        listStyle:"none",
                        marginLeft:"-30px",
                                                    fontFamily: "'Rubik', sans-serif",
                        gap:"12px",

                    }}>
                        <li style={{
                            fontSize:"18px",
                            fontWeight:"400",
                        }}>Home</li>
                        <li style={{
                            fontSize:"18px",
                            fontWeight:"400",
                        }}>Explore</li>
                        <li style={{
                            fontSize:"18px",
                            fontWeight:"400",
                        }}>Travel</li>
                        <li style={{
                            fontSize:"18px",
                            fontWeight:"400",
                        }}>Blog</li>
                        <li style={{
                            fontSize:"18px",
                            fontWeight:"400",
                        }}>Pricing</li>
                    </ul>
                    </div>


                    <div>
                        <p style={{
                        fontWeight:"500",
                        fontSize:'24px',
                                                                            fontFamily: "'Rubik', sans-serif",

                    }}>Information</p>
                        <ul style={{
                        listStyle:"none",
                        marginLeft:"-30px",
                                                    fontFamily: "'Rubik', sans-serif",
                        gap:"12px",

                    }}>
                            <li style={{
                            fontSize:"18px",
                            fontWeight:"400",
                        }}>Destinations</li>
                            <li style={{
                            fontSize:"18px",
                            fontWeight:"400",
                        }}>Supports</li>
                            <li style={{
                            fontSize:"18px",
                            fontWeight:"400",
                        }}>Terms & Conditions</li>
                        </ul>

                        </div>
                        

                        <div>
                            <p style={{
                        fontWeight:"500",
                        fontSize:'24px',
                                                                            fontFamily: "'Rubik', sans-serif",

                    }}>Contact Info</p>
                            <ul style={{
                        listStyle:"none",
                        marginLeft:"-30px",
                        gap:"12px",
                                                    fontFamily: "'Rubik', sans-serif",

                    }}>
                                <li style={{
                            fontSize:"18px",
                            fontWeight:"400",
                        }}>+ 20 01055395693</li>
                                <li style={{
                            fontSize:"18px",
                            fontWeight:"400",
                        }}>teamdevmaster930@gmail.com</li>
                                <li style={{
                            fontSize:"18px",
                            fontWeight:"400",
                        }}>Egypt, Cairo</li>

                                </ul>


                        </div>

                        <div>
                            <p style={{
                        fontWeight:"500",
                        fontSize:'24px',
                                                                            fontFamily: "'Rubik', sans-serif",

                    }}>Follow us on</p>
                        
                        
                          {/* أيقونات التواصل */}
                              <div style={{ display: "flex", gap:"2px",width:"30px" }}>
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
                            
                        </div>







                </div>

<div style={{
    width:"100%",
    borderTop:'1px #504c4cff solid',
    display:"flex",
    alignItems:"center",
    justifyContent:"space-between",
        

}}>
    <div style={{
        display:"flex",
        alignItems:"center",

    }}>
    <img src="/imgBegScren/DevMastser.png" width="87px" height="87px"></img>
    <p style={{
        fontWeight:"400",
        fontSize:"14px"
    }}>
        Created in partnership with Dev Master
    </p>
</div>
<ul style={{
    listStyle:"none",
    display:"flex",
    gap:"15px",
    margin:"10px"
}}>
    <li>Privacy Policy</li>
    <li>Terms of Use</li>
    <li>Cookie Preferences</li>
    <li>Accessibility Statement</li>
    
    </ul>
</div>


        </div>
    )
}