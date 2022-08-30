import * as React from 'react';
import { useMemo } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as moduleStyles from './book-cover.module.css';

const BookCover = ({ src, description, link, styles }) => {
    const data = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        original {
                            src
                        }
                        gatsbyImageData(quality: 100, placeholder: BLURRED, height: 475)
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
            <div className={moduleStyles.hover}>
                <div className={`${moduleStyles.descriptionBlock} ${styles.descriptionBlock}`}>
                    {
                        description.map((paragraph) => {
                            return <p className={moduleStyles.description}>{paragraph}</p>
                        })
                    }
                </div>
                <GatsbyImage image={image} className={moduleStyles.bookCover} />
            </div>
        </Link>

    );
}
export default BookCover;