const GenderCheckbox = () => {
  return (
    <div className="form-control flex flex-row items-center">
      {/* Radio button for Male */}
      <label className={`label gap-2 cursor-pointer`}>
        <span className="label-text">Male</span>
        <input
          type="radio"
          name="gender"
          value="male"
          className="checkbox border-slate-500"
          defaultChecked
        />
      </label>

      {/* Radio button for Female */}
      <label className={`label gap-2 cursor-pointer`}>
        <span className="label-text">Female</span>
        <input
          type="radio"
          name="gender"
          value="female"
          className="checkbox border-slate-500"
        />
      </label>
    </div>
  );
};

export default GenderCheckbox;

// const GenderCheckbox = () => {
//     return (
//       <div className="form-control flex flex-row items-center">
//         {/* Radio button for Male */}
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Male</span>
//           <input
//             type="radio"
//             name="gender"
//             value="male"
//             className="checkbox border-slate-500"
//             defaultChecked
//           />
//         </label>

//         {/* Radio button for Female */}
//         <label className={`label gap-2 cursor-pointer`}>
//           <span className="label-text">Female</span>
//           <input
//             type="radio"
//             name="gender"
//             value="female"
//             className="checkbox border-slate-500"
//           />
//         </label>
//       </div>
//     );
//   };

//   export default GenderCheckbox;
