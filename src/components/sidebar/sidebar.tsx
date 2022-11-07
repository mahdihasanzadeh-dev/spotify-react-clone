import { useState } from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';
import { NavLinks } from '@components/nav-links/nav-links';
import type { ReactElement } from 'react';
import { sidebarHelper } from './sidebar-helper';
import logo from '../../assets/logo.svg';

export function Sidebar(): ReactElement {
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState<boolean>(false);
  const helper = sidebarHelper(setIsMenuMobileOpen);

  return (
    <>
      <div className="md:flex hidden flex-col w-[240px] py-10 px-4 bg-[#191624]">
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks />
      </div>
      <div className="absolute md:hidden block top-6 right-3">
        {
          isMenuMobileOpen ? (
            <RiCloseCircleLine className="w-6 h-6 text-white mr-2" onClick={helper.closeMobileMenu} />
          )
            : (
              <HiOutlineMenu className="w-6 h-6 text-white mr-2" onClick={helper.openMobileMenu} />
            )
       }
      </div>
      <div className={`absolute top-0 h-screen w-2/3 bg-gradient-to-tl from-white/10 to-[#483d8b] 
      backdrop-blur-lg z-10 p-6 md:hidden smooth-transition ${isMenuMobileOpen ? 'left-0' : '-left-full'}`}
      >
        <img src={logo} alt="logo" className="w-full h-14 object-contain" />
        <NavLinks handleClick={helper.closeMobileMenu} />
      </div>
    </>

  );
}
