import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import Container from 'react-bootstrap/esm/Container';
import Stack from 'react-bootstrap/esm/Stack';
import { useState, useEffect } from 'react';


export const Hello = () => {
  return (
    <DotLottieReact
      src="https://lottie.host/651556e5-28d8-4fba-b0c4-91ad25ff76f8/4aTjOBEdx4.lottie"
      loop
      autoplay
    />
  );
};

export const Download = () => {
  return (
    <DotLottieReact
      style={{width: '50%'}}
      src="https://lottie.host/4c0f011f-43ee-4da3-be75-6178e5a3881a/YQEIApKU7h.lottie"
      loop
      autoplay
    >
      <p >Resume</p>
    </DotLottieReact>
  );
};

export const useResponsiveWidth = () => {
  const [width, setWidth] = useState(() => {
    return window.innerWidth <= 768 ? '100vw' : '70vw';
  });

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth <= 768 ? '100vw' : '70vw');
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return width;
};

export const useResponsiveFontSize = () => {
  const [fontSize, setFontSize] = useState('16px');

  const updateFontSize = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      setFontSize('14px'); // Small screens
    } else if (screenWidth < 1024) {
      setFontSize('15px'); // Medium screens (tablets)
    } else {
      setFontSize('16px'); // Large screens (desktops)
    }
  };

  useEffect(() => {
    updateFontSize(); // Set initial font size
    window.addEventListener('resize', updateFontSize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  return fontSize;
}