import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.author} src='https://github.com/wesleygomesc6.png' />
                    <div className={styles.authorInfo}>
                        <strong>Wesley Carvalho</strong>
                        <span>Dev Full Stack</span>
                    </div>
                </div>
                <time title="17 de setembro às 08:00" dateTime="2024-09-17 08:00:00"> Publica há 1h </time>
            </header>
            <div className={styles.content}>
                <p>Fala galera 👋 </p>

                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare </p>

                <p> 👉 <a href=''>jane.design/doctorcare</a></p>

                <p>
                    <a href=''>#novoprojeto </a>{' '}
                    <a href=''>#nlw </a>{' '}
                    <a href=''>#rocketseat</a></p>

            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário'></textarea>
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
            </div>

        </article>
    )
}