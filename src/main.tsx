import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <h1 id="home">✨ 😊 The Brown Family 😊 ✨ ~ <a href="#home">Home</a> ~ <a href="#projects">Projects</a></h1>
    <br></br>
    <section>
      <p>Welcome to our website! We hope you enjoy everything we have to offer!</p>
    </section>
    <br></br>
    <h2 id="projects">Our projects:</h2>
    <a href="https://github.com/zacfloor/flappygrant.com"><img src="https://opengraph.githubassets.com/2a42b835cfc9471acadf68bc5df5ef91c3390a9341e45241c2634a19cd763074/zacfloor/flappygrant.com" width={360}></img></a>
  </StrictMode>,
)
