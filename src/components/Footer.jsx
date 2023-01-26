import React from 'react'
import logo from '../images/logo.png';
const Footer = () => {
  return (
    <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
        <div className="flex justify-center items-center flex-col mt-10">
        <h1 className="text-xl sm:text-2xl text-white text-center py-1 text-gradient p-3 m-2 cursor-pointer transition ease-in-out delay-20 hover:scale-110 duration-300"> "The CryptoXchange app is helping to shape the future of the financial industry <br />
      by providing a platform for users to trade cryptocurrencies efficiently and effectively."</h1></div>
      <div className="w-full flex sm:flex-row justify-between items-center my-4 mt-10">
        <div className="flex flex-[0.5] justify-center items-center">
          <img src={logo} alt="logo" className="w-32" />
        </div>
        <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
          <p className="text-white text-base text-center mx-2 cursor-pointer">Market</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Exchange</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Tutorials</p>
          <p className="text-white text-base text-center mx-2 cursor-pointer">Wallets</p>
        </div>
      </div>
      <div className="flex justify-center items-center flex-col mt-5">
        <p className="text-white text-sm text-center"> Come join us</p>
        <p className="text-white text-sm text-center">info@cryptoXchange.com</p>
      </div>
      <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5" />
      <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
        <p className="text-white text-sm text-center"> @CryptoXchange</p>
        <p className="text-white text-sm text-center"> All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer