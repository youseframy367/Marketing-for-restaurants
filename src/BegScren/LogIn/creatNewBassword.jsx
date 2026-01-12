import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewBassword() {
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    setClick(true);

    const data = { email, password };

    try {
      const response = await fetch("http://localhost:5000/api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to reset password");
      }

      const result = await response.json();
      console.log("Server response:", result);
      alert("Password changed successfully!");
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert("Error resetting password");
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
        backgroundImage: `url('/imgBegScren/Acknowledgment.png')`,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "70%",
          height: "70%",
          padding: "40px 33px",
          background: "#fff",
          borderRadius: "8px",
        }}
      >
        <div style={{ width: "100%", direction: "rtl" }}>
          <button
            style={{ border: "none", outline: "none" }}
            onClick={() => navigate("/login")}
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
          Create a new password
        </p>
        <p
          style={{
            color: "#667085",
            lineHeight: "24px",
            marginTop: "0px",
            fontWeight: "400",
          }}
        >
          Change your password, enter a strong password
        </p>

        {/* Email */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
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
            style={{ padding: "10px", border: "none", outline: "none" }}
          />
        </div>

        {/* Password */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "80%",
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
            style={{ padding: "10px", border: "none", outline: "none" }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "80%",
            padding: "10px 18px",
            border: "none",
            outline: "none",
            margin: "10px",
            borderRadius: "5px",
            fontSize: "16px",
            fontWeight: "500",
            color: "#fff",
            background: click ? "#E22023" : "rgba(0,0,0,0.5)",
          }}
          onClick={handleSubmit}
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
