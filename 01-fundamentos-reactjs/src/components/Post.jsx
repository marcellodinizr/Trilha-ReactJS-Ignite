import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
	return (
		<article className={styles.post}>
			<header>
				<div className={styles.author}>
					<Avatar src="https://github.com/marcellodinizr.png" />
					<div className={styles.authorInfo}>
						<strong>Marcello Diniz</strong>
						<span> Software Developer</span>
					</div>
				</div>

				<time title='01 de dezembro as 10:23h' dateTime='2023-12-01 10:23:30'>Publicado há 1h</time>
			</header>

			<div className={styles.content}>
				<p>	Fala galeraa 👋</p>
				<p>	Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
				<p> <a href="">jane.design/doctorcare</a></p>
				<p> 
					<a href="">#novoprojeto</a>{' '}
					<a href="">#nlw</a>{' '}
					<a href="">#rocketseat</a>{' '}
				</p>
			</div>

			<form className={styles.commentForm}>
				<strong>Deixe seu feedback</strong>

				<textarea 
					placeholder='Deixe um comentário'
				/>
				<footer>
					<button type='submit'>Comentar</button>
				</footer>
			</form>

			<div className={styles.commentList}>
				<Comment />
			</div>
		</article>
	)
}