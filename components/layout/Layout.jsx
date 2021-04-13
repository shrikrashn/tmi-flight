import React from 'react';
import Footer from '../component/common/Footer'

export default function Layout({children}) {
  return (
    <>
        {children}
        <Footer />
    </>
  );
}
