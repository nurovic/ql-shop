import React from "react";
import { useRouter } from "next/router";

const Reviews = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div className="w-2/4 mt-12">
      <form>
      <label>
        Comment:
        <textarea
          className="w-full p-2 border-2 resize-none rounded-md"
          // value={comment}
          // onChange={handleInputChange}
        />
      </label>
      <button
        className="mt-2 px-4 py-2 text-white bg-blue-500 rounded-md"
        type="submit"
      >
        Gönder
      </button>
    </form>
    </div>
  );
};

export default Reviews;
