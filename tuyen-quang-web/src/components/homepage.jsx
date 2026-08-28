import { Link } from "react-router-dom"

import heroBackground from "../assets/hero-background.png"
import heroMapTuyenQuang from "../assets/hero-map-tuyen-quang.png"
import logoTuyenQuangDoc from "../assets/logo-tuyen-quang-doc.png"
import iconDangKy from "../assets/icon-dang-ky.svg"
import iconTheLe from "../assets/icon-the-le.svg"
import mucDichHero from "../assets/muc-dich-hero.png"
import logo3D from "../assets/3d-logo.png"

import addressIcon from "../assets/address-icon.svg"
import loveIcon from "../assets/love-icon.svg"
import shareIcon from "../assets/share.svg"

import cachThucIcon from "../assets/cachthuc-icon-1.svg"
import doiTuongIcon from "../assets/doituong-icon-1.svg"
import quyDinhIcon from "../assets/quy-dinh-icon-1.svg"
import tieuChuanIcon from "../assets/tieuchuan-icon-1.svg"

import categoryPeople from "../assets/rectangle-7.webp"
import categoryCulture from "../assets/rectangle-8.webp"
import categoryNature from "../assets/rectangle-9.webp"
import categoryYouth from "../assets/rectangle-10.webp"
import categoryToday from "../assets/rectangle-11.webp"
import categoryStory from "../assets/rectangle-12.webp"

import featuredImage from "../assets/rectangle-27.webp"
import contestRulesImage from "../assets/rectangle-46.jpg"

import timelineCuocThi from "../assets/timeline-cuoc-thi.png"

import giaiDacBiet from "../assets/dacbiet-1.png"
import giaiNhat from "../assets/nhat-1.png"
import giaiNhi from "../assets/nhi-1.png"
import giaiBa from "../assets/ba-1.png"

import prizeBackground from "../assets/rectangle-52.jpg"
import judgeBackground from "../assets/rectangle-54.jpg"
import sonSmile from "../assets/son-smile.png"

import tinTucAnhBia from "../assets/tintuc-anhbia.webp"
import xemThemIcon from "../assets/xemthem-icon.svg" 

const categories = [
  {
    title: "Con người\nTuyên Quang",
    image: categoryPeople,
  },
  {
    title: "Văn hóa\nvà Bản sắc",
    image: categoryCulture,
  },
  {
    title: "Thiên nhiên\nvà Du lịch",
    image: categoryNature,
  },
  {
    title: "Tuổi trẻ\nTuyên Quang",
    image: categoryYouth,
  },
  {
    title: "Tuyên Quang\nhôm nay",
    image: categoryToday,
  },
  {
    title: "Bộ ảnh\nkể chuyện",
    image: categoryStory,
  },
]

const featuredPosts = Array.from({ length: 8 }, (_, index) => ({
  id: index + 1,
  title: "Bình Minh Na Hang",
  author: "Lê Hoàng Long",
  code: String(index + 1).padStart(5, "0"),
  location: "Chiêm Hóa",
  votes: 980,
  image: featuredImage,
}))

const contestRules = [
  {
    title: "Đối tượng tham gia",
    icon: doiTuongIcon,
    content:
      "Đoàn viên, thanh niên và những người yêu thích nhiếp ảnh, có niềm đam mê sáng tạo nghệ thuật, mong muốn ghi lại và lan tỏa những khoảnh khắc đẹp của cuộc sống, con người và quê hương.",
  },
  {
    title: "Quy định tác phẩm",
    icon: quyDinhIcon,
    content:
      "Tác phẩm phải được sáng tác tại Tuyên Quang, do chính tác giả thực hiện, không sử dụng AI, không vi phạm bản quyền. Mỗi tác giả tối đa 10 ảnh đơn và 01 bộ ảnh.",
  },
  {
    title: "Tiêu chuẩn ảnh",
    icon: tieuChuanIcon,
    content:
      "Ảnh màu hoặc đen trắng, định dạng JPG, dung lượng không vượt quá 10MB/ảnh, đảm bảo hình ảnh rõ nét, không bị vỡ hay giảm chất lượng.",
  },
  {
    title: "Cách thức gửi bài",
    icon: cachThucIcon,
    content:
      "Thí sinh nộp tác phẩm trực tiếp trên website của cuộc thi theo hướng dẫn được đăng tải trên hệ thống.",
  },
]

//giai
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

