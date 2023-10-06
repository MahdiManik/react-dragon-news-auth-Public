import Header from "../Shared/Header/Header";
import { useParams } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
  const { id } = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4">
        <div className="col-span-3">
          <h3 className="text-5xl font-semibold">News Details</h3>
          <p>{id}</p>
        </div>
      </div>
    </div>
  );
};

export default News;
