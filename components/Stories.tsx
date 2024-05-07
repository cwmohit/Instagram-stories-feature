import React, { useState } from "react";
import { PostStoryPlus } from "src/svgs";
import ViewAllStories from "./ViewAllStories";

const Stories = () => {
  const [viewStories, setViewStories] = useState(false);
  const [openedStory, setOpenedStory] = useState(1);
  // static stories (Fetch and use that accordingly)
  const stories = [1, 2, 3, 4, 5, 6];

  const handleStoryClick = (item: number) => {
    setViewStories(true);
    setOpenedStory(item);
  };

  return (
    <>
      <div className="scrollbarLight scrollbar mt-3 flex overflow-x-auto overflow-y-hidden border border-stone-300 bg-white py-5 pl-4 h-[100px]">
        <div className="flex cursor-pointer flex-col items-start">
          <div className="relative">
            <button className="w-[74px]" type="button"></button>
            <div className="bg-gradient-to-tr from-[#ffee00] to-[#d300c8] absolute top-[-2px] left-[-2px]  z-0 h-[60px] w-[60px] rounded-full flex items-center">
              <div className="bg-white w-[92%] h-[92%] rounded-full m-auto"></div>
            </div>
            <div className="absolute bottom-0 right-[15px] z-10">
              <div>
                <PostStoryPlus />
              </div>
            </div>
          </div>
        </div>
        {stories.map((item) => (
          <div className="flex" key={item} onClick={() => handleStoryClick(item)}>
            <div className="ml-1 flex cursor-pointer flex-col items-start">
              <button className="group relative" type="button">
                <div className="w-[74px]">
                  <img
                    src={`/story-${item}.jpeg`}
                    alt="iron"
                    className="relative z-10 h-14 w-14 select-none rounded-full bg-[#ebebeb] object-cover p-[2px]"
                  />
                </div>
                <div className="bg-[#e4e4e4] absolute top-[-2px] left-[-2px] z-0 h-[60px] w-[60px] rounded-full group-hover:animate-ping"></div>
              </button>
            </div>
          </div>
        ))}
      </div>
      {viewStories && (
        <ViewAllStories
          onClose={() => setViewStories(false)}
          current={openedStory}
          setCurrent={setOpenedStory}
          stories={stories}
        />
      )}
    </>
  );
};

export default Stories;