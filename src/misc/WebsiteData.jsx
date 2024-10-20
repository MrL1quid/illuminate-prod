import { FaBarsStaggered } from "react-icons/fa6";
import { BiDotsHorizontal } from "react-icons/bi";
import { MdOutlineScreenshotMonitor } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { SiRedux } from "react-icons/si";
import { TbArrowsTransferDown } from "react-icons/tb";

const [multiPageApp, verticalNav, responsive, emailContactForm, usingRedux, usingFetch] = [
  {
    icon: <BiDotsHorizontal />,
    name: "Multi-Page App",
  },
  {
    icon: <FaBarsStaggered />,
    name: "Vertical Navigation",
  },
  {
    icon: <MdOutlineScreenshotMonitor />,
    name: "Responsive",
  },
  {
    icon: <MdEmail />,
    name: "Email Contact Form",
  },
  {
    icon: <SiRedux />,
    name: "React Redux",
  },
  {
    icon: <TbArrowsTransferDown />,
    name: "Fetch API",
  },
];


export default [
  {
    title: "advokatbekauri.com",
    desc: "This is the first website made by me that was put on the internet. It was made for my father, a lawyer currently working in Russia.",
    features: [verticalNav, multiPageApp, responsive, emailContactForm],
    webData: {
      type: 'LINK',
      url: 'https://advokatbekauri.com'
    },
  },
  { 
    title: "autodiagnostika.ge",
    desc: "This website was made for the Georgian car diagnostics firm. As the name suggests, they offer diagnostics for cars with various types of engines.",
    features: [verticalNav, responsive, emailContactForm],
    webData: {
      type: 'LINK',
      url: 'https://autodiagnostika.ge'
    },
  },
  {
    title: "STUDENT HOTELS",
    desc: "I made this website as a final project for my university React development course. This is basically a hotel platform with dummy log-in, sign-up and profile pages but with functionality of adding/removing the hotel bookings.",
    features: [verticalNav, responsive, multiPageApp, usingRedux],
    webData: {
      type: 'LOCAL',
      url: '/projects/student-hotels'
    },
  },
  {
    title: "CV APP",
    desc: "This website was made during the EPAM courses, which I had joined to refresh my web development memory.",
    features: [verticalNav, responsive, multiPageApp, usingRedux, usingFetch],
    webData: {
      type: 'LOCAL',
      url: '/projects/cv-app'
    },
  },
];
