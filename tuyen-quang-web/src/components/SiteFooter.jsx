import { NavLink } from "react-router-dom";

import logoFooter from "../assets/logo-footer.png";
import facebookIcon from "../assets/facebook.png";
import youtubeIcon from "../assets/youtube.png";
import tiktokIcon from "../assets/tiktok.png";
import emailIcon from "../assets/email.png";
import phoneIcon from "../assets/phone.png";
import atkLogo from "../assets/atk.png";
import hcmLogo from "../assets/hcm-logo.png";
import thanhNienLogo from "../assets/thanhnien-logo.png";
import nhiepAnhTreLogo from "../assets/nhiep-anh-tre-logo.svg";
import nhomNhiepAnhLogo from "../assets/nhomnhiepanh-logo.svg";

const footerLinks = [
  { label: "Giới thiệu", to: "/gioi-thieu" },
  { label: "Hướng dẫn", to: "/huong-dan" },
  { label: "Giải thưởng", to: "/giai-thuong" },
  { label: "Danh sách bài thi", to: "/bai-du-thi" },
  { label: "Tin tức", to: "/tin-tuc" },
];

function SiteFooter() {
  return (
    <footer
      className="
        w-full
        border-t-2
        border-[#20733D]
        bg-gradient-to-b
        from-[#F8FFF3]
        via-white
        to-[#FFF8ED]
      "
    >
      <div className="px-5 sm:px-8 lg:px-[104px]">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,650px)_minmax(0,1fr)]">
          {/* Cột trái */}
          <div className="py-8 lg:border-r lg:border-stone-300 lg:pr-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <NavLink to="/" aria-label="Về trang chủ">
                <img
                  src={logoFooter}
                  alt="Tuyên Quang Trong Tôi 2026"
                  className="h-auto w-[157px] shrink-0 object-contain"
                />
              </NavLink>

              <p className="text-sm font-medium text-black sm:ml-4">
                Theo dõi cuộc thi
              </p>

              <div className="flex items-center gap-3 sm:ml-auto">
                <a
                  href="https://www.facebook.com/TruyenThongTuyenQuang"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="transition-transform hover:-translate-y-1"
                >
                  <img
                    src={facebookIcon}
                    alt=""
                    className="h-12 w-12 object-contain"
                  />
                </a>

                <a
                  href="https://www.facebook.com/TruyenThongTuyenQuang"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="transition-transform hover:-translate-y-1"
                >
                  <img
                    src={youtubeIcon}
                    alt=""
                    className="h-12 w-12 object-contain"
                  />
                </a>

                <a
                  href="https://www.facebook.com/TruyenThongTuyenQuang"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="transition-transform hover:-translate-y-1"
                >
                  <img
                    src={tiktokIcon}
                    alt=""
                    className="h-12 w-12 object-contain"
                  />
                </a>
              </div>
            </div>

            <div className="my-5 h-px w-full bg-stone-300" />

            {/* Email và hotline */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <div className="flex items-center gap-4">
                <img
                  src={emailIcon}
                  alt=""
                  className="h-14 w-14 shrink-0 object-contain"
                />

                <div className="min-w-0">
                  <h3 className="text-sm font-semibold uppercase text-[#087232]">
                    Email
                  </h3>

                  <a
                    href="mailto:Truyenthongatkmedia@gmail.com"
                    className="mt-1 block break-words text-[11px] font-medium leading-4 text-black hover:text-green-800"
                  >
                    Truyenthongatkmedia@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={phoneIcon}
                  alt=""
                  className="h-14 w-14 shrink-0 object-contain"
                />

                <div>
                  <h3 className="text-sm font-semibold uppercase text-[#087232]">
                    Hotline
                  </h3>

                  <a
                    href="tel:0981011000"
                    className="mt-1 block text-[11px] font-medium text-black hover:text-green-800"
                  >
                    0981 011 000
                  </a>
                </div>
              </div>
            </div>

            {/* Menu Footer */}
            <nav aria-label="Liên kết cuối trang" className="mt-5">
              <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 lg:justify-between lg:gap-x-4">
                {footerLinks.map((link) => (
                  <li key={link.to}>
                    <NavLink
                      to={link.to}
                      className="text-xs font-semibold uppercase text-black transition-colors hover:text-green-800"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Cột phải */}
          <div className="py-7 lg:pl-10">
            <div className="grid grid-cols-1 gap-x-8 gap-y-7 sm:grid-cols-2">
              <div className="text-center">
                <p className="text-sm font-medium text-black">
                  Đơn vị tổ chức
                </p>

                <img
                  src={nhiepAnhTreLogo}
                  alt="Câu lạc bộ Nhiếp ảnh trẻ Tuyên Quang"
                  className="mx-auto mt-3 h-[76px] w-[90px] object-contain"
                />
              </div>

              <div className="text-center">
                <p className="text-sm font-medium text-black">
                  Đơn vị phối hợp
                </p>

                <div className="mt-3 flex items-center justify-center gap-4">
                  <img
                    src={hcmLogo}
                    alt="Đoàn Thanh niên"
                    className="h-[72px] w-[72px] object-contain"
                  />

                  <img
                    src={thanhNienLogo}
                    alt="Thanh Niên Việt Nam"
                    className="h-[72px] w-[72px] object-contain"
                  />
                </div>
              </div>

              <div className="text-center">
                <p className="text-sm font-medium text-black">
                  Đơn vị truyền thông
                </p>

                <img
                  src={atkLogo}
                  alt="ATK Media"
                  className="mx-auto mt-3 h-[58px] w-[128px] object-contain"
                />
              </div>

              <div className="text-center">
                <p className="text-sm font-medium text-black">
                  Cộng đồng đồng hành
                </p>

                <img
                  src={nhomNhiepAnhLogo}
                  alt="Nhóm Facebook nhiếp ảnh Tuyên Quang"
                  className="mx-auto mt-3 h-[58px] w-[58px] object-contain"
                />

                <p className="mt-1 text-[10px] font-medium leading-4 text-black">
                  Nhóm Facebook nhiếp ảnh
                  <br />
                  Tuyên Quang
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-stone-300 py-3">
          <div className="flex flex-col items-center justify-between gap-2 text-center sm:flex-row sm:text-left">
            <p className="text-[11px] text-black">
              Copyright © 2026 Tuyên Quang Trong Tôi. All Rights Reserved
            </p>

            <div className="flex items-center gap-6">
              <span className="hidden h-6 w-px bg-stone-300 sm:block" />

              <p className="text-[11px] text-black">
                Designed by ATK Media
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;