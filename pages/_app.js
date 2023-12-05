import '../styles/global.css'
import Navbar from '../pages/components/Navbar'
import Footer from '../pages/Footer'

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