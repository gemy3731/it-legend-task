
import CommentsSection from "@/components/CommentsSection";
import CourseMaterialSection from "@/components/CourseMaterialSection";
import CoursesSection from "@/components/CoursesSection";
import HeroSection from "@/components/HeroSection";
import WriteCommentSection from "@/components/WriteCommentSection";


export default function Home() {
  return (
    <div id="home" className="px-4 msm:px-8 py-5 bg-[#fafafb]">
      <div className="heroSection">
      <HeroSection/>
      <CourseMaterialSection/>
      </div>
      <div className="coursesSection">
      <CoursesSection/>
      </div>
      <div className="commentsSection">
      <CommentsSection/>
      <WriteCommentSection/>
      </div>
    </div>
  );
}
