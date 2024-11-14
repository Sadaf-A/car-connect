import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';

const ProductList = () => {
  const [isEditable, setIsEditable] = useState(false);
  const [productInfo, setProductInfo] = useState({
    title: '2020 Tesla Model 3',
    carNumber: 'XV8L03',
    year: '2022',
    price: '$35,000',
    description: '',
  });

  const [imagePreview, setImagePreview] = useState('https://cdn.usegalileo.ai/stability/ce6105e2-8983-4606-bc6b-495087aec9f4.png');

  const handleFileUpload = (event) => {
    const files = event.target.files;
    const reader = new FileReader();

    reader.onload = (e) => {
      setImagePreview(e.target.result);
    };

    if (files && files[0]) {
      reader.readAsDataURL(files[0]);
    }
  };

  const toggleEdit = () => {
    setIsEditable((prev) => !prev);
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
              <button
                id="submitButton"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#EA2831] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
                onClick={toggleEdit}
              >
                <span className="truncate">{isEditable ? 'Save' : 'Edit'}</span>
              </button>
              <button
                id="deleteButton"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-10 px-4 bg-[#292929] text-[#FFFFFF] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Delete</span>
              </button>
            </div>
          </div>
        </header>

        <div className="px-40 flex flex-1 justify-between py-5">
          {/* Left Side: Form */}
          <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1">
            <div className="flex flex-wrap justify-between gap-3 p-4">
              <p className="text-[#FFFFFF] tracking-light text-[32px] font-bold leading-tight min-w-72">Product Information</p>
            </div>

            {/* Form Fields */}
            {['title', 'carNumber', 'year', 'price'].map((field, index) => (
              <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3" key={index}>
                <label className="flex flex-col min-w-40 flex-1">
                  <p className="text-[#FFFFFF] text-base font-medium leading-normal pb-2">{field.charAt(0).toUpperCase() + field.slice(1)}</p>
                  <input
                    id={field}
                    placeholder={`Enter a ${field}`}
                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#FFFFFF] focus:outline-0 focus:ring-0 border border-[#303030] bg-[#212121] focus:border-[#303030] h-14 placeholder:text-[#ABABAB] p-[15px] text-base font-normal leading-normal"
                    value={productInfo[field]}
                    disabled={!isEditable}
                    onChange={(e) => setProductInfo({ ...productInfo, [field]: e.target.value })}
                  />
                </label>
              </div>
            ))}
            
            <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
              <label className="flex flex-col min-w-40 flex-1">
                <p className="text-[#FFFFFF] text-base font-medium leading-normal pb-2">Description</p>
                <textarea
                  placeholder="Write a description"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#FFFFFF] focus:outline-0 focus:ring-0 border border-[#303030] bg-[#212121] focus:border-[#303030] h-auto placeholder:text-[#ABABAB] p-[15px] text-base font-normal leading-normal"
                  disabled={!isEditable}
                  value={productInfo.description}
                  onChange={(e) => setProductInfo({ ...productInfo, description: e.target.value })}
                ></textarea>
              </label>
            </div>
          </div>

          {/* Right Side: Image Upload Box */}
          <div className="flex flex-col w-[400px] max-w-[400px] p-5  rounded-xl">
            <p className="text-[#FFFFFF] text-lg font-bold mb-5">Uploaded Images</p>

            {/* Hidden file input */}
            <input
              type="file"
              id="imageUpload"
              multiple
              accept="image/*"
              onChange={handleFileUpload}
              style={{ display: 'none' }}
            />
            <div id="imagePreviewContainer" className="my-4">
              <img
                id="carImagePreview"
                src={imagePreview}
                alt="Car Image"
                className="preview-image"
              />
            </div>
            <button
              id="uploadImageButton"
              className="flex items-center justify-center w-full h-12 bg-[#EA2831] rounded-xl text-[#FFFFFF] font-bold" Upload New Image
              onClick={() => document.getElementById('imageUpload').click()}>Upload New Image</button>
              </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
