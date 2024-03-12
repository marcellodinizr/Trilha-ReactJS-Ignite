import styles from './App.module.css'
import { Header } from "./components/Header"
import { Post } from "./components/Post"
import { Siderbar } from './components/Sidebar'

import './global.css'

const posts = [
		{
			id: 1,
			author: {
				avatarUrl: 'https://github.com/marcellodinizr.png',
				name: 'Marcello Diniz',
				role: 'Software Developer'
			},
			content:  [
				{ type: 'paragraph', content: 'Fala galeraa 👋', },
				{ type: 'paragraph', content : 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
				{ type: 'link', content: 'jane.design/doctorcare', },
			],
			publishedAt: new Date('2023-12-01 10:23:30')
		},
		{
			id: 2,
			author: {
				avatarUrl: 'https://github.com/maykbrito.png',
				name: 'Mayk Brito',
				role: 'Educator @Rocketseat'
			},
			content:  [
				{ type: 'paragraph', content: 'Fala galeraa 👋', },
				{ type: 'paragraph', content : 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',},
				{ type: 'link', content: 'jane.design/doctorcare', },
			],
			publishedAt: new Date('2023-12-06 10:23:30')
		}
	];

export function App() {
  return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Siderbar />
				
				<main>
					{posts.map(post => {
						return (
							<Post
								key={post.id}
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
							/>
						)
					})}
				</main>
			</div>
		</div>
  )
}

