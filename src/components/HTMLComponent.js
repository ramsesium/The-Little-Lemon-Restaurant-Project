import React from 'react';
import { Helmet } from 'react-helmet'; // adding Helmet for Meta-data
import Header from '../components/Header';
import Main from '../components/Main';
import Footer from '../components/Footer';

const HTMLComponent = () => {
    return (
      <>
        <Helmet>
          <title>Little Lemon</title>
          <meta name="description" content="Little Lemon restaurant - your cozy place for delicious meals and great memories. Explore our menu, make reservations, and order online."/>
          <meta name="og:title" content="Little Lemon Restaurant"/>
          <meta name="og:description" content="Little Lemon restaurant is a vibrant eatery in the heart of town, offering a diverse menu crafted from locally sourced ingredients. Whether you're dining with family, on a date, or catching up with friends, our cozy restaurant has something for everyone. Join us for a memorable dining experience."/>
          <meta name="og:image" content="https://stock.adobe.com/ru/search/free?filters%5Bcontent_type%3Aphoto%5D=0&filters%5Bcontent_type%3Aillustration%5D=0&filters%5Bcontent_type%3Azip_vector%5D=1&filters%5Bcontent_type%3Avideo%5D=0&filters%5Bcontent_type%3Atemplate%5D=0&filters%5Bcontent_type%3A3d%5D=0&filters%5Bfree_collection%5D=1&filters%5Bcontent_type%3Aimage%5D=1&filters%5Binclude_stock_enterprise%5D=0&filters%5Bis_editorial%5D=0&k=tree&order=relevance&safe_search=1&search_page=1&search_type=usertyped&acp=&aco=tree&get_facets=1&asset_id=399895799"/>
        </Helmet>

        <body>
          <Header />
          <Main />
          <Footer />
        </body>
      </>
    );
};

export default HTMLComponent;


