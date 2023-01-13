import * as React from 'react';
import { useState } from 'react';
import { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import * as moduleStyles from './book-cover.module.css';

const BookCover = ({ src, description, title, alt }) => {
    const [showDescription, setShowDescription] = useState(false);

    const data = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        original {
                            src
                        }
                        gatsbyImageData(quality: 100, placeholder: BLURRED, width: 320)
                    }
                }
            }
        }
        `
    );

    const match = useMemo(() => data.allImageSharp.edges.find(({ node }) => node.original.src.includes(src)), [data, src]);

    if (!match) return null;
    
    const image = getImage(match.node);
    
    const revealDescription = (e) => {

        if (showDescription) {
            setShowDescription(false);
        } else {
            setShowDescription(true)
        }
    }

    return (
        <div onClick={revealDescription}>
            <div className={moduleStyles.container}>
                <div className={`${moduleStyles.descriptionBlock} ${moduleStyles[`descriptionBlock${title}`]}`}>
                    {
                        description.map((paragraph) => {
                            return <p className={moduleStyles.description}>{paragraph}</p>
                        })
                    }
                </div>
                <GatsbyImage
                    image={image}
                    className={`${moduleStyles.bookCover} ${showDescription && moduleStyles.bookCoverHover}`}
                    alt={alt}
                />
            </div>
        </div>

    );
}
export default BookCover;