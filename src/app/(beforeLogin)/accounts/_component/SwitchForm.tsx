import style from "./switchForm.module.css";
import Link from "next/link";

type TProps = {
  text: string;
  link: string;
  navTo: string;
};

export default function SwitchForm({ text, link, navTo }: TProps) {
  return (
    <div className={style.container}>
      <span>{text}</span>
      <span>
        <Link href={link}>{navTo}</Link>
      </span>
    </div>
  );
}
