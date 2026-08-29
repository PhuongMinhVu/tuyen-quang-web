import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Tự động cuộn lên đỉnh trang mỗi khi đường dẫn URL thay đổi
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Dùng "smooth" nếu bạn muốn hiệu ứng cuộn mượt mà
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;