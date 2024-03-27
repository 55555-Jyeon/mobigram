import style from "./easyLogin.module.css";

export default function EasyLogin() {
  return (
    <div className={style.easyLogin}>
      <div
        className={style.icon}
        style={{ background: "url(/icon/github.png) center / contain" }}
      />
      <p>Log in with GitHub</p>
    </div>
  );
}
