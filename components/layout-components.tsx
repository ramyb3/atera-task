import Image from "next/image";
import ateraLogo from "@/public/assets/atera-logo.svg";
import dashboard1 from "@/public/assets/dashboards/dashboard-1.png";
import dashboard2 from "@/public/assets/dashboards/dashboard-2.png";
import dashboard3 from "@/public/assets/dashboards/dashboard-3.png";
import badge1 from "@/public/assets/badges/os-1.svg";
import badge2 from "@/public/assets/badges/os-2.svg";
import badge3 from "@/public/assets/badges/os-3.svg";
import badge4 from "@/public/assets/badges/2023.svg";
import { useState } from "react";

export const badges = [
  {
    image: badge1,
    name: "badge1",
  },
  {
    image: badge2,
    name: "badge2",
  },
  {
    image: badge3,
    name: "badge3",
  },
  {
    image: badge4,
    name: "badge4",
  },
];

const images = [dashboard1, dashboard2, dashboard3];

export function Button() {
  return (
    <div className="flex flex-col gap-1 phone:w-full w-fit">
      <button
        className="bg-ateraPink text-white rounded-lg py-2 px-6"
        onClick={() => {}}
      >
        Start Free Trial
      </button>
      <span className="text-gray-500 text-xs text-center">
        No credit card required
      </span>
    </div>
  );
}

export function Logo() {
  return (
    <Image
      src={ateraLogo}
      className="w-fit phone:w-24 tablet:w-36"
      alt="atera logo"
    />
  );
}

export function SiteDescription() {
  const list = [
    "Monitor unlimited devices",
    "Fixed price",
    "5-minute onboarding",
    "30-day free trial",
  ];

  return (
    <>
      <h1 className="text-5xl text-center phone:text-4xl font-black max-w-[350px] phone:max-w-[300px]">
        Join the new era of I.T. with Atera
      </h1>

      <div className="flex flex-col gap-2 items-start tablet:items-center">
        With our all-in-one I.T. platform, you get:
        <div className="flex flex-row phone:flex-col gap-x-2 flex-wrap max-w-[400px] tablet:justify-center">
          {list.map((name, index) => {
            return (
              <div key={index}>
                <span className="text-gold text-xl">●</span> {name}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export function Icons() {
  return (
    <div className="flex gap-6 justify-center phone:border-b-2 phone:border-gray-400 phone:pb-6 w-full">
      {badges.map((data, index) => {
        return (
          <Image
            key={index}
            src={data.image}
            alt={data.name}
            className={
              index === badges.length - 1
                ? "grid phone:hidden border-l-2 border-gray-400 pl-6 w-fit"
                : ""
            }
          />
        );
      })}
    </div>
  );
}

export function DashboardImages() {
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-col gap-2 mt-8">
      <Image src={images[imageIndex]} alt={`${images[imageIndex]}`} />

      <div className="flex flex-row gap-2 justify-center">
        {images.map((item, index) => {
          return (
            <button
              key={index}
              className={`${
                imageIndex === index ? "text-gold" : "text-gray-500"
              } text-3xl`}
              onClick={() => setImageIndex(index)}
            >
              ●
            </button>
          );
        })}
      </div>
    </div>
  );
}
