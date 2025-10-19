import { HiOutlineLockClosed } from "react-icons/hi";
import { IoDocumentTextOutline } from "react-icons/io5";

const CourseContent = ({ index }: { index: number }) => {
  if (index === 0) {
    return (
      <ul>
        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Introduction</span>
          </div>
          <HiOutlineLockClosed />
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Course Overview</span>
          </div>
          <HiOutlineLockClosed />
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Course Overview</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="bg-[#f2faf8] text-[#7cbea3]">0 Question</span>
            <span className="bg-[#fdf2f4] text-[#e784b9]">10 Minutes</span>
          </div>
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Course Exercise / Reference Files</span>
          </div>
          <HiOutlineLockClosed />
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Code Editor Installation (Optional if you have one)</span>
          </div>
          <HiOutlineLockClosed />
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Embedding PHP in HTML</span>
          </div>
          <HiOutlineLockClosed />
        </li>
      </ul>
    );
  }
  if (index === 1) {
    return (
      <ul>
        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Defining Functions</span>
          </div>
          <HiOutlineLockClosed />
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Function Parameters</span>
          </div>
          <HiOutlineLockClosed />
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Return Values From Functions</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="bg-[#f2faf8] text-[#7cbea3]">2 Questions</span>
            <span className="bg-[#fdf2f4] text-[#e784b9]">15 Minutes</span>
          </div>
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Global Variable and Scope</span>
          </div>
          <HiOutlineLockClosed />
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Newer Way of Creating a Constant</span>
          </div>
          <HiOutlineLockClosed />
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Constants</span>
          </div>
          <HiOutlineLockClosed />
        </li>
      </ul>
    );
  }
  if (index === 2) {
    return (
      <ul>
        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Defining Functions</span>
          </div>
          <HiOutlineLockClosed />
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Function Parameters</span>
          </div>
          <HiOutlineLockClosed />
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Return Values From Functions</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="bg-[#f2faf8] text-[#7cbea3]">2 Questions</span>
            <span className="bg-[#fdf2f4] text-[#e784b9]">15 Minutes</span>
          </div>
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Global Variable and Scope</span>
          </div>
          <HiOutlineLockClosed />
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Newer Way of Creating a Constant</span>
          </div>
          <HiOutlineLockClosed />
        </li>

        <li>
          <div>
            <IoDocumentTextOutline />
            <span>Constants</span>
          </div>
          <HiOutlineLockClosed />
        </li>
      </ul>
    );
  }
};

export default CourseContent;
