import { redirect } from "next/navigation";

const default_category_id = "0"
export default  function Home() {


  return (
    redirect(`/category/${default_category_id}`)
  );
}
