import { useState } from "react";

const Form = () => {
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:8080/colors/${input}`;
    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    setInput("");
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Ingresa un color"
          value={input}
          onChange={handleChange}
          name="color"
        />
        <button onClick={handleSubmit}>Agregar color</button>
      </form>
    </div>
  );
};

export default Form;
