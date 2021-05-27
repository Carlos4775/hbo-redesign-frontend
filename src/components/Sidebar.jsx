import { Link } from "react-router-dom";
import Footer from "./Footer";
import SubMenu from "./SubMenu";
import logo from "../img/logo.svg";
import {
  SpeakerphoneIcon,
  FilmIcon,
  EmojiSadIcon,
  EmojiHappyIcon,
  MusicNoteIcon,
  BriefcaseIcon,
  StarIcon,
  PuzzleIcon,
  TruckIcon,
} from "@heroicons/react/solid";

const menus = [
  {
    title: "Estrenos",
    icon: <SpeakerphoneIcon className="h-6 w-6" />,
    items: [],
  },
  {
    title: "Clásicos",
    icon: <FilmIcon className="h-6 w-6" />,
    items: [],
  },
  {
    title: "Acción",
    icon: <TruckIcon className="h-6 w-6" />,
    items: [
      {
        title: "Aventura de acción",
        target: "/pages",
      },
      {
        title: "Comedia de acción",
        target: "/pages",
      },
      {
        title: "Artes marciales",
        target: "/pages",
      },
      {
        title: "Superhéroes",
        target: "/pages",
      },
      {
        title: "Espionaje",
        target: "/pages",
      },
      {
        title: "Thrillers",
        target: "/pages",
      },
    ],
  },
  {
    title: "Comedias",
    icon: <EmojiHappyIcon className="h-6 w-6" />,
    items: [
      {
        title: "Sátira",
        target: "/pages",
      },
      {
        title: "Parodia",
        target: "/pages",
      },
      {
        title: "Comedia romántica",
        target: "/pages",
      },
    ],
  },
  {
    title: "Dramas",
    icon: <BriefcaseIcon className="h-6 w-6" />,
    items: [],
  },
  {
    title: "Terror",
    icon: <EmojiSadIcon className="h-6 w-6" />,
    items: [],
  },
  {
    title: "Musicales",
    icon: <MusicNoteIcon className="h-6 w-6" />,
    items: [],
  },
  {
    title: "Ciencia ficción",
    icon: <StarIcon className="h-6 w-6" />,
    items: [],
  },
  {
    title: "Infantiles",
    icon: <PuzzleIcon className="h-6 w-6" />,
    items: [],
  },
];

const Sidebar = ({ open }) => {
  const listMenu = menus.map((menu, i) => {
    return <SubMenu menu={menu} key={i} />;
  });
  return (
    <div
      className={
        open
          ? "sidebar w-64 transform md:translate-x-0 transition-transform duration-150 ease-in bg-black"
          : "sidebar w-64 transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-black"
      }
    >
      <div className="sidebar-header flex items-center justify-center py-4">
        <div className="inline-flex">
          <Link to="/" className="inline-flex flex-row items-center">
            <img src={logo} alt="logo" className="w-28" />
          </Link>
        </div>
      </div>
      <div className="sidebar-content px-4 py-6">{listMenu}</div>
      <Footer />
    </div>
  );
};

export default Sidebar;
