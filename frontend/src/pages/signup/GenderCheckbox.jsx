const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-3">
      {/* for male */}
      <div className="form-control">
        <label className={`label cursor-pointer gap-2`}>
          <span className="label-text">Male</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectedGender === "male"}
            onChange={() => {
              onCheckboxChange("male");
            }}
          />
        </label>
      </div>

      {/* for female */}
      <div className="form-control">
        <label className={`label cursor-pointer ml-3 gap-2 `}>
          <span className="label-text">Female</span>
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={selectedGender === "female"}
            onChange={() => {
              onCheckboxChange("female");
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
