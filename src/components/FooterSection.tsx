import React, { useState, useEffect } from "react";

const FooterSection = () => {
  const [currentDate, setCurrentDate] = useState(2003);
  useEffect(() => {
    let date = new Date();
    let currentYear = date.getFullYear();
    setCurrentDate(currentYear);
  }, []);

  return (
    <footer className="bg-black py-5 text-center">
      <div className="w-11/12">
        <p className="text-white md:text-lg text-base">
          &copy; {currentDate} designed by Ogochukwu Odom. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
