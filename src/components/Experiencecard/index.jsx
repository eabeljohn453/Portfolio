export default function ExperienceCard() {
  return (
    <div className="w-[1390px] h-[400px] bg-linear-to-r mt-20  from-[#1E0A78] to-[#6A00F4] rounded-2xl hover:shadow-[0_0_25px_rgba(140,0,255,0.5)] p-8 text-white ">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-4xl">💼</div>
        <h2 className="text-3xl font-bold">FutureIK Technologies</h2>
      </div>

      <p className="text-lg text-violet-200 mb-2 font-semibold">
        Software Development Engineer
      </p>
      <p className="text-sm text-gray-300 mb-4">
        Kochi, Kerala, India • Apr 2025 – Present
      </p>

      <ul className="list-disc ml-5 space-y-2 text-[17px] leading-relaxed text-gray-100">
        <li>
          Developed and maintained responsive web applications using Next.js,
          React, TailwindCSS, JavaScript, Node.js, and MongoDB.
        </li>
        <li>
          Implemented socket authentication, real-time socket connections with
          end devices, and optimized data communication.
        </li>
        <li>
          Integrated internationalization (i18n) to support multiple languages
          across the web application.
        </li>
        <li>
          Performed code refactoring to improve maintainability, performance,
          and scalability.
        </li>
        <li>
          Utilized Postman for API testing and collaborated via GitHub for
          version control and code reviews.
        </li>
      </ul>
    </div>
  );
}
