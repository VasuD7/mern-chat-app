import Logout from "../pages/Logout";
import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div className="border-r border-slate-200 flex flex-col p-4">
      <SearchInput />
      <div className="divider" />
      <Conversations />
      <Logout />
    </div>
  );
};

export default Sidebar;

// import Logout from "../pages/Logout";
// import Conversations from "./Conversations";
// import SearchInput from "./SearchInput";

// const Sidebar = () => {
//   return (
//     <div className="border-r border-slate-200 flex flex-col p-4">
//       <SearchInput />
//       <div className="divider" />
//       <Conversations />
//       <Logout />
//     </div>
//   );
// };

// export default Sidebar;