const timelineSteps = [
  {
    number: "01",
    title: "Vòng sơ loại",
    date: "Từ ngày ... đến ngày ...",
    left: "10.5%",
    top: "41%",
  },
  {
    number: "02",
    title: "Vòng loại",
    date: "Từ ngày ... đến ngày ...",
    left: "30.5%",
    top: "28%",
  },
  {
    number: "03",
    title: "Vòng bán kết",
    date: "Từ ngày ... đến ngày ...",
    left: "50%",
    top: "17%",
  },
  {
    number: "04",
    title: "Vòng chung kết",
    date: "Từ ngày ... đến ngày ...",
    left: "70%",
    top: "4%",
  },
  {
    number: "05",
    title: "Gala trao giải",
    date: "Từ ngày ... đến ngày ...",
    left: "89.5%",
    top: "-8%",
  },
]

const judges = [
  {
    id: 1,
    name: "Giám khảo 1",
    role: "Chức vụ",
    portrait: null,
  },
  {
    id: 2,
    name: "MR. Ma Văn Sơn",
    role: "Founder & CEO ATK Media Tuyên Quang",
    portrait: sonSmile,
  },
  {
    id: 3,
    name: "Giám khảo 1",
    role: "Chức vụ",
    portrait: null,
  },
  {
    id: 4,
    name: "Giám khảo 1",
    role: "Chức vụ",
    portrait: null,
  },
]

//tintuc

const newsItems = [
  {
    id: 1,
    title:
      'Cuộc thi “Tuyên Quang Trong Tôi” năm 2026: Công bố chi tiết thể lệ, hồ sơ và quy định dự thi',
    date: "06.2026",
  },
  {
    id: 2,
    title:
      'Phát động cuộc thi “Tuyên Quang Trong Tôi”, Tuyên Quang dưới góc nhìn tuổi trẻ năm 2026',
    date: "06.2026",
  },
]



