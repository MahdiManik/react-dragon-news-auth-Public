import Navbar from "../Shared/Navbar/Navbar";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const allNews = useLoaderData();
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <h4 className="text-3xl font-poppins font-bold">This is home</h4>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          {allNews.map((news) => (
            <NewsCard key={news._id} news={news}></NewsCard>
          ))}
        </div>
        <div className="mb-10">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
