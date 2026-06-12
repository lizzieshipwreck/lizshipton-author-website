import * as React from 'react';
import { useMemo } from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as styles from './series-image.module.css';

// TODO: refactor with block-page-image (maybe pass the query in as a prop?)

const SeriesImage = ({ src, link, alt, caption }) => {

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
            { caption && <h3 className={styles.caption}>{caption}</h3>}
        </Link>

    );
}
export default SeriesImage;