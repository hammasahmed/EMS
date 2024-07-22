
import './App.css'
import Navbar from "./components/navbar";
import Hero from './components/hero'
import Featured_services from './components/featured_services'
import Testimonial from './components/testimonial'
import Footer from './components/footer'

function App() {
    return (
        <div>
           <Navbar />
           <Hero />
           <Featured_services />
           <Testimonial />
           <Footer />
           
        </div>
    )
}

export default App
