import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import {
  UserCircleIcon,
  HeartIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";

export enum IconOptions {
  UserCircle = "UserCircle",
  Heart = "Heart",
  Plus = "Plus",
}

interface ButtonProps {
  text?: string;
  icon?: IconOptions;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick }) => {
  return (
    <button
      className="font-regular flex flex-row items-center justify-center rounded-full bg-white px-[1.1rem] py-[0.4rem] text-black shadow-sm transition-all hover:translate-y-[-2px] hover:shadow-md"
      onClick={onClick}
    >
      {icon === IconOptions.UserCircle ? (
        <UserCircleIcon className="h-7 w-7" strokeWidth={1.5} />
      ) : null}
      {icon === IconOptions.Heart ? (
        <HeartIcon className="h-[26px] w-[26px]" strokeWidth={1.5} />
      ) : null}
      {icon === IconOptions.Plus ? (
        <PlusIcon className="h-7 w-7" strokeWidth={1.5} />
      ) : null}
      {text ? <p className="ml-2">{text}</p> : null}
    </button>
  );
};

export default Button;
