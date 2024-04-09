import PropTypes from "prop-types";

const FlowChart = ({ steps, flowTime, totalActiveTime, flowEfficiency }) => {
  return (
    <div className="w-full flex flex-col items-center overflow-x-auto">
      <div className="w-full flex justify-around space-x-8 mb-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="w-40 flex flex-row items-center space-x-12"
          >
            <div
              className="bg-cover h-24 w-full flex items-center justify-center"
              style={{
                backgroundImage: "url(./src/assets/pentagon.svg)",
              }}
            >
              {step.name}
            </div>
          </div>
        ))}
      </div>
      <div className="bg-gray-200 p-4 rounded-lg">
        <div className="text-center">
          <div className="mb-2">Flow time = {flowTime}</div>
          <div className="mb-2">Total Active time = {totalActiveTime}</div>
          <div>Flow Efficiency = {flowEfficiency}</div>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 transition duration-300">
          Save
        </button>
      </div>
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
