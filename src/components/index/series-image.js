import * as React from 'react';
import { useMemo } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

// TODO: refactor with block-page-image (maybe pass the query in as a prop?)

const SeriesImage = ({ src, link, alt }) => {

    const data = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        original {
                            src
                        }
                        gatsbyImageData(quality: 100, placeholder: BLURRED, width: 1330)
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
export default SeriesImage;