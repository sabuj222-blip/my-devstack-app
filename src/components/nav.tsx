import Logo from "../assets/logo.png";

export default function Nav() {
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-sm">
            <div className="flex items-center justify-between px-8 py-4 mx-auto max-w-6xl">
                <div className="flex items-center">
                    <img src={Logo} alt="Dev Stack Logo" className="object-contain w-auto h-10"/>
                </div>
                <ul className="flex items-center gap-8 font-medium text-gray-700">
                    <li className="transition-colors cursor-pointer hover:text-pink-600">Home</li>
                    <li className="transition-colors cursor-pointer hover:text-pink-600">Technologies</li>
                    <li className="transition-colors cursor-pointer hover:text-pink-600">Projects</li>
                    <li className="transition-colors cursor-pointer hover:text-pink-600">About</li>
                    <li className="transition-colors cursor-pointer hover:text-pink-600">Contact
                    </li>
                </ul>
                <div className="flex items-center gap-3">
                   <button className="px-4 py-2 font-medium text-gray-700 transition-colors hover:text-pink-600">
                    Sign In
                    </button>
                    <button className="px-5 py-2 font-medium text-white transition-colors bg-pink-600 rounded-lg hover:bg-pink-700">
                    Sign Up
                    </button>

                </div>

            </div>

        </nav>
    );
}