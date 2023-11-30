import { Post } from "./Post"
import { Header } from "./components/Header"

import './global.css'

export function App() {

  return (
		<div>
			<Header />

			<Post 
				author="Marcello Diniz"
				content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus laoreet nunc erat, id pellentesque elit ultricies nec. Ut eget ipsum."
			/>
			<Post
			author="Kawane Ferreira"
				content="Phasellus laoreet nunc erat, id pellentesque elit ultricies nec. Ut eget ipsum."
			/>
		</div>
  )
}

