import Carousel from "./Carousel";
import DataDiv from "./DataDiv";
import SearchBar from "./SearchBar";
const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

const CenterScreen = () => {
  return (
    <div className="flex flex-row space-x-8">
      <div className="w-full my-4 bg-background h-screen flex flex-col">
        <div className="w-3/5 mt-2 pt-6 self-center mb-8">
          <SearchBar />
        </div>
        <h2 className="font-normal text-2xl mx-8 mt-4">
          Set-up Catalix for Success
        </h2>
        <h3 className="font-thin text-lg mx-8 mt-4 text-text-gray tracking-wide">
          Get Catalix up to date or start your transformation by following the
          guide below.
        </h3>
        <Carousel slides={slides} />
      </div>
      <DataDiv />
    </div>
  );
};
export default CenterScreen;
