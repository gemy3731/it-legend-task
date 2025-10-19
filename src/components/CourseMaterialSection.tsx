import courseMaterialData from "@/data/courseMaterialData";
import Image from "next/image";

const CourseMaterialSection = () => {
  return (
    <section id="courseMaterial" className="bg-white pt-10 px-5 pb-3 mt-10 flex flex-col gap-8 w-full rounded-lg">
      <h2 className="text-[22px] font-bold">Course Materials</h2>
      <ul className="">
        {courseMaterialData.map((item) => (
          <li key={item.key} className="flex justify-between gap-2 border-b border-[#b3b3b357] py-4">
            <div className="flex gap-2">
              <Image src={item.icon} alt="icon" width={20} height={20}></Image>
              <span>{item.key}:</span>
            </div>
            <span>{item.value}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CourseMaterialSection;
