import React, { useState, useEffect } from "react";
import SplitText from "./SplitText";
 import { Card, CardContent } from "@mui/material";
  import {
  LocalHospital,
  EmojiPeople,
  Science,
  HealthAndSafety,
} from "@mui/icons-material";

const Home = () => {
  const images = [
    "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=1080",
    "https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?w=1080",
    "https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1080",
    "https://images.unsplash.com/photo-1550831107-1553da8c8464?w=1080",
    "https://images.unsplash.com/photo-1504439468489-c8920d796a29?w=1080",
    "https://images.unsplash.com/photo-1587370560942-ad2a04eabb6d?w=1080",
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };

  return (
    <div>
      {/* HERO SLIDER */}
      <div className="w-full h-[500px] overflow-hidden relative mt-0 shadow-lg">
        <img
          src={images[current]}
          alt="Hospital Banner"
          className="w-full h-full object-cover transition-all duration-700"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* TITLE */}
      <SplitText
        text="IT HOSPITAL"
        className="text-3xl  text-white font-bold text-center mt-6"
        delay={100}
        duration={0.6}
        ease="power3.out"
        splitType="chars"
        from={{ opacity: 0, y: 40 }}
        to={{ opacity: 1, y: 0 }}
        threshold={0.1}
        rootMargin="-100px"
        onLetterAnimationComplete={handleAnimationComplete}
      />

      {/* ABOUT HOSPITAL */}
   

<section className="max-w-6xl mx-auto mt-16 px-6">
  <Card
    className="rounded-3xl shadow-2xl bg-white/60 backdrop-blur-xl 
               hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)] 
               transition-all duration-500"
    sx={{
      transform: "perspective(1000px)",
      "&:hover": {
        transform: "perspective(1000px) rotateX(3deg) rotateY(-3deg)",
      },
    }}
  >
    <CardContent className="grid md:grid-cols-2 gap-6 p-10">

      {/* LEFT — TEXT */}
      <div className="flex flex-col justify-center text-center md:text-left">
        <h2 className="text-4xl font-bold text-blue-700 mb-4 drop-shadow-lg">
          Welcome to IT Hospital
        </h2>

        <p className="text-gray-700 text-lg leading-relaxed">
          We provide world-class healthcare with modern facilities, experienced
          doctors, and advanced medical technology. Our mission is to offer 
          safe, affordable, and compassionate treatment for every patient.
        </p>

        <button
          className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md 
                     hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
        >
          Learn More
        </button>
      </div>

      {/* RIGHT — MINI BANNER IMAGE */}
      <div className="flex justify-center items-center">
        <img
          src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=400"
          alt="Hospital"
          className="rounded-2xl shadow-xl w-64 h-64 object-cover 
                     border-4 border-white hover:scale-105 transition-all duration-300"
        />
      </div>

    </CardContent>
  </Card>
</section>


      {/* SERVICES */}
      <section className="max-w-6xl mx-auto mt-16 px-6">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-10">
          Our Key Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Emergency Care", icon: "🚑" },
            { title: "Cardiology", icon: "❤️" },
            { title: "Neurology", icon: "🧠" },
            { title: "Orthopedics", icon: "🦴" },
            { title: "Pediatrics", icon: "👶" },
            { title: "Diagnostics", icon: "🧪" },
          ].map((s, i) => (
            <div
              key={i}
              className="p-6 rounded-xl bg-white shadow-md text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-3">{s.icon}</div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600 mt-2">
                High-quality and reliable {s.title.toLowerCase()} service with expert specialists.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
   

<section className="mt-20 py-16 px-6 bg-gradient-to-br from-blue-50 to-blue-100">
  <h2 className="text-4xl font-semibold text-center text-blue-700 mb-12">
    Why Choose IT Hospital?
  </h2>

  <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto">

    {[
      {
        title: "24/7 Emergency Support",
        icon: <LocalHospital className="text-4xl text-white drop-shadow-lg" />,
        gradient: "from-blue-600 to-blue-400",
      },
      {
        title: "Experienced Doctors",
        icon: <EmojiPeople className="text-4xl text-white drop-shadow-lg" />,
        gradient: "from-purple-600 to-purple-400",
      },
      {
        title: "Modern Infrastructure",
        icon: <Science className="text-4xl text-white drop-shadow-lg" />,
        gradient: "from-green-600 to-green-400",
      },
      {
        title: "Advanced ICU & Labs",
        icon: (
          <HealthAndSafety className="text-4xl text-white drop-shadow-lg" />
        ),
        gradient: "from-pink-600 to-pink-400",
      },
    ].map((item, index) => (
      <div
        key={index}
        className={`rounded-2xl p-8 bg-gradient-to-br ${item.gradient} 
                    shadow-xl hover:shadow-2xl transform transition-all duration-500
                    hover:-translate-y-3 hover:rotate-1 cursor-pointer
                    backdrop-blur-xl`}
        style={{ perspective: "1000px" }}
      >
        <div className="flex justify-center mb-4">{item.icon}</div>

        <h4 className="font-bold text-lg text-center text-white drop-shadow-md">
          {item.title}
        </h4>
      </div>
    ))}
  </div>
</section>


      {/* STATISTICS */}
      <section className="bg-gray-100 py-14 mt-10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 text-center gap-8 px-6">
          {[
            { num: "15,000+", label: "Patients Treated" },
            { num: "150+", label: "Doctors" },
            { num: "40+", label: "Departments" },
            { num: "20+", label: "Years of Service" },
          ].map((s, i) => (
            <div key={i}>
              <h3 className="text-3xl font-bold text-blue-700">{s.num}</h3>
              <p className="text-gray-600 text-lg">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* EMERGENCY CALL BANNER */}
      <section className="bg-red-600 text-white text-center py-10 mt-8">
        <h2 className="text-3xl font-bold">Emergency? Call 108</h2>
        <p className="mt-2 text-lg">Our emergency team is available 24/7 for any urgent care.</p>
      </section>

      {/* CONTACT CTA */}
      <section className="text-center py-14">
        <h2 className="text-3xl font-semibold mb-4">Need Any Help?</h2>
        <p className="text-gray-600 mb-5">Our team is always here for you. Contact us anytime.</p>
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow-md hover:bg-blue-700"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
};

export default Home;
