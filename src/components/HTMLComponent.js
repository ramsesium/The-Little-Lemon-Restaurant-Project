import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const HTMLComponent = () => {
    return (
        <div className="html-container">
          <body>
            <Header />
            <Main />
            <Footer />
          </body>
        </div>
    );
};

export default HTMLComponent;
