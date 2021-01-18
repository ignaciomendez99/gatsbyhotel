import React from 'react';
import Header from './Header';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/react';
import Footer from './footer';
import useSeo from '../hooks/use-seo';

const Layout = (props) => {

    const seo = useSeo();
    const { fallbackSeo: { description, title } } = seo;

    return ( 
        <>
            <Global 
                styles={css`
                    body {
                        font-size: 18px;
                        font-size: 1.8rem;
                        line-height: 1.5;
                        font-family: 'PT Sans', sans-serif;
                    }                    

                    html {
                        font-size: 62.5%;
                    }

                    h1, h2, h3 {
                        margin: 0;
                        line-height: 1.8;
                    }

                    h1, h2 {
                        font-family: 'Roboto Slab', serif;
                    }

                    h3 {
                        font-family: 'PT Sans', sans-serif;
                    }

                    ul {
                        list-style: none;
                        margin: 0;
                        padding: 0;
                    }
                `}
            />
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,700;1,400&family=Roboto+Slab:wght@400;700&display=swap" rel="stylesheet" />
                {/* eslint-disable-next-line */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.css" integrity="sha512-oHDEc8Xed4hiW6CxD7qjbnI+B07vDdX7hEPTvn9pSZO1bcRqHp8mj9pyr+8RVC2GmtEfI2Bi9Ke9Ass0as+zpg==" crossorigin="anonymous" rel="stylesheet" />
            </Helmet>


            <Header />
                {props.children}
            <Footer 
                title={title}
            />
        </>
     );
}
 
export default Layout;