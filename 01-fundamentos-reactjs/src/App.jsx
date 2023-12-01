import styles from './App.module.css'
import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'
import { Siderbar } from './components/Sidebar'

export function App() {

  return (
		<div>
			<Header />

			<div className={styles.wrapper}>
				<Siderbar />
				
				<main>
					<Post 
						author="Marcello Diniz"
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet nunc erat, id pellentesque elit ultricies nec. Ut eget ipsum."
					/>
					<Post
						author="Kawane Ferreira"
						content="Phasellus laoreet nunc erat, id pellentesque elit ultricies nec. Ut eget ipsum."
					/>
				</main>
			</div>
		</div>
  )
}

