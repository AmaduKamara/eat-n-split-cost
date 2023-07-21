function BillForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="w-full bg-cyan-100 px-3 mt-5">
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label className="sm:text-xs md:text-lg" htmlFor="billValue">
          💰 Bill value
        </label>
        <input
          className="py-1 md:py-2 px-4  w-[150px] border rounded-md focus:outline-cyan-600"
          type="text"
          placeholder="$ Bill amount"
          id="billValue"
        />
      </div>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label className="sm:text-xs md:text-lg" htmlFor="yourExpense">
          🧍🏻‍♀️ Your expense
        </label>
        <input
          className="py-1 md:py-2 px-4  w-[150px] border rounded-md focus:outline-cyan-600"
          type="text"
          placeholder="Your expense"
          id="yourExpense"
        />
      </div>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label className="sm:text-xs md:text-lg" htmlFor="friend">
          🧍🏻 John expense
        </label>
        <input
          className="py-1 md:py-2 px-4  w-[150px] border rounded-md focus:outline-cyan-600"
          type="text"
          placeholder="$"
          id="friend"
          disabled
        />
      </div>
      <div className="mb-3 flex items-center space-x-4 justify-between">
        <label className="sm:text-xs md:text-lg" htmlFor="whoIsPaying">
          🧍🏻🤑 Who is paying
        </label>

        <select
          className="py-1 md:py-2 px-3 w-[150px] border rounded-md focus:outline-cyan-600"
          id="whoIsPaying"
        >
          <option value="You">You</option>
          <option value="Friend">Friend</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleSubmit}
          className="py-1 md:py-2 px-12 border border-cyan-600 rounded-md bg-cyan-600 text-slate-50 hover:bg-cyan-700 transition duration-300"
        >
          Add Bill
        </button>
      </div>
    </form>
  );
}

export default BillForm;
