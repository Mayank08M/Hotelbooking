import '../styles/global.css'
import Navbar from '../components/Navbar'
import Footer from '../pages/Footer'
import 'bootstrap/dist/css/bootstrap.css'

function MyApp({Component, pageProps}){
    return (
        <>
       
       
      <Navbar/>
    

    <Component{...pageProps} />
    <Footer/>
    </>
    )
    
    
}

export default MyApp