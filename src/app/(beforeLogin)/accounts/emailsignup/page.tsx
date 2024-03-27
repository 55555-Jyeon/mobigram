"use client";

import Image from "next/image";
import style from "./signup.module.css";
import SwitchForm from "../_component/SwitchForm";
import EasyLogin from "../_component/EasyLogin";
import { SIGNUP } from "../_consts/requirements";
import FormInput from "../_component/FormInput";
import { useForm } from "react-hook-form";
import FormButton from "../_component/FormButton";

export default function SignUpPage() {
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
    <main className={style.container}>
      <form>
        <Image
          className={style.logo}
          width={180}
          height={54}
          src={"/logo.png"}
          alt={"mobigram"}
        />
        <p className={style.text}>
          Sign up to see photos and videos from your friends.
        </p>
        <EasyLogin />
        <div className={style.lineGroup}>
          <p>OR</p>
        </div>
        {SIGNUP.map((item, idx) => {
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
        <FormButton>Sign up</FormButton>
      </form>
      <SwitchForm
        text="Have an account?"
        link="/accounts/login/source"
        navTo="Log in"
      />
    </main>
  );
}
