import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import bgVideo from "./assets/videos/bg-video.mp4";
import Errorpopup from "./components/Errorpopup";
import Showaidata from "./components/Showaidata";
import axios from "axios";

const apiKey = import.meta.env.VITE_WEATHER_API;

const VITE_API_URL = import.meta.env.VITE_API_URL;


const App = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openaidatapopup, setopenaidatapopup] = useState(false);

  const [data, setData] = useState([]);
  const [searchdata, setsearchdata] = useState("")
  const [currentLoctionWeather, setCurrentLocationWeather] = useState([]);
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  const [aiText, setAiText] = useState("");


  // variable for prompt

  const aiPrompt = `
You are a helpful weather assistant. Based on the following weather data:

${JSON.stringify(data)}

Give me a response in JSON format with the following structure:

{
  "summary": "Short friendly summary of current weather",
  "precautions": ["point 1", "point 2", "point 3"],
  "what_to_wear": ["clothing advice"],
  "what_to_carry": ["items to carry"],
  "health_tips": ["health advice based on weather"],
  "travel_advice": ["tips for travel or outdoor activities"]
}

Respond ONLY with valid JSON and no extra text.
`;




  const getDefaultWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=Nagpur&appid=${apiKey}&units=metric`
      );
      setData(response.data);
      // console.log("Default Weather:", response.data
    } catch (error) {
      console.log("Weather Error:", error);
    }
  };


  const aiResponse = async () => {
    try {
      const response = await axios.post(`${VITE_API_URL}/chat`, {
        prompt: aiPrompt,
      });

      const rawJSONString = response.data.plan;

      if (!rawJSONString) {
        console.error("property not found in the response.");
        return;
      }

      const parsedData = JSON.parse(rawJSONString);
      // console.log( parsedData);
      setAiText(parsedData);

    } catch (error) {
      console.error("❌ Parsing or request error:", error);
    }
  };



  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          // console.log("Location Set:", position.coords);
        },
        (error) => {
          console.error("Location Error:", error);
          setOpenPopup(true);
        }
      );
    } else {
      alert("Geolocation not supported.");
    }
  };


  const getUserWeather = async () => {
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
      );
      setCurrentLocationWeather(res.data);
      // console.log("Current Location Weather:", res.data);
    } catch (err) {
      console.error("Weather Fetch Error:", err);
    }
  };




  const handleCityChange = async (city) => {
    if (!city) return;
    try {
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      );
      setsearchdata(res.data);
      console.log("Searched City Weather:", res.data);
    } catch (err) {
      console.error("❌ City Not Found:", err);
      alert("City not found, please try again!");
    }
  };










  useEffect(() => {
    getUserLocation();
    getDefaultWeather();
    aiResponse();
    handleCityChange()
  }, []);


  useEffect(() => {
    if (latitude && longitude) {
      getUserWeather();
    }
  }, [latitude, longitude]);



  return (
    <>
      <Navbar onSearch={handleCityChange} />


      {openPopup && <Errorpopup setopenPopup={setOpenPopup} />}


      <div className="h-screen w-screen flex flex-col justify-center items-center relative px-4">
        <div className="flex flex-col items-center gap-4 absolute top-[20%] z-10 text-center px-4">
          <p className="text-white text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold ">
            Skycast.<span className="text-blue-400">AI</span>
          </p>
          <p className="text-blue-200 mt-2 text-2xl sm:text-2xl md:text-3xl">
            Weather Application
          </p>
          <p className="text-white text-md  sm:text-2xl md:text-2xl ">
            Stay ahead of the weather — get real-time updates with AI ☁️
          </p>
        </div>

        <div className="absolute z-0 w-full h-full bg-black">
          <video
            src={bgVideo}
            autoPlay
            muted
            loop
            className="w-full h-full object-cover"
          />
          <div className="absolute top-0 h-full w-full bg-black opacity-60"></div>
        </div>

        <p className='text-white z-10 absolute bottom-40 text-5xl sm:text-5xl md:text-6xl lg:text-6xl '>
          {
            searchdata ? (
              <span>{searchdata?.main?.temp}</span>
            ) : <span>{currentLoctionWeather?.main?.temp}</span>
          }
          <span className='relative'><sup className='text-[0.5em] absolute top-2'>°C</sup></span>
        </p>
        <div className="text-white z-12 absolute bottom-30 sm:bottom-30 md:bottom-30 
                text-xs sm:text-md  flex justify-between items-center gap-4 sm:gap-6 ">

          <div className="flex items-center gap-1">
            <span className="text-blue-400 text-lg sm:text-xl md:text-2xl">↑</span>
            {searchdata ? (
              <span>{searchdata?.main?.temp_max}</span>
            ) : (
              <span>{currentLoctionWeather?.main?.temp}</span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <span className="text-blue-400 text-lg sm:text-xl md:text-2xl">↓</span>
            {searchdata ? (
              <span>{searchdata?.main?.temp_min}</span>
            ) : (
              <span>{currentLoctionWeather?.main?.temp}</span>
            )}
          </div>
        </div>


        <button className="text-white absolute  bg-blue-400 hover:bg-blue-500 bottom-6 sm:bottom-8 md:bottom-10 text-sm sm:text-sm md:text-lg  h-9 sm:h-10 md:h-12 w-32 sm:w-36 md:w-40 rounded cursor-pointer"
          onClick={() => setopenaidatapopup(true)}
        >
          Get More Info ℹ️
        </button>


        {openaidatapopup && <Showaidata setopenPopup={setopenaidatapopup} aiData={aiText} />}
      </div>
    </>
  );
};

export default App;
