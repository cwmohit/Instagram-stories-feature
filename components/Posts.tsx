import Image from "next/image";
import React from "react";
import { CommentIcon, LikeIcon } from "src/svgs";

const Posts = () => {
  const randomPosts = ["ironman", "food", "like"];
  const avatarUrl = "https://source.unsplash.com/40x40?user";
  
  return (
    <div className="w-full">
      {randomPosts.map((item, index) => (
        <div key={index} className="my-4 overflow-hidden border border-stone-300 bg-white">
          <div className="ml-3 flex items-center py-3">
            <a href="/#">
              <Image
                alt="avatar"
                src={avatarUrl}
                className="h-8 w-8 cursor-pointer select-none rounded-full object-cover"
                loading="lazy"
                width={32}
                height={32}
              />
            </a>
            <a href="/#">
              <p className="ml-4 cursor-pointer">IronMan</p>
            </a>
          </div>
          <div role="button">
            <Image
              alt="post"
              src={`https://source.unsplash.com/400x300/?${item}`}
              className="h-auto min-h-[150px] w-full select-none bg-[#ebebeb]"
              loading="lazy"
              width={400}
              height={300}
            />
          </div>
          <div className="border-t border-stone-200 px-5 py-4">
            <div className="mb-3 flex gap-4">
              {[<LikeIcon key="like" />, <CommentIcon key="comment" />].map((icon, index) => (
                <button key={index} type="button" className="h-6 w-6 cursor-pointer">
                  <div className="group">
                    <div className="sm:group-hover:animate-bounce">{icon}</div>
                  </div>
                </button>
              ))}
            </div>
            <div className="flex text-sm">
              <p>
                Liked by <b><a href="/#">TheThor</a></b> and <b>3 others</b>
              </p>
            </div>
            <button className="mt-3 text-xs text-[#a5a5a5]" type="button">
              <div>
                <p>View all 12 comments</p>
              </div>
            </button>
            <p className="pt-2 text-xs text-[#a5a5a5]">Thu Sep 15 2022</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;