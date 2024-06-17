import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-lg bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border">
        <h1 className="text-2xl font-semibold text-center  text-white">
          SignUp <span className="text-blue-500">Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              placeholder="Enter username"
              type="text"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              placeholder="Enter password"
              type="password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              placeholder="Enter password"
              type="password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              placeholder="Confirm password"
              type="password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div className="mt-4 flex">
            <GenderCheckbox />
          </div>
          <div className="mt-4">
            <a
              href="#"
              className="text-sm hover:underline hover:text-blue-600  inline-block text-center"
            >
              Already have an account?
            </a>
          </div>
          <div>
            <button className="btn btn-block btn-sm mt-2 border border-slate-700 ">
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

// import GenderCheckbox from "./GenderCheckbox";

// const SignUp = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//       <div className="w-full p-6 rounded-lg shadow-lg bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 border">
//         <h1 className="text-2xl font-semibold text-center  text-white">
//           SignUp <span className="text-blue-500">Chat App</span>
//         </h1>
//         <form>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Full Name</span>
//             </label>
//             <input
//               placeholder="Enter username"
//               type="text"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Username</span>
//             </label>
//             <input
//               placeholder="Enter password"
//               type="password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Password</span>
//             </label>
//             <input
//               placeholder="Enter password"
//               type="password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div>
//             <label className="label p-2">
//               <span className="text-base label-text">Confirm Password</span>
//             </label>
//             <input
//               placeholder="Confirm password"
//               type="password"
//               className="w-full input input-bordered h-10"
//             />
//           </div>
//           <div className="mt-4 flex">
//             <GenderCheckbox />
//           </div>
//           <div className="mt-4">
//             <a
//               href="#"
//               className="text-sm hover:underline hover:text-blue-600  inline-block text-center"
//             >
//               Already have an account?
//             </a>
//           </div>
//           <div>
//             <button className="btn btn-block btn-sm mt-2 border border-slate-700 ">
//               SignUp
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUp;
