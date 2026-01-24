import { useState } from "react";
import PopUser from "../Popups/PopUser/PopUser";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__block">
          <div className="header__logo _show _light">
            <img src="/images/logo.png" alt="logo" />
          </div>

          <nav className="header__nav">
            <button className="header__btn-main-new _hover01">
              Создать новую задачу
            </button>

            <a
              type="button"
              className="header__user _hover02"
              onClick={toggleMenu}
            >
              Ivan Ivanov
            </a>

            <PopUser isOpen={isOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
}
