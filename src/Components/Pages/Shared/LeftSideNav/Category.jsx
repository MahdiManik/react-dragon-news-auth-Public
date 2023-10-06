import PropTypes from "prop-types";

const Category = ({ category }) => {
  const { name } = category;
  return (
    <div>
      <h3
        className="flex flex-col justify-center items-start py-3 ml-12
	   text-lg "
      >
        {name}
      </h3>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.object,
};

export default Category;
