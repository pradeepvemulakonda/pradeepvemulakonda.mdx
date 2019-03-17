import React from 'react';
import Image from 'gatsby-image';
import Layout from '../layout/primary-layout';
import SEO from '../components/seo';
import { StaticQuery, graphql, navigate } from 'gatsby';
import Button from '@material-ui/core/Button';
import HomeIcon from '@material-ui/icons/Home';

const NotFoundPage = () => (
  <StaticQuery
    query={NotFoundQuery}
    render={data => {
      console.log('==>', data.notFoundImage.childImageSharp.fluid);
      const image = data.notFoundImage.childImageSharp.fluid;
      return (
        <Layout>
          <SEO title='404: Not found' />
          <figure>
            <Image
              fluid={image}
              alt='NOT FOUND'
            />
            <figcaption>Photo by NASA on Unsplash</figcaption>
          </figure>
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
          <Button
            aria-label='Home'
            aria-haspopup='false'
            variant='contained'
            color='primary'
            onClick={() => {
              navigate(
                '/',
                { replace: false }
              );
            }}
          >
                Home
            <HomeIcon />
          </Button>
        </Layout>
      );
    }
    }
  />
);

const NotFoundQuery = graphql`
  query NotFoundQuery {
    notFoundImage: file(absolutePath: { regex: "/404.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 300) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

export default NotFoundPage;
