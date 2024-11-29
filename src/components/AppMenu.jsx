import { NavLink } from "react-router-dom"

import img_bookmark_blue from "../assets/bookmark-blue.svg"
import img_gear_blue from "../assets/settings-blue.svg"

const styleNavLink = ({ isActive }) => "flex flex-row justify-center ".concat([isActive ? "bg-slate-400" : ""] );

export const AppMenu = () => {
  return (
      <menu className="flex flex-col text-xl h-1/5
        md:text-lg">

          <li
              className="h-32 flex flex-row items-center justify-end bg-slate-900 text-slate-900 text-center">
              <NavLink
                  className={"flex flex-col justify-center w-2/3 h-2/3 bg-indigo-200 rounded-l-full font-bold lg:text-3xl md:text-2xl sm:text-lg"}
                  to={"/"}>
                  Better Favorites
              </NavLink>
          </li>

          <li
              className="h-7.5 bg-slate-200">
              <NavLink className={styleNavLink} to={"favorites"}>
                  <img className="w-6 mr-4" src={img_bookmark_blue} alt="" />
                  Mis Favoritos
              </NavLink>
          </li>

          <li
              className="h-7.5 bg-slate-200">
              <NavLink className={styleNavLink} to={"settings"}>
                  <img className="w-5 mr-3" src={img_gear_blue} alt="" />
                  Configuración
              </NavLink>
          </li>
      </menu>
  )
}
