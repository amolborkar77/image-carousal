import React, { useEffect, useState } from "react";

const data = [
  "https://e1.pxfuel.com/desktop-wallpaper/930/831/desktop-wallpaper-mikky-on-random-random-gaming-thumbnail.jpg",
  "https://images.unsplash.com/photo-1495012379376-194a416fcc5f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwxNDA3NTl8fGVufDB8fHx8fA%3D%3D",
  "https://d.furaffinity.net/art/midnightfoxkovu/1483740705/1483740705.midnightfoxkovu_simpelasthat.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/64dfc44f-c08c-444e-8aa7-0e8762a53f5d/dg0dra8-4556da02-e8ba-46bd-b1cb-0b890980edfd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzY0ZGZjNDRmLWMwOGMtNDQ0ZS04YWE3LTBlODc2MmE1M2Y1ZFwvZGcwZHJhOC00NTU2ZGEwMi1lOGJhLTQ2YmQtYjFjYi0wYjg5MDk4MGVkZmQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.5FIcTlvqQW2efxJCFFUd4WQxIwn5LMDTp8Aq0g0btWg",
  "https://e1.pxfuel.com/desktop-wallpaper/853/687/desktop-wallpaper-best-6-random-backgrounds-on-hip-random.jpg",
];

const ImageSlider = () => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const handleNext = () =>
    setActiveImgIndex((activeImgIndex + 1) % data.length);

  const handlePrevious = () => {
    setActiveImgIndex(!activeImgIndex ? data.length - 1 : activeImgIndex - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => handleNext(), 3000);
    console.log("useEffect called");
    
    return () => clearTimeout(timer);
  }, [activeImgIndex]);

  return (
    <>
      <div className="flex  justify-center">
        <button onClick={handlePrevious}>Previous</button>

        <img
          alt="wallpaper"
          className="w-[700px] h-[700px] m-5"
          src={data[activeImgIndex]}
        />

        <button onClick={handleNext}>Next</button>
      </div>
    </>
  );
};

export { ImageSlider };
