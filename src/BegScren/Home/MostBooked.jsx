"use client";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import disLickImg from "/imgBegScren/heart 2.png";
import LickImg from "/imgBegScren/Vector(5).png";

export default function MostBoked() {
  const initialRated = [
    {
      img: "/imgBegScren/1b0852c875e12ebac96f9356263a8a41b6785601.png",
      name: "Pane Vino",
      Relative: 0.9,
      des: "Experience Pane Vino, a charming restaurant offering a delightful journey through classic Italian flavors. Enjoy freshly baked breads, signature pastas, and exquisite wines in a cozy, elegant setting. Perfect for both casual meals and special occasions, Pane Vino has captured the hearts of locals and visitors alike.",
      lick: false,
    },
    {
      img: "/imgBegScren/b851ada0b5f171442376ee7fad343faaef9463ec.png",
      name: "La Zisa",
      Relative: 0.6,
      des: "La Zisa is a premier dining destination in Cairo, renowned for its exceptional Italian cuisine and sophisticated ambiance. Guests can indulge in a wide selection of freshly prepared pastas, wood-fired pizzas, and signature desserts, all crafted with the finest ingredients. The elegant interiors, attentive service, and vibrant atmosphere make it perfect for both casual meals and special celebrations. La Zisa has become a beloved hotspot for locals and visitors, offering an unforgettable culinary experience that captures the essence of authentic Italian dining in the heart of the city.",
      lick: false,
    },
    {
      img: "/imgBegScren/758df7f26756e0fdcdd4e956a8b56c256642752a.png",
      name: "Stefanos",
      Relative: 0.8,
      des: "Stefanos is a distinguished restaurant offering a rich blend of Mediterranean and Italian flavors in a warm and inviting atmosphere. Guests can enjoy an extensive menu featuring handcrafted pastas, wood-fired pizzas, fresh seafood, and delectable desserts, all prepared with the highest quality ingredients. With elegant interiors, attentive staff, and a vibrant ambiance, Stefanos is ideal for family gatherings, romantic dinners, and special celebrations. Loved by locals and visitors alike, Stefanos delivers an unforgettable dining experience that embodies the true essence of Mediterranean cuisine.",
      lick: false,
    },
  ];

  const [Rated, setRated] = useState(initialRated);
  const [expandedIndexes, setExpandedIndexes] = useState([]);
  const previewLength = 250;

  const toggleExpand = (index) => {
    setExpandedIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  const toggleLick = (index) => {
    setRated((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, lick: !item.lick } : item
      )
    );
  };

  return (
    <div className="w-full" style={{
        marginTop:'30px'
    }}>
      {/* العنوان والوصف */}
      <div className="flex flex-col items-center text-center gap-[10px]">
        <p className="font-Poppins text-[48px] font-[600] text-[#E22023] py-[20px]">
Most Booked        </p>
        <p
          className="text-[20px] font-[400] text-[rgba(44,47,36,0.7)] mt-[-30px]"
          style={{ lineHeight: "32px" }}
        >
Discover the most popular dining spots and reserve your table today.        </p>
      </div>

      {/* الكروت */}
      <div className="flex w-[100%] mt-10 justify-around  ">
      
        {Rated.map((item, index) => {
          const isExpanded = expandedIndexes.includes(index);
          return (
              <div style={{
        position:"relative",
        zIndex:99,
        width:'30%',
        height:'100%',
        background:'rgba(255, 119, 87, 0.1)'

       }}>
            <div
              key={index}
              className="w-[100%] cursor-pointer "
              onClick={() => toggleExpand(index)}
            >
 
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[200px] object-cover rounded-md"
              />

              <p
                className="mt-2 font-Poppins text-[#172432] text-[28px]"
                style={{ fontWeight: "400" }}
              >
                {item.name}
              </p>

              {/* النجوم */}
              <div className="flex items-center mt-1">
                {[1, 2, 3, 4, 5].map((star, idx) => (
                  <svg
                    key={idx}
                    className={`w-4 h-4 ${
                      item.Relative * 5 >= star ? "text-yellow-400" : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.167c.969 0 1.371 1.24.588 1.81l-3.375 2.454a1 1 0 00-.364 1.118l1.286 3.966c.3.921-.755 1.688-1.54 1.118l-3.375-2.454a1 1 0 00-1.176 0l-3.375 2.454c-.784.57-1.838-.197-1.539-1.118l1.285-3.966a1 1 0 00-.364-1.118L2.038 9.393c-.783-.57-.38-1.81.588-1.81h4.167a1 1 0 00.951-.69l1.285-3.966z" />
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-500">
                  {(item.Relative * 5).toFixed(1)}
                </span>
              </div>

              {/* الوصف */}
              <p className="mt-2 text-[14px] text-gray-700">
                {isExpanded ? item.des : `${item.des.slice(0, previewLength)}...`}
              </p>

              {/* الزر والقلب */}
              <div className="flex items-center justify-center gap-4 mt-4">
                <button className="px-[30px] py-[15px] truncate rounded-[12px] text-[#FFFFFF] text-[26px] font-[500] bg-red-500 font-Poppins">
                  Restaurant Detail Page
                </button>
                <img
                  src={item.lick ? LickImg : disLickImg}
                  alt="like"
                  className="w-9 h-8 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation(); // تمنع توسيع النص عند الضغط على القلب
                    toggleLick(index);
                  }}
                />
              </div>
            </div>
            </div>
          );
        })}
      </div>
      <div style={{
        width:'100%',
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        marginTop:'30px'
      }}>
      <button style={{
   padding:"10px 15px",
    borderRadius:'10px',
    display:"flex",
    justifyContent:"center",
    alignItems:'center',
    fontSize:'24px',
    fontWeight:"400",
    gap:"10px",
    background:"#E22023",
    color:"#fff",
      fontFamily: "'Poppins', sans-serif"

      }}>
        See All <img src="/imgBegScren/Vector(6).png"></img>
      </button>
      </div>
    </div>
  );
}
