import PropTypes from "prop-types";

const FlowChart = ({ steps }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <div className="ml-24 w-full flex items-center justify-center mb-8 overflow-x-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex w-full flex-row items-center justify-center "
          >
            <div
              className="bg-cover h-24 w-full flex items-center justify-start text-white mx-auto"
              style={{
                backgroundImage: "url(./src/assets/pentagon.svg)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            >
              <span className="self-center ml-2 ">{step.name}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex justify-center items-center">
                <img src="./src/assets/arrow.svg" alt="arrow" />
                <img src="./src/assets/timecircle.svg" alt="time circle" />
                <img src="./src/assets/arrow.svg" alt="arrow" />
              </div>
            )}
          </div>
        ))}
      </div>
      <hr className="w-11/12 my-4" />
      <div className="w-11/12 px-16 flex items-center justify-between">
        {steps.map((step, index) => (
          <div className="flex items-center justify-between" key={index}>
            {step.activeTime}
          </div>
        ))}
      </div>
      <hr className="w-11/12 my-4" />
      <div className="w-11/12 px-24 flex items-center justify-between">
        {steps.map((step, index) => (
          <div
            className="flex items-center justify-around bg-[#F1F7ED] h-24 "
            key={index}
          >
            <span className="w-3/4 text-center">{step.waitTime}</span>
          </div>
        ))}
      </div>
      <img src="./src/assets/arrowlong.svg" alt="arrow" className="w-11/12" />
      <div className="w-11/12 px-24 mt-2 flex items-center justify-between">
        <span className="font-bold text-xl">Flow Time = 47 Days</span>
        <span className="font-bold text-xl">Total Active Time = 5 Days</span>
        <span className="font-bold text-xl">Flow Efficiency = 11%</span>
      </div>
      <button className="px-8 py-2 mt-8 self-center border-none text-white font-medium text-lg rounded-full bg-[#27667F] flex items-center justify-center cursor-pointer">
        Save
      </button>
    </div>
  );
};

FlowChart.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      activeTime: PropTypes.string.isRequired,
      waitTime: PropTypes.string.isRequired,
    })
  ).isRequired,
  flowTime: PropTypes.string.isRequired,
  totalActiveTime: PropTypes.string.isRequired,
  flowEfficiency: PropTypes.string.isRequired,
};

export default FlowChart;
