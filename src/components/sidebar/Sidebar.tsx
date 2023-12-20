import Image from "next/image";
import {
  IoAnalytics,
  IoBrowsersOutline,
  IoCalculatorOutline,
  IoCubeOutline,
  IoHandRightOutline,
  IoHeartOutline,
  IoLogoReact,
  IoSadSharp,
  IoSchool,
} from "react-icons/io5";
import { SidebarMenuItem } from "..";

const menuItems = [
  {
    path: "/dashboard/main",
    icon: <IoSadSharp size={40} />,
    title: "Dashboard",
    subTitle: "Visualización",
  },
  {
    path: "/dashboard/counter",
    icon: <IoCalculatorOutline size={40} />,
    title: "Counter",
    subTitle: "Contador client Side",
  },
  {
    path: "/dashboard/pokemons",
    icon: <IoAnalytics size={40} />,
    title: "Pokemons",
    subTitle: "Generación estatica",
  },
  {
    path: "/dashboard/favorites",
    icon: <IoHeartOutline size={40} className="text-red-600" />,
    title: "Favorites",
    subTitle: "Pokemons favoritos",
  },
];

export const Sidebar = () => {
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64  left-0  overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <IoSchool className="inline-block text-blue-500 mr-2" />
          <span className="text-blue-500">SGU</span>
          <span className="mr-1">Estudiantes</span>
        </h1>
        <p className="text-slate-500 text-sm">
          Sistema de gestión de estudiantes
        </p>
      </div>

      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              width={50}
              height={50}
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt=""
            />
          </span>
          <span className="text-sm md:text-base font-bold">Edward Tompson</span>
        </a>
      </div>

      <div id="nav" className="w-full px-6">
        {menuItems.map((item) => (
          <SidebarMenuItem
            key={item.path}
            path={item.path}
            icon={item.icon}
            title={item.title}
            subTitle={item.subTitle}
          />
        ))}
      </div>
    </div>
  );
};
