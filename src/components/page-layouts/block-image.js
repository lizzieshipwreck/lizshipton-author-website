import * as React from 'react';
import { useMemo } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const BlockLayoutImage = ({ src, link, alt }) => {
    console.log(src);

    const data = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        original {
                            src
                        }
                        gatsbyImageData(quality: 100, placeholder: BLURRED, width: 495)
                    }
                }
            }
        }
        `
    );

    const match = useMemo(() => data.allImageSharp.edges.find(({ node }) => node.original.src.includes(src)), [data, src]);

    if (!match) return null;
    
    const image = getImage(match.node);

    return (
        <Link to={link}>
            <GatsbyImage
                image={image}
                alt={alt}
            />
        </Link>

    );
}
export default BlockLayoutImage;