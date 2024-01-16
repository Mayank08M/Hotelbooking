import React, { useState, useEffect, useRef} from 'react'
import styles from '../styles/Bgslider.module.css'
import cardData from '../components/cardData.json'
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

const bgslider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideRef = useRef(null);
  
    useEffect(() => {
      const lists = slideRef.current.children;
      if (lists.length > 0) {
        setCurrentIndex(0);
      }
    }, [cardData]);
  
    const handleNextClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    };
  
    const handlePrevClick = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);
    };
    return (
        <>
            <div className={styles.body}>
                <div className={styles.container}>
                    <div className={styles.slide} ref={slideRef}>
                    {cardData.map((card, index) => (
              <div
                key={index}
                className={`${styles.item} ${index === currentIndex ? styles.active : ''}`}
                style={{ backgroundImage: `url(${card.imageUrl})` }}
              >
                <div className={styles.content}>
                  <div className={styles.name}>{card.name}</div>
                  <div className={styles.des}>{card.description}</div>
                  <button>See more</button>
                </div>
              </div>
            ))}
                        {/* <div className={styles.item} style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"})`}}>
                            <div className={styles.content}>
                                <div className={styles.name}>LUNDEV</div>
                                <div className={styles.des}>Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                                <button>See more</button>
                            </div>
                        </div>
                        <div className={styles.item} style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"}`}}>
                            <div className={styles.content}>
                                <div className={styles.name}>LUNDEV</div>
                                <div className={styles.des}>Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                                <button>See more</button>
                            </div>
                        </div>
                        <div className={styles.item} style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"})`}}>
                            <div className={styles.content}>
                                <div className={styles.name}>LUNDEV</div>
                                <div className={styles.des}>Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                                <button>See more</button>
                            </div>
                        </div>
                        <div className={styles.item} style={{backgroundImage: `url(${"https://images.unsplash.com/flagged/photo-1556438758-8d49568ce18e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww"})`}}>
                            <div className={styles.content}>
                                <div className={styles.name}>LUNDEV</div>
                                <div className={styles.des}>Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                                <button>See more</button>
                            </div>
                        </div>
                        <div className={styles.item} style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"})`}}>
                            <div className={styles.content}>
                                <div className={styles.name}>LUNDEV</div>
                                <div className={styles.des}>Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                                <button>See more</button>
                            </div>
                        </div>
                        <div className={styles.item} style={{backgroundImage: `url(${"https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsJTIwcm9vbXxlbnwwfHwwfHx8MA%3D%3D"})`}}>
                            <div className={styles.content}>
                                <div className={styles.name}>LUNDEV</div>
                                <div className={styles.des}>Tinh ru anh di chay pho, chua kip chay pho thi anhchay mat tieu</div>
                                <button>See more</button>
                            </div>
                        </div> */}
                    </div>
                    <div className={styles.buttons}>
                        <button id="prev" onClick={handlePrevClick}><FaChevronCircleLeft /></button>
                        <button id="next" onClick={handleNextClick}><FaChevronCircleRight /></button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default bgslider