import { Link } from "react-router-dom";

export default function NavButton ({key, title, icon, href}) {
  return (
    <div key={key} className="flex items-center">
      <li className="ml-1.5">
        <Link
          className={`flex items-center h-16 px-2
          text-white hover:underline
          hover:bg-black/20 `}
          to={href}
        >
          <img className="pb-0.5 mr-2" src={icon} alt={title} />
          <span className="  hidden sm:inline">{title}</span>
        </Link>
      </li>
    </div>
  )
}