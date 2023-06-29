import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";
import SocialLinks from "./SocialLinks";

const MobileNv = () => {
    return  (
        <div className="sm:hidden">
            <nav
            ref={navRef}
            className={`fixed left-0 top-0 w-56 h-screen z-50 bg-white shadow-2xl transform transition-all duration-300 ${
                isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
            >
            <button
                type="button"
                className="fixed top-0 -right-12 py-2 px-2 bg-white rounded-r-2xl shadow-xl"
                onClick={toggleNavbar}
            >
                {isOpen ? <IoMdClose size={32} /> : <IoMdMenu size={32} />}
            </button>
            <div className="flex p-2">
                <NavLink to="/"><img src="logo.png" alt="Logo" /></NavLink>
            </div>

            <NavLinks toggleNavbar={toggleNavbar} />
            <SocialLinks />
            <p className="text-xs sm:text-sm text-gray-500 fixed bottom-6 left-10">
                © 2023 TourXtra
            </p>
            </nav>
        </div>
    )
}

export default MobileNv;