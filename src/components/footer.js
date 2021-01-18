import React from 'react';
import { css } from '@emotion/react'
import Navegacion from './Nav';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const HeadTitle = styled(Link)`
    text-decoration: none; 
    text-align: center;
    color: #fff;
`

const Footer = ({title}) => {

    const year = new Date().getFullYear();
    return ( 
        <>
        <footer
            css={css`
                background-color: rgba(44, 62, 80);
                margin-top: 5rem;
                padding: 1rem;
            `}
        >
            <div
                css={css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px) {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                    }
                `}
            >
                

                <Navegacion />

                <HeadTitle to={'/'}>
                    <h1
                        css={css`
                            color: #fff;
                            text-align: center;
                        `}
                    >Hotel Gatsby</h1>

                </HeadTitle>

            </div>
        </footer>
        <p
            css={css`
                text-align: center;
                color: #fff;
                background-color: rgb(33, 44, 55);
                margin: 0;
                padding: 1rem;
            `}
        >
            {title}. Todos los derechos reservados {year} &copy;
        </p>
        </>
     );
}
 
export default Footer;