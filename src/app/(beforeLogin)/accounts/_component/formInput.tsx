"use client";

import React, { ChangeEvent, useState } from "react";
import style from "./formInput.module.css";
import { REGEXP } from "../_consts/regexp";
import ErrorIcon from "../../../../../public/icon/mismatch.png";
import AccessIcon from "../../../../../public/icon/confirm.png";
import Image from "next/image";
import { FieldValues } from "react-hook-form";

type Props = {
  label: string;
  name: string;
  type: "text" | "password";
  register: any;
  isDirty?: boolean;
  errors?: FieldValues;
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
        {errors ? (
          <Image
            className={!isFocused ? "hidden" : ""}
            src={ErrorIcon}
            alt={"error icon"}
          />
        ) : (
          <Image
            className={
              (defaultValues === null && isFocused) || !isFocused
                ? "hidden"
                : ""
            }
            src={AccessIcon}
            alt={"access icon"}
          />
        )}
      </div>
    </div>
  );
}
