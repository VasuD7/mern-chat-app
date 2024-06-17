const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto  ">
      <div className="w-full p-6 rounded-lg shadow-lg bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 ">
        <h1 className="text-2xl font-semibold text-center text-white">
          Login <span className="text-blue-500">Chat App</span>
        </h1>
        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">username</span>
            </label>
            <input
              placeholder="Enter username"
              type="text"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">password</span>
            </label>
            <input
              placeholder="Enter password"
              type="password"
              className="w-full input input-bordered h-10"
            />
          </div>
          <a
            href="#"
            className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
          >
            {"Don't"} have an account?
          </a>
          <div>
            <button className="btn btn-block btn-sm mt-2 ">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

// const Login = () => {
//     return (
//       <div className="flex flex-col items-center justify-center min-w-96 mx-auto  ">
//         <div className="w-full p-6 rounded-lg shadow-lg bg-grey-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 ">
//           <h1 className="text-2xl font-semibold text-center text-white">
//             Login <span className="text-blue-500">Chat App</span>
//           </h1>
//           <form>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">username</span>
//               </label>
//               <input
//                 placeholder="Enter username"
//                 type="text"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <div>
//               <label className="label p-2">
//                 <span className="text-base label-text">password</span>
//               </label>
//               <input
//                 placeholder="Enter password"
//                 type="password"
//                 className="w-full input input-bordered h-10"
//               />
//             </div>
//             <a
//               href="#"
//               className="text-sm hover:underline hover:text-blue-600 mt-2 inline-block"
//             >
//               {"Don't"} have an account?
//             </a>
//             <div>
//               <button className="btn btn-block btn-sm mt-2 ">Login</button>
//             </div>
//           </form>
//         </div>
//       </div>
//     );
//   };

//   export default Login;
