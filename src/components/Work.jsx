import React, { useState, useRef } from 'react'; // Make sure to import useState and useRef
import daki1 from "../assets/daki1.png";
import daki2 from "../assets/daki2.png";
import daki3 from "../assets/daki3.png";
import daki4 from "../assets/ws.png";
import proj1 from "../assets/lk.mp4";
import proj2 from '../assets/HOMMEVIDMP.mp4'; // Correctly importing the MP4 video
import proj3 from "../assets/vidvite.mp4";
import proj4 from "../assets/wcv.mp4";


const projects = [
  { id: 1, img: daki1, title: 'Project 1', liveUrl: '/', videoUrl: proj1 },
  { id: 2, img: daki2, title: 'Project 2', liveUrl: '/', videoUrl: proj2 }, // Added videoUrl reference
  { id: 3, img: daki3, title: 'Project 3', liveUrl: '/', videoUrl: proj3 },
  { id: 4, img: daki4, title: 'Project 4', liveUrl: '/', videoUrl: proj4 },
 
];


const Work = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const videoRef = useRef(null);

  const handleLiveClick = (videoUrl) => {
    setActiveVideo(videoUrl);
  };

  const handleCloseVideo = () => {
    setActiveVideo(null);
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video when closed
    }
  };

  return (
    <div className='max-w-[1200px] mx-auto grid grid-cols-2 gap-4 glass p-6' id="work">
      <div className='col-span-2 my-4'>
        <h1 className='text-4xl mb-4 text-gray-300'>My Work</h1>
      </div>

      {projects.map((project) => (
        <div key={project.id} className='glass transform transition-transform hover:scale-105 duration-300 overflow-hidden shadow-lg h-[200px] group relative'>
          {project.videoUrl ? (
            <img src={project.img || 'default-image.png'} className='w-full h-full object-cover' alt={project.title} />
          ) : (
            <img src={project.img} className='w-full h-full object-cover' alt={project.title} />
          )}
          <div className='group-hover:opacity-90 opacity-0 bg-[#232323] absolute transition-opacity duration-300 inset-0 flex flex-col justify-center items-center'>
            <span className='text-2xl font-bold text-white mb-4'>{project.title}</span>
            <div>
              {project.videoUrl ? (
                <button
                  onClick={() => handleLiveClick(project.videoUrl)}
                  className='bg-white px-5 py-2 rounded-xl font-bold'
                >
                  Watch Video
                </button>
              ) : (
                <button
                  onClick={() => window.open(project.liveUrl, '_blank')}
                  className='bg-white px-5 py-2 rounded-xl font-bold'
                >
                  Live
                </button>
              )}
            </div>
          </div>
        </div>
      ))}

      {activeVideo && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-75 z-50">
          <div className="relative">
            <video
              ref={videoRef}
              src={activeVideo}
              title="Project Video"
              className='w-full max-w-3xl h-auto'
              controls
              autoPlay
            />
            <button
              onClick={handleCloseVideo}
              className='absolute top-2 right-2 bg-red-500 text-white px-3 py-1 rounded'
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Work;


