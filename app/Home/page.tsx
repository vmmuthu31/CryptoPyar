"use client";
import React,{useEffect,useState} from "react";
import story1 from "../assets/story1.svg";
import story2 from "../assets/story2.svg";
import story3 from "../assets/story3.svg";
import story4 from "../assets/story4.svg";
import story5 from "../assets/story5.svg";
import story6 from "../assets/story6.svg";
import Image from "next/image";
import SideBar from "../Components/SideBar";
import Tabs from "../Components/Tabs";
import Suggestions from "../Components/Suggestions";
import axios from "axios"

const ProfileCard = ({ profile }) => {
  return (
      <div className="profile-card">
          <h2>{profile.name}</h2>
          <p>{profile.bio}</p>
          <p>Age: {profile.age}</p>
          <p>Location: {profile.location}</p>
          <p>Gender: {profile.gender}</p>
          <p>Looking for: {profile.looking_for}</p>
          <p>Work: {profile.work}</p>
          <p>Education: {profile.edu}</p>
          <p>Zodiac: {profile.zodiac}</p>
          <p>Interests: {profile.interest.join(', ')}</p>
          <div className="photos">
              {profile.photo.map((photoUrl, index) => (
                  <img key={index} src={photoUrl} alt={`${profile.name} ${index + 1}`} />
              ))}
          </div>
      </div>
  );
};

const ProfileList = ({ profiles }) => {
  return (
      <div className="profile-list">
          {profiles.map((profileData, index) => (
              <ProfileCard key={index} profile={profileData.profile} />
          ))}
      </div>
  );
};
export default function Page() {

  const [address, setaddress] = useState("")
  const [datas, setDatas] = useState([])

  const getMatch  = async()=>{
    try {
      const data = localStorage.getItem("address")
      console.log("Address",data);
      

      const queryurl = `https://nillion-compute.vercel.app/match/${data}`

      const resdata = await axios.get(queryurl);

      console.log("resdata",resdata);
      setDatas(resdata.data)
      
    } catch (error) {
      console.log("error in getting datra",error);
      
    }
  }

  useEffect(()=>{
const data = localStorage.getItem("address")
setaddress(data);
getMatch()

  },[])

  return (
    <main className="bg-[#FDF7FD] min-h-screen">
      <div className="bg-[url('/bg3.svg')] bgimg3 bg-cover min-h-screen bg-no-repeat">
        <div className="flex mx-14 py-20 pt-14 justify-between">
          <div className="pl-14">
            <SideBar />
          </div>
          <div>
            <div className="flex pl-14 gap-4 justify-center items-center">
              <div className="flex flex-col cursor-pointer gap-1 items-center">
                <Image src={story1} alt="" />
                <p>My Story</p>
              </div>
              <div className="flex flex-col gap-1 cursor-pointer items-center">
                <Image src={story2} alt="" />
                <p>Selena</p>
              </div>
              <div className="flex flex-col gap-1 cursor-pointer items-center">
                <Image src={story3} alt="" />
                <p>Clara</p>
              </div>
              <div className="flex flex-col gap-1 cursor-pointer items-center">
                <Image src={story4} alt="" />
                <p>Fabian</p>
              </div>

              <div className="flex flex-col gap-1 cursor-pointer items-center">
                <Image src={story5} alt="" />
                <p>Prashant</p>
              </div>
              <div className="flex flex-col gap-1 cursor-pointer items-center">
                <Image src={story6} alt="" />
                <p>Fabian</p>
              </div>
            </div>
           {/* {datas &&  } */}
        {  datas.length > 0 &&  <Tabs data={datas} />}

          </div>
          <Suggestions />
        </div>
      </div>
    </main>
  );
}
