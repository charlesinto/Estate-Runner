"use client";

import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { Button, Typography } from "@/lib/material-tailwind";

interface IProps {
  className?: string;
}

const Header: FC<React.PropsWithChildren<IProps>> = ({ className }) => {
  return (
    <nav className={`flex px-4 py-4 items-center ${className}`}>
      <div className="flex flex-1 gap-4 items-center justify-between">
        <Link href={"/"}>
          <Typography
            variant="h1"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            ER
          </Typography>
        </Link>
        <Button
          variant="text"
          id="menu-btn"
          className={`flex justify-center`}
          type="button"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="block hamburger lg:hidden focus:outline-none">
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>
        </Button>
      </div>
    </nav>
  );
};

export default Header;
