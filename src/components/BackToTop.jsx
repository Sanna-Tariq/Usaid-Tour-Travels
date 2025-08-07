<<<<<<< HEAD
// src/components/BackToTopButton.jsx
import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        id="backToTopBtn"
        className="btn_hover2"
      >
        <i className="fa-solid fa-arrow-turn-up"></i>
      </button>
    )
  );
};

export default BackToTopButton;
=======
// src/components/BackToTopButton.jsx
import React, { useEffect, useState } from 'react';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  // Show button after scrolling
  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        id="backToTopBtn"
        className="btn_hover2"
      >
        <i className="fa-solid fa-arrow-turn-up"></i>
      </button>
    )
  );
};

export default BackToTopButton;
>>>>>>> 41a3005 (homepage)
