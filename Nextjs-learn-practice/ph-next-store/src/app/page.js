
import AllApps from "@/components/Homepage/AllApps";
import Banner from "@/components/Homepage/Banner";
import Image from "next/image";
import { DiVim } from "react-icons/di";

export default function Home() {
  return (
    <div>
      <Banner />
     <AllApps />
    </div>
  );
}
