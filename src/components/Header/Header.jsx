import s from "./Header.module.scss";
import Logo from "../../assets/punk.png";
import { FaPhone, FaChrome, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export const Header = () => {
  return (
    <div className={s.container}>
      <div className={s.main}>
        <img src={Logo} alt="headshot" className={s.logo} />
        <div className={s.nameSection}>
          <h1 className={s.name}>Asam Shan</h1>
          <h3 className={s.wallet}>shan8851.eth</h3>
        </div>
      </div>
      <div className={s.info}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.shan8851.com/"
        >
          <FaChrome className={s.icon} />
        </a>
        <a
          href="https://www.linkedin.com/in/asamshan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className={s.icon} />
        </a>
        <a
          href="https://github.com/shan8851"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className={s.icon} />
        </a>
        <a className={s.link} href="tel:07784158641">
          <FaPhone className={s.icon} />
        </a>
        <a className={s.link} href="mailto:asamshan456@gmail.com">
          <MdOutlineMail className={s.icon} />
        </a>
      </div>
    </div>
  );
};
