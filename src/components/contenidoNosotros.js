import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const Contenido = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 2rem;
    }

    p {
        line-height: 2;
        margin-top: 2rem;
    }
`

const ContenidoNosotros = () => {

    const info = useStaticQuery(graphql`
    query {
        allDatoCmsPagina( filter: { slug: { eq: "nosotros" }  }) {
          nodes {
            titulo
            contenido
            id
            imagen {
              fluid ( maxWidth: 1200 ) {
                ...GatsbyDatoCmsFluid
              }
            }
            
          }
        }
      }
    `)
    
    const resultado = info.allDatoCmsPagina.nodes[0];

    const { titulo, contenido, imagen } = resultado;

    return ( 
        <>
            <h1
                css={css`
                    margin-top: 4rem;
                    text-align: center;
                    font-size: 4rem;
                `}
            >{titulo}</h1>
            
            <Contenido>
                <p>{contenido}</p>
                <Image fluid={imagen.fluid} />

            </Contenido>
            
        </>
     );
}
 
export default ContenidoNosotros;