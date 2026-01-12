import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function LogAcount() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [activ , setActive]=useState(false)
 
  useEffect(() => {
    // لما المستخدم يكتب إيميل وباسورد الاتنين مش فاضيين
    if (email !== "" && password !== "") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [email, password]); // الكود ده هيتنفذ كل ما الإيميل أو الباسورد يتغيروا
  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }

    setClick(true);

    const data = { email, password };

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const result = await response.json();
      console.log("Login success:", result);

      alert("Login successful!");
      navigate("/home"); // ← الصفحة اللي المستخدم هيروحها بعد الدخول
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please check your email or password.");
      setClick(false);
    }
  };

  return (
    <div
      style={{
        margin: "0px",
        position: "fixed",
        top: "0px",
        left: "0px",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url('/imgBegScren/Log in.png')`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "781px",
          height: "659px",
          padding: "20px 15px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div style={{ width: "100%", direction: "rtl" }}>
          <button
            style={{ border: "none", outline: "none" }}
            onClick={() => navigate(-1)}
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
          Log in to your account
        </p>
        <p
          style={{
            color: "#667085",
            lineHeight: "24px",
            marginTop: "0px",
            fontWeight: "400",
          }}
        >
          Welcome back! Please enter your details.
        </p>

        {/* Email Input */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            gap: "10px",
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          <label
            htmlFor="Email"
            style={{ color: "#48505E", fontSize: "14px", fontWeight: "500" }}
          >
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            required
            id="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ padding: "10px", border: "none",border:"solid 1px #D0D5DD",boxShadow: "0px 1px 2px 0px #1018280D",borderRadius:"8px", outline: "none" }}
          />
        </div>

        {/* Password Input */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            gap: "10px",
          }}
        >
          <label
            htmlFor="Password"
            style={{ color: "#48505E", fontSize: "14px", fontWeight: "500" }}
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            id="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "10px", border: "none",border:"solid 1px #D0D5DD",boxShadow: "0px 1px 2px 0px #1018280D",borderRadius:"8px", outline: "none" }}
          />
        </div>

        {/* Confirm Button */}
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
            color: "#fff",
            borderRadius: "5px",
            background: activ ? "#BF360C" : "rgba(0,0,0,0.5)",
          }}
          onClick={handleLogin}
        >
          Confirm
        </button>

        {/* Remember & Forgot Password */}
        <div
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
         <div
  style={{
    display: "flex",
    gap: "15px",
    flexDirection: "row",
    alignItems: "center",
  }}
>
  <input type="checkbox" id="activ" />
  <label
    htmlFor="activ"
    style={{
      color: "#48505E",
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
    }}
  >
    Remember for 30 days
  </label>
</div>

          <p
            style={{
              color: "#BF360C",
              fontSize: "14px",
              fontWeight: "500",
              cursor: "pointer",
            }}
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password
          </p>
        </div>

        {/* Sign Up Link */}
        <p
          style={{
            color: "#3a3838ff",
            fontSize: "14px",
            fontWeight: "400",
            lineHeight: "125%",
            padding: "10px",
            marginTop:"50px",
          }}
                      onClick={() => navigate("/create-account")}

        >
          Don't have an account?{" "}
          <span
            style={{
              color: "#000000",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            SignUp
          </span>
        </p>
      </div>
    </div>
  );
}
