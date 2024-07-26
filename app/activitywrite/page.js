"use client";
import MDEditor from "@uiw/react-md-editor";

import React, { useState } from "react";

const ActivityDetail = ({ initialMarkdown }) => {
  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleInputChange = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <div className="flex w-full justify-center gap-4">
      <div className="flex flex-col w-10/12 items-center">
        <div className="w-full bg-white p-6 rounded-lg mt-6">
          <div className="flex gap-4">
            <input
              type="text"
              className="w-full p-2 mb-4 border border-gray-300 rounded-lg text-2xl"
              placeholder="Enter the title here..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="markarea">
            <div data-color-mode="light">
              <MDEditor height={720} value={markdown} onChange={setMarkdown} />
            </div>
          </div>
        </div>
      </div>
      <button className="whitespace-nowrap h-12 text-white bg-[#305ad9] hover:bg-[#274bbd] px-6 py-2 mt-12 mb-4 -ml-4 rounded-lg">
        작성완료
      </button>
    </div>
  );
};

export default ActivityDetail;
