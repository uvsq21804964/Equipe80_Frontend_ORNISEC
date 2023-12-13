/* eslint-disable react/require-default-props */

import * as React from 'react';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  MdDashboard,
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
} from 'react-icons/md';
import {
  AiOutlineFileAdd,
  AiOutlineFileSearch,
  AiFillSetting,
} from 'react-icons/ai';
import { Sun, Moon } from 'lucide-react';

import { BsFileEarmarkCheck } from 'react-icons/bs';

import { CgLogOff } from 'react-icons/cg';
import toast from 'react-hot-toast';
import Cookies from 'universal-cookie';
import API from '@/app/api/api';
import { cn } from '@/lib/utils';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const colors = ['classique', 'sombre'];

const sidebarItemsTop = [
  {
    name: 'Accueil',
    href: '/home',
    icon: MdDashboard,
  },
  {
    name: 'Ajouter un audit',
    href: '/create-audit',
    icon: AiOutlineFileAdd,
  },
  {
    name: 'Audits en cours',
    href: '/current-audits',
    icon: AiOutlineFileSearch,
  },
  {
    name: 'Audits terminés',
    href: '/finished-audits',
    icon: BsFileEarmarkCheck,
  },
];

interface SidebarProps {
  mobile?: boolean;
}

function useStickyState(
  defaultValue: string | undefined,
  key: string
): [string | undefined, (v: string) => void] {
  const [value, setValue] = useState<string | undefined>(defaultValue);

  useEffect(() => {
    const stickyValue = localStorage.getItem(key);
    if (stickyValue !== null) {
      setValue(stickyValue);
    }
  }, [key, setValue]);

  return [
    value,
    (v) => {
      localStorage.setItem(key, v);
      setValue(v);
    },
  ];
}

