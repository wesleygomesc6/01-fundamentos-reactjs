import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"
import { format, formatDistanceToNow } from "date-fns"
import ptBR from "date-fns/locale/pt-BR"

export function Comment({ content, time, onDeleteComment }) {
    const [likeCount, setLikeCount] = useState(0)
    const publishedDateFormatted = format(time, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
    });
    const publishedDateRelativeToNow = formatDistanceToNow(time, {
        locale: ptBR,
        addSuffix: true
    });
    function handleDeleteComment() {
        onDeleteComment(content)
    }
    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/wesleygomesc6.png" />
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wesley Carvalho</strong>
                            <time
                                title={publishedDateFormatted}
                                dateTime={time.toISOString()}
                            >
                                {publishedDateRelativeToNow}
                            </time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
