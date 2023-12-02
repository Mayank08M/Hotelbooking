import '../styles/global.css'
import Navbar from '../pages/components/Navbar'

function MyApp({Component, pageProps}){
    return (
        <>
      <Navbar/>
    <Component{...pageProps} />
    </>
    )
    
    
}

export default MyApp