import React from 'react'
import styles from './Card.module.css';
const Card = ({imgsrc ,id,title,dec }) => {
  return (
   <>
 
<div className={styles.card}>
 <img src={imgsrc} alt=""className={styles.cardimg} />
  <div className={styles.cardcontent}>
    <h3 className={styles.cardid}>{id}</h3>
    <h3 className={styles.cardtitle}>{title}</h3>
    <p className={styles.carddescription }>{dec}</p>

  </div>
</div>

   </>
  )
}

export default Card