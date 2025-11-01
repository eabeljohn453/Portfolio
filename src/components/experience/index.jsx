import ExperienceCard from "../Experiencecard";
import Footer from "../footer";
import Header from "../header";


export default function ExperiencePage() {
  return (
    <div>
<Header/>
         <div className="border-t border-gray-600 mt-2 mb-3"></div>
  
    <div className="flex flex-col items-center justify-center min-h-screen bg-black p-10">
      <h1 className="text-5xl font-extrabold bg-linear-to-r from-[#8E2DE2] to-[#4A00E0] text-transparent bg-clip-text mb-12">
  Experience
</h1>
      <ExperienceCard /></div></div>
  );
}
