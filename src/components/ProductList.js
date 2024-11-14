import React, { useState, useEffect } from 'react';

const CarConnect = () => {
  const cars = [
    { title: "2020 Tesla Model 3", description: "$35,000", imageUrl: "https://cdn.usegalileo.ai/stability/ce6105e2-8983-4606-bc6b-495087aec9f4.png" },
    { title: "2018 Audi A4", description: "$28,000", imageUrl: "https://cdn.usegalileo.ai/sdxl10/8de25aba-7131-434b-886a-1e45fed59f30.png" },
    { title: "2016 Ford Mustang", description: "$20,000", imageUrl: "https://cdn.usegalileo.ai/stability/c5d5fc3a-2356-4a2f-a6f9-e264897a025d.png" },
    { title: "2019 BMW X5", description: "$55,000", imageUrl: "https://cdn.usegalileo.ai/stability/3d8aa091-b28c-42a8-b0c5-8dde610f9885.png" }
  ];

  const [filteredCars, setFilteredCars] = useState(cars);

  const searchCars = (event) => {
    const searchQuery = event.target.value.toLowerCase();
    const result = cars.filter(car => 
      car.title.toLowerCase().includes(searchQuery) || 
      car.description.toLowerCase().includes(searchQuery)
    );
    setFilteredCars(result);
  };

  useEffect(() => {
    setFilteredCars(cars); // Set the initial list of cars on mount
  }, []);

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-black dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, Noto Sans, sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#292929] px-10 py-3">
          <div className="flex items-center gap-4 text-[#FFFFFF]">
            <h2 className="text-[#FFFFFF] text-lg font-bold leading-tight tracking-[-0.015em]">Car Connect</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="#">Home</a>
              <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="#">Documentation</a>
              <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="login.html">Login</a>
            </div>
            <div className="flex gap-2">
              <a
                href="addcar.html"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#EA2831] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">+Add New Car</span>
              </a>           
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#292929] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">FAQ</span>
              </button>
            </div>
          </div>
        </header>
        <div className="px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#FFFFFF] tracking-light text-[32px] font-bold leading-tight min-w-72">Your Cars</p>
            </div>
            <div className="px-4 py-3">
              <label className="flex flex-col min-w-40 h-12 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-xl h-full">
                  <div className="text-[#ABABAB] flex border-none bg-[#292929] items-center justify-center pl-4 rounded-l-xl border-r-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                  </div>
                  <input
                    id="search-input"
                    placeholder="Search cars..."
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#FFFFFF] focus:outline-0 focus:ring-0 border-none bg-[#292929] focus:border-none h-full placeholder:text-[#ABABAB] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                    onInput={searchCars}
                  />
                </div>
              </label>
            </div>
            <div id="car-list" className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
              {filteredCars.map((car, index) => (
                <div key={index} className="flex flex-col gap-3 pb-3">
                  <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl" style={{ backgroundImage: `url(${car.imageUrl})` }}></div>
                  <div>
                    <p className="text-[#FFFFFF] text-base font-medium leading-normal">{car.title}</p>
                    <p className="text-[#ABABAB] text-sm font-normal leading-normal">{car.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarConnect;
