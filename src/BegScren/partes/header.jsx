import { useState } from "react";
import { FaSearch } from "react-icons/fa";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(0); // العنصر النشط
  const menuItems = ["Home", "Most Booked", "Popular Dishes", "Liked Restaurants"];

  return (
    <>
      {/* الشريط العلوي */}
      <div
        style={{
          width: "98%",
          margin: "0px auto",
          fontFamily: "'Poppins', sans-serif",
          padding: "5px 10px",
          background: "#D9D9D9",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <p
            style={{
              color: "#000000",
              fontSize: "14px",
              fontWeight: "300",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              margin: 0,
            }}
          >
            <img src="/imgBegScren/land-layer-location 1.png" alt="location" />
            Mansoura, Dakahlia, Egypt
          </p>

          <ul
            style={{
              listStyle: "none",
              display: "flex",
              gap: "15px",
              color: "rgba(0, 0, 0, 0.7)",
              fontSize: "18px",
              fontWeight: "400",
              margin: 0,
              padding: 0,
            }}
          >
            <li>FAQ</li>
            <li>Contact</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>

      {/* الشريط الرئيسي */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "nowrap",
          width: "100%",
          padding: "10px 20px",
          gap: "10px",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <img
          src="/imgBegScren/logo2.png"
          alt="logo"
          style={{ height: "55px", flexShrink: 0 }}
        />

        {/* Search Input مع الأيقونات */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            position: "relative",
            flex: 1,
            minWidth: 0,
          }}
        >
          <FaSearch
            size={20}
            color="rgba(0,0,0,0.4)"
            style={{ position: "absolute", left: "10px", cursor: "pointer" }}
          />
          <input
            type="search"
            placeholder="Search restaurants or choose your area"
            style={{
              width: "100%",
              padding: "8px 40px 8px 35px",
              border: "none",
              outline: "none",
              borderRadius: "62px",
              background: "#F0F0F0",
              color:" rgba(0, 0, 0, 0.4)", /* 0.4 = 40% شفافية */

              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          />
          <img
            src="/imgBegScren/land-layer-location 1(1).png"
            alt="location"
            style={{
              marginLeft: "-35px",
              width: "24px",
              height: "24px",
              cursor: "pointer",
            }}
          />
        </div>

        {/* القوائم الرئيسية مع Active + Underline */}
        <ul
          style={{
            display: "flex",
            listStyle: "none",
            gap: "15px",
            margin: '0px 10px ',
            padding: 0,
            whiteSpace: "nowrap",
            flexShrink: 1,
          
            position: "relative",
          }}
        >
          {menuItems.map((item, index) => (
            <li
              key={item}
              onClick={() => setActiveIndex(index)}
              style={{
                fontSize: "16px",
                fontWeight: "400",
                color: activeIndex === index ? "#E22023" : "#000",
                position: "relative",
                cursor: "pointer",
                paddingBottom: "4px",
                transition: "color 0.3s ease",
              }}
            >
              {item}
              {activeIndex === index && (
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "2px",
                    width: "100%",
                    backgroundColor: "#E22023",
                    borderRadius: "2px",
                    transform: "scaleX(0)",
                    transformOrigin: "left",
                    animation: "underline 0.3s forwards",
                  }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* أزرار Sign In / Sign Up */}
        <div
          style={{
            display: "flex",
            gap: "10px",
            flexShrink: 0,
          }}
        >
          <button
            style={{
              background: "#fff",
              color: "#E22023",
              border: "1px solid #E22023",
              borderRadius: "50px",
              padding: "12px 20px",
              whiteSpace: "nowrap",
              cursor: "pointer",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            Sign Up
          </button>
          <button
            style={{
              background: "#E22023",
              color: "#fff",
              border: "none",
              borderRadius: "50px",
              padding: "12px 20px",
              whiteSpace: "nowrap",
              cursor: "pointer",
              fontFamily: "'Cairo', sans-serif",
            }}
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Keyframes للanimation */}
      <style>
        {`
          @keyframes underline {
            to {
              transform: scaleX(1);
            }
          }
        `}
      </style>
    </>
  );
}
