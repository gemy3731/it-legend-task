
import CommentsSection from "@/components/CommentsSection";
import CourseMaterialSection from "@/components/CourseMaterialSection";
import CoursesSection from "@/components/CoursesSection";
import HeroSection from "@/components/HeroSection";
import WriteCommentSection from "@/components/WriteCommentSection";


export default function Home() {
  return (
    <div id="home" className="px-3 py-5 bg-[#fafafb]">
      <HeroSection/>
      <CourseMaterialSection/>
      <CoursesSection/>
      <CommentsSection/>
      <WriteCommentSection/>
    </div>
  );
}
