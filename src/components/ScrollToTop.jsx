import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Cuộn lên đầu trang mỗi khi location thay đổi (khi chuyển trang)
    window.scrollTo(0, 0);
  }, [location]); // Khi location thay đổi (nghĩa là khi chuyển trang)

  return null;
}

export default ScrollToTop;
