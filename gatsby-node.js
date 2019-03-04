const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
              edges {
                node {
                  id
                   fields {
                    id
                    sourceName
                    slug
                  }
                  parent {
                    ... on File {
                      name
                    }
                  }
                  frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                  }
                  code {
                    scope
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }
        // Create blog posts pages.
        const edges = result.data.allMdx.edges;
        buildPosts(edges, createPage);
        buildTutorials(edges, createPage);
      })
    )
  })
};

  buildPosts = (edges, createPage) => {
    const blogPost = path.resolve(`./src/templates/blog-post.js`);
    const posts = edges.filter((edge) => {
      return edge.node.fields.sourceName === 'posts';
    });

    posts.forEach(({node}, index) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1].node
      const next = index === 0 ? null : posts[index - 1].node
      createPage({
        path: node.fields.slug,
        component: blogPost,
        context: {
          slug: node.fields.slug,
          sourceName: node.fields.sourceName,
          previous,
          next,
        },
      })
    })
  };

  buildTutorials = (edges, createPage) => {
    const tutorial = path.resolve(`./src/templates/tutorial.js`)
    const tutorials = edges.filter((edge) => {
      return edge.node.fields.sourceName === 'tutorials';
    });
    tutorials.forEach(({node}, index) => {
      const previous = index === tutorials.length - 1 ? null : tutorials[index + 1].node
      const next = index === 0 ? null : tutorials[index - 1].node
      createPage({
        path: node.fields.slug,
        component: tutorial,
        context: {
          slug: node.fields.slug,
          sourceName: node.fields.sourceName,
          previous,
          next,
        },
      })
    })
  }


  exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      },
    })
  };

  exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if (node.internal.type === `Mdx`) {
      const parent = getNode(node.parent);
      const pathValue = `/${parent.sourceInstanceName}${createFilePath({ node, getNode })}`;

      createNodeField({
        name: 'id',
        node,
        value: node.id
      });

      createNodeField({
        name: 'title',
        node,
        value: node.frontmatter.title
      });

      createNodeField({
        name: 'description',
        node,
        value: node.frontmatter.description
      });

      createNodeField({
        name: 'date',
        node,
        value: node.frontmatter.date || ''
      });

      createNodeField({
        name: 'banner',
        node,
        banner: node.frontmatter.banner
      });

      createNodeField({
        name: 'categories',
        node,
        value: node.frontmatter.categories || []
      });

      createNodeField({
        name: 'keywords',
        node,
        value: node.frontmatter.keywords || []
      });

      createNodeField({
        node,
        name: 'sourceName',
        value: parent.sourceInstanceName
      });

      createNodeField({
        node,
        name: 'slug',
        value: pathValue
      });
    }
  };