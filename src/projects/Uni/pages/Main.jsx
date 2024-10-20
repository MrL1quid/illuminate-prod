import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Main.module.css";
import home from "../videos/home.mp4";
import HotelCard from "../components/HotelCard";
import { Link } from "react-router-dom";
import ContactLine from "../components/ContactLine";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { MdLogin } from "react-icons/md";
import { MdLanguage } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import h1 from '../imgs/h1.jpg'
import h2 from '../imgs/h2.jpg'
import h3 from '../imgs/h3.jpg'
import h4 from '../imgs/h4.jpg'
import h5 from '../imgs/h5.jpg'
import { switchLang } from "../slices/languageSlice";
import ImageCard from "../components/ImageCard";
import BookScreen from "../components/BookScreen";

const GALLERY_IMGS = [
  h1,
  h2,
  h3,
  h4,
  h5,
]
const TEXT_EN = [
  "STUDENT HOTELS",
  "Offering you a variety of rooms at our hotel to spend the best time for the best price!",
  "SEARCH THROUGH THE ROOMS WE OFFER!",
  "profile",
  "Show occupied rooms",
  "Hide occupied rooms",
  "More",
  "Gallery",
  "There are no rooms with current filters.",
  "Price",
  "People Per Room",
  "Bed Type",
  "Search by name",
  "any",
  "Less than 50$/per night",
  "Less than 200$/per night",
  "Less than 1000$/per night",
  "More than 1000$/per night",
  "Less than 4",
  "4 or more",
  "Single",
  "Double",
  "Queen size",
  "King size",
  "Contact Information",
  "Order by",
  "ID (Ascending)",
  "Name (Ascending)",
  "Name (Descending)",
  "More About Us",
  "Established in 2012 by a group of enterprising university students, Elite Student Haven offers top-notch accommodations at affordable prices. Our hotel has grown into a well-known establishment, renowned for its elite-level rooms and exceptional customer service.",
  "Our Features",
  "elegantly designed rooms including singles, doubles, and suites",
  "Modern amenities: Free Wi-Fi, continental breakfast, gym, spa, swimming pool, business center, and conference rooms",
  "Centrally located in a vibrant neighborhood, close to major attractions and public transportation",
  "Success and Reputation",
  `Over the years, Elite Student Haven has built a reputation for excellence, consistently receiving
  high ratings and positive reviews from guests. We boast an impressive occupancy rate of 90% year-round
  and have won multiple awards for hospitality and service.`,
];
const TEXT_GE = [
  "STUDENT HOTELS",
  "გთავაზობთ ოთახების მრავალფეროვნებას ჩვენს სასტუმროში - საუკეთესო დროის გასატარებლად საუკეთესო ფასად!",
  "მოძებნეთ ოთახები, რომლებსაც ჩვენ გთავაზობთ!",
  "საკონტაქტო ინფორმაცია",
  "დაკავებული ოთახების ჩვენება",
  "დაკავებული ოთახების დაფარვა",
  "მეტი",
  "ფოტო გალერეა",
  "ამჟამად არ არის ოთახები შესაბამისი ფილტრებით",
  "ფასი",
  "ადამიანის რაოდენობა ოთახში",
  "საწოლის ზომა",
  "სახელით ძიება",
  "ნებისმიერი",
  "50$-ზე ნაკლები/ღამე",
  "200$-ზე ნაკლები/ღამე",
  "1000$-ზე ნაკლები/ღამე",
  "1000$-ზე მეტი/ღამე",
  "4-ზე ნაკლები",
  "4 ან მეტი",
  "ერთადგილიანი",
  "ორადგილიანი",
  "Queen size",
  "King size",
  "საკონტაქტო ინფორმაცია",
  "დალაგება",
  "ID-ს მიხედვით (ზრდადობით)",
  "სახელის მიხედვით (ზრდადობით)",
  "სახელის მიხედვით (კლებადობით)",
  "მეტი ჩვენ შესახებ",
  "დაარსებული 2012 წელს მეწარმე უნივერსიტეტის სტუდენტების ჯგუფის მიერ, Elite Student Haven გთავაზობთ უმაღლესი დონის საცხოვრებლებს ხელმისაწვდომ ფასებში. ჩვენი სასტუმრო გადაიქცა ცნობილ დაწესებულებად, რომელიც ცნობილია თავისი ელიტარული დონის ნომრებითა და კლიენტების განსაკუთრებული მომსახურებით.",
  "რით გამოვირჩევით ჩვენ",
  "ელეგანტურად შექმნილი ოთახები, მათ შორის ერთადგილიანი, ორადგილიანი და ლუქსი",
  "თანამედროვე კეთილმოწყობა: უფასო Wi-Fi, კონტინენტური საუზმე, სპორტული დარბაზი, სპა, საცურაო აუზი, ბიზნეს ცენტრი და საკონფერენციო დარბაზები",
  "ცენტრალურად მდებარეობს ენერგიულ უბანში, მთავარ ატრაქციონებთან და საზოგადოებრივ ტრანსპორტთან ახლოს",
  "წარმატება და რეპუტაცია",
  `წლების განმავლობაში, Elite Student Haven-მა შექმნა რეპუტაცია ჩინებულად, თანმიმდევრულად მიიღო
  მაღალი რეიტინგი და დადებითი მიმოხილვები სტუმრებისგან. ჩვენ ვამაყობთ შთამბეჭდავი დაკავებულობით 90%-ით მთელი წლის განმავლობაში
  და მოიგო მრავალი ჯილდო სტუმართმოყვარეობისა და მომსახურებისთვის.`,
];

const Main = () => {
  const vidRef = useRef(null);
  const language = useSelector((state) => state.language);
  const HOTELS = useSelector((state) => state.rooms);
  const [currentFilters, setCurrentFilters] = useState({
    price: "0",
    bed: "0",
    space: "0",
    hideUnavailable: false,
    order: '0'
  });
  const searchRef = useRef(null);
  const availableRef = useRef(null);
  const moreRef = useRef(null);
  const [currentHotels, setCurrentHotels] = useState(HOTELS);
  const [moreScroll, setmoreScroll] = useState(0);
  const [modalState, setModalState] = useState({
    active: false,
    id: 0,
    placesLeft: 0,
    price: 0
  })
  const dispatch = useDispatch()

  const currentLang = language === "EN" ? TEXT_EN : TEXT_GE;

  useEffect(() => {
    vidRef.current && (vidRef.current.playbackRate = 2);
    setmoreScroll(moreRef.current.getBoundingClientRect().y + window.scrollY);
  }, [moreRef]);

  useEffect(() => {
    runSort();
  }, [currentFilters, HOTELS]);

  const runSort = () => {
    let filteredHotels = HOTELS;
    switch (currentFilters.price) {
      case "0":
        break;
      case "1":
        filteredHotels = filteredHotels.filter((e) => e.price < 50);
        break;
      case "2":
        filteredHotels = filteredHotels.filter((e) => e.price < 200);
        break;
      case "3":
        filteredHotels = filteredHotels.filter((e) => e.price < 1000);
        break;
      case "4":
        filteredHotels = filteredHotels.filter((e) => e.price >= 1000);
        break;
      default:
        break;
    }
    switch (currentFilters.space) {
      case "0":
        break;
      case "1":
        filteredHotels = filteredHotels.filter((e) => e.peoplePerRoom < 4);
        break;
      case "2":
        filteredHotels = filteredHotels.filter((e) => e.peoplePerRoom >= 4);
        break;
      default:
        break;
    }
    switch (currentFilters.bed) {
      case "0":
        break;
      case "1":
        filteredHotels = filteredHotels.filter(
          (e) => e.bedType === "Single Bed"
        );
        break;
      case "2":
        filteredHotels = filteredHotels.filter(
          (e) => e.bedType === "Double Bed"
        );
        break;
      case "3":
        filteredHotels = filteredHotels.filter(
          (e) => e.bedType === "Queen Bed"
        );
        break;
      case "4":
        filteredHotels = filteredHotels.filter((e) => e.bedType === "King Bed");
        break;
      default:
        break;
    }

    if (currentFilters.hideUnavailable) filteredHotels = filteredHotels.filter(e => (e.available - e.bookedAmount) > 0)

    filteredHotels = filteredHotels.filter((e) =>
      e.name.toLowerCase().replace(/\s+/g, "").includes(searchRef.current.value.replace(/\s+/g, ""))
    );

    switch (currentFilters.order) {
      case '0':
        break;
      case '1':
        filteredHotels.sort((a, b) => (a.name.toLowerCase().replace(/\s+/g, "") < b.name.toLowerCase().replace(/\s+/g, "")) ? -1 : 1)
        break;
      case '2':
        filteredHotels.sort((a, b) => (a.name.toLowerCase().replace(/\s+/g, "") > b.name.toLowerCase().replace(/\s+/g, "")) ? -1 : 1)
        break;
      default:
        break;
    }

    setCurrentHotels(filteredHotels);
  };

  const handleAvailability = () => {
    setCurrentFilters((state) => ({
      ...state,
      hideUnavailable: !state.hideUnavailable
    }));
  }

  const scrollToMore = () => {
    // 7% cuz the navbar takes that part of the screen
    const scrollPos = moreScroll - (window.innerHeight * .06)
    window.scrollTo({ top: scrollPos, behavior: 'smooth' })
  }

  return (
    <div className={styles.page}>
      <div className={styles['welcome']}>
        <video src={home} muted autoPlay ref={vidRef} loop></video>
        <div className={styles['quick-actions']}>
          <button onClick={() => window.open('https://www.facebook.com', '_blank')}>
            <p>
              <FaFacebook />
            </p>
          </button>
          <button>
            <Link to='/signup'>
              <p>
                <MdLogin />
              </p>
            </Link>
          </button>
          <button onClick={() => dispatch(switchLang())}>
            <p>
              <span style={{ 'marginRight': '10px' }}><MdLanguage /></span>
              {language === "EN" ? "EN" : "GE"}
            </p>
          </button>
        </div>
        <h1>{currentLang[0]}</h1>
        <p>{currentLang[1]}</p>
        <button onClick={scrollToMore}>{currentLang[6]}</button>
      </div>
      <div className={styles.content}>
        <div className={styles["gallery"]}>
          <h1>{currentLang[7]}</h1>
          <div className={styles.imgs}>
            {GALLERY_IMGS.map((i, id) => <ImageCard img={i} key={id} />)}
          </div>
        </div>
        <h2>{currentLang[2]}</h2>
        <div className={styles["filters"]}>
          <div>
            <div className={styles["select-holder"]}>
              <p>{currentLang[9]}</p>
              <select
                defaultValue={"0"}
                onChange={(e) => {
                  setCurrentFilters((state) => ({
                    ...state,
                    price: e.target.value,
                  }));
                }}
              >
                <option value="0">{currentLang[13]}</option>
                <option value="1">{currentLang[14]}</option>
                <option value="2">{currentLang[15]}</option>
                <option value="3">{currentLang[16]}</option>
                <option value="4">{currentLang[17]}</option>
              </select>
            </div>
            <div className={styles["select-holder"]}>
              <p>{currentLang[10]}</p>
              <select
                defaultValue={"0"}
                onChange={(e) => {
                  setCurrentFilters((state) => ({
                    ...state,
                    space: e.target.value,
                  }));
                }}
              >
                <option value="0">{currentLang[13]}</option>
                <option value="1">{currentLang[18]}</option>
                <option value="2">{currentLang[19]}</option>
              </select>
            </div>
            <div className={styles["select-holder"]}>
              <p>{currentLang[11]}</p>
              <select
                defaultValue={"0"}
                onChange={(e) => {
                  setCurrentFilters((state) => ({
                    ...state,
                    bed: e.target.value,
                  }));
                }}
              >
                <option value="0">{currentLang[13]}</option>
                <option value="1">{currentLang[20]}</option>
                <option value="2">{currentLang[21]}</option>
                <option value="3">{currentLang[22]}</option>
                <option value="4">{currentLang[23]}</option>
              </select>
            </div>
            <div className={styles["select-holder"]}>
              <p>{currentLang[25]}</p>
              <select
                defaultValue={"0"}
                onChange={(e) => {
                  setCurrentFilters((state) => ({
                    ...state,
                    order: e.target.value,
                  }));
                }}
              >
                <option value="0">{currentLang[26]}</option>
                <option value="1">{currentLang[27]}</option>
                <option value="2">{currentLang[28]}</option>
              </select>
            </div>
          </div>

          <button onClick={handleAvailability} ref={availableRef}>{currentFilters.hideUnavailable ? currentLang[4] : currentLang[5]}</button>
          <input
            type="text"
            placeholder={currentLang[12]}
            ref={searchRef}
            onChange={runSort}
          />
        </div>
        <div className={styles["hotels"]}>
          {currentHotels.length > 0 ? (
            currentHotels.map((e) => (
              <HotelCard
                key={e.id}
                id={e.id}
                name={e.name}
                price={e.price}
                bed={e.bedType}
                space={e.peoplePerRoom}
                img={e.img}
                placesLeft={(e.available - e.bookedAmount)}
                bookFunct={() => { setModalState({ active: true, id: e.id, placesLeft: (e.available - e.bookedAmount), price: e.price }) }}
              />
            ))
          ) : (
            <p>{currentLang[8]}</p>
          )}
        </div>
        {modalState.active && <BookScreen id={modalState.id} placesLeft={modalState.placesLeft} price={modalState.price} closeFunc={() => { setModalState({ active: false, id: 0, placesLeft: 0, price: 0 }) }} />}
        <div className={styles["more"]} ref={moreRef}>
          <h1>{currentLang[29]}</h1>
          <p>
            {currentLang[30]}
          </p>
          <h2>{currentLang[31]}</h2>
          <p>{currentLang[32]}</p>
          <p>{currentLang[33]}</p>
          <p>{currentLang[34]}</p>
          <h2>{currentLang[35]}</h2>
          <p>
            {currentLang[36]}
          </p>
        </div>
        <div className={styles["contact"]}>
          <h1>{currentLang[24]}</h1>
          <div>
            <ContactLine
              icon={<FaLocationDot />}
              text="Akhalgazrdoba Ave. Lane 5/7, Kutaisi, 4600 Georgia"
              color="#cea800"
            />
            <ContactLine
              icon={<IoIosMail />}
              text="studenthotels@gmail.com"
              color="#cea800"
            />
            <ContactLine
              icon={<FaPhone />}
              text="+995 575 272 545"
              color="#cea800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
