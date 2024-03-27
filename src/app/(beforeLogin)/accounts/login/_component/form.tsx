"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import style from "./form.module.css";
import Logo from "../../../../../../public/logo.png";
import { SIGNIN } from "../../_consts/requirements";
import FormButton from "../../_component/FormButton";
import FormInput from "../../_component/FormInput";
import EasyLogin from "../../_component/EasyLogin";
import SwitchForm from "../../_component/SwitchForm";

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
    <div className={style.container}>
      <form>
        <Image className={style.logo} src={Logo} alt={"mobigram"} />
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
        <FormButton>Sign in</FormButton>
        <div className={style.lineGroup}>
          <p>OR</p>
        </div>
        <EasyLogin />
        <p className={style.findPW}>Forgot password?</p>
      </form>
      <SwitchForm
        text="Don’t have an account?"
        link="/accounts/emailsignup"
        navTo="Sign up"
      />
    </div>
  );
}
