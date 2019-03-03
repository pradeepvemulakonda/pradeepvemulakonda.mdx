import React from 'react';
import { graphql, navigate } from 'gatsby';
import Bio from '../components/bio';
import PrimaryLayout from '../layout/primary-layout';
import SEO from '../components/seo';
import { rhythm } from '../utils/typography';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { MuiTheme } from '../theme/theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/tag'

const StyledCard = styled(Card)`
  margin-bottom: ${rhythm(1 / 2)}
`;

const StyledCardPrimaryContent = styled(CardContent)`
  padding-left: ${rhythm(1 / 5)};
  padding-top: ${rhythm(1 / 5)};
  padding-right: ${rhythm(1 / 5)};
  padding-bottom: 0;
  background-color: ${props => {
    return props.theme.palette.grey[50];
  }};
  :after, :before {
    background-color: ${props => props.theme.palette.grey[50]};
  }
`;
const StyledCardActionArea = styled(CardActionArea)`
  padding: ${rhythm(1 / 4)}
  background-color: pink;
  :after, :before {
    background-color: pink;
  }
`;
const Excerpt = styled.p`
  margin-bottom: ${rhythm(1 / 5)};
`;

class BlogIndex extends React.Component {
  render () {
    const { data, location } = this.props;
    const siteTitle = data.site.siteMetadata.title;
    const posts = data.allMdx.edges;

    return (
      <ThemeProvider theme={MuiTheme}>
        <MuiThemeProvider theme={MuiTheme}>
          <PrimaryLayout location={location} title={siteTitle}>
            <SEO
              title='All posts'
              keywords={[`blog`, `gatsby`, `javascript`, `react`]}
            />
            {posts.map(({ node }) => {
              const title = node.frontmatter.title || node.fields.slug;
              return (
                <StyledCard key={node.fields.slug}>
                  <StyledCardActionArea>
                    <StyledCardPrimaryContent>
                      <h2>{title}</h2>
                      <h6>{node.frontmatter.date}</h6>
                      <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    </StyledCardPrimaryContent>
                  </StyledCardActionArea>
                  <CardActions>
                    <Button variant='contained' color='secondary' onClick={event => {
                      navigate(
                        node.fields.slug,
                        { replace: false }
                      );
                    }}>open</Button>
                  </CardActions>
                </StyledCard>
              );
            })}
            <Bio />
          </PrimaryLayout>
        </MuiThemeProvider>
      </ThemeProvider>
    );
  }
}

BlogIndex.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(filter: {fields: {sourceName: {eq: "post"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
      edges {
        node {
          excerpt
          fields {
            slug
            sourceName
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
