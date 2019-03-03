import React from 'react';
import { Link, graphql } from 'gatsby';

import Bio from '../components/bio';
import PrimaryLayout from '../layout/primary-layout';
import SEO from '../components/seo';
import { rhythm, scale } from '../utils/typography';
import PropTypes from 'prop-types';
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import { MDXProvider } from '@mdx-js/tag'

class BlogPostTemplate extends React.Component {
  render() {
    const { data, location, pageContext } = this.props;
    const post = data.mdx;
    const siteTitle = data.site.siteMetadata.title;
    const { previous, next } = pageContext;

    return (
      <PrimaryLayout location={location} title={siteTitle}>
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
        <MDXProvider components={{}}>
          <Header siteTitle={data.site.siteMetadata.title} />
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </MDXProvider>
        <hr
          style={{
            marginBottom: rhythm(1)
          }}
        />
        <Bio />

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
      </PrimaryLayout>
    );
  }
}

BlogPostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!, $sourceName: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMdx(fields: { slug: { eq: $slug }, sourceName: { eq: $sourceName } }) {
      id
      excerpt(pruneLength: 160)
      code {
        body
        scope
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
