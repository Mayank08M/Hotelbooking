import React,{useState, useEffect} from 'react'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { FaBars, FaTimes } from 'react-icons/fa'
import axios from 'axios';


const navbarTabs = [
  {
    id: 1,
    item: 'About Us',
    route: 'about'
  },
  {
    id: 2,
    item: 'Contact Us',
    route: 'contact'
  },
  {
    id: 3,
    item: 'Hotels',
    route: 'hotels'
  },
  {
    id: 4,
    item: 'Cities',
    route: 'city'
  },
  {
    id: 5,
    item: 'List Hotel',
    route: 'listyourhotelpage'
  },
  {
    id: 6,
    item: 'Hotelsearch',
    route: 'hoteldetailui'
  },
  {
    id: 7,
    item: 'Below',
    route: 'belowpart'
  },
  {
    id: 8,
    item: 'Lights',
    route: 'lightscard'
  },
  {
    id: 9,
    item: 'Checkout',
    route: 'checkoutpage'
  }
]


const Navbar = () => {
  // const [searchTerm, setSearchTerm] = useState('');
  // const [suggestions, setSuggestions] = useState([]);
  let router = useRouter();
  const [showMenu, setShowMenu] = useState(false);

  function handleRedirectToHomepge() {
    router.push('/')
  }

  const onClick = ()=>{
    setShowMenu(!showMenu);
  }

  function handleRedirectToTabs(tabs) {
    router.push(`/${tabs}`)
  }
  const fetchSuggestions = async (term) => {
    try {
      const response = await axios.get(`/suggestions/${term}`);
      setSuggestions(response.data);
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };
  // useEffect(() => {
  //   if (searchTerm.trim() !== '') {
  //     fetchSuggestions(searchTerm);
  //   } else {
  //     setSuggestions([]); // Clear suggestions if search term is empty
  //   }
  // }, [searchTerm]);

  return (
    <>
      <div className={styles.mainnav}>
        <header className={styles.header}>
        <>
        <div>      
                <img className={styles.navimg} onClick={handleRedirectToHomepge} src='/hor.png' style={{ height: 40, width: 100 }} />
          </div>
          <div>
        <div className={styles.invisible} style={{display:"flex"}}>
        {navbarTabs?.map((e) => {
                return (
                  <>
                  <div className={styles.navpdiv} key={e?.id} style={{padding:10 , display:"flex",alignItems:"center"}}>
                  <p className={styles.navp} style={{padding:0,margin:0}}  onClick={() => handleRedirectToTabs(e?.route)} >{e?.item}</p>
                  </div>
                  </>
                )
              })}
              </div>
              <button onClick={onClick} className={styles.navBtn}>
          <div className={styles.navBtn} style={{position:"absolute", top:"1rem", right:"2rem"}}>
            <p><FaBars/></p>
          </div>
              </button>
        {showMenu && (
            <div className={styles.navCloseBtn} style={{display:"flex", backgroundColor:"white", width:"100%",minHeight:"100%", position:"absolute" , top:0, right:0, zIndex:1000, justifyContent:"center", flexDirection:"column", alignItems:"center"}}>
              <div style={{position:"absolute", top:"1rem", right:"2rem"}} onClick={()=>{setShowMenu(false)}}>
                <p> <FaTimes/></p>
              </div>
              {navbarTabs?.map((e) => {
                return (
                  <>
                  <div className={styles.navpdiv} key={e?.id} style={{padding:10 , display:"flex",alignItems:"center", zIndex:1000}}>
                  <p className={styles.navp} style={{padding:0,margin:0}}  onClick={() => handleRedirectToTabs(e?.route)} >{e?.item}</p>
                  </div>
                  </>
                  
                )
              })}
            </div>
          )}
        </div>
        </>
        </header>
        {/* <div className={styles.searchbox}>
        <input className={styles.search} placeholder='Search for hotels or Cities' value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
            <ul>
            


            {suggestions?.map((suggestion)=>{
              console.log(suggestion, 'jkjhjkjkj');
              return(
                <li key={suggestion._id}>{suggestion.term}</li>
              )
            })}
          </ul>
        </div> */}
      </div>
    </>
  )
}

export default Navbar