import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"

export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/wesleygomesc6.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wesley Carvalho</strong>
                            <time title="17 de setembro às 08:00" dateTime="2024-09-17 08:00:00"> Cerca de 4h atrás </time>
                        </div>

                        <button title="Deletar comentário">
                            <Trash size={20} />
                        </button>
                    </header>
                    <p>Muito bom, parabéns!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
