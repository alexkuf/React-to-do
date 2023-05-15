import useTodoForm from "../hooks/useTodoForm";
import TodoFormOption from "./todoFormOption";

const TodoForm = ({
  onSubmit,
  handleChangeInputDate,
  todos,
  addNewItemInState,
  existDateInputChange,
  handleChangeInputExist,
  myDate,
  existingDay,
  setExistingDay,
  insertInExistDate,
}) => {
  const {
    input,
    error,
    selects,
    handleSelectChange,
    handleInputChange,
    handleSubmit,
    handleSubmitTwo,
  } = useTodoForm({ onSubmit });

  return (
    <div className="toTodo">
      <select onChange={handleSelectChange} className="selectOp">
        <option>Please choose:</option>
        <option value="New list">New list</option>
        <option value="Existing list">Existing date</option>
      </select>

      <TodoFormOption
        error={error}
        selects={selects}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        handleSubmitTwo={handleSubmitTwo}
        handleChangeInputDate={handleChangeInputDate}
        todos={todos}
        addNewItemInState={addNewItemInState}
        existDateInputChange={existDateInputChange}
        handleChangeInputExist={handleChangeInputExist}
        myDate={myDate}
        existingDay={existingDay}
        setExistingDay={setExistingDay}
        insertInExistDate={insertInExistDate}
      />
    </div>
  );
};

export default TodoForm;
