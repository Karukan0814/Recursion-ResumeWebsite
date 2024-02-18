import { Html } from "@react-three/drei";
const Loader = () => {
  return (
    <Html>
      <div className="flex justify-center items-center text-white ">
        <div className=" w-20 h-20 border-2 border-opacity-20 border-white border-t-white rounded-full animate-spin "></div>
        Loader
      </div>
    </Html>
  );
};

export default Loader;
