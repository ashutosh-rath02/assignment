const DataDiv = () => {
  // Data div content goes here
  return (
    <div className="px-8 w-2/4 h-full flex flex-col bg-white shadow-lg">
      <div className="w-full flex flex-row justify-end space-x-2 mt-8">
        <button className="bg-white rounded-xl border-none shadow-xl px-2 py-1">
          <img src="./src/assets/bell.svg" alt="notification" />
        </button>
        <button className="bg-white rounded-xl border-none shadow-xl px-2 p-1 mr-6">
          <img src="./src/assets/chat.svg" alt="chat" />
        </button>
      </div>
      <div className="mt-16 flex flex-col">
        <span className="text-3xl tracking-wide font-medium">
          Get ready to transform
        </span>
        <span className="text-text-gray text-[15px] leading-5 mt-4 font-thin w-11/12">
          Here’s a video to get started. As your transformation progresses,
          you’ll get fresh tips and insights here.
        </span>
      </div>
      <div className="mt-4 flex items-center justify-center">
        <img
          className="rounded-lg h-auto border-1 shadow-xl"
          src="./src/assets/video.svg"
          alt="video"
        />
      </div>
    </div>
  );
};
export default DataDiv;
