import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import qZone1 from "../../../../assets/qZone1.png";
import qZone2 from "../../../../assets/qZone2.png";
import qZone3 from "../../../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="">
        <h3 className="text-2xl font-semibold mb-10">Login With</h3>
        <div className="flex flex-col justify-center items-center gap-4">
          <button className="btn btn-outline w-full">
            <FaGoogle></FaGoogle>
            Login with google
          </button>
          <button className="btn btn-outline w-full">
            <FaGithub></FaGithub>
            Login with github
          </button>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-8">Find Us On</h3>
        <div className="flex flex-col justify-center items-center ">
          <Link className="border rounded-t-lg pl-2 flex justify-start h-12 items-center gap-3 w-full">
            <FaFacebook></FaFacebook>
            Facebook
          </Link>
          <Link className="border-x pl-2 rounded-t-lg flex justify-start h-12 items-center gap-3 w-full">
            <FaTwitter></FaTwitter>
            Twitter
          </Link>
          <Link className="border rounded-t-lg pl-2 flex justify-start h-12 items-center gap-3 w-full">
            <FaInstagram></FaInstagram>
            Instagram
          </Link>
        </div>
      </div>

      <h3 className="text-2xl font-semibold mt-20">Q-Zone</h3>
      <div className="flex flex-col gap-10 mt-8">
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={qZone1} alt="" />
          <p>Swimming</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={qZone2} alt="" />
          <p>Class</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-3">
          <img src={qZone3} alt="" />
          <p>Play Ground</p>
        </div>
      </div>
    </div>
  );
};

export default RightSideNav;
