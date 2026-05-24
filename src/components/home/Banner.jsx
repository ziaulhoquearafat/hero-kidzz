import { myFont } from "@/app/layout";
import Image from "next/image";

const Banner = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex-1 space-y-5">
          <h1 className={`${myFont.className} text-7xl font-bold leading-19`}>
            আপনার শিশুকে দিন{" "}
            <span className="text-primary">সুন্দর ভবিষ্যত</span>
          </h1>
          <p className="text-lg">Buy Every toy up to 15% off</p>
          <button className="btn btn-outline btn-primary">
            Explore Products
          </button>
        </div>
        <div className="flex-1">
          <Image
            src="/assets/hero.png"
            alt="Hero Banner Image"
            width={500}
            height={300}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
