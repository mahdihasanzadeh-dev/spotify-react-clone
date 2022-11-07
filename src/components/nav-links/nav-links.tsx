import type { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';
import { links } from '@assets/constants';
import type { INavLinksProperties } from './nav-links-interface';

export function NavLinks({ handleClick }:INavLinksProperties):ReactElement {
  return (
    <div className="mt-10">
      {links.map((link) => (
        <NavLink
          to={link.to}
          key={link.name}
          className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-cyan-400"
          onClick={() => handleClick?.()}
        >
          <link.icon className="w-6 h-6 mr-2" />
          {link.name}
        </NavLink>
      ))}
    </div>
  );
}
