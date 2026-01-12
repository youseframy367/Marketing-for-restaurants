import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function VerificationCode() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const inputsRef = useRef([]);
  const [active, setActive] = useState(false);

  // ✅ تحديث الخانات
  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^[0-9]?$/.test(value)) {
      e.target.value = value;

      // التحرك للخانة التالية تلقائيًا
      if (value && index < 5) inputsRef.current[index + 1].focus();

      // ✅ تحقق من إذا كل الخانات مليانة
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

  // ✅ دالة تحقق الكود
  const handleVerify = async () => {
    setClick(true);

    const code = inputsRef.current.map((input) => input.value).join("");

    if (code.length !== 6) {
      alert("Please enter all 6 digits");
      setClick(false);
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/verify-reset-code", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      if (!response.ok) throw new Error("Invalid code");

      const result = await response.json();
      console.log("Verification success:", result);

      alert("Code verified successfully!");
      navigate("/new-password");
    } catch (error) {
      console.error(error);
      alert("Invalid or expired code");
      setClick(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('/imgBegScren/OTB.png')`,
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "781px",
          height: "637px",
          padding: "40px 33px",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ width: "100%" }}>
          <button
            style={{
              border: "none",
              outline: "none",
              background: "transparent",
              cursor: "pointer",
            }}
            onClick={() => navigate(-2)}
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
