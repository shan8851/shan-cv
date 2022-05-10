import { FaFileDownload } from "react-icons/fa";
import s from "./DownloadIcon.module.scss";
import PDF from "../../assets/cv.pdf";

export const DownloadIcon = () => {
  return (
    <a href={PDF} download="cv" className={s.downloadContainer}>
      <FaFileDownload className={s.icon} />
      <p className={s.text}>Download PDF</p>
    </a>
  );
};
