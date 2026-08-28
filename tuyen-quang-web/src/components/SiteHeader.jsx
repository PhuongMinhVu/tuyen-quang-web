import { useState } from "react";
import { NavLink } from "react-router-dom";

import logo from "../assets/logo.png";

const menuItems = [
  {
    label: "Trang chủ",
    to: "/",
  },
  {
    label: "Giới thiệu",
    to: "/gioi-thieu",
  },
  {
    label: "Hướng dẫn",
    to: "/huong-dan",
  },
  {
    label: "Giải thưởng",
    to: "/giai-thuong",
  },
  {
    label: "Danh sách bài thi",
    to: "/bai-du-thi",
  },
  {
    label: "Tin tức",
    to: "/tin-tuc",
  },
];

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className="
        sticky
        top-0
        z-[100]
        w-full
        border-b
        border-stone-300
        bg-gradient-to-r
        from-orange-50
        via-white
        to-stone-100
      "
    >
      <div
        className="
          relative
          mx-auto
          flex
          h-20
          w-full
          max-w-[1440px]
          items-center
          justify-between
          px-4
          sm:px-8
          lg:h-24
          lg:px-24
        "
      >
        {/* Logo */}
        <NavLink
          to="/"
          onClick={closeMenu}
          aria-label="Về trang chủ"
          className="shrink-0"
        >
          <img
            src={logo}
            alt="Logo Tuyên Quang Trong Tôi 2026"
            className="
              h-14
              w-28
              object-contain
              lg:h-16
              lg:w-32
            "
          />
        </NavLink>

        {/* Menu desktop */}
        <nav
          aria-label="Điều hướng chính"
          className="
            hidden
            items-center
            gap-8
            lg:flex
            xl:gap-12
          "
        >
          {menuItems.map((item) => (
            <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              [
                "relative",
                "py-3",
                "font-['Fz_Poppins']",
                "text-xs",
                "font-medium",
                "transition-colors",
                "duration-200",

                // Đường gạch dưới
                "after:absolute",
                "after:bottom-0",
                "after:left-0",
                "after:h-[2px]",
                "after:w-full",
                "after:origin-left",
                "after:bg-green-700",
                "after:transition-transform",
                "after:duration-300",

                isActive
                  ? "text-green-900 after:scale-x-100"
                  : "text-black after:scale-x-0 hover:text-green-800 hover:after:scale-x-100",
              ].join(" ")
            }
          >
            {item.label}
          </NavLink>
          ))}
        </nav>

        {/* Nút menu: luôn hiển thị cả desktop và mobile */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Đóng menu" : "Mở menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
          className="
            flex
            h-8
            w-8
            shrink-0
            flex-col
            items-center
            justify-center
            gap-1
            rounded-sm
            bg-[#97CB5C]
            transition-colors
            hover:bg-[#83B94B]
          "
        >
          <span
            className={[
              "h-0.5 w-3 bg-white transition-transform duration-200",
              isMenuOpen ? "translate-y-[6px] rotate-45" : "",
            ].join(" ")}
          />

          <span
            className={[
              "h-0.5 w-3 bg-white transition-opacity duration-200",
              isMenuOpen ? "opacity-0" : "opacity-100",
            ].join(" ")}
          />

          <span
            className={[
              "h-0.5 w-3 bg-white transition-transform duration-200",
              isMenuOpen ? "-translate-y-[6px] -rotate-45" : "",
            ].join(" ")}
          />
        </button>

        {/* Menu xổ xuống */}
        {isMenuOpen && (
          <div
            className="
              absolute
              right-4
              top-[calc(100%-8px)]
              z-[110]
              w-[260px]
              overflow-hidden
              rounded-xl
              border
              border-stone-200
              bg-white
              p-2
              shadow-xl
              sm:right-8
              lg:right-24
            "
          >
            <nav
              aria-label="Menu mở rộng"
              className="flex flex-col"
            >
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    [
                      "rounded-lg",
                      "px-4",
                      "py-3",
                      "font-['Fz_Poppins']",
                      "text-sm",
                      "font-medium",
                      "transition-colors",
                      isActive
                        ? "bg-green-50 text-green-900"
                        : "text-black hover:bg-lime-50 hover:text-green-800",
                    ].join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default SiteHeader;