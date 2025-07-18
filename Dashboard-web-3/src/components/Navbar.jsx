import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import { BsChatLeft } from 'react-icons/bs'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { RiNotification3Line } from 'react-icons/ri'
import avatar from '../data/avatar.jpg'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter" openOn="Hover">
    <button
      type="button"
      onClick={customFunc}
      style={{ color }}
      className="relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      {dotColor && (
        <span
          style={{ background: dotColor }}
          className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
        />
      )}
      {icon}
    </button>
  </TooltipComponent>
)

const Navbar = () => {
  const navigate = useNavigate()
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext()

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if(screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="flex justify-between p-2 md:mx-6 relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)}
        color="blue"
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton title="Cart" customFunc={() => navigate('/cart')} color="blue" icon={<FiShoppingCart />} />
        <NavButton title="Chat" customFunc={() => navigate('/chat')} color="blue" icon={<BsChatLeft />} dotColor="#03c9d7" />
        <NavButton title="Notification" customFunc={() => navigate('/notifications')} color="blue" icon={<RiNotification3Line />} dotColor="#03c9d7" />
        <TooltipComponent content="Profile" position="BottomCenter" openOn="Hover">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => navigate('/profile')}
          >
            <img className="rounded-full w-8 h-8" src={avatar} alt="User Avatar" />
            <p>
              <span className="text-gray-400">Hi,</span> <span className="text-gray-400 font-bold ml-1 text-14">Muhsin</span>
            </p>
            <MdKeyboardArrowDown className="text-gray-400 text-14" />
          </div>
        </TooltipComponent>
      </div>
    </div>
  )
}

export default Navbar
