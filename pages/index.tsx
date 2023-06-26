import Image from "next/image";
import Head from "next/head";
import { Roboto } from "next/font/google";
import {
  badges,
  Logo,
  SiteDescription,
  Button,
  DashboardImages,
  Icons,
} from "@/components/layout-components";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function MainPage() {
  return (
    <div className={`h-full overflow-x-hidden ${roboto.className}`}>
      <Head>
        <title>Atera task</title>
      </Head>
      <LayoutDesktop />
      <LayoutMobile />
    </div>
  );
}

function LayoutDesktop() {
  return (
    <div className="h-full grid phone:hidden tablet:hidden grid-cols-2 justify-items-center items-center p-4">
      <div className="grid grid-rows-4 gap-6">
        <Logo />
        <SiteDescription />
        <Button />
      </div>
      <div className="grid grid-rows-auto gap-4">
        <DashboardImages />
        <Icons />
      </div>
    </div>
  );
}

function LayoutMobile() {
  return (
    <div className="hidden phone:grid tablet:grid grid-rows-auto justify-items-center gap-6 p-4">
      <Logo />
      <SiteDescription />
      <Button />
      <DashboardImages />
      <Icons />
      <Image
        src={badges[badges.length - 1]}
        className="hidden phone:block"
        alt={`badge${badges.length}`}
      />
    </div>
  );
}
