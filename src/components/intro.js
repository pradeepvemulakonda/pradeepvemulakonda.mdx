import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';
import GitHubButton from 'react-github-btn'

import { rhythm } from '../utils/typography';

const Details = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${rhythm(1/4)};
`;

const Name = styled.div`
  margin: auto;
`;

const Role = styled.div`
  margin: auto;
`;

const Intro = () => {
  return (
    <StaticQuery
      query={introQuery}
      render={data => {
        const { author } = data.site.siteMetadata;
        return (
          <div style={{
            display: `flex`,
            flexDirection: 'column',
            marginBottom: rhythm(1.5)
          }}>
            <div>
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
            <Details>
                <Name>Bhaskara Pradeep Vemulakonda</Name>
                <Role>Senior Solutions Designer at Westpac</Role>
                <GitHubButton href="https://github.com/pradeepvemulakonda" data-size="large" aria-label="Follow @pradeepvemulakonda on GitHub">
                  Follow @pradeepvemulakonda
                </GitHubButton>
            </Details>
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
