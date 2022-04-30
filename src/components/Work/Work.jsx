import s from "./Work.module.scss";
import { data } from "../../data/work";

export const Work = () => {
  return (
    <div className={s.container}>
      <h1 className={s.heading}>Work Experience</h1>
      <div className={s.line} />
      <div className={s.wrapper}>
        {data.map((item, index) => (
          <div key={index}>
            <div>
              <h3 className={s.companyName}>{item.company}</h3>
              <span className={s.jobTitle}>{item.title}</span>
            </div>
            <p className={s.date}>{item.dates}</p>

            <div>
              <ul key={index}>
                {item.bullets.map((bullet, index) => (
                  <li className={s.bullet} key={index}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
