import React from 'react';
import { Link, graphql } from 'gatsby';
import TutorialLayout from '../layout/tutorial-layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer';

class TutorialTemplate extends React.Component {


  render() {
    const { data, location, pageContext } = this.props;
    const post = data.allMdx.edges[0].node;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next } = pageContext;

    return (
        <TutorialLayout location={location} title={siteTitle}>
          <SEO title={post.frontmatter.title} description={post.excerpt} />
          <h1>{post.frontmatter.title}</h1>
          <p
            style={{
              ...scale(-1 / 5),
              display: `block`,
              marginBottom: rhythm(1),
              marginTop: rhythm(-1)
            }}
          >
            {post.frontmatter.date}
          </p>

          <MDXRenderer>{post.code.body}</MDXRenderer>

          <hr
            style={{
              marginBottom: rhythm(1)
            }}
          />

          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel='prev'>
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel='next'>
                  {next.frontmatter.title} →
              </Link>
              )}
            </li>
          </ul>
        </TutorialLayout>
    );
  }
}

TutorialTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default TutorialTemplate;

export const pageQuery = graphql`
  query TutorialSlug($slug: String!, $sourceName: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(filter: {fields: { slug: { eq: $slug }, sourceName: { eq: $sourceName } }}) {
      edges {
        node {
          excerpt(pruneLength: 160)
          code {
            body
            scope
          }
          fields{
            slug
            sourceName
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
