# Personal Blog starter

> Live demo: 
> [view demo](https://blog.vemulakonda.com)

This project uses Gatsby and mdx for blogging and tutorials.

The following frameworks are used
- Material-UI
- Gatsby
- mdx
- prisimjs
- styled-components
- react
- remark
- sharp

1. Clone the repository

```sh
git clone https://github.com/pradeepvemulakonda/pradeepvemulakonda.mdx.git
```

2. Install dependencies

```sh
yarn
```

3. Run the develop script

```sh
gatsby develop
```

4. For Prdouction build
```sh
gatsby build && gatsby serve
```

5. Add your pages to in `content/blog/*.mdx`

6. Add your tutorials unser `content/tutorila/<subject>/*.mdx`

7. Update the sub-menu in yaml files at `src/data/*.yaml`

8. To customise the layouts modify `src/layouts/*.js`

9. To customise the templates modify `src/templates/*.js`
