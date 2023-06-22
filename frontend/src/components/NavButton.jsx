import { Link } from "react-router-dom";

export default function NavButton ({title, icon, href}) {
  return (
    <div className="flex items-center">
      <li className="ml-1.5">
        <Link
          className={`flex items-center h-20 px-2
          text-white hover:underline
          hover:bg-black/20 `}
          to={href}
          reloadDocument={true}
        >
          <img className="pb-0.5 mr-2" src={icon} alt={title} />
          <span className="  hidden sm:inline">{title}</span>
        </Link>
      </li>
    </div>
  )
}