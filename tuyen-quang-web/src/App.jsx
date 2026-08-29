import { Route, Routes } from "react-router-dom";

import MainLayout from "./components/mainlayout";
import HomePage from "./components/homepage";
import IntroducePage from "./pages/introducepage";
import GuidePage from "./pages/guidepage";
import PrizePage from "./pages/prizepage";
import NewsPage from "./pages/newspage"
import ScrollToTop from "./components/ScrollToTop"; // Import component vừa tạo
import Header from "./components/Header";


function ComingSoonPage({ title }) {
  return (
    <section className="min-h-[70vh] bg-lime-50 px-6 py-20">
      <div className="mx-auto max-w-[1232px]">
        <h1 className="font-['Phudu'] text-4xl font-black uppercase text-green-900">
          {title}
        </h1>

        <p className="mt-5 text-base text-neutral-700">
          Nội dung trang đang được hoàn thiện.
        </p>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
    <ScrollToTop />

    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/gioi-thieu" element={<IntroducePage />} />
        <Route path="/huong-dan" element={<GuidePage/>} />
        <Route path="/giai-thuong" element={<PrizePage/>} />
        <Route
          path="/bai-du-thi"
          element={<ComingSoonPage title="Danh sách bài thi" />}
        />

        <Route path="/tin-tuc" element={<NewsPage/>} />

        <Route
          path="*"
          element={<ComingSoonPage title="Không tìm thấy trang" />}
        />
      </Route>
    </Routes>
    </>
  );
}

export default App;