import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { DataContext } from "./MyContext";
import "./index.css";

function Form() {
  const [data, setData] = useContext(DataContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (input) => {
    const id = nanoid();
    setData([...data, { id, name: input.name }]);
  };
  return (
    <div className="form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-input">
          <input
            className="input-list"
            placeholder="e.g. Do Homework"
            type="text"
            {...register("name")}
          />
          <input className="button-sub" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default Form;
