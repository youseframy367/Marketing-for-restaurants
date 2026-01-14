import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ChoiseLog from "./BegScren/LogIn/choiseLogIn";
import LogAcount from "./BegScren/LogIn/logInYourAcount";
import ForgetPassword from "./BegScren/LogIn/forgetBassword";
import VerificationCode from "./BegScren/LogIn/VerificationCode";
import NewBassword from "./BegScren/LogIn/creatNewBassword";
import CreatNewAcount from "./BegScren/LogIn/AnewAcount";
import VerificationCodeNewAcount from "./BegScren/LogIn/Verification_newAcount";
import Home from "./BegScren/Home/home";
import DetailsRestaurant from "./BegScren/Home/detalsRestaurant";
import "./App.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الأنيميشن بالملي ثانية
      once: false, // الأنيميشن يحصل مرة واحدة فقط عند التمرير
    });
  }, []);

  return (
    <Router>
      <Routes>
      <Route path="/" element={<ChoiseLog />} /> 
       <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<LogAcount />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/verification" element={<VerificationCode />} />
        <Route path="/new-password" element={<NewBassword />} />
        <Route path="/create-account" element={<CreatNewAcount />} />
        <Route path="/verificationNewAcount" element={<VerificationCodeNewAcount/>}/>
        <Route path="/detalisRestaurant" element={<DetailsRestaurant/>}/>
      </Routes>
    </Router>
  );
}

export default App;
