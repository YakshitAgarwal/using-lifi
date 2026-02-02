const FormDetails = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-2">
        <label htmlFor="">From chain:</label>
        <input type="text" name="" id="" className="border-2" />
      </div>
      <div className="flex gap-2">
        <label htmlFor="">To chain:</label>
        <input type="text" name="" id="" className="border-2" />
      </div>
      <div className="flex gap-2">
        <label htmlFor="">From token:</label>
        <input type="text" name="" id="" className="border-2" />
      </div>
      <div className="flex gap-2">
        <label htmlFor="">To token:</label>
        <input type="text" name="" id="" className="border-2" />
      </div>
      <div className="flex gap-2">
        <label htmlFor="">Amount:</label>
        <input type="text" name="" id="" className="border-2" />
      </div>
    </div>
  );
};

export default FormDetails;
