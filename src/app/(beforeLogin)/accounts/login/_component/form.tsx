"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import style from "./form.module.css";
import Logo from "../../../../../../public/logo.png";

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
        </form>
      </div>
    </div>
  );
}
