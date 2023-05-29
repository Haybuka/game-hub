import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import {z} from 'zod'
import {zodResolver} from '@hookform/resolvers/zod'

const schema = z.object({
    name:z.string().min(3,{message:'Name must be at least 3 chars'}),
    age : z.number().min(18)
})

type FormData = z.infer<typeof schema>;

const Form = () => {
  const { register,handleSubmit,formState:{errors} } = useForm<FormData>({resolver:zodResolver(schema)});
 
  const onSubmit = (data:FieldValues) => console.log(data)
  return (
    <form action="" className="p-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label> 
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name")}
        />
        {errors.name && <p className="text-danger my-2">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age")}

        />
        {errors.age && <p className="text-danger my-2">{errors.age.message}</p>}

      </div>
      <button type="submit" className="btn btn-primary">
        submit
      </button>
    </form>
  );
};

export default Form;