function HomePage() {
  return (
    <>
      

      {/* Hero banner */}
  <section
  id="trang-chu"
  className="
    relative
    w-full
    overflow-hidden
    bg-cover
    bg-center
    bg-no-repeat
    px-4
    py-8
    sm:px-8
    lg:px-12
  "
  style={{
    backgroundImage: `url(${heroBackground})`,
  }}
>
  {/* Lớp ngoài tạo viền gradient */}
<div
  className="
    mx-auto
    w-full
    max-w-[1232px]
    rounded-[40px]
    bg-gradient-to-b
    from-[#93C156]
    to-[#F1DFC0]
    p-[10px]
  "
>
  {/* Lớp trong chứa toàn bộ nội dung Hero */}
  <div
    className="
      relative
      aspect-[1232/603]
      w-full
      overflow-hidden
      rounded-[30px]
    "
  >
    {/* Ảnh bản đồ phủ kín toàn bộ khung bo góc */}
    <img
      src={heroMapTuyenQuang}
      alt="Bản đồ minh họa các địa danh Tuyên Quang"
      className="
        absolute
        inset-0
        h-full
        w-full
        object-cover
      "
    />

    {/* Logo dọc bên trái */}
    <img
      src={logoTuyenQuangDoc}
      alt="Logo Tuyên Quang Trong Tôi 2026"
      className="
        absolute
        left-[7%]
        top-1/2
        z-10
        w-[23%]
        max-w-[285px]
        -translate-y-1/2
        object-contain
      "
    />

    {/* Nhóm nút */}
    <div
      className="
        absolute
        bottom-[7%]
        left-1/2
        z-20
        flex
        -translate-x-1/2
        items-center
        gap-25
      "
    >
      {/* Nút đăng ký dự thi: Giữ nguyên màu cũ, mở Google Form, hover phóng to nhẹ */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSdzAR_AHMmZJ5Cb-vMl2iMLdSVdO37TceNPG-y6P79qmU2GTg/viewform?usp=publish-editor"
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          h-10
          min-w-[165px]
          cursor-pointer
          items-center
          justify-center
          gap-3
          rounded-md
          border
          border-white
          bg-[#247A3E]
          px-5
          font-['Fz_Poppins']
          text-sm
          font-semibold
          !text-white
          shadow-md
          transition-all
          duration-200
          hover:scale-105
          hover:bg-[#1D6634]
        "
      >
        <span className="text-white">Đăng ký dự thi</span>

        <img
          src={iconDangKy}
          alt=""
          aria-hidden="true"
          className="h-6 w-6 shrink-0 object-contain"
        />
      </a>

      {/* Nút xem thể lệ: Giữ nguyên màu cũ, chuyển sang trang /huong-dan, hover phóng to nhẹ */}
      {/* Nút xem thể lệ */}
      <Link
        to="/huong-dan"
        className="
          flex
          h-10
          min-w-[145px]
          cursor-pointer
          items-center
          justify-center
          gap-3
          rounded-md
          bg-white
          px-5
          font-['Fz_Poppins']
          text-sm
          font-semibold
          !text-[#247A3E]
          shadow-md
          transition-all
          duration-200
          hover:scale-105
          hover:bg-green-50
        "
      >
        <span className="text-[#247A3E]">Xem thể lệ</span>

        <img
          src={iconTheLe}
          alt=""
          aria-hidden="true"
          className="h-6 w-6 shrink-0 object-contain"
        />
      </Link>
    </div>
  </div>
  </div>
  </section>

            {/* Mục đích, ý nghĩa và thông điệp cuộc thi */}
      <section
        id="gioi-thieu"
        className="
          relative
          isolate
          w-full
          overflow-hidden
          bg-[#F7F9E9]
        "
      >
        {/* Ảnh nền toàn bộ section */}
        <img
          src={mucDichHero}
          alt=""
          aria-hidden="true"
          className="
            absolute
            inset-0
            -z-20
            h-full
            w-full
            object-cover
            object-center
          "
        />

        {/* Lớp phủ nhẹ để phần chữ phía trên dễ đọc */}
        <div
          className="
            absolute
            inset-0
            -z-10
            bg-gradient-to-b
            from-[#F8FBEA]/95
            via-[#F8FBEA]/30
            to-transparent
          "
        />

        <div
          className="
            mx-auto
            min-h-[900px]
            w-full
            max-w-[1440px]
            px-4
            py-14
            sm:px-8
            lg:min-h-[1256px]
            lg:px-[104px]
            lg:py-20
          "
        >
          {/* Hàng trên: Khối mục đích và logo 3D */}
          <div
            className="
              grid
              items-center
              gap-10
              lg:grid-cols-[minmax(0,768px)_396px]
              lg:gap-16
            "
          >
            {/* Khối nội dung mục đích */}
            <div
            className="
              w-full
              rounded-[40px]
              bg-gradient-to-b
              from-[#93C156]
              to-[#F1DFC0]
              p-[13px]
              shadow-sm
            "
          >
            <div
              className="
                min-h-[358px]
                w-full
                rounded-[28px]
                bg-gradient-to-b
                from-[#FFFFFF]
                to-[#FAFFE7]
                px-6
                py-8
                sm:px-10
                lg:px-12
                lg:pb-14
                lg:pt-9
              "
            >
              <h2
                className="
                  font-['Phudu']
                  text-2xl
                  font-black
                  uppercase
                  leading-tight
                  text-green-900
                  sm:text-3xl
                  lg:text-4xl
                "
              >
                Mục đích – Ý nghĩa cuộc thi
              </h2>

              <div
                className="
                  mt-6
                  font-['Fz_Poppins']
                  text-sm
                  font-normal
                  leading-7
                  text-black
                  sm:text-base
                "
              >
                <p>
                  Tạo một sân chơi sáng tạo, lành mạnh dành cho đoàn viên,
                  thanh niên và những người yêu nhiếp ảnh; góp phần khơi dậy
                  đam mê, phát huy khả năng ghi lại những khoảnh khắc đẹp của
                  cuộc sống. Cuộc thi đồng thời quảng bá hình ảnh quê hương,
                  con người Tuyên Quang, xây dựng nguồn tư liệu hình ảnh chất
                  lượng phục vụ công tác truyền thông và lan tỏa các giá trị
                  tích cực đến cộng đồng.
                </p>

                <p className="mt-5">
                  Bên cạnh đó, đây cũng là hoạt động nhằm phát huy vai trò
                  xung kích của tuổi trẻ và kết nối cộng đồng yêu nhiếp ảnh
                  trong và ngoài địa phương.
                </p>
              </div>
            </div>
            </div>

            {/* Logo 3D bên phải */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={logo3D}
                alt="Biểu tượng cuộc thi Tuyên Quang Trong Tôi 2026"
                className="
                  h-auto
                  w-[250px]
                  object-contain
                  sm:w-[320px]
                  lg:w-[396px]
                "
              />
            </div>
          </div>

          {/* Thông điệp cuộc thi */}
          <div
            className="
              mt-20
              flex
              w-full
              flex-col
              items-start
              lg:mt-28
              lg:items-end
            "
          >
            <h2
              className="
                font-['Phudu']
                text-3xl
                font-black
                uppercase
                leading-tight
                text-green-900
                lg:text-right
                lg:text-4xl
              "
            >
              Thông điệp cuộc thi
            </h2>

            <div
              className="
                mt-6
                flex
                max-w-[980px]
                items-start
                gap-4
                lg:gap-6
              "
            >
              {/* Icon dấu ngoặc kép vẽ bằng SVG */}
              <svg
                viewBox="0 0 64 52"
                fill="none"
                aria-hidden="true"
                className="
                  mt-1
                  h-10
                  w-12
                  shrink-0
                  text-[#38813C]
                  lg:h-12
                  lg:w-14
                "
              >
                <path
                  d="M5 4H27V24H17C17 32 21 38 29 42L22 51C8 45 2 35 2 22V7C2 5.34 3.34 4 5 4Z"
                  fill="currentColor"
                />

                <path
                  d="M37 4H59V24H49C49 32 53 38 61 42L54 51C40 45 34 35 34 22V7C34 5.34 35.34 4 37 4Z"
                  fill="currentColor"
                />
              </svg>

              <p
                className="
                  font-['Fz_Poppins']
                  text-sm
                  font-normal
                  leading-7
                  text-black
                  sm:text-base
                  lg:text-right
                "
              >
                Có những vẻ đẹp hiện hữu trong từng khoảnh khắc đời thường,
                trong nụ cười, việc làm ý nghĩa và những nét đẹp của quê hương
                Tuyên Quang. Mỗi bức ảnh, mỗi thước phim không chỉ lưu giữ kỷ
                niệm mà còn kể những câu chuyện đẹp, góp phần lan tỏa tình yêu
                quê hương, niềm tự hào và những giá trị nhân văn trong cuộc
                sống.
              </p>
            </div>
          </div>
        </div>
      </section>    
      
      {/* Hạng mục dự thi, bài thi nổi bật và thể lệ cuộc thi */}
<section
  id="bai-thi"
  className="
    w-full
    bg-gradient-to-b
    from-yellow-50
    via-lime-50
    to-orange-100
    px-4
    py-16
    sm:px-8
    lg:px-12
  "
>
  <div className="mx-auto w-full max-w-[1232px]">
    {/* Hạng mục dự thi */}
    <div>
      <h2
        className="
          font-['Phudu']
          text-3xl
          font-[800]
          uppercase
          leading-tight
          text-green-900
          sm:text-4xl
        "
      >
        Hạng mục dự thi
      </h2>

      <div
        className="
          mt-8
          grid
          grid-cols-2
          gap-4
          sm:grid-cols-3
          lg:grid-cols-6
          lg:gap-8
        "
      >
        {categories.map((category) => (
          <button
            key={category.title}
            type="button"
            className="
              group
              relative
              aspect-[176/192]
              w-full
              overflow-hidden
              rounded-[10px]
              bg-white
              shadow-sm
            "
          >
            <img
              src={category.image}
              alt={category.title.replace("\n", " ")}
              className="
                h-full
                w-full
                object-cover
                transition
                duration-300
                group-hover:scale-105
              "
            />

            <div
              className="
                absolute
                left-0
                top-0
                flex
                h-16
                w-full
                items-center
                justify-center
                rounded-lg
                border-4
                border-[#268B45]
                bg-white
                px-2
              "
            >
              <span
                className="
                  whitespace-pre-line
                  text-center
                  font-['Fz_Poppins']
                  text-xs
                  font-bold
                  uppercase
                  leading-5
                  text-green-900
                  lg:text-sm
                "
              >
                {category.title}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>

    {/* Bài thi nổi bật */}
    <div className="mt-16">
      <div
        className="
          rounded-2xl
          bg-gradient-to-b
          from-[#8EC459]
          to-[#1F763B]
          px-5
          py-7
          sm:px-8
        "
      >
        <h2
          className="
            text-center
            font-['Phudu']
            text-3xl
            font-[800]
            uppercase
            leading-tight
            text-white
            sm:text-4xl
          "
        >
          Bài thi nổi bật
        </h2>

        <div
          className="
            mt-5
            flex
            flex-wrap
            items-center
            justify-center
            gap-4
            sm:gap-10
          "
        >
          <button
            type="button"
            className="
              min-w-[112px]
              rounded-2xl
              border
              border-white
              bg-gradient-to-b
              from-[#33904A]
              to-[#1F763B]
              px-7
              py-1.5
              font-['Fz_Poppins']
              text-sm
              font-normal
              text-white
              transition
              hover:brightness-110
              sm:text-base
            "
          >
            Mới nhất
          </button>

          <button
            type="button"
            className="
              min-w-[176px]
              rounded-2xl
              border
              border-white
              bg-gradient-to-b
              from-[#33904A]
              to-[#1F763B]
              px-8
              py-1.5
              font-['Fz_Poppins']
              text-sm
              font-normal
              text-white
              transition
              hover:brightness-110
              sm:text-base
            "
          >
            Được yêu thích
          </button>

          <button
            type="button"
            className="
              min-w-[176px]
              rounded-2xl
              border
              border-white
              bg-gradient-to-b
              from-[#33904A]
              to-[#1F763B]
              px-8
              py-1.5
              font-['Fz_Poppins']
              text-sm
              font-normal
              text-white
              transition
              hover:brightness-110
              sm:text-base
            "
          >
            Bình chọn nhiều
          </button>
        </div>
      </div>

      {/* Danh sách bài thi */}
      <div
      className="
        mt-8
        grid
        grid-cols-1
        gap-6
        sm:grid-cols-2
        lg:grid-cols-4
      "
    >
        {featuredPosts.map((post) => (
          <article
          key={post.id}
          className="
            flex
            h-full
            min-w-0
            flex-col
            overflow-hidden
            rounded-[20px]
            border
            border-black/5
            bg-white
            p-4
            shadow-[0_2px_8px_rgba(0,0,0,0.12)]
            transition
            duration-200
            hover:-translate-y-1
            hover:shadow-lg
          "
        >
          {/* Ảnh bài thi */}
          <img
            src={post.image}
            alt={post.title}
            className="
              aspect-[16/9]
              w-full
              rounded-[16px]
              object-cover
            "
          />

          <div className="flex flex-1 flex-col px-2 pb-1 pt-4">
            {/* Tên bài thi */}
            <h3
              className="
                font-['Fz_Poppins']
                text-[18px]
                font-bold
                leading-[1.35]
                text-black
              "
            >
              {post.title}
            </h3>

            {/* Tên tác giả */}
            <p
              className="
                mt-1
                font-['Fz_Poppins']
                text-[15px]
                font-normal
                leading-6
                text-black
              "
            >
              {post.author}
            </p>

            {/* Đẩy hai hàng dưới xuống cuối card */}
            <div className="mt-auto pt-1">
              {/* Mã số và địa điểm */}
              <div
                className="
                  grid
                  grid-cols-[minmax(0,1fr)_auto]
                  items-center
                  gap-3
                "
              >
                <p
                  className="
                    truncate
                    font-['Fz_Poppins']
                    text-[14px]
                    font-normal
                    text-black
                  "
                >
                  Mã số: {post.code}
                </p>

                <div className="flex items-center gap-2">
                  <img
                    src={addressIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 object-contain"
                  />

                  <span
                    className="
                      whitespace-nowrap
                      font-['Fz_Poppins']
                      text-[14px]
                      font-normal
                      text-black
                    "
                  >
                    {post.location}
                  </span>
                </div>
              </div>

              {/* Lượt thích, chia sẻ và bình chọn */}
              <div
                className="
                  mt-3
                  flex
                  items-center
                  justify-between
                  gap-10
                "
              >
                {/* Lượt thích */}
                <div className="flex shrink-0 items-center gap-3">
                  <img
                    src={loveIcon}
                    alt=""
                    aria-hidden="true"
                    className="h-7 w-7 shrink-0 object-contain"
                  />

                  <span
                    className="
                      font-['Fz_Poppins']
                      text-[16px]
                      font-semibold
                      text-black
                    "
                  >
                    {post.votes}
                  </span>
                </div>

                {/* Icon share và nút bình chọn */}
                <div className="flex shrink-0 items-center gap-3">
                  {/* Share */}
                  <button
                    type="button"
                    aria-label={`Chia sẻ bài thi ${post.title}`}
                    className="
                      flex
                      h-8
                      w-8
                      shrink-0
                      items-center
                      justify-center
                      border-0
                      bg-transparent
                      p-0
                      transition
                      hover:scale-105
                    "
                  >
                    <img
                      src={shareIcon}
                      alt=""
                      aria-hidden="true"
                      className="h-10 w-10 object-contain"
                    />
                  </button>

                  {/* Bình chọn */}
                  <button
                    type="button"
                    className="
                      flex
                      h-8
                      min-w-[100px]
                      items-center
                      justify-center
                      rounded-full
                      bg-gradient-to-b
                      from-[#8DC359]
                      to-[#1C753A]
                      px-4
                      font-['Fz_Poppins']
                      text-[14px]
                      font-semibold
                      text-white
                      shadow-sm
                      transition
                      hover:brightness-110
                    "
                  >
                    Bình chọn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
        ))}
      </div>

      {/* Nút xem thêm */}
      <div className="mt-8 flex justify-center">
        <button
          type="button"
          className="
            min-w-[144px]
            rounded-[29px]
            border
            border-[#8DC359]
            bg-lime-50
            px-10
            py-2
            font-['Fz_Poppins']
            text-sm
            font-medium
            text-green-800
            transition
            hover:bg-white
          "
        >
          Xem thêm
        </button>
      </div>
    </div>

    {/* Thể lệ cuộc thi */}
    <div id="the-le" className="mt-20">
      <div
        className="
          rounded-[40px]
          border-[5px]
          border-white
          bg-gradient-to-b
          from-[#FFFFFF]
          via-[#FAFFE8]
          to-[#EBFBCA]
          px-6
          py-10
          shadow-sm
          sm:px-10
          lg:rounded-[58px]
          lg:px-14
          lg:py-14
        "
      >
        <div
          className="
            grid
            items-center
            gap-12
            lg:grid-cols-[320px_minmax(0,1fr)]
            lg:gap-16
          "
        >
          {/* Cột ảnh điện thoại */}
          <div>
            <h2
              className="
                mb-8
                font-['Phudu']
                text-3xl
                font-[800]
                uppercase
                leading-tight
                text-green-900
                sm:text-4xl
              "
            >
              Thể lệ cuộc thi
            </h2>

            <img
              src={contestRulesImage}
              alt="Hướng dẫn gửi bài dự thi trên điện thoại"
              className="
                mx-auto
                w-full
                max-w-[320px]
                rounded-3xl
                border-[5px]
                border-[#8DC359]
                object-cover
              "
            />
          </div>

          {/* Cột nội dung thể lệ */}
          <div className="space-y-9">
            {contestRules.map((rule) => (
              <div
                key={rule.title}
                className="
                  grid
                  grid-cols-[32px_minmax(0,1fr)]
                  gap-4
                "
              >
                <img
                  src={rule.icon}
                  alt=""
                  aria-hidden="true"
                  className="h-7 w-7 object-contain"
                />

                <div>
                  <h3
                    className="
                      font-['Fz_Poppins']
                      text-lg
                      font-bold
                      uppercase
                      text-green-900
                      sm:text-xl
                    "
                  >
                    {rule.title}
                  </h3>

                  <p
                    className="
                      mt-2
                      font-['Fz_Poppins']
                      text-sm
                      font-normal
                      leading-6
                      text-black
                      sm:text-base
                    "
                  >
                    {rule.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* Cơ cấu giải thưởng, các vòng thi và ban giám khảo */}
<section
  id="giai-thuong"
  className="
    w-full
    bg-[#FFF3D9]
    px-4
    pb-0
    pt-0
    sm:px-5
    lg:px-5
  "
>

  <div
  className="
    mx-auto
    w-full
    max-w-none
    overflow-hidden
    rounded-[72px]
    bg-gradient-to-r
    from-[#60A54C]
    via-[#1D602C]
    to-[#4A9445]
    px-5
    pb-24
    pt-12
    sm:px-8
    sm:pb-28
    lg:rounded-[117px]
    lg:px-[104px]
    lg:pb-32
    lg:pt-14
  "
>

    {/* Cơ cấu giải thưởng */}
    <div>
      <h2
        className="
          font-['Phudu']
          text-3xl
          font-[800]
          uppercase
          leading-tight
          text-white
          sm:text-4xl
        "
      >
        Cơ cấu giải thưởng
      </h2>

      {/* Danh sách giải thưởng */}
      <div
        className="
          mt-10
          grid
          grid-cols-1
          gap-7
          lg:grid-cols-2
          lg:gap-x-20
          lg:gap-y-12
        "
      >
        {prizes.map((prize) => (
          <article
            key={prize.id}
            className="
              relative
              min-h-[140px]
              overflow-hidden
              rounded-2xl
              bg-white
              shadow-sm
            "
          >
            {/* Ảnh nền giải thưởng */}
            <img
              src={prizeBackground}
              alt=""
              aria-hidden="true"
              className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            <div
              className="
                relative
                z-10
                flex
                min-h-[140px]
                items-center
                px-4
                py-3
                sm:px-6
              "
            >
              {/* Huy chương hoặc cúp */}
              <div
                className="
                  flex
                  w-[105px]
                  shrink-0
                  items-center
                  justify-center
                  sm:w-[130px]
                "
              >
                <img
                  src={prize.icon}
                  alt={prize.title}
                  className="
                    h-[105px]
                    w-[105px]
                    object-contain
                    sm:h-[120px]
                    sm:w-[120px]
                  "
                />
              </div>

              {/* Nội dung giải */}
              <div
                className="
                  flex
                  min-w-0
                  flex-1
                  flex-col
                  items-start
                  justify-center
                  pl-2
                  sm:pl-4
                "
              >
                <div
                  className="
                    flex
                    min-h-10
                    min-w-[170px]
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-b
                    from-[#88BF57]
                    to-[#287C3D]
                    px-6
                    py-1.5
                    text-center
                    text-base
                    font-semibold
                    uppercase
                    text-white
                    sm:min-w-[224px]
                    sm:text-xl
                  "
                >
                  {prize.title}
                </div>

                <p
                  className="
                    mt-2
                    whitespace-nowrap
                    text-xl
                    font-bold
                    uppercase
                    text-green-900
                    sm:text-3xl
                  "
                >
                  {prize.amount}
                </p>

                {prize.note && (
                  <p
                    className="
                      mt-1
                      text-sm
                      font-bold
                      uppercase
                      text-black
                      sm:text-base
                    "
                  >
                    {prize.note}
                  </p>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>

    {/* Các vòng cuộc thi */}
    <div className="mt-20 lg:mt-24">
      <h2
        className="
          font-['Phudu']
          text-3xl
          font-[800]
          uppercase
          leading-tight
          text-white
          sm:text-4xl
        "
      >
        Tiến Trình Cuộc Thi
      </h2>

      {/* Timeline trên desktop */}
      <div
        className="
          relative
          mt-12
          hidden
          h-[410px]
          w-full
          lg:block
        "
      >
        <img
          src={timelineCuocThi}
          alt=""
          aria-hidden="true"
          className="
            absolute
            bottom-0
            left-0
            h-auto
            w-full
            object-contain
          "
        />

        {timelineSteps.map((step) => (
          <div
            key={step.number}
            className="
              absolute
              z-10
              flex
              w-[190px]
              -translate-x-1/2
              flex-col
              items-center
              text-center
            "
            style={{
              left: step.left,
              top: step.top,
            }}
          >
            <div
              className="
                flex
                h-20
                w-20
                items-center
                justify-center
                rounded-full
                bg-[#9DD253]
              "
            >
              <span
                className="
                  font-['Phudu']
                  text-4xl
                  font-[800]
                  text-white
                "
              >
                {step.number}
              </span>
            </div>

            <h3
              className="
                mt-12
                text-lg
                font-bold
                uppercase
                leading-6
                text-white
              "
            >
              {step.title}
            </h3>

            <p
              className="
                mt-4
                whitespace-nowrap
                text-xs
                font-normal
                uppercase
                text-white/90
              "
            >
              {step.date}
            </p>
          </div>
        ))}
      </div>

      {/* Timeline trên mobile và tablet */}
      <div
        className="
          mt-10
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          lg:hidden
        "
      >
        {timelineSteps.map((step) => (
          <div
            key={step.number}
            className="
              flex
              min-h-[130px]
              items-center
              gap-5
              rounded-3xl
              bg-white/10
              p-5
              backdrop-blur-sm
            "
          >
            <div
              className="
                flex
                h-16
                w-16
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#9DD253]
              "
            >
              <span
                className="
                  font-['Phudu']
                  text-3xl
                  font-[800]
                  text-white
                "
              >
                {step.number}
              </span>
            </div>

            <div>
              <h3
                className="
                  text-base
                  font-bold
                  uppercase
                  text-white
                "
              >
                {step.title}
              </h3>

              <p
                className="
                  mt-2
                  text-xs
                  font-normal
                  uppercase
                  leading-5
                  text-white/80
                "
              >
                {step.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Ban giám khảo */}
    <div className="mt-20">
      <h2
        className="
          font-['Phudu']
          text-3xl
          font-[800]
          uppercase
          leading-tight
          text-white
          sm:text-4xl
        "
      >
        Ban giám khảo
      </h2>

      <div
        className="
          mt-10
          grid
          grid-cols-1
          gap-8
          sm:grid-cols-2
          lg:grid-cols-4
          lg:gap-7
        "
      >
        {judges.map((judge) => (
          <article
            key={judge.id}
            className="min-w-0"
          >
            {/* Thẻ ảnh giám khảo */}
            <div
            className="
              group
              relative
              aspect-[284/352]
              w-full
              overflow-hidden
              rounded-2xl
            "
          >
              <img
                src={judgeBackground}
                alt=""
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  h-full
                  w-full
                  object-cover
                "
              />

              {judge.portrait && (
                <img
                src={judge.portrait}
                alt={judge.name}
                className="
                  absolute
                  bottom-0
                  left-1/2
                  z-10
                  h-[88%]
                  w-auto
                  max-w-[78%]
                  -translate-x-1/2
                  origin-bottom
                  object-contain
                  object-bottom
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-[1.04]
                "
              />
              )}
            </div>

            <h3
              className="
                mt-5
                text-lg
                font-bold
                uppercase
                leading-6
                text-white
                sm:text-xl
              "
            >
              {judge.name}
            </h3>

            <p
              className="
                mt-2
                text-xs
                font-semibold
                leading-5
                text-white
              "
            >
              {judge.role}
            </p>
          </article>
        ))}
      </div>
    </div>
  </div>
</section>


  {/* =========================================================
    TIN TỨC NỔI BẬT VÀ FOOTER
========================================================= */}

<div
  className="
    relative
    z-20
    -mt-12
    w-full
    bg-white
    sm:-mt-14
    lg:-mt-16
  "
>
  <div
  className="
    mx-auto
    w-full
    max-w-none
    bg-white
  "
>
    {/* Tin tức nổi bật */}
    <section
        id="tin-tuc"
        className="
          w-full
          rounded-t-[44px]
          bg-white
          px-5
          pb-12
          pt-10
          sm:rounded-t-[56px]
          sm:px-8
          lg:rounded-t-[76px]
          lg:px-[104px]
          lg:pb-[52px]
          lg:pt-12
        "
      >
      {/* Tiêu đề và nút xem thêm */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <h2
          className="
            font-['Phudu']
            text-3xl
            font-[800]
            uppercase
            leading-tight
            text-[#087232]
            sm:text-4xl
          "
        >
          Tin tức nổi bật
        </h2>

        <button
          type="button"
          className="
            inline-flex
            h-10
            w-fit
            min-w-[134px]
            items-center
            justify-center
            gap-3
            rounded-full
            border
            border-[#8DC359]
            bg-white
            px-5
            text-sm
            font-semibold
            text-[#087232]
            transition-colors
            hover:bg-lime-50
          "
        >
          <span>Xem thêm</span>

          <img
            src={xemThemIcon}
            alt=""
            aria-hidden="true"
            className="h-4 w-4 object-contain"
          />
        </button>
      </div>

      {/* Danh sách tin tức */}
      <div
        className="
          mt-8
          grid
          grid-cols-1
          gap-6
          lg:grid-cols-[minmax(0,526px)_minmax(0,1fr)]
          lg:gap-20
        "
      >
        {/* Tin chính */}
        <article
          className="
            group
            relative
            min-h-[302px]
            overflow-hidden
            rounded-[20px]
            bg-stone-100
          "
        >
          <img
            src={tinTucAnhBia}
            alt="Tin tức cuộc thi Tuyên Quang Trong Tôi 2026"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />

          <div
            className="
              absolute
              inset-x-4
              bottom-4
              rounded-[18px]
              bg-gradient-to-b
              from-white/95
              to-stone-50/95
              px-5
              py-4
              shadow-sm
              backdrop-blur-[2px]
            "
          >
            <h3
              className="
                text-sm
                font-semibold
                uppercase
                leading-5
                text-black
                sm:text-[15px]
              "
            >
              Cuộc thi “Tuyên Quang Trong Tôi” nơi mỗi người trẻ gửi gắm được
              góc nhìn về vẻ đẹp quê hương mình
            </h3>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <time className="text-xs font-medium uppercase text-neutral-400 sm:text-sm">
                12.06.2026
              </time>

              <button
                type="button"
                className="
                  inline-flex
                  h-8
                  min-w-[164px]
                  items-center
                  justify-center
                  gap-3
                  rounded-[9px]
                  bg-[#167438]
                  px-5
                  text-xs
                  font-semibold
                  uppercase
                  text-white
                  transition-colors
                  hover:bg-[#0D5F2D]
                "
              >
                <span>Xem thêm</span>

                <img
                  src={xemThemIcon}
                  alt=""
                  aria-hidden="true"
                  className="h-3.5 w-3.5 brightness-0 invert"
                />
              </button>
            </div>
          </div>
        </article>

        {/* Hai tin phụ */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-10">
          {newsItems.slice(0, 2).map((news) => (
            <article
              key={news.id}
              className="
                flex
                min-h-[302px]
                flex-col
                rounded-[10px]
                border
                border-neutral-200
                bg-gradient-to-b
                from-white
                to-[#FAFFF5]
                px-4
                py-5
                transition
                hover:-translate-y-1
                hover:shadow-md
              "
            >
              <h3 className="text-sm font-medium leading-5 text-[#087232]">
                {news.title}
              </h3>

              <div className="mt-auto">
                <div className="mb-4 h-px w-full bg-stone-300" />

                <div className="flex items-center justify-between gap-3">
                  <time className="text-xs font-normal uppercase text-neutral-400">
                    {news.date}
                  </time>

                  <button
                    type="button"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-xs
                      font-semibold
                      uppercase
                      text-[#087232]
                      transition-colors
                      hover:text-green-950
                    "
                  >
                    <span>Xem thêm</span>

                    <img
                      src={xemThemIcon}
                      alt=""
                      aria-hidden="true"
                      className="h-3.5 w-3.5 object-contain"
                    />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    
  </div>
</div>


    </>
  )
}

export default HomePage