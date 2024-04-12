import React, { useRef, useState } from "react";
import H3Heading from "../../components/headings/H3Heading";
import ProfilePage from "./ProfilePage";

const ProfileComponent = () => {
  const fileInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const [profilePage, setProfilePage] = useState(false);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      setProfileImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const HandleDetails = () => {
    setProfilePage(true);
  };

  return (
    <>
      {profilePage ? (
        <ProfilePage />
      ) : (
        <div
          style={{
            overflowY: "scroll",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
          className="flex flex-col items-center w-full"
        >
          <H3Heading className="text-center">Edit Profile</H3Heading>
          <div
            className="w-[80px] h-[80px] rounded-full mt-[25px] relative cursor-pointer"
            onClick={handleClick}
          >
            <img
              src={
                profileImage
                  ? profileImage
                  : "https://media.istockphoto.com/id/1298261537/vector/blank-man-profile-head-icon-placeholder.jpg?s=1024x1024&w=is&k=20&c=4ZDljeyUFFmyjlHUV0BYEMWTr8SyKQR6FMWtew14jq0="
              }
              alt="profile-img"
              className="w-[80px] h-[80px] rounded-full"
            />

            <div className="absolute bottom-3 -right-2 w-[20px] h-[20px] bg-primary200 text-2xl flex items-center justify-center font-bold cursor-pointer">
              +
            </div>

            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
          </div>
          <p className="text-[14px] lg:text-[16px] mt-2">Change/upload photo</p>
          <form className="w-full flex flex-col justify-center items-center">
            <div className="flex flex-col gap-2 w-full lg:w-[60%] mt-[30px]">
              <p className="font-[500]">Bio *</p>
              <textarea
                name=""
                id=""
                cols="60"
                rows="5"
                className="border border-primary200 outline-none rounded-[4px] p-[16px]"
              ></textarea>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-[25px] lg:mt-[30px] w-full lg:w-[85%]">
              <div className="flex flex-col gap-2 w-full">
                <p className="font-[500]">First Name *</p>
                <input
                  type="text"
                  className="p-[16px] border border-primary200 outline-none rounded-[4px] w-full"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="font-[500]">Surname *</p>
                <input
                  type="text"
                  className="p-[16px] border border-primary200 outline-none rounded-[4px] w-full"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-[25px] lg:mt-[30px] w-full lg:w-[85%]">
              <div className="flex flex-col gap-2 w-full">
                <p className="font-[500]">Gender *</p>
                <input
                  type="text"
                  className="p-[16px] border border-primary200 outline-none rounded-[4px] w-full"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="font-[500]">Title *</p>
                <input
                  type="text"
                  className="p-[16px] border border-primary200 outline-none rounded-[4px] w-full"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 lg:gap-10 mt-[25px] lg:mt-[30px] w-full lg:w-[85%]">
              <div className="flex flex-col gap-2 w-full">
                <p className="font-[500]">Email Address</p>
                <input
                  type="text"
                  className="p-[16px] border border-primary200 outline-none rounded-[4px] w-full"
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <p className="font-[500]">Home Address</p>
                <input
                  type="text"
                  className="p-[16px] border border-primary200 outline-none rounded-[4px] w-full"
                />
              </div>
            </div>
            <button
              onClick={HandleDetails}
              className="bg-pink p-[10px] w-full lg:w-[150px]  mt-[30px] rounded-[4px] text-white hover:bg-primary200 hover:text-black duration-500"
            >
              Submit Info
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ProfileComponent;
