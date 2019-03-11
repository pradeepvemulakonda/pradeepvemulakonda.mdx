import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

import { rhythm } from '../utils/typography';

function Intro () {
  return (
    <StaticQuery
      query={introQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div
            style={{
              display: `flex`,
              marginBottom: rhythm(2.5)
            }}
          >
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginBottom: 0,
                borderRadius: `100%`,
                display: 'block',
                marginLeft: 'auto',
	              marginRight: 'auto'
              }}
              imgStyle={{
                borderRadius: `50%`
              }}
            />
          </div>
        );
      }}
    />
  );
}

const introQuery = graphql`
  query IntroQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 200, height: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`;

export default Intro;
