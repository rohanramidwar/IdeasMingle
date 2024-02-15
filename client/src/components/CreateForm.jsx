import React from "react";
import { Plus } from "lucide-react";

const CreateForm = () => {
  return (
    <div className="relative bg-[#282a36] text-[#f8f8f2] sm:max-w-[317px] p-4 rounded-lg">
      <form className="w-full" onSubmit={(e) => e.preventDefault()}>
        <input
          className="bg-inherit outline-none text-2xl mt-4 mb-2 w-full"
          placeholder="Title"
        />
        <textarea
          className="bg-inherit outline-none w-full mb-4"
          placeholder="Go ahead, put anything."
          rows={3}
        />
        <div>
          <button
            className="absolute right-5 p-2 bg-[#b780ff] rounded-full transition active:scale-75 duration-300"
            type="submit"
          >
            <Plus />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateForm;
