import Form from "./_component/form";
import ImageSlider from "./_component/slider";
import style from "./signin.module.css";

export default function IntroPage() {
  return (
    <main className={style.wrapper}>
      <ImageSlider />
      <div className={style.formContainer}>
        <Form />
      </div>
    </main>
  );
}
