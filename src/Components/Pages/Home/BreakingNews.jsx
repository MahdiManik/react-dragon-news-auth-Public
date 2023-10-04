import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="my-6 flex bg-white bg-opacity-10 py-3 rounded-md">
      <button className="btn btn-secondary border-0 bg-red-800">
        Breaking News
      </button>
      <Marquee speed={200}>
        <Link className="mr-12" to={"/"}>
          I can be a React component, multiple React components, or just some
          text...
        </Link>
        <Link className="mr-12" to={"/"}>
          I can be a React component, multiple React components, or just some
          text...
        </Link>
        <Link className="mr-12" to={"/"}>
          I can be a React component, multiple React components, or just some
          text...
        </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
