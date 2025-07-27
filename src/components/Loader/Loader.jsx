import { FadeLoader } from "react-spinners";

function Loader() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <FadeLoader color="#252a31" />
    </div>
  );
}

export default Loader;
