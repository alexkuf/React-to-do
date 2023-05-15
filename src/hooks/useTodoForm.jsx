import { useState } from "react";

const useTodoForm = ({ onSubmit }) => {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [selects, setSelects] = useState([]);

  const handleSelectChange = (e) => {
    setSelects(e.target.value);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setError(null);
  };

  const handleSubmit = () => {
    if (input.length < 2) {
      setError(
        "The list should not be less than two characters. Please change: "
      );
      return;
    }
    onSubmit(input);
    setInput("");
  };
  const handleSubmitTwo = () => {
    if (input.length < 2) {
      setError(
        "The list should not be less than two characters. Please change: "
      );
      return;
    }
    setInput("");
  };

  return {
    input,
    error,
    selects,
    handleSelectChange,
    handleInputChange,
    handleSubmit,
    handleSubmitTwo,
  };
};

export default useTodoForm;
