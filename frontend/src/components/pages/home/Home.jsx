import MessageContainer from "../../messages/MessageContainer";
import Sidebar from "../../sidebar/Sidebar";

const Home = () => {
  return (
    <div className="flex sm:h-[550px] md:h-[650px] rounded-lg overflow-hidden bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <Sidebar />
      <MessageContainer />
    </div>
  );
};

export default Home;

// import Sidebar from "../../sidebar/Sidebar";

// const Home = () => {
//   return (
//     <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//       <Sidebar />
//     </div>
//   );
// };

// export default Home;
