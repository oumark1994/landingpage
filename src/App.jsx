import {Achievement, CTA, Categories, Companies, Courses, Feedback, Footer, Hero, Navbar} from "./components"
import './App.css'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Companies/>
      <Courses/>
      <Achievement/>
      <Categories/>
      <Feedback/>
       <CTA/>
       <Footer/>
    </div>
  )
}

export default App