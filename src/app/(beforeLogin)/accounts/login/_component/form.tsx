"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import style from "./form.module.css";
import Logo from "../../../../../../public/logo.png";
import { SIGNIN } from "../../_consts/requirements";
import FormInput from "../../_component/formInput";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      Username: "",
      Password: "",
    },
  });
  const onSubmit = () => {};
  const navSignUp = () => {};

  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <form>
          <Image src={Logo} alt={"mobigram"} />
          {SIGNIN.map((item, idx) => {
            const { label, name, type } = item;
            return (
              <FormInput
                key={idx}
                label={label}
                name={name}
                type={type as "text" | "password"}
                register={register}
                errors={(errors as any)[label]}
              />
            );
          })}
        </form>
      </div>
    </div>
  );
}
