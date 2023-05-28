import React, { FormEvent, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const person:{name:string | undefined,age:number | undefined} = {name : '', age : 0}
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    person.name = nameRef?.current?.value
    person.age = ageRef?.current?.valueAsNumber
  };
  return (
    <form action="" className="p-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={nameRef} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input ref={ageRef} id="age" type="number" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default Form;
