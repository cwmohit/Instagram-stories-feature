import React, { useEffect, useState } from "react";
import { InstagramDark, LeftArrowIcon, PauseIcon, PlayIcon, RightArrowIcon, XIcon } from "src/svgs";

interface Props {
  onClose: () => void;
  current: number;
  setCurrent: (value: number) => void;
  stories: number[];
}

const ViewAllStories = ({ onClose, current, setCurrent, stories }: Props) => {
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const [startTime, setStartTime] = useState<number | null>(null);
  const totalTime = 5000;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    const updateProgress = () => {
      if (startTime === null || paused) return;
      const elapsedTime = Date.now() - startTime;
      const percentage = Math.min(100, (elapsedTime / totalTime) * 100);
      setProgress(percentage);
      if (elapsedTime >= totalTime) clearInterval(interval);
    };

    if (!paused) interval = setInterval(updateProgress, 50);
    return () => clearInterval(interval);
  }, [paused, startTime]);

  useEffect(() => {
    if (!paused && startTime === null) setStartTime(Date.now());
  }, [paused, startTime]);

  const handlePausePlay = () => {
    setPaused((prevPaused) => {
      const newPaused = !prevPaused;
      if (!newPaused && startTime === null) setStartTime(Date.now());
      return newPaused;
    });
  };

  const handleStoryChange = (newIndex: number) => {
    setCurrent(newIndex);
    setProgress(0);
    setStartTime(null);
    setPaused(false);
  };

  return (
    <div className="fixed top-0 left-0 z-[100] h-screen w-full overflow-hidden overflow-y-scroll bg-[#1a1a1a]">
      <button className="absolute top-4 left-4 z-[100]" type="button">
        <div className="h-auto w-[103px]">
          <InstagramDark />
        </div>
      </button>
      <button className="absolute top-6 right-6 z-[100]" type="button" onClick={onClose}>
        <XIcon />
      </button>
      <div className="flex h-full w-max cursor-default items-center transition-all duration-500 pl-[7vw] lg:pl-[36vw]" style={{ transform: "translate(calc(0vw))" }}>
        <div>
          <div className="group relative flex">
            <button className={current === stories?.[0] ? "invisible" : "visible"} type="button" onClick={() => handleStoryChange(Math.max(current - 1, stories?.[0]))}>
              <div className="flex h-6 w-6 rotate-180 items-center justify-center rounded-full bg-[#ebebebc2] hover:bg-[#ebebebc2] group-hover:bg-[#ebebebc2] lg:bg-[#8080805d]">
                <LeftArrowIcon />
              </div>
            </button>
            <div className="relative overflow-hidden rounded-lg">
              <div>
                <div className="absolute top-5 left-0 mx-5 flex h-[2px] w-[calc(100%-40px)] justify-start bg-[#80808094]">
                  <div className="z-20 h-full bg-white" style={{ width: `${progress}%`, transform: "width 8.7s linear 0s" }}></div>
                </div>
                <div className="absolute top-11 right-10 z-10">
                  <button type="button" onClick={handlePausePlay}>
                    {paused ? <PlayIcon /> : <PauseIcon />}
                  </button>
                </div>
                <div className="absolute top-9 left-0 z-[1000] ml-5 flex items-center gap-2 text-sm text-white">
                  <a href="/IronMan">
                    <img alt="avatar" src={`https://source.unsplash.com/100x100/`} className="relative z-[1000] h-8 w-8 cursor-pointer select-none rounded-full bg-[#3f3f3f] object-cover" loading="lazy" />
                  </a>
                  <p className="cursor-pointer">IronMan</p>
                </div>
              </div>
              <img alt="story" sizes="60vw" src={`/story-${current}.jpeg`} className="h-[80vh] w-[74vw] lg:h-[95vh] lg:w-[27vw] select-none bg-[#3f3f3f] object-cover transition-all duration-500" />
              <div className="absolute top-0 left-0 h-full w-full">
                <div className="absolute h-[15%] w-full bg-gradient-to-b from-[#000000af] to-[#00000000]"></div>
              </div>
            </div>
            <button className={stories?.length <= 1 || current === stories?.[stories?.length - 1] ? "invisible" : "visible"} type="button" onClick={() => handleStoryChange(Math.min(current + 1, stories[stories.length - 1]))}>
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ebebebc2] hover:bg-[#ebebebc2] group-hover:bg-[#ebebebc2] lg:bg-[#8080805d]">
                <RightArrowIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAllStories;
