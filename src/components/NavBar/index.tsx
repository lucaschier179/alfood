import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="text-center">
      <ul>
        <li className="list-none inline-block m-[10px]
        after:block after:w-0 after:h-[2px] after:bg-[#000] after:transition-all
        hover:after:w-full">
          <Link to="/" className="no-underline visited:text-[#000]">
            Home
          </Link>
        </li>
        <li className="list-none inline-block m-[10px]
        after:block after:w-0 after:h-[2px] after:bg-[#000] after:transition-all
        hover:after:w-full">
          <Link to="/restaurantes" className="no-underline visited:text-[#000]">
            Restaurantes
          </Link>
        </li>
      </ul>
    </nav>)
}
