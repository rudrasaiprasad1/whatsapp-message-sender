import { Home } from "lucide-react";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="flex w-full border-2 border-gray-400 rounded-lg dark:border-white h-16">
      {/* NavBar content goes here */}
      <nav>
        <ul className="flex space-x-4 p-4">
          <li>
            <Link href="/" className="text-white">
              <Home /> Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
