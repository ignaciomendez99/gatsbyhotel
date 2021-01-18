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

const Header = () => {
    return ( 
        <header
            css={css`
                background-color: rgba(44, 62, 80);
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
                <HeadTitle to={'/'}>
                    <h1
                        css={css`
                            color: #fff;
                            text-align: center;
                        `}
                    >Hotel Gatsby</h1>

                </HeadTitle>

                <Navegacion />

            </div>
        </header>
     );
}
 
export default Header;