
import AllApps from "@/components/Homepage/AllApps";
import Banner from "@/components/Homepage/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Banner />
      <AllApps from="home"/>
    </div>
  );
}
