import style from "./footer.module.css";

export default function Footer() {
  return (
    <div className={style.container}>
      <p className={style.ideology}>
        Mobi is a non-profit organization that provides free education to all
        non-majors in the world who are frightened by expensive private
        education and lack of realistic time investment, and supports new
        beginnings through the formation of infrastructure after employment.
      </p>
    </div>
  );
}
