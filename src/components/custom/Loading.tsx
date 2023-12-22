// import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center relative">
      {/*
      <Loader className="w-[200px] h-[200px] animate-spin" />
 */}

      <svg className="spinner" viewBox="0 0 50 50">
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
        ></circle>
      </svg>
    </div>
  );
};

export default Loading;
