import { useEffect, useRef, useState } from "react";

function Sidebar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const switchRef = useRef(null);

  useEffect(() => {
    // Применяем тему к body или root элементу
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add("dark-theme");
      rootElement.classList.remove("light-theme");
    } else {
      rootElement.classList.add("light-theme");
      rootElement.classList.remove("dark-theme");
    }
  }, [isDarkMode]);

  const handleThemeChange = (e) => {
    setIsDarkMode(e.target.checked);
  };

  return (
    <aside className="sidebar">
      <h1 className="sidebar__title">Balance</h1>
      <nav className="sidebar__nav">
        <ul className="sidebar__nav-list">
          <li className="sidebar__nav-item current">
            <svg
              width="30px"
              height="30px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 8V7.2C18 6.0799 18 5.51984 17.782 5.09202C17.5903 4.71569 17.2843 4.40973 16.908 4.21799C16.4802 4 15.9201 4 14.8 4H6.2C5.07989 4 4.51984 4 4.09202 4.21799C3.71569 4.40973 3.40973 4.71569 3.21799 5.09202C3 5.51984 3 6.0799 3 7.2V8M21 12H19C17.8954 12 17 12.8954 17 14C17 15.1046 17.8954 16 19 16H21M3 8V16.8C3 17.9201 3 18.4802 3.21799 18.908C3.40973 19.2843 3.71569 19.5903 4.09202 19.782C4.51984 20 5.07989 20 6.2 20H17.8C18.9201 20 19.4802 20 19.908 19.782C20.2843 19.5903 20.5903 19.2843 20.782 18.908C21 18.4802 21 17.9201 21 16.8V11.2C21 10.0799 21 9.51984 20.782 9.09202C20.5903 8.71569 20.2843 8.40973 19.908 8.21799C19.4802 8 18.9201 8 17.8 8H3Z"
                stroke="var(--icon-color, #000000)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <a href="#">Wallet</a>
          </li>
          <li className="sidebar__nav-item">
            svg
            <a href="#">Analytics</a>
          </li>
          <li className="sidebar__nav-item">
            svg
            <a href="#">Transaction</a>
          </li>
          <li className="sidebar__nav-item">
            svg
            <a href="#">Setting</a>
          </li>
        </ul>
      </nav>

      <div className="sidebar__change-modes">
        svg
        <label className="switch">
          <input
            type="checkbox"
            name="theme_switch"
            id="theme_switch"
            checked={isDarkMode}
            onChange={handleThemeChange}
          />
          <span className="slider"></span>
        </label>
        svg
      </div>
    </aside>
  );
}

export default Sidebar;
