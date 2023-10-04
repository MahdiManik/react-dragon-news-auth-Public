import logo from "../../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <img src={logo} alt="This is a logo" />
      <p className="text-xl">Journalism Without Fear or Favour</p>
      <p className="text-2xl font-semibold">
        {moment().format("dddd, MMMM D, YYYY")}
      </p>
    </div>
  );
};

export default Header;
