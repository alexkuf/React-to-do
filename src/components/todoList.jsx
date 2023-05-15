import TodoItem from "./todoItem";
const TodoList = ({
  todo: { todoId, date, items },
  onCompleteChange,
  handleDeleteItem,
  handleAccordionClick,
  handleEditInputVale,
  onHandleSaveTodo,
  accordion,
  deleteList,
  onClickEdit,
}) => {
  const completedTodos = items.filter((elem) => elem.isComplete);
  const styleChange = {
    background: "#1898ee",
    color: "black",
    border: "none",
    transition: "max-height 0.5s ease-out",
  };

  return (
    <div className="accordionList">
      <div
        className="accardion"
        style={accordion === todoId ? styleChange : null}
      >
        <button
          className="deleteIcon"
          onClick={() => deleteList(todoId)}
          title="Delete this day"
        >
          <i className="bi bi-x-circle"></i>
        </button>
        <h3 className="title" onClick={() => handleAccordionClick(todoId)}>
          {date}
        </h3>
        <p className="counts">
          {"("}
          {completedTodos.length} /{items.length}
          {")"}
        </p>
      </div>
      <div
        className="spanVertical"
        onClick={() => handleAccordionClick(todoId)}
      >
        {accordion === todoId ? (
          <span className="verticle">
            <i className="bi bi-caret-down"></i>
          </span>
        ) : (
          <span className="verticle">
            <i className="bi bi-caret-right"></i>
          </span>
        )}
      </div>
      <div className={accordion === todoId ? "active" : "inactive"}>
        {items
          .sort((a) => (a.isComplete ? 1 : -1))
          .map((elem) => (
            <TodoItem
              key={elem.idItem}
              elem={elem}
              onCompleteChange={(isComplete) =>
                onCompleteChange(elem.idItem, isComplete)
              }
              handleDeleteItem={() => handleDeleteItem(elem.idItem)}
              onClickEdit={(isUpdate) => onClickEdit(elem.idItem, isUpdate)}
              handleEditInputVale={(newTitle) =>
                handleEditInputVale(elem.idItem, newTitle)
              }
              onHandleSaveTodo={() => onHandleSaveTodo(elem.idItem)}
            />
          ))}
      </div>
    </div>
  );
};

export default TodoList;
