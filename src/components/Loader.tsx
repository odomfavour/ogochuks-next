"use client"

import Image from 'next/image';
import React from 'react';

const Loader = () => {
  return (
    <div className="loader top-0 left-0 fixed h-full w-full flex justify-center items-center z-50 bg-white">
      <Image src="/orange.gif" width={1000} height={400} alt=""/>
    </div>
  );
};

export default Loader;