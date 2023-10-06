import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = (news) => {
  const {
    others_info,
    category_id,
    rating,
    total_view,
    title,
    author,
    image_url,
    details,
    img,
  } = news.news;

  return (
    <div className="card w-full bg-base-100 shadow-xl flex flex-col justify-start items-start">
      <div className="card-body flex flex-col items-start justify-start">
        <h2 className="card-title">{title}</h2>
        <figure className="py-4">
          <img
            src={image_url}
            alt="news_thumbnail"
            className="rounded-xl items-start"
          />
        </figure>
        <p>
          {details}
          <Link
            to={"/news/:id"}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-orange-400  rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300  dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more.....
          </Link>
        </p>

        <div className="flex mt-2.5 mb-5">
          {rating.number} {rating.badge}
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
