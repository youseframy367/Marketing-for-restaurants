import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function CreateNewAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [click, setClick] = useState(false);





  const [activ , setActive]=useState(false)
 
  useEffect(() => {
    // لما المستخدم يكتب إيميل وباسورد الاتنين مش فاضيين
    if (email !== "" && password !== "" && confirmPassword !== "") {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [email, password ,confirmPassword]);





  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setClick(true);

    const data = { email, password };

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      const result = await response.json();
      console.log("Server response:", result);
      navigate("/verificationNewAccount");
    } catch (error) {
      console.error(error);
      alert("Error registering user");
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
          padding: "40px 33px",
          backgroundColor: "#fff",
          borderRadius: "8px",
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
          Create a New Account
        </p>
        <p
          style={{
            color: "#667085",
            lineHeight: "24px",
            marginTop: "0px",
            fontWeight: "400",
          }}
        >
          Join us today and start your seamless dining experience.
        </p>

        {/* Email */}
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
            style={{ padding: "10px", border:"solid 1px #D0D5DD",borderRadius:"8px",boxShadow: "0px 1px 2px 0px #1018280D", outline: "none" }}
          />
        </div>

        {/* Password */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            gap: "10px",
            marginBottom: "10px",
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
            style={{ padding: "10px", border:"solid 1px #D0D5DD",borderRadius:"8px",boxShadow: "0px 1px 2px 0px #1018280D", outline: "none" }}
          />
        </div>

        {/* Confirm Password */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "90%",
            gap: "10px",
            marginBottom: "10px",
          }}
        >
          <label
            htmlFor="ConfirmPassword"
            style={{ color: "#48505E", fontSize: "14px", fontWeight: "500" }}
          >
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            id="ConfirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={{ padding: "10px", border:"solid 1px #D0D5DD",borderRadius:"8px",boxShadow: "0px 1px 2px 0px #1018280D", outline: "none" }}
          />
        </div>

        <button
          type="button"
          style={{
            width: "90%",
            padding: "10px 18px",
            border: "none",
            outline: "none",
            margin: "10px",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "500",
            borderRadius: "5px",
            background: activ ? "#E22023" : "rgba(0,0,0,0.5)",
          }}
          onClick={handleSubmit}
        >
          Create account
        </button>
      </div>
    </div>
  );
}
