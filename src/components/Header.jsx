// import { HiIdentification } from "react-icons/hi";
// header icons imported from Heroicons
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
    return (
     
        <header className = "flex justify-between bg-sky-100">
            <a href="/" className="flex items-center gap 1">
            <img className="h-12  w-20 " src={logo} alt=" Logo"></img>

            </a>

                    <div id="page-container ">
                        <div className="flex items-center gap-4 md:gap-7 m-2 ">
                            {/* <div> Home  <a href="/" > </a></div> */}
                            <Link to={"/"} class="hover:bg-sky-200"> Home</Link>

                            <Link to={"/Schedule"} class="hover:bg-sky-200"> Schedule </Link>

                            <Link to={"/Classes"} class="hover:bg-sky-200"> Classes </Link>
                                                
                            <Link to={"/Login"} class="hover:bg-sky-200">  
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg>
                            </Link>
                        </div>
                    </div>
        </header>
    )
}

export default Header

