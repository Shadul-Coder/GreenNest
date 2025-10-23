import { DotLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-[350px] flex justify-center items-center sm:h-[400px] lg:h-[500px]">
      <DotLoader color="#00c951" speedMultiplier={1.5} />
    </div>
  );
};

export default Loading;