import Form from "./_component/form";
import ImageSlider from "./_component/slider";
import style from "./signin.module.css";

export default function SignInPage() {
  return (
    <main className={style.wrapper}>
      <ImageSlider />
      <Form />
    </main>
  );
}
