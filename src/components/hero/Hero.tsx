import { Button, Typography } from "@/lib/material-tailwind";

const Hero = () => {
  return (
    <div className="bg-gray-50 flex flex-col justify-center items-center px-3  h-[80vh] py-4 rounded-br-3xl rounded-bl-3xl">
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
          Generate security code, alert estate for emergencies, estate payments
          and lots more
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
  );
};

export default Hero;
