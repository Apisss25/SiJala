import React from "react";

const videos = [
  {
    id: 1,
    title: "Edukasi Keselamatan Berkendara Anak",
    url: "https://www.youtube.com/embed/FIkAE2fen_s",
  },
  {
    id: 2,
    title: "Pentingnya Keselamatan di Jalan Raya",
    url: "https://www.youtube.com/embed/NRRkNBVdONg",
  },
  {
    id: 3,
    title: "Belajar Rambu Lalu Lintas",
    url: "https://www.youtube.com/embed/a5Kx26VeJNc",
  },
  {
    id: 4,
    title: "Etika Berkendara yang Benar",
    url: "https://www.youtube.com/embed/TS7bDrIhOAk",
  },
];

const EducationAnimation = () => {
  return (
    <section className="w-full bg-[#EFEEEA] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Edukasi Animasi
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          Pelajari keselamatan berkendara melalui video animasi yang menarik dan
          mudah dipahami.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <div className="aspect-video">
                <iframe
                  className="w-full h-full"
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationAnimation;
