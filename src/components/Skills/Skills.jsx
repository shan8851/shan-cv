import s from "./Skills.module.scss";
import { data } from "../../data/skills";

export const Skills = () => {
  return (
    <div className={s.container}>
      <h1 className={s.heading}>Skills</h1>
      <div className={s.wrapper}>
        {data.map((item, index) => (
          <p className={s.pill} key={index}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};
