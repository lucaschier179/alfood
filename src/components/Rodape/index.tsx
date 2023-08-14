
export default function NavBar() {
  return (
    <footer className="mt-0 p-5 gap-5 flex justify-evenly flex-wrap items-center text-white bg-oxford-blue">
      <div>
        <p>
          Copyright &copy; {new Date().getFullYear()} Alfood
        </p>
      </div>
      <div>
        <ul className="social-icons p-0">
          <li className="inline-block my-0 mx-[5px]">
            <i className="fa fa-facebook w-9 h-9 inline-block text-center leading-9 rounded-[50%] transition-all text-oxford-blue bg-white"></i>
          </li>
          <li className="inline-block my-0 mx-[5px]">
            <i className="fa fa-twitter w-9 h-9 inline-block text-center leading-9 rounded-[50%] transition-all text-oxford-blue bg-white"></i>
          </li>
          <li className="inline-block my-0 mx-[5px]">
            <i className="fa fa-linkedin w-9 h-9 inline-block text-center leading-9 rounded-[50%] transition-all text-oxford-blue bg-white"></i>
          </li>
          <li className="inline-block my-0 mx-[5px]">
            <i className="fa fa-rss w-9 h-9 inline-block text-center leading-9 rounded-[50%] transition-all text-oxford-blue bg-white"></i>
          </li>
          <li className="inline-block my-0 mx-[5px]">
            <i className="fa fa-dribbble w-9 h-9 inline-block text-center leading-9 rounded-[50%] transition-all text-oxford-blue bg-white"></i>
          </li>
        </ul>
      </div>
      <div>
        <p>Uma alegria <em>a cada prato</em></p>
      </div>
    </footer>)
}
