import { Button, Typography } from "@/lib/material-tailwind";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="bg-gray-50  min-h-[80vh] lg:min-h-[40rem]  rounded-br-3xl rounded-bl-3xl">
      <div className="hidden lg:flex container mx-auto pt-10">
        <div className="flex-1 flex items-center">
          <div>
            <div className="mb-5">
              <Typography
                variant="h1"
                className=" font-semibold text-5xl "
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Your Trusted{" "}
                <span className="text-bluePrimary">
                  Estate <br /> Management Partner
                </span>
              </Typography>
            </div>
            <div className="mb-5">
              <Typography
                className="text-left max-w-sm"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Generate security code, alert estate for emergencies, estate
                payments and lots more
              </Typography>
            </div>
            <div className="mb-5">
              <Button
                fullWidth
                className="bg-bluePrimary text-white"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Get Started For FREE
              </Button>
            </div>
            <div className="mb-5">
              <Button
                className="border-bluePrimary text-bluePrimary"
                variant="outlined"
                fullWidth
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        <div className="flex-1 items-center">
          <div className="h-full flex items-center justify-center relative w-full">
            <Image
              src={"/images/bg1.png"}
              className="w-[40rem] h-[40rem] object-contain"
              alt="Estate"
              width={800}
              height={800}
              layout="contain"
            />
          </div>
        </div>
      </div>
      <div className="lg:hidden  flex flex-col justify-center items-center px-3  py-4 ">
        <div className="mb-4">
          <Typography
            variant="h2"
            className="text-center font-semibold text-2xl lg:text-4xl leading-9"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Your Trusted{" "}
            <span className="text-bluePrimary">
              Estate <br /> Management Partner
            </span>
          </Typography>
        </div>
        <div className="mb-5 px-8">
          <Typography
            className="text-center max-w-sm mx-auto"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            Generate security code, alert estate for emergencies, estate
            payments and lots more
          </Typography>
        </div>
        <div className="w-60 mx-auto">
          <div className="mb-3">
            <Button
              fullWidth
              className="bg-bluePrimary text-white"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Get Started For FREE
            </Button>
          </div>
          <div className="mb-3">
            <Button
              className="border-bluePrimary text-bluePrimary"
              variant="outlined"
              fullWidth
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
