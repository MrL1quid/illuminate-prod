import { useSelector } from "react-redux";
import styles from "./Profile.module.css";
import user from "../imgs/Johny.png";
import HotelProfileCard from "../components/HotelProfileCard";

const TEXT_EN = [
  "Bookings",
  "Profile Card",
  "Age",
  "profile",
  "You don't have any bookings yet!",
];
const TEXT_GE = [
  "რეზერვაციები",
  "პროფილის ინფორმაცია",
  "ასაკი",
  "პროფილი",
  "თქვენ ჯერ არ გაქვთ რეზერვაციები!",
];

const Profile = () => {
  const language = useSelector((state) => state.language);
  const currentLang = language === "EN" ? TEXT_EN : TEXT_GE;
  const bookedRooms = useSelector(state => state.bookedRooms)

  const linkedInHandler = () => {
    window.open('https://www.linkedin.com', '_blank')
  }

  return (
    <div className={styles.page}>
      <div>
        <h1>{currentLang[1]}</h1>
        <div className={styles["img-holder"]}>
          <img src={user} alt="" />
        </div>
        <h2>Little Johny</h2>
        <p>{currentLang[2]}: 24</p>
        <button onClick={linkedInHandler}>LinkedIn {currentLang[3]}</button>

      </div>
      <div>
        <h1>{currentLang[0]}</h1>
        <div className={styles.reservations}>
          {bookedRooms.length > 0
            ? bookedRooms.map(e => <HotelProfileCard key={e.bookId} id={e.id} date={e.date} name={e.name} img={e.img} amt={e.nights} price={e.price} bookId={e.bookId} />)
            : currentLang[4]
          }
        </div>
      </div>
    </div>
  );
};

export default Profile;
