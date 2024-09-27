import Image from "next/image";
import { Typography } from "@/lib/material-tailwind";
import React, { FC } from "react";

interface IProps {
  title?: string | JSX.Element;
  iconUrl?: string;
  description?: string;
}

const AdvertPill: FC<React.PropsWithChildren<IProps>> = ({
  title,
  iconUrl,
  description,
}) => {
  return (
    <div className="shadow-md rounded-md px-3 py-8 lg:py-14 mb-5">
      <div className="relative flex justify-center mb-5">
        <Image
          src={iconUrl as string}
          width={80}
          height={80}
          className="h-80 w-80 lg:w-[8rem] lg:h-[8rem]"
          alt="Access estate"
        />
      </div>
      <Typography
        variant="h6"
        className="text-center mb-3 mx-auto max-w-50"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {title}
      </Typography>

      <Typography
        className="text-center mx-w-md"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {description}
      </Typography>
    </div>
  );
};

export default AdvertPill;
