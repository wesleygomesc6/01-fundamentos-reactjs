import { Header } from "./components/Header"
import { Post } from "./components/Post"
import './global.css'
import styles from './App.module.css'
import { Sidebar } from "./components/Sidebar"

function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author='Wesley Carvalho' content="Muito conteudo aqui lorem ipsum" />
          <Post author='Isaac Carvalho' content="Muito conteudo aqui lorem ipsum" />
        </main>
      </div>

    </div>
  )
}

export default App
