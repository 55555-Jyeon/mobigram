import style from "./formButton.module.css";

type TProps = {
  children: string;
};
export default function FormButton({ children }: TProps) {
  return <div className={style.container}>{children}</div>;
}
