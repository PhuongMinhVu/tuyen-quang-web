import React from "react"

// Assets trang Giới thiệu
import introduceCover from "../assets/introduce-cover.png"
import mayAnhMascot from "../assets/may-anh.png"
import logoDoc from "../assets/logo-tuyen-quang-doc.png"

// Assets tái sử dụng
import categoryPeople from "../assets/rectangle-7.webp"
import categoryCulture from "../assets/rectangle-8.webp"
import categoryNature from "../assets/rectangle-9.webp"
import categoryYouth from "../assets/rectangle-10.webp"
import categoryToday from "../assets/rectangle-11.webp"
import categoryStory from "../assets/rectangle-12.webp"

import giaiDacBiet from "../assets/dacbiet-1.png"
import giaiNhat from "../assets/nhat-1.png"
import giaiNhi from "../assets/nhi-1.png"
import giaiBa from "../assets/ba-1.png"
import prizeBackground from "../assets/rectangle-52.jpg"

import timelineCuocThi from "../assets/timeline-cuoc-thi.png"
import judgeBackground from "../assets/rectangle-54.jpg"
import sonSmile from "../assets/son-smile.png"
import mucDichHero from "../assets/muc-dich-hero.png"


// Dữ liệu 4 Mục tiêu cuộc thi
const objectives = [
  {
    number: "01",
    content: "Tạo sân chơi sáng tạo, bổ ích cho thanh niên và những người yêu thích nhiếp ảnh.",
  },
  {
    number: "02",
    content: "Quảng bá vẻ đẹp thiên nhiên, bản sắc văn hóa và con người Tuyên Quang.",
  },
  {
    number: "03",
    content: "Xây dựng nguồn tư liệu hình ảnh chất lượng phục vụ tuyên truyền và phát triển du lịch.",
  },
  {
    number: "04",
    content: "Phát huy tinh thần xung kích của tuổi trẻ và kết nối cộng đồng đam mê nhiếp ảnh.",
  },
]

// Dữ liệu 6 Hạng mục dự thi
const categories = [
  { title: "Con người\nTuyên Quang", image: categoryPeople },
  { title: "Văn hóa\nvà Bản sắc", image: categoryCulture },
  { title: "Thiên nhiên\nvà Du lịch", image: categoryNature },
  { title: "Tuổi trẻ\nTuyên Quang", image: categoryYouth },
  { title: "Tuyên Quang\nhôm nay", image: categoryToday },
  { title: "Bộ ảnh\nkể chuyện", image: categoryStory },
]

// Dữ liệu Cơ cấu giải thưởng
const prizes = [
  {
    id: 1,
    title: "Giải đặc biệt",
    amount: "5.000.000 VNĐ",
    note: "+ Cúp lưu niệm",
    icon: giaiDacBiet,
  },
  {
    id: 2,
    title: "Giải nhất",
    amount: "3.000.000 VNĐ",
    note: "",
    icon: giaiNhat,
  },
  {
    id: 3,
    title: "Giải nhì",
    amount: "2.000.000 VNĐ",
    note: "",
    icon: giaiNhi,
  },
  {
    id: 4,
    title: "Giải ba",
    amount: "2.000.000 VNĐ",
    note: "",
    icon: giaiBa,
  },
]

// Dữ liệu 5 giai đoạn tiến trình cuộc thi (Đồng bộ với HomePage)
const timelineSteps = [
  {
    number: "01",
    title: "Phát động cuộc thi",
    date: "Đầu tháng 09/2026",
    left: "10.5%",
    top: "41%",
  },
  {
    number: "02",
    title: "Tiếp nhận tác phẩm",
    date: "Đến hết 15/09/2026",
    left: "30.5%",
    top: "28%",
  },
  {
    number: "03",
    title: "Chấm sơ khảo",
    date: "16/09 - 17/09/2026",
    left: "50%",
    top: "17%",
  },
  {
    number: "04",
    title: "Chấm chung khảo",
    date: "18/09 - 19/09/2026",
    left: "70%",
    top: "4%",
  },
  {
    number: "05",
    title: "Trao giải & Triển lãm",
    date: "20/09 - 23/09/2026",
    left: "89.5%",
    top: "-8%",
  },
]

