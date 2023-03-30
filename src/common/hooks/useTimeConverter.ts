import React, { useState, useEffect } from "react";

const useTimeConverter = (milliseconds: number) => {
  const [timeString, setTimeString] = useState("");
  
  //Convert the `milliseconds` to a formatted time string
  const convertMilliseconds = (milliseconds: number) => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor((milliseconds / 1000 / 60 / 60) % 24);

    setTimeString(
      `${hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
      }`
    );
  };

  useEffect(() => {
    convertMilliseconds(milliseconds);
  }, []);

  return timeString;
};

export default useTimeConverter;
