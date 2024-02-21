import React, { useContext } from "react";
import { AppContext } from "../Context/AppContext";

function Pagination() {
  const { page, totalPages, handlePageChange } = useContext(AppContext);

  return (
    <>
      <div className="flex justify-around py-[10px] fixed w-full bg-white bottom-0 ">
        <div className="flex gap-2">
          {page > 1 && (
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
        </div>
        <p className="bg-transparent  text-blue-700 font-semibold  py-2 px-4 border border-blue-500 rounded">
          Page{page} of {totalPages}
        </p>
      </div>
    </>
  );
}

export default Pagination;
