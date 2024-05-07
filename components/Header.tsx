import React from "react";
import { InstagramSvg, MessengerIcon, PlusIcon } from "src/svgs";

const Header = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-stone-300 bg-white">
      <div className=" flex h-[60px] items-center justify-between px-3 lg:justify-center ">
        <div className="flex h-[60px] w-[330px] items-center ">
          <a className="w-full max-w-[103px] " href="/">
            <div className="w-full max-w-[103px] cursor-pointer select-none pt-2">
              <InstagramSvg />
            </div>
          </a>
        </div>
        <div className="relative flex gap-2 items-center pl-[16px] lg:pl-[100px]">
          <a href="/#">
            <div className="relative">
              <MessengerIcon />
            </div>
          </a>
          <button type="button">
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
