import style from "./params.module.css";
import Form from "../_component/form";

type Props = {
  params: string;
};

export default function LoginPage({ params }: Props) {
  return (
    <div className={style.container}>
      <Form />
    </div>
  );
}
