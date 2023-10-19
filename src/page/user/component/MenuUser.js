import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ChangeLanguage } from './ChangeLanguage'
import FormSearch from './FormSearch'
import { ListMenu } from './ListMenu'
import { MenuMobile } from './MenuMobile'
import { ProfileTab } from './ProfileTab'
import { UserLogin } from './UserLogin'

export const MenuUser = () => {

  const navigate = useNavigate();

  const [isMenuMobile, setIsMenuMobile] = useState(false);
  const [isProfile, setIsProfile] = useState(false);


  window.addEventListener("resize", () => {
    const innerWidth = window.innerWidth;
    if (innerWidth < 900) {
      setIsMenuMobile(true);
    } else {
      setIsMenuMobile(false);
    }
  })

  useEffect(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth < 900) {
      setIsMenuMobile(true);
    } else {
      setIsMenuMobile(false);
    }
  }, []);

  const returnHome = () => {
    navigate('/');
  }

  return (
    <>
      <div className='fixed top-0 left-0 z-[99] w-full bg-transparent px-[10px] md:px-[20px] py-[8px] md:py-[5px] 2xl:py-[10px] flex items-center justify-center shadow-lg shadow-gray-200'>
        <div className='w-full xl:w-[90%] 2xl:w-[70%] flex items-center justify-between'>
          <div className="flex items-center justify-between w-[70%]">
            <div className="flex items-center">
              <img src="/images/fly.png" className='w-[80px] md:w-[100px] lg:w-[130px] cursor-pointer' onClick={returnHome} />
              <h1 className="text-[20px] text-[#498374]">Book&Book</h1>
            </div>
            <FormSearch />
          </div>

          {/* {
            !isMenuMobile
            &&   
            <ListMenu/>
          } */}
          {/* <ChangeLanguage/> */}
          <div className="w-[30%]">
            <UserLogin setIsProfile={setIsProfile} />
          </div>
        </div>
      </div>
      {
        isMenuMobile
        &&
        <MenuMobile />
      }
      {
        isProfile
        &&
        <ProfileTab setIsProfile={setIsProfile} isProfile={isProfile} />
      }
    </>
  )
}
