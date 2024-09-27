import { Avatar } from './Avatar'
import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img className={styles.cover}
                src='https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?q=80&w=500'
                alt="imagem de capa" />
            <div className={styles.profile}>
                <Avatar src="https://github.com/wesleygomesc6.png" />

                <strong>Wesley Carvalho</strong>
                <span>Dev Full Stack</span>
            </div>
            <footer>
                <a href='#'>
                    <PencilLine size={20} />
                    Editar se perfil
                </a>
            </footer>
        </aside>
    )
}