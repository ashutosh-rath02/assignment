import PropTypes from "prop-types";
import searchIcon from "../assets/search.svg";
import crossIcon from "../assets/cross.svg";

const SearchBar = ({ width = "w-full" }) => {
  return (
    <div className="relative">
      <img
        src={searchIcon}
        alt="Search"
        className="absolute inset-y-0 left-0 w-5 h-5 self-center ml-3 pointer-events-none"
      />
      <input
        type="text"
        placeholder="Search by profile, setting, artifact etc..."
        className={`flex items-start justify-center py-3 pl-10 pr-12 leading-tight bg-white border-1 rounded-md outline-1 border-black focus:bg-white focus:border-gray-500 ${width}`}
      />
      <img
        src={crossIcon}
        alt="Clear"
        className="absolute inset-y-0 right-0 w-5 h-5 mr-3 self-center cursor-pointer"
      />
      <div className="absolute -top-3 z-10 bg-background px-2 left-0 mt-1 ml-3 text-xs text-text-secondary pointer-events-none">
        Search
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  width: PropTypes.string,
};

export default SearchBar;
