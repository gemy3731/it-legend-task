import Accordion from "./Accordion"
import Progressbar from "./Progressbar"

const courseTitles = ["Course Introduction", "JavaScript Language Basics", "Components & Databinding"]
const CoursesSection = () => {
  return (
    <section id="courses" className=" px-5 pb-3 mt-10 flex flex-col gap-8 md:mt-24">
        <h2 className="text-[22px] font-bold mb-8">Topics for this course</h2>
        <Progressbar/>
        <div>
            <Accordion titles={courseTitles}/>
        </div>
    </section>
  )
}

export default CoursesSection