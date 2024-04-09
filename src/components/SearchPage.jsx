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
    },
  ],
  flowTime: "47 Days",
  totalActiveTime: "5 Days",
  flowEfficiency: "90%",
};

const SearchPage = () => {
  return (
    <div className="w-full flex flex-col items-center space-y-28">
      <div className="w-full flex mt-6 flex-row">
        <div className="w-3/5 ml-8 pt-6 self-start">
          <SearchBar />
        </div>
        <div className="w-full flex flex-row justify-end space-x-2 mt-8 mr-6 border-0">
          <button className="flex flex-col items-center justify-center bg-white rounded-xl border-none shadow-xl px-2 py-1">
            <img
              src="https://res.cloudinary.com/dhnkuonev/image/upload/v1712681879/bell_tx1jzx.svg"
              alt="notification"
            />
          </button>
          <button className="flex flex-col items-center justify-center bg-white rounded-xl border-none shadow-xl px-2 p-1 mr-6">
            <img
              src="https://res.cloudinary.com/dhnkuonev/image/upload/v1712681880/chat_aousmm.svg"
              alt="chat"
            />
          </button>
          <button className="flex flex-col items-center justify-center bg-white rounded-xl border-none shadow-xl px-2 p-1 mr-6">
            <img
              src="https://res.cloudinary.com/dhnkuonev/image/upload/v1712681879/Settings_d5iiu6.svg"
              alt="settings"
            />
          </button>
          <img
            className="inline-block size-9 border-2 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
      </div>
      <FlowChart {...sampleData} />
    </div>
  );
};

export default SearchPage;
