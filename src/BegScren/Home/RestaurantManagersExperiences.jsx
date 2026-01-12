import { motion } from "framer-motion";
import { useState } from "react";

export default function RestaurantManagers() {
  const [translat, setTranslat] = useState(0);

  const Experiences = [
    {
      details:
        "I have streamlined the reservation process for our team, making it easier to manage bookings, track customer preferences, and ensure every guest enjoys a seamless dining experience. The system has greatly reduced stress for our staff and enhanced overall efficiency, allowing us to focus on delivering exceptional service and memorable moments.",
      Relative: 0.6,
      name: "Mohammed Omar",
      jops: "Restaurant Manager - Bella Cucina",
    },
     {
      details:
        "I have streamlined the reservation process for our team, making it easier to manage bookings, track customer preferences, and ensure every guest enjoys a seamless dining experience. The system has greatly reduced stress for our staff and enhanced overall efficiency, allowing us to focus on delivering exceptional service and memorable moments.",
      Relative: 0.6,
      name: "Mohammed Omar",
      jops: "Restaurant Manager - Bella Cucina",
    },
      {
      details:
        "I have streamlined the reservation process for our team, making it easier to manage bookings, track customer preferences, and ensure every guest enjoys a seamless dining experience. The system has greatly reduced stress for our staff and enhanced overall efficiency, allowing us to focus on delivering exceptional service and memorable moments.",
      Relative: 0.6,
      name: "Mohammed Omar",
      jops: "Restaurant Manager - Bella Cucina",
    },
     {
      details:
        "I have streamlined the reservation process for our team, making it easier to manage bookings, track customer preferences, and ensure every guest enjoys a seamless dining experience. The system has greatly reduced stress for our staff and enhanced overall efficiency, allowing us to focus on delivering exceptional service and memorable moments.",
      Relative: 0.6,
      name: "Mohammed Omar",
      jops: "Restaurant Manager - Bella Cucina",
    },
  ];

  return (
    <div style={{ width: "100%", marginTop:'20px', padding: "10px 20px" }}>
      {/* ======= العنوان ======= */}
      <div>
        <p
          style={{
            color: "#172432",
            fontSize: "64px",
            fontWeight: 400,
            fontFamily: "'Playfair Display', serif",
            marginBottom: "10px",
          }}
        >
          Restaurant Managers’ Experiences
        </p>
        <hr
          style={{
            width: "350px",
            height: "3px",
            background: "#E22023",
            border: "none",
            borderRadius: "2px",
            margin: "10px 0",
          }}
        />
        <p
          style={{
            fontWeight: 400,
            fontSize: "24px",
            color: "#767E86",
            marginTop: "0px",
            fontFamily: "'Rubik', sans-serif",
          }}
        >
          Here’s some awesome feedback from restaurant managers
        </p>
      </div>

      {/* ======= السلايدر ======= */}
      <div
        style={{
          display: "flex",
          width: "600%",
          overflow: "hidden",
          gap: "10px",
          marginTop: "60px",
        }}
      >
        <motion.div
          style={{
            display: "flex",
            gap: "10px",
          }}
          animate={{ x: -translat * 680 }}
          transition={{ type: "spring", stiffness: 80, damping: 20 }}
        >
          {Experiences.map((item, i) => (
            <div
              key={i}
              style={{
                width: "640px",
                height: "359px",
                padding: "60px 40px 40px 40px",
                background: "#F5F6F7",
              }}
            >
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  color: "#767E86",
                  lineHeight: "23px",
                  letterSpacing: "0px",
                  fontFamily: "'Rubik', sans-serif",
                }}
              >
                {item.details}
              </p>

              <div className="flex items-center mt-1">
                {[1, 2, 3, 4, 5].map((star, idx) => (
                  <svg
                    key={idx}
                    className={`w-4 h-4 ${
                      item.Relative * 5 >= star
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    style={{
                      color:
                        item.Relative * 5 >= star ? "#FACC15" : "#D1D5DB",
                      marginRight: "2px",
                    }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.375 2.454a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.375-2.454a1 1 0 00-1.176 0l-3.375 2.454c-.784.57-1.838-.197-1.539-1.118l1.285-3.966a1 1 0 00-.364-1.118L2.038 9.393c-.783-.57-.38-1.81.588-1.81h4.167a1 1 0 00.951-.69l1.285-3.966z" />
                  </svg>
                ))}
                <span
                  style={{
                    marginLeft: "8px",
                    fontSize: "14px",
                    color: "#6B7280",
                    fontFamily: "'Rubik', sans-serif",
                  }}
                >
                  {(item.Relative * 5).toFixed(1)}
                </span>
              </div>

              <p
                style={{
                  fontWeight: "400",
                  fontSize: "24px",
                  color: "#767E86",
                  fontFamily: "'Playfair Display', serif",
                  marginTop: "10px",
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  color: "#767E86",
                  fontFamily: "'Rubik', sans-serif",
                }}
              >
                {item.jops}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ======= الأزرار ======= */}
      <div
        style={{
          display: "flex",
          width: "90%",
          margin: "2% 5%",
          gap: "20px",
          direction: "rtl",
        }}
      >

        <button
          style={{
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            background: "#E22023",
            cursor: "pointer",
            border: "none",
          }}
          onClick={() => {
            if (translat < Experiences.length - 1)
              setTranslat(translat + 1);
          }}
        >
          <img src="/imgBegScren/Vector(12).png" alt="left arrow" />
        </button>


        <button
          style={{
            width: "60px",
            height: "60px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "12px",
            background: "#E22023",
            cursor: "pointer",
            border: "none",
          }}
          onClick={() => {
            if (translat > 0) setTranslat(translat - 1);
          }}
        >
          <img src="/imgBegScren/Vector(13).png" alt="right arrow" />
        </button>


      </div>
    </div>
  );
}
