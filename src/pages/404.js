import React from 'react'
import Image from 'gatsby-image';
import Layout from '../layout/primary-layout'
import SEO from '../components/seo'
import { StaticQuery, graphql, Link } from 'gatsby';

const NotFoundPage = () => (
  <StaticQuery
      query={NotFoundQuery}
      render={data => {
        const { image } = data.notFoundImage.childImageSharp.fixed;
        return (
          <Layout>
            <SEO title="404: Not found" />
            <Image
                fixed={image}
                alt='NOT FOUND'
                style={{
                  marginBottom: 0,
                  borderRadius: `100%`,
                  display: 'block',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}
              />
            <h1>NOT FOUND</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
            <Link to='/'>
              <button>Home</button>     
            </Link>
            <p>Photo by NASA on Unsplash</p>
          </Layout>
        )
      }
    }
   />
);

const NotFoundQuery = graphql`
  query NotFoundQuery {
    notFoundImage: file(absolutePath: { regex: "/404.jpg/" }) {
      childImageSharp {
        fixed(width: 600, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

export default NotFoundPage
