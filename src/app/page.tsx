import Breadcrumb from "@/components/Breadcrumb";

const bread = [{name:"Home",href:"/"},{name:"About",href:"/"},{name:"Contact",href:"/"}]
export default function Home() {
  return (
    <div className="">
      <Breadcrumb breadcrumbItems={bread}/>
    </div>
  );
}
