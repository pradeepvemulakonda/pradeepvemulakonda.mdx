const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPost = path.resolve(`./src/templates/blog-post.js`)
  const tutorial = path.resolve(`./src/templates/tutorial.js`)
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
          console.log(result.errors)
          reject(result.errors)
        }
        // Create blog posts pages.
        const posts = result.data.allMdx.edges;
        result.data.allMdx.edges.forEach(({node}, index ) => {
          const previous = index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node
          const sourceName = node.fields.sourceName;
          let template = sourceName === 'blog' ? blogPost : tutorial;
          createPage({
            path: node.fields.slug,
            component: template,
            context: {
              slug: node.fields.slug,
              sourceName: node.fields.sourceName,
              previous,
              next,
            },
          })
        })
      })
    )
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
    console.log('==>', pathValue);

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
      name: 'slug',
      node,
      value: node.frontmatter.slug
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