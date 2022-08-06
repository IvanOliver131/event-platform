import { List, X } from "phosphor-react";
import { Logo } from "../Logo";

interface HeaderProps {
  handleOpenAndCloseNavbar: () => void;
  isOpen: boolean;
}

export function Header({ handleOpenAndCloseNavbar, isOpen }: HeaderProps) {
  return (
    <header className="w-full py-5 flex items-center justify-around bg-gray-700 border-b border-gray-600 md:justify-center">
      <Logo />
      <div>
        <button
          onClick={handleOpenAndCloseNavbar}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          {isOpen ? <X size={20} /> : <List size={20} />}
        </button>
      </div>
    </header>
  );
}