// Dữ liệu Ban giám khảo
const judges = [
  { id: 1, name: "Giám khảo 1", role: "Chức vụ", portrait: null },
  { id: 2, name: "MR. Ma Văn Sơn", role: "Founder & CEO ATK Media Tuyên Quang", portrait: sonSmile },
  { id: 3, name: "Giám khảo 2", role: "Chức vụ", portrait: null },
  { id: 4, name: "Giám khảo 3", role: "Chức vụ", portrait: null },
]

function IntroducePage() {
  return (
    <div className="w-full bg-white">
      
      {/* 1. HERO BANNER TRÀN VIỀN */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[360px] w-full sm:h-[460px] lg:h-[540px]">
          <img
            src={introduceCover}
            alt="Giới thiệu"
            className="h-full w-full object-cover object-center"
          />

          {/* Khung chữ dóng thẳng hàng mép trái Logo */}
          <div className="absolute inset-0 flex items-start">
            <div className="mx-auto w-full max-w-[1440px] px-6 pt-10 lg:px-[104px] lg:pt-16">
              <div className="max-w-[340px] sm:max-w-[420px] lg:max-w-[460px]">
                <h1 className="font-['Phudu'] text-3xl font-black uppercase text-black sm:text-4xl lg:text-5xl">
                  GIỚI THIỆU
                </h1>
                <p className="mt-3 font-['Fz_Poppins'] text-xs font-normal leading-relaxed text-black sm:text-sm lg:text-[14px]">
                  Tổng quan về Cuộc thi và Triển lãm ảnh "Tuyên Quang trong tôi 2026" – Hành trình lưu giữ những khoảnh khắc đẹp, lan tỏa tình yêu quê hương và tôn vinh vẻ đẹp thiên nhiên, văn hóa, con người Tuyên Quang qua nghệ thuật nhiếp ảnh.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2 & 3. KHỐI NỘI DUNG & THÔNG ĐIỆP GỘP CHUNG 1 GRADIENT TỪ ĐẦU ĐẾN CUỐI */}
      <section className="w-full bg-gradient-to-b from-[#FEFFF9] to-[#F3FFD7] pt-14 lg:pt-20">
        
        {/* PHẦN 1: LOGO + MÁY ẢNH (TRÁI) & LÝ DO, MỤC TIÊU, SỨ MỆNH (PHẢI) */}
        <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:gap-16 lg:px-[104px]">
          
          {/* Cột trái: Logo & Linh vật máy ảnh */}
          <div className="flex flex-col items-start justify-start space-y-8 lg:col-span-4 lg:pt-2">
            <img src={logoDoc} alt="Logo" className="w-full max-w-[320px] object-contain" />
            <img src={mayAnhMascot} alt="Linh vật máy ảnh" className="w-full max-w-[340px] object-contain drop-shadow-md" />
          </div>

          {/* Cột phải: Lý do hình thành, Mục tiêu 2x2, Sứ mệnh */}
          <div className="w-full space-y-10 lg:col-span-8">
            
            {/* Lý do hình thành cuộc thi */}
            <div>
              <h2 className="font-['Phudu'] text-2xl font-black uppercase tracking-tight text-green-900 sm:text-3xl lg:text-4xl">
                LÝ DO HÌNH THÀNH CUỘC THI
              </h2>
              <div className="mt-4 space-y-3 font-['Fz_Poppins'] text-xs leading-relaxed text-black sm:text-sm lg:text-[14px]">
                <p>
                  Ai cũng có một <em>"Tuyên Quang trong tôi"</em> – một góc nhìn riêng về vùng đất, con người và những khoảnh khắc đáng nhớ của quê hương. Đó có thể là vẻ đẹp hùng vĩ của núi rừng, những nét văn hóa đặc sắc được gìn giữ qua nhiều thế hệ, những câu chuyện bình dị trong cuộc sống thường ngày hay những đổi thay của Tuyên Quang trên hành trình phát triển.
                </p>
                <p>
                  Trong thời đại số, mỗi bức ảnh không chỉ là sự ghi lại khoảnh khắc mà còn là cầu nối cảm xúc, giúp lan tỏa những giá trị tốt đẹp đến cộng đồng. Với mong muốn tạo nên một sân chơi sáng tạo dành cho những người yêu nhiếp ảnh, đồng thời quảng bá hình ảnh quê hương đến với đông đảo công chúng, Cuộc thi và Triển lãm ảnh <strong>"Tuyên Quang trong tôi 2026"</strong> được tổ chức nhằm tôn vinh những góc nhìn chân thực, giàu cảm xúc về vùng đất và con người Tuyên Quang.
                </p>
              </div>
            </div>

            {/* Mục tiêu cuộc thi */}
            <div>
              <h2 className="font-['Phudu'] text-2xl font-black uppercase tracking-tight text-green-900 sm:text-3xl lg:text-4xl">
                MỤC TIÊU CUỘC THI
              </h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {objectives.map((item) => (
                <div
                  key={item.number}
                  className="group flex cursor-pointer flex-col rounded-[20px] border border-[#8DC359] bg-white p-5 shadow-sm transition-all duration-300 hover:border-transparent hover:bg-gradient-to-b hover:from-[#95CA5C] hover:to-[#0C6F38] hover:shadow-lg"
                >
                  {/* Số thứ tự: Mặc định xanh lục, hover chuyển sang trắng */}
                  <span className="font-['Phudu'] text-3xl font-black text-[#8DC359] transition-colors duration-300 group-hover:text-white">
                    {item.number}
                  </span>

                  {/* Nội dung: Mặc định chữ đen, hover chuyển sang trắng */}
                  <p className="mt-2 font-['Fz_Poppins'] font-semibold text-xs leading-relaxed text-black transition-colors duration-300 group-hover:text-white sm:text-[13px]">
                    {item.content}
                  </p>
                </div>
              ))}
            </div>
            </div>

            {/* Sứ mệnh */}
            <div>
              <h2 className="font-['Phudu'] text-2xl font-black uppercase tracking-tight text-green-900 sm:text-3xl lg:text-4xl">
                SỨ MỆNH
              </h2>
              <div className="mt-4 space-y-3 font-['Fz_Poppins'] text-xs leading-relaxed text-black sm:text-sm lg:text-[14px]">
                <p>
                  Cuộc thi và Triển lãm ảnh <strong>"Tuyên Quang trong tôi 2026"</strong> mang sứ mệnh kết nối những người yêu nhiếp ảnh bằng tình yêu quê hương và niềm đam mê sáng tạo.
                </p>
                <p>
                  Thông qua mỗi tác phẩm, cuộc thi mong muốn kể lại những câu chuyện chân thực về thiên nhiên, văn hóa, con người và nhịp sống đương đại của Tuyên Quang; góp phần lưu giữ những giá trị đẹp, lan tỏa cảm hứng tích cực và xây dựng hình ảnh địa phương thân thiện, giàu bản sắc.
                </p>
                <p>
                  Đây cũng là dịp để cộng đồng cùng nhìn lại, khám phá và chia sẻ những góc nhìn mới về quê hương, từ đó góp phần quảng bá hình ảnh Tuyên Quang trong thời kỳ hội nhập và phát triển.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* PHẦN 2: THÔNG ĐIỆP CUỘC THI */}
        <div className="mx-auto w-full max-w-[1440px] px-6 pt-12 pb-6 lg:px-[104px]">
        <h2 className="font-['Phudu'] text-2xl font-black uppercase text-[#1B6327] sm:text-3xl lg:text-4xl">
          THÔNG ĐIỆP CUỘC THI
        </h2>

        <div className="mt-4 flex items-start justify-between gap-6 lg:gap-12">
          <p className="max-w-[920px] font-['Fz_Poppins'] text-sm font-normal leading-relaxed text-black sm:text-base lg:text-[16px]">
            Mỗi bức ảnh là một câu chuyện. Mỗi khoảnh khắc là một ký ức. Hãy cùng lưu giữ và lan tỏa những hình ảnh đẹp về quê hương, con người Tuyên Quang bằng góc nhìn sáng tạo, chân thực và đầy cảm xúc.
          </p>

            <svg
            width="57"
            height="51"
            viewBox="0 0 57 51"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-auto shrink-0 -mt-8 sm:h-12 sm:-mt-10"
          >
            <defs>
              <linearGradient id="quoteGrad" x1="0" y1="0" x2="0" y2="51" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#11743A" />
                <stop offset="100%" stopColor="#79CF1E" />
              </linearGradient>
            </defs>
            <path
              d="M0 0H23.5V23.5C23.5 35 15 45 1.5 50.5L0 41.5C7 38 11.5 31.5 11.5 23.5H0V0Z"
              fill="url(#quoteGrad)"
            />
            <path
              d="M28.5 0H52V23.5C52 35 43.5 45 30 50.5L28.5 41.5C35.5 38 40 31.5 40 23.5H28.5V0Z"
              fill="url(#quoteGrad)"
            />
          </svg>
          </div>
        </div>

        {/* PHẦN 3: ẢNH MUCDICHHERO CROP 743PX LIỀN DƯỚI GRADIENT */}
        <div className="relative aspect-[1440/743] w-full overflow-hidden leading-none">
          <img
            src={mucDichHero}
            alt="Thông điệp Cuộc thi Tuyên Quang Trong Tôi 2026"
            className="h-full w-full object-cover object-bottom"
          />
        </div>

      </section>

      {/* 4. KHỐI XANH LÁ LỚN: TRÀN VIỀN 100% NỀN XANH (BO GÓC TRÊN) */}
      <section className="w-full bg-gradient-to-b from-[#559D42] via-[#1D602C] to-[#256D34] rounded-t-[50px] sm:rounded-t-[80px] lg:rounded-t-[100px] pt-16 pb-24 text-white">
        <div className="mx-auto w-full max-w-[1440px] px-6 lg:px-[104px]">
          
          {/* Hạng mục dự thi */}
          <div>
            <h2 className="font-['Phudu'] text-2xl font-black uppercase text-white sm:text-3xl lg:text-4xl">
              HẠNG MỤC DỰ THI
            </h2>

            {/* Lưới 6 thẻ hạng mục đồng bộ HomePage */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-3.5 lg:grid-cols-6 lg:gap-3.5">
              {categories.map((category) => (
                <button
                  key={category.title}
                  type="button"
                  className="group relative aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  {/* Ảnh nền danh mục */}
                  <img
                    src={category.image}
                    alt={category.title.replace("\n", " ")}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Hộp chữ tràn khít mép trên và 2 bên, bo cong mép đáy */}
                  <div className="absolute inset-x-0 top-0 flex h-[62px] items-center justify-center overflow-hidden rounded-t-[22px] rounded-b-[18px] border-[3px] border-[#268B45] bg-white px-2 shadow-sm transition-all duration-300 group-hover:border-[#1E6D34]">
                    {/* Nền gradient xanh phủ lên khi rê chuột */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-br from-[#85C446] via-[#4DA53E] to-[#1E6D34] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />

                    {/* Tên hạng mục: Chuyển sang chữ trắng khi hover */}
                    <span className="relative z-10 whitespace-pre-line text-center font-['Fz_Poppins'] text-xs font-bold uppercase leading-4 text-[#1A6C35] transition-colors duration-300 group-hover:!text-white lg:text-[13px]">
                      {category.title}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Cơ cấu giải thưởng */}
          <div className="mt-20">
            <h2 className="font-['Phudu'] text-2xl font-black uppercase sm:text-3xl lg:text-4xl">
              CƠ CẤU GIẢI THƯỞNG
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8">
              {prizes.map((prize) => (
                <article
                  key={prize.id}
                  className="relative min-h-[130px] overflow-hidden rounded-2xl bg-white shadow-sm"
                >
                  <img
                    src={prizeBackground}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="relative z-10 flex min-h-[130px] items-center px-4 py-3 sm:px-6">
                    <div className="flex w-[90px] shrink-0 items-center justify-center sm:w-[110px]">
                      <img
                        src={prize.icon}
                        alt={prize.title}
                        className="h-[80px] w-[80px] object-contain sm:h-[95px] sm:w-[95px]"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col items-start justify-center pl-2 sm:pl-4">
                      <div className="flex min-h-8 min-w-[150px] items-center justify-center rounded-full bg-gradient-to-b from-[#88BF57] to-[#287C3D] px-5 py-1 text-center text-xs font-bold uppercase text-white sm:text-sm">
                        {prize.title}
                      </div>
                      <p className="mt-2 whitespace-nowrap font-['Fz_Poppins'] text-lg font-black uppercase text-green-900 sm:text-2xl">
                        {prize.amount}
                      </p>
                      {prize.note && (
                        <p className="font-['Fz_Poppins'] text-xs font-bold uppercase text-black sm:text-sm">
                          {prize.note}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Tiến trình các vòng thi */}
          <div className="mt-20">
            <h2 className="font-['Phudu'] text-2xl font-black uppercase sm:text-3xl lg:text-4xl">
              CƠ CẤU GIẢI THƯỞNG
            </h2>

            {/* Desktop Timeline dùng asset timeline-cuoc-thi.png */}
            <div className="relative mt-12 hidden h-[410px] w-full lg:block">
              <img
                src={timelineCuocThi}
                alt=""
                aria-hidden="true"
                className="absolute bottom-0 left-0 h-auto w-full object-contain"
              />

              {timelineSteps.map((step) => (
                <div
                  key={step.number}
                  className="absolute z-10 flex w-[190px] -translate-x-1/2 flex-col items-center text-center"
                  style={{
                    left: step.left,
                    top: step.top,
                  }}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#9DD253]">
                    <span className="font-['Phudu'] text-4xl font-[800] text-white">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="mt-12 text-lg font-bold uppercase leading-6 text-white">
                    {step.title}
                  </h3>

                  <p className="mt-4 whitespace-nowrap text-xs font-normal uppercase text-white/90">
                    {step.date}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Timeline */}
            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
              {timelineSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex items-center gap-4 rounded-2xl bg-white/10 p-4 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#9DD253]">
                    <span className="font-['Phudu'] text-xl font-bold text-white">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs text-white/80">
                      {step.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Ban giám khảo */}
          <div className="mt-20">
            <h2 className="font-['Phudu'] text-2xl font-black uppercase sm:text-3xl lg:text-4xl">
              BAN GIÁM KHẢO
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {judges.map((judge) => (
                <article key={judge.id} className="min-w-0">
                  <div className="group relative aspect-[284/352] w-full overflow-hidden rounded-2xl bg-neutral-200">
                    <img
                      src={judgeBackground}
                      alt=""
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    {judge.portrait && (
                      <img
                        src={judge.portrait}
                        alt={judge.name}
                        className="absolute bottom-0 left-1/2 z-10 h-[88%] w-auto max-w-[78%] -translate-x-1/2 origin-bottom object-contain object-bottom transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                      />
                    )}
                  </div>
                  <h3 className="mt-4 font-['Fz_Poppins'] text-base font-bold uppercase leading-tight text-white">
                    {judge.name}
                  </h3>
                  <p className="mt-1 font-['Fz_Poppins'] text-xs font-medium text-white/80">
                    {judge.role}
                  </p>
                </article>
              ))}
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default IntroducePage