import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Oval } from "react-loader-spinner";

export default function VerificationCodeNewAcount() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [pop, setPop] = useState(false);
  const [active, setActive] = useState(false);
  const inputsRef = useRef([]);

  // ✅ عند ظهور الـ popup، بعد 10 ثواني يرجع المستخدم
  useEffect(() => {
    if (pop) {
      const timer = setTimeout(() => {
        setPop(false);
        navigate("/");
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [pop, navigate]);

  // ✅ عند إدخال الأرقام
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]?$/.test(value)) {
      e.target.value = value;

      if (value && index < 5) inputsRef.current[index + 1].focus();

      // تحقق إذا تم إدخال 6 أرقام كاملة
      const code = inputsRef.current.map((input) => input.value).join("");
      setActive(code.length === 6);
    } else {
      e.target.value = "";
    }
  };

  // ✅ Backspace للرجوع للخانة السابقة
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  // ✅ إرسال الكود والتحقق
  const handleVerify = async () => {
    if (!active) return; // لو الكود مش كامل، ما تعملش أي حاجة

    setClick(true);

    const code = inputsRef.current.map((input) => input.value).join("");

    try {
      const response = await fetch("http://localhost:5000/api/verify-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) throw new Error("Invalid code");

      const result = await response.json();
      console.log("Verification success:", result);

      setTimeout(() => setPop(true), 600); // ✅ إظهار الـ popup بعد نجاح التحقق
    } catch (error) {
      console.error(error);
      alert("Verification failed. Please check your code.");
      setClick(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('/imgBegScren/OTB.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* ✅ Popup عند نجاح التحقق */}
      {pop && (
        <div
          style={{
            position: "fixed",
            height: "100%",
            width: "100%",
            top: "0px",
            left: "0px",
            background: "rgba(0, 0, 0, 0.43)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            style={{
              width: "40%",
              height: "40%",
              background: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-around",
              padding: "20px",
              gap: "15px",
            }}
          >
            <img src="/imgBegScren/Group 40861.png" alt="success" />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "#1C1C1C",
                  fontWeight: "500",
                  fontSize: "17px",
                  margin: 0,
                }}
              >
                Your account has been created successfully
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#74727280",
                }}
              >
                Please wait a few minutes, your account is being activated.
              </p>
            </div>

            <Oval
              height={40}
              width={40}
              color="#E22023"
              visible={true}
              wrapperStyle={{ margin: "20px" }}
            />
          </div>
        </div>
      )}

      {/* ✅ الصفحة الرئيسية */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "781px",
          height: "637px",
          padding: "40px 33px",
          background: "#fff",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ width: "100%" }}>
          <button
            onClick={() => navigate(-1)}
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              cursor: "pointer",
            }}
          >
            <img src="/imgBegScren/back.png" alt="back" />
          </button>
        </div>

        <img
          src="/imgBegScren/logo.png"
          width="80"
          height="70"
          style={{ marginTop: "-10px" }}
          alt="logo"
        />
        <p
          style={{
            color: "#2B2F38",
            fontSize: "30px",
            fontWeight: "600",
            lineHeight: "38px",
            margin: "15px",
          }}
        >
          Verification Code
        </p>
        <p
          style={{
            color: "#667085",
            lineHeight: "24px",
            marginTop: "0px",
            fontWeight: "400",
          }}
        >
          You will receive a 6-digit verification code
        </p>

        {/* ✅ خانات الكود */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "60px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          {Array.from({ length: 6 }).map((_, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              style={{
                width: "40px",
                height: "50px",
                textAlign: "center",
                fontSize: "24px",
                fontWeight: "600",
                border: "2px solid #8d8989ff",
                borderRadius: "8px",
                outline: "none",
              }}
              ref={(el) => (inputsRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
            />
          ))}
        </div>

        {/* ✅ زر الإرسال */}
        <button
          type="submit"
          style={{
            width: "90%",
            padding: "10px 18px",
            border: "none",
            outline: "none",
            margin: "10px",
            fontSize: "16px",
            fontWeight: "500",
            lineHeight: "24px",
            borderRadius: "5px",
            color: "#fff",
            background: active ? "#E22023" : "rgba(0,0,0,0.5)",
            cursor: active ? "pointer" : "not-allowed",
            transition: "background 0.25s ease",
          }}
          onClick={handleVerify}
          disabled={!active}
        >
          Send Code
        </button>
      </div>
    </div>
  );
}
