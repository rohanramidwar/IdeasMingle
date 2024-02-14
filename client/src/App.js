import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { Heart, MessageCircle, SendHorizonal } from "lucide-react";
import "@fontsource/karla";
import "@fontsource/karla/400.css";

const App = () => {
  const stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(14)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

  const stringAvatar = (name) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 32,
        height: 32,
        fontSize: 16,
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  };

  const [comment, setComment] = useState(false);

  const handleClick = () => {
    setComment(!comment);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className=" bg-[#282a36] text-[#f8f8f2] max-w-[540px] p-4 rounded-lg">
        <div className="flex gap-2">
          <div>
            <Avatar {...stringAvatar("Kritika Sharma")} />
          </div>
          <div className="flex flex-col">
            <span>Kritika Sharma</span>
            <span className="text-[#e3e3e3] text-sm">19m ago</span>
          </div>
        </div>
        <div>
          <h1 className="text-xl mt-4 mb-2">Balancing mind,body and spirit</h1>
          <p>
            People who code, do skincare, haircare, daily workouts,eat healthy,
            believe in god are unstoppable.Noone can stop them.
          </p>
        </div>
        <div className="flex gap-8 text-sm mt-4">
          <div className="flex items-center gap-2">
            <Heart size={14} />
            <span>24 likes</span>
          </div>
          <div
            role="button"
            onClick={handleClick}
            className="flex items-center gap-2"
          >
            <MessageCircle size={14} />
            <span>5 comments</span>
          </div>
        </div>
        {comment && (
          <div className="mt-4 pt-4 border-t border-[#606770]">
            <div className="flex gap-2 items-center">
              <Avatar {...stringAvatar("Kritika Sharma")} />
              <input
                className="w-full p-2 rounded-lg outline-none bg-inherit"
                placeholder="Add your views"
              />
              <SendHorizonal className="text-[#e3e3e3]" width={32} />
            </div>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex gap-2">
                <div>
                  <Avatar {...stringAvatar("Arushi Mishra")} />
                </div>
                <div className="flex flex-col p-2 border border-[#606770] rounded-lg">
                  <span>
                    Arushi Mishra{" "}
                    <span className="ml-2 text-[#e3e3e3] text-sm">2m ago</span>
                  </span>
                  <span>wow roh</span>
                </div>
              </div>
              <div className="flex gap-2">
                <div>
                  <Avatar {...stringAvatar("Raj Matte")} />
                </div>
                <div className="flex flex-col p-2 border border-[#606770] rounded-lg">
                  <span>
                    Raj Matte{" "}
                    <span className="ml-2 text-[#e3e3e3] text-sm">2m ago</span>
                  </span>
                  <span>Bhai mast ha</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
