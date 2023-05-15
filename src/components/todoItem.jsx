import { useState } from "react";

const TodoItem = ({
  elem: { title, isComplete, createdDate, isUpdate },
  onCompleteChange = () => {},
  handleDeleteItem = () => {},
  onClickEdit = () => {},
  handleEditInputVale = () => {},
  onHandleSaveTodo = () => {},
}) => {
  const styles = {
    fromCheckBox: {
      textDecoration: isComplete ? "line-through solid red" : "none",
    },
  };
  const [message, setMessage] = useState(title);

  const handleChange = () => {
    setMessage(title);
    onClickEdit();
  };
  return (
    <div className="divItems">
      {isUpdate ? (
        <>
          <input
            type="text"
            className="inputSave"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
              handleEditInputVale(e.target.value);
            }}
          />
          <button className="btnSave" onClick={onHandleSaveTodo}>
            <i className="bi bi-check2"></i>
          </button>
        </>
      ) : (
        <>
          <input
            type="checkbox"
            className="inputCheck"
            checked={isComplete}
            onChange={(e) => onCompleteChange(e.target.checked)}
          />
          <label
            className="fromCheckBox"
            htmlFor="firstCheckbox"
            style={styles.fromCheckBox}
            title={createdDate}
          >
            {title}
          </label>

          <button onClick={handleChange} className="change" title="Edit item">
            <i className="bi bi-pencil-fill"></i>
          </button>
          <button
            onClick={handleDeleteItem}
            className="delete"
            title="Delete item"
          >
            <i className="bi bi-trash3-fill"></i>
          </button>
        </>
      )}
    </div>
  );
};
export default TodoItem;
