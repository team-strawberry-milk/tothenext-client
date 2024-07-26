"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center py-5 px-11 bg-gray-100 border-t border-gray-300 mt-20 absolute bottom-0 left-0 right-0">
      <div className="flex flex-col items-start pr-1/2">
        <img
          src="/tothenext_logo.png"
          alt="ToTheNext logo"
          className="h-10 mr-2"
        />
        <div className="text-sm mt-2">
          대학 생활부터 취업까지 함께하는 맞춤형 서포터
        </div>
      </div>
      <div className="flex flex-col items-end ml-auto mr-60">
        <div className="text-gray-600 no-underline my-0.5">Services</div>
        <div className="text-gray-600 no-underline my-0.5">About Us</div>
        <div className="text-gray-600 no-underline my-0.5">
          Terms and Conditions
        </div>
      </div>
      <div className="text-right text-gray-600">
        <div>서울시</div>
        <div>서대문구</div>
        <div>대현동</div>
      </div>
    </footer>
  );
};

export default Footer;
