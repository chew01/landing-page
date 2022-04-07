import React from 'react';
import { IconType } from 'react-icons';

type LinkProps = {
  title: string,
  icon: IconType,
  href: string,
};

function Link(props: LinkProps) {
  const { title, icon, href } = props;
  const Icon = icon;
  return (
    <a
      href={href}
      className="rounded-2xl p-4 px-8 min-w-full flex gap-4 font-['Poppins'] select-none
      font-medium text-2xl justify-between shadow-lg dark:bg-slate-300 bg-red-200
      transition ease-in-out delay-150 hover:scale-105 duration-200 hover:bg-red-300 hover:dark:bg-slate-50"
    >
      {title}
      <Icon size={32} />
    </a>
  );
}

export default Link;
