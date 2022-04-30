import s from "./Notes.module.scss";

export const Notes = () => {
  return (
    <div className={s.container}>
      <h1 className={s.heading}>Notes</h1>
      <div className={s.line} />
      <p>
        Currently available for freelance and contract opportunities in the Web3
        space. References are available on request.
      </p>
    </div>
  );
};
