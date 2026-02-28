

import Project from "..";
import Footer from "../../footer";
import Header from "../../header"; 
export default function Align(){
    return(
        <div >
       <Header/>
                <div className="border-t border-gray-600 mt-2 mb-3 "></div>
        <div className="flex flex-col items-center mt-10 space-y-10 justify-center mb-10 px-2">
            <h1 className="md:text-[50px] text-[35px] font-extrabold bg-linear-to-r from-[#00B4DB] to-[#0083B0] text-transparent bg-clip-text mb-12">
  Projects
</h1>
        <Project/>
        
        </div>
        <div className="border-t border-gray-600 mt-14 mb-3"></div>
              <Footer/></div>
    )
    
}