import React, { useState } from 'react';

const AddCar = () => {
  const [title, setTitle] = useState('');
  const [carNumber, setCarNumber] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const previewContainer = document.getElementById('imagePreviewContainer');
    previewContainer.innerHTML = ''; // Clear previous previews

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      
      reader.onload = function (e) {
        setImages((prevImages) => [...prevImages, e.target.result]);
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-black dark group/design-root overflow-x-hidden" style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#292929] px-10 py-3">
          <div className="flex items-center gap-4 text-[#FFFFFF]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 6H42L36 24L42 42H6L12 24L6 6Z" fill="currentColor"></path>
              </svg>
            </div>
            <h2 className="text-[#FFFFFF] text-lg font-bold leading-tight tracking-[-0.015em]">Car Connect</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="product-list.html">Home</a>
              <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="#">Documentation</a>
              <a className="text-[#FFFFFF] text-sm font-medium leading-normal" href="login.html">Login</a>
            </div>
            <div className="flex gap-2">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#EA2831] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">+Add New Car</span>
              </button>
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#292929] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">FAQ</span>
              </button>
            </div>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-between py-5">
          {/* Left Side: Form */}
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#FFFFFF] tracking-light text-[32px] font-bold leading-tight min-w-72">Add a new car</p>
            </div>

            {/* Form Fields */}
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#FFFFFF] text-base font-medium leading-normal pb-2">Title</p>
                <input
                  placeholder="Enter a title"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#FFFFFF] focus:outline-0 focus:ring-0 border border-[#303030] bg-[#212121] focus:border-[#303030] h-14 placeholder:text-[#ABABAB] p-[15px] text-base font-normal leading-normal"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#FFFFFF] text-base font-medium leading-normal pb-2">Car Number</p>
                <input
                  placeholder="Enter a car number"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#FFFFFF] focus:outline-0 focus:ring-0 border border-[#303030] bg-[#212121] focus:border-[#303030] h-14 placeholder:text-[#ABABAB] p-[15px] text-base font-normal leading-normal"
                  value={carNumber}
                  onChange={(e) => setCarNumber(e.target.value)}
                />
              </label>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#FFFFFF] text-base font-medium leading-normal pb-2">Year</p>
                <input
                  placeholder="Enter the year"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#FFFFFF] focus:outline-0 focus:ring-0 border border-[#303030] bg-[#212121] focus:border-[#303030] h-14 placeholder:text-[#ABABAB] p-[15px] text-base font-normal leading-normal"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                />
              </label>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#FFFFFF] text-base font-medium leading-normal pb-2">Price</p>
                <input
                  placeholder="Enter the price"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#FFFFFF] focus:outline-0 focus:ring-0 border border-[#303030] bg-[#212121] focus:border-[#303030] h-14 placeholder:text-[#ABABAB] p-[15px] text-base font-normal leading-normal"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
            </div>

            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#FFFFFF] text-base font-medium leading-normal pb-2">Description</p>
                <textarea
                  placeholder="Write a description"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#FFFFFF] focus:outline-0 focus:ring-0 border border-[#303030] bg-[#212121] focus:border-[#303030] h-auto placeholder:text-[#ABABAB] p-[15px] text-base font-normal leading-normal"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex px-4 py-3">
              <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 flex-1 bg-[#EA2831] text-[#FFFFFF] text-base font-bold leading-normal tracking-[0.015em]">
                <span className="truncate">Submit</span>
              </button>
            </div>
          </div>

          {/* Right Side: Image Upload Box */}
          <div className="flex flex-col w-[400px] max-w-[400px] p-5 rounded-xl">
            <p className="text-[#FFFFFF] text-lg font-bold mb-5">Upload Images</p>

            {/* Hidden file input */}
            <input type="file" id="imageUpload" multiple accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />

            {/* Label that triggers file input */}
            <label
              htmlFor="imageUpload"
              className="cursor-pointer text-[#EA2831] text-center border-2 border-[#EA2831] py-2 px-4 rounded-xl"
            >
              Select Images
            </label>

            {/* Preview container */}
            <div
              id="imagePreviewContainer"
              className="flex flex-wrap justify-center gap-4 mt-4"
            >
              {images.map((image, index) => (
                <div key={index} className="w-[120px] h-[120px] bg-[#303030] rounded-xl overflow-hidden">
                  <img src={image} alt={`Preview ${index}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
