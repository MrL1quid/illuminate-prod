import styles from "./SubPage.module.css";
const SubPage = ({ img, title, description, side, dark, textAlign, addStyles }) => {

  return (
    <div className={`${styles.subpage} ${addStyles} ${side ? styles.rev : ''} ${dark ? styles.dark : ''}`} style={{background: dark ? '#eee' : '#fff'}}>
      {side && <img src={img} alt="Home_Image" />}
      <div className={styles['text-content']} style={{textAlign}}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      {!side && <img src={img} alt="Home_Image" />}
    </div>
  );
};

export default SubPage;
