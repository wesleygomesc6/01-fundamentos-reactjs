import './global.css'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post, PostType } from './components/Post'

function App() {

  const post: PostType[] = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/wesleygomesc6.png',
        name: 'Wesley Carvalho',
        role: 'Dev FullStack'
      },
      content: [
        { type: 'paragraph', content: 'Fala galera 👋 ' },
        { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('1999-05-06 11:40:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=80&w=500',
        name: 'Isaac Carvalho',
        role: 'Dev FrontEnd'
      },
      content: [
        { type: 'paragraph', content: 'Ficou muito bom. ' },
        { type: 'paragraph', content: 'Mesmo o projeto ficando muito bom eu ainda prefiro Vuejs pela facilidade. React é muito complicado' },
        { type: 'link', content: 'jane.design/doctorcare' },
      ],
      publishedAt: new Date('2020-10-22 23:00:00')
    },
  ]

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map((post => {
            return <Post key={post.id} post={post} />
          }))}
        </main>
      </div>

    </div>
  )
}

export default App
