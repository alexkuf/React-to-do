const TodoFormOption = ({
  selects,
  error,
  input,
  todos,
  handleSubmit = () => {},
  handleSubmitTwo = () => {},
  handleInputChange,
  handleChangeInputDate = () => {},
  addNewItemInState = () => {},
  existDateInputChange = () => {},
  handleChangeInputExist = () => {},
  myDate,
  existingDay,
  setExistingDay,
  insertInExistDate = () => {},
}) => {
  return (
    <>
      {(() => {
        if (selects === "New list") {
          return (
            <>
              <input
                type="date"
                className="inputDate"
                onChange={handleChangeInputDate}
              />
              <input
                type="text"
                placeholder="What do you want to do:"
                value={input}
                onInput={handleInputChange}
                className="inputForm"
              />
              <button
                onClick={handleSubmit}
                className="add"
                title="Add new item to list"
              >
                Add
              </button>
              {error ? <div className="textError">{error}</div> : null}
              {existingDay ? (
                <div className="textexist">
                  {myDate} - exists! Want to add new item to an existing date?
                  <button
                    className="yes"
                    onClick={() => {
                      insertInExistDate();
                    }}
                  >
                    Yes
                  </button>
                  <button className="no" onClick={() => setExistingDay(false)}>
                    No
                  </button>
                </div>
              ) : null}
            </>
          );
        } else if (selects === "Existing list") {
          return (
            <>
              <select className="selectAllDate" onChange={existDateInputChange}>
                <option>Choose date:</option>
                {todos &&
                  todos.map((todo) => {
                    return <option key={todo.todoId}>{todo.date}</option>;
                  })}
              </select>
              <input
                type="text"
                placeholder="What do you want to do:"
                value={input}
                onInput={handleInputChange}
                onChange={handleChangeInputExist}
                className="inputForm"
              />
              <button
                onClick={() => {
                  handleSubmitTwo();
                  addNewItemInState();
                  setExistingDay(false);
                }}
                className="add"
                title="Add new item to list"
              >
                <i className="bi bi-arrow-return-left"></i>
              </button>
              {error ? <div className="textError">{error}</div> : null}
            </>
          );
        }
      })()}
    </>
  );
};

export default TodoFormOption;
