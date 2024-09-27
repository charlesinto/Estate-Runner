import Hero from "@/components/hero/Hero";
import Image from "next/image";
import { Typography } from "@/lib/material-tailwind";
import AdvertPill from "@/components/AdvertPill";

export default function Home() {
  return (
    <main>
      <section className="mb-20">
        <Hero />
      </section>

      <section className="mb-20 container px-8 lg:hidden">
        <div className="h-60 relative w-full">
          <Image
            src={"/images/bg1.png"}
            className="w-full object-cover"
            alt="Estate"
            layout="fill"
          />
        </div>
      </section>

      <section className="mb-20 container lg:grid grid-cols-2 gap-4 px-8 lg:px-0 mx-auto">
        <AdvertPill
          iconUrl={"/images/bg5.png"}
          title={<>Control who can access your estate</>}
          description={`Generate security codes for your guests and visitors. manage who get
        to enter your estate`}
        />

        <AdvertPill
          iconUrl={"/images/bg3.png"}
          title={<>Alert the whole estate in case of emergency</>}
          description={`with just a click, alert the estate security and community at large
        in case of emergency`}
        />

        <AdvertPill
          iconUrl={"/images/bg2.png"}
          title={<>Get notified of estate levies and make payment</>}
          description={`Easily make payment for estate dues and contributions`}
        />

        <AdvertPill
          iconUrl={"/images/bg4.png"}
          title={<>Get notifications on important estate meetings</>}
          description={`Get important notification in your estate. events or meetings`}
        />
      </section>
    </main>
  );
}
