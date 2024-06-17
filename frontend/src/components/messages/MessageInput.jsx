import { BsSend } from "react-icons/bs";

const MessageInput = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Message sent!");
  };

  return (
    <form className="px-9 my-4" onSubmit={handleSubmit}>
      <div className="w-full relative flex justify-center">
        <label htmlFor="message-input" className="sr-only">
          Message
        </label>
        <input
          id="message-input"
          type="text"
          placeholder="Send a message"
          className="input w-full max-w-xs text-sm border rounded-lg py-2 px-3 bg-gray-700 border-gray-600 text-white"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center  btn btn-primary pe-3"
        >
          <BsSend className="inline-block text-white" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;

// import { BsSend } from "react-icons/bs";

// const MessageInput = () => {
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your form submission logic here
//     console.log("Message sent!");
//   };

//   return (
//     <form className="px-9 my-4" onSubmit={handleSubmit}>
//       <div className="flex justify-center">
//         <label htmlFor="message-input" className="sr-only">
//           Message
//         </label>
//         <input
//           id="message-input"
//           type="text"
//           placeholder="Send a message"
//           className="input w-full max-w-xs text-sm border rounded-lg py-2 px-3 bg-gray-700 border-gray-600 text-white"
//         />
//         <button type="submit" className="btn btn-sm btn-primary ml-2 h-10">
//           <BsSend className="inline-block text-white" />
//         </button>
//       </div>
//     </form>
//   );
// };

// export default MessageInput;
