import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';
import styles from './Comment.module.css';

export function Comment({ content }) {
	return (
		<div className={styles.comment}>
			<Avatar hasBorder={false} src="https://github.com/marcellodinizr.png" alt="" />

			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header>
						<div className={styles.authorAndTime}>
							<strong>Marcello Diniz</strong>
							<time title='01 de dezembro as 10:23h' dateTime='2023-12-01 10:23:30'>Cerca de 1h atrás</time>
						</div>

						<button title='Deletar comentário'>
							<Trash size={24} />
						</button>
					</header>

					<p>{content}</p>
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