import{ BrowserRouter} from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, ReactVideoPlayer, Tech, } from './components' 


const App = () =>  {
  

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeeat bg-center'>
          <Navbar /> 
          <Hero /> 
        </div>
        <About />
          <ReactVideoPlayer />
        <Experience/>
        <div className='relative z-0'>
          <Contact/>
        </div>
        <Tech/>
      </div>
    </BrowserRouter>
  )
}

export default App
