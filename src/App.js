import { Header } from "./components/Header/Header";
import { Skills } from "./components/Skills/Skills";
import { Work } from "./components/Work/Work";
import { Projects } from "./components/Projects/Projects";
import s from "./styles/Home.module.scss";
import { Notes } from "./components/Notes/Notes";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className={s.container}>
        <Header />
        <div className={s.line} />
        <Skills />
        <Work />
        <Projects />
        <Notes />
      </div>
      <Footer />
    </>
  );
}

export default App;
