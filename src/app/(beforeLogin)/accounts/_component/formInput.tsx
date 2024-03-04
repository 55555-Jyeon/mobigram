"use client";

import React, { ChangeEvent, useState } from "react";
import style from "./formInput.module.css";
import { REGEXP } from "./regexp";

type Props = {
  label: string;
  name: string;
  type: "text" | "password";
  register: any;
  isDirty?: boolean;
  errors?: boolean;
  defaultValues?: any;
};

export default function FormInput({
  label,
  name,
  type,
  register,
  isDirty,
  errors,
  defaultValues,
  ...inputProps
}: Props) {
  const [isFocused, setFocused] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleFocus = () => {
    setFocused(true);
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsValid(true);
  };
  return (
    <div className={style.container}>
      <div className={style.inputBox}>
        <label className={isFocused || isValid ? "focused" : ""}>{label}</label>
        <input
          name={name}
          type={type}
          {...inputProps}
          autoComplete="off"
          onFocus={handleFocus}
          onChange={handleInputChange}
          {...register(label, {
            required: true,
            pattern: {
              value: REGEXP[label],
              message: "error occur!",
            },
          })}
        />
        {errors ? <p>error message</p> : <p>access message</p>}
      </div>
    </div>
  );
}