const Sidebar: React.FC<SidebarProps> = ({ mobile = false }) => {
  const [isCollapsedSidebar, setIsCollapsedSidebar] = useState<boolean>(
    !mobile
  );
  const toggleSidebarCollapseHandler = () => {
    setIsCollapsedSidebar((prev) => !prev);
  };
  const pathname = usePathname();

  const [color, setColor] = useStickyState(colors[0], 'theme-color');

  const changeTheme = (newColor: string) => {
    setColor(newColor);
  };

  const Admin = () => {
    // eslint-disable-next-line prefer-const
    let bottomOptions = [
      {
        name: 'Déconnexion',
        href: '/login',
        icon: CgLogOff,
        onclick: () => {
          API.get(`disconnect`)
            .then(() => {
              const cookies = new Cookies();
              cookies.remove('access_token');
              toast.success('Déconnexion réussie.', {
                duration: 4000,
                position: 'top-center',
              });
            })
            .catch((error) => {
              toast.error(error);
            });
        },
      },
    ];

    if (pathname?.startsWith(`/admin/`)) {
      bottomOptions.unshift({
        name: 'Gérer les comptes',
        href: '/admin/accounts',
        icon: AiFillSetting,
        onclick: () => {},
      });
    }

    return bottomOptions;
  };

  const sidebarItemsBottom = Admin();

  return (
    <div className="relative">
      {!mobile && (
        <button
          className="
          btn
          justify-center
          items-center
          flex
          absolute
          cursor-pointer
          h-[1.5rem]
          w-[1.5rem]
          text-[1.1rem]
          bg-buttonSidebar
          rounded-[50%]
          translate-x-1/2
          right-0
          top-[4.7rem]
          border-[1px]
          border-solid
          border-[#e5e7eb]
          text-black"
          type="button"
          onClick={toggleSidebarCollapseHandler}
        >
          {isCollapsedSidebar ? (
            <MdKeyboardArrowRight />
          ) : (
            <MdKeyboardArrowLeft />
          )}
        </button>
      )}
      <aside
        className="
        w-[17rem] 
        h-full 
        bg-sidebar 
        p-[1rem] 
        transition-all 
        flex 
        flex-col"
        data-collapse={isCollapsedSidebar}
      >
        <div className="flex-1">
          <div
            className="
          w-max 
          flex 
          items-center 
          gap-[1.2rem] 
          pb-4 mb-4 
          border-b-[1px] 
          border-solid 
          border-[#e5e7eb]"
          >
            <Image
              src="/images/LogoVioletEcole.png"
              width={50}
              height={50}
              className="w-[3.8rem] h-[2.5rem] rounded-2xl object-cover"
              alt="logo"
            />
            <p
              className="
            text-[1.8rem]
            sidebar_logo-name
            text-center
            text-3xl
            font-bold
            tracking-tight
            text-white"
            >
              PCE AUDIT
            </p>
          </div>
          <ul className="list-none">
            {sidebarItemsTop.map(({ name, href, icon: Icon }) => (
              <li className="sidebar_item" key={name}>
                <Link
                  href={href}
                  className={cn(
                    `flex 
                    text-base 
                    no-underline 
                    color-[#6b720] 
                    text-black 
                    py-[0.8rem] 
                    px-4 
                    bg-buttonSidebar 
                    mb-4 
                    rounded-[0.5rem]
                    hover:bg-orange
                    hover:text-white`,
                    ((pathname === '/' && href === '/') ||
                      pathname === href ||
                      pathname?.startsWith(`${href}/`)) &&
                      'bg-background hover:bg-background'
                  )}
                >
                  <span
                    className={cn(
                      'flex items-center justify-between text-2xl',
                      ((pathname === '/' && href === '/') ||
                        pathname === href ||
                        pathname?.startsWith(`${href}/`)) &&
                        'text-white'
                    )}
                  >
                    <Icon />
                  </span>
                  <span
                    className={cn(
                      'ml-2 sidebar_name',
                      ((pathname === '/' && href === '/') ||
                        pathname === href ||
                        pathname?.startsWith(`${href}/`)) &&
                        'text-white'
                    )}
                  >
                    {name}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-2">
          <ul className="list-none">
            {sidebarItemsBottom.map(({ name, href, icon: Icon, onclick }) => (
              <li className="sidebar_item" key={name}>
                <Link
                  href={href}
                  onClick={onclick}
                  className={cn(
                    `flex 
                  text-base 
                  no-underline 
                  color-[#6b720] 
                  text-black 
                  py-[0.8rem] 
                  px-4 
                  bg-buttonSidebar
                  mb-4 
                  rounded-[0.5rem]
                  hover:bg-orange
                  hover:text-white`,
                    ((pathname === '/' && href === '/') ||
                      pathname === href ||
                      pathname?.startsWith(`${href}/`)) &&
                      'bg-background hover:bg-background'
                  )}
                >
                  <span
                    className={cn(
                      'flex items-center justify-between text-2xl',
                      ((pathname === '/' && href === '/') ||
                        pathname === href ||
                        pathname?.startsWith(`${href}/`)) &&
                        'text-white'
                    )}
                  >
                    <Icon />
                  </span>
                  <span
                    className={cn(
                      'ml-2 sidebar_name',
                      ((pathname === '/' && href === '/') ||
                        pathname === href ||
                        pathname?.startsWith(`${href}/`)) &&
                        'text-white'
                    )}
                  >
                    {name}
                  </span>
                </Link>
              </li>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <li
                  key="Theme"
                  className="
                  sidebar_item
                  flex 
                  text-base 
                  no-underline 
                  color-[#6b720] 
                  text-black 
                  py-[0.8rem] 
                  px-4 
                  bg-buttonSidebar
                  mb-4 
                  rounded-[0.5rem]
                  hover:bg-orange
                  hover:text-white"
                >
                  <span className="flex items-center justify-between">
                    <div className="flex justify-center items-center text-2xl">
                      <Sun className="dark:hidden" />
                      <Moon className="hidden dark:block" />
                    </div>
                    <span className="ml-2 sidebar_name">Thème : {color}</span>
                  </span>
                </li>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="center"
                className="bg-button text-white"
              >
                <DropdownMenuItem
                  className="capitalize hover:font-bold"
                  onClick={() => changeTheme('classique')}
                >
                  Classique
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="capitalize hover:font-bold"
                  onClick={() => changeTheme('imt')}
                >
                  Bleu
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="capitalize hover:font-bold"
                  onClick={() => changeTheme('vert')}
                >
                  Vert
                </DropdownMenuItem>
                <DropdownMenuItem
                  className="capitalize hover:font-bold"
                  onClick={() => changeTheme('sombre')}
                >
                  Sombre
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
