import FlowChart from "./FlowChart";
import SearchBar from "./SearchBar";

const sampleData = {
  steps: [
    {
      name: "Approve Content",
      activeTime: "1 Day",
      waitTime: "2 Weeks (wait for availability)",
    },
    {
      name: "Create Content",
      activeTime: "2 Days",
      waitTime: "1 Week (wait for approval authority)",
    },
    {
      name: "Approve Content",
      activeTime: "4 Hours",
      waitTime: "2 Weeks (wait for IT support)",
    },
    {
      name: "Run Sample Test",
      activeTime: "4 Hours",
      waitTime: "1 Week (wait for response)",
    },
  ],
  flowTime: "47 Days",
  totalActiveTime: "5 Days",
  flowEfficiency: "90%",
};

const SearchPage = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-44">
      <div className="w-full flex flex-row">
        <div className="w-3/5 ml-8 pt-6 self-start">
          <SearchBar />
        </div>
        <div className="w-full flex flex-row justify-end space-x-2 mt-8 mr-6">
          <button className="bg-white rounded-xl border-none shadow-xl px-2 py-1">
            <img src="./src/assets/bell.svg" alt="notification" />
          </button>
          <button className="bg-white rounded-xl border-none shadow-xl px-2 p-1 mr-6">
            <img src="./src/assets/chat.svg" alt="chat" />
          </button>
          <button className="bg-white rounded-xl border-none shadow-xl px-2 p-1 mr-6">
            <img src="./src/assets/Settings.svg" alt="settings" />
          </button>
          <button>
            <img
              className="w-8 h-8 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="./src/assets/avatar.jpg"
              alt="Rounded avatar"
            />
          </button>
        </div>
      </div>
      <FlowChart {...sampleData} />
    </div>
  );
};

export default SearchPage;
