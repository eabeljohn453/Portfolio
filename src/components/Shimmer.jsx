export default function Shimmer() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-8 animate-pulse">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="h-8 w-36 rounded bg-gray-800"></div>
        <div className="h-8 w-8 rounded bg-gray-800"></div>
      </div>

      {/* Visitor Counter */}
      <div className="flex justify-center mt-12">
        <div className="h-12 w-52 rounded-full bg-gray-800"></div>
      </div>

      {/* Profile Image */}
      <div className="flex justify-center mt-10">
        <div className="h-64 w-64 rounded-full bg-gray-800 border-4 border-gray-700"></div>
      </div>

      {/* Name */}
      <div className="flex justify-center mt-8">
        <div className="h-10 w-80 rounded bg-gray-800"></div>
      </div>

      {/* Heading */}
      <div className="flex flex-col items-center mt-8 space-y-4">
        <div className="h-10 w-96 rounded bg-gray-800"></div>
        <div className="h-10 w-80 rounded bg-gray-800"></div>
      </div>

      {/* Description */}
      <div className="max-w-3xl mx-auto mt-10 space-y-4">
        <div className="h-4 w-full rounded bg-gray-800"></div>
        <div className="h-4 w-11/12 rounded bg-gray-800"></div>
        <div className="h-4 w-10/12 rounded bg-gray-800"></div>
        <div className="h-4 w-9/12 rounded bg-gray-800"></div>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="h-56 rounded-2xl bg-gray-800"
          ></div>
        ))}
      </div>
    </div>
  );
}