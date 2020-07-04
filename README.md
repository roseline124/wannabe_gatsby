<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->

## Wanna be Gatsby

roseline's blog.

**other blogs**

- [https://roseline124.github.io](https://roseline124.github.io)
- [https://roseline-song.netlify.com](https://roseline-song.netlify.com)

## 📝 To DOs

### main page

1. design

- [x] apply material UI and theme
- [x] pagelayout - header
- [x] pagelayout - footer
- [x] split pagelayout header as file
- [x] add post list
- [x] add cover image
- [x] add parallax scroll to post list
- [ ] disable scroll bounce effect bottom in iOS

2. query and route

- [x] query posts
- [ ] add link to post list
- [ ] add thumbnail to frontmatter
- [ ] use fragment in index.tsx (PostListItem fragment)

### post detail page

- [x] fix createPage in gatsby-node.js (forgot await)
- [ ] design postlayout

## 🧐 What's inside?

A quick look at the top-level files and directories in this project.

    .
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── src
      ├── assets
      ├── components
      ├── constans
      ├── templates
      ├── style
      ├── pages
      ├── posts
      ├── utils
    ├── static

1. **gatsby-config.js**: add plugins and options.
2. **gatsby-node.js**: create post pages automatically.
3. src

- **assets**: static files for post or blog itself.
- **components**: re-usable components.
- **constants**: re-usable constants.
- **templates**: page layout.
- **style**: theme files for material-ui.
- **pages**: page component. query for page data muse be in page component. and assign the query to const named `pageQuery`. (I wonder why fragment is not recognized in page query doc)
- **posts**: markdown files.
- **utils**: my tool box.

4. **static**: static files (images, favicon) for website. static folder in root directory is automatically copied in public folder. [refer this.](https://www.gatsbyjs.org/docs/importing-assets-into-files/)

## 💫 Deploy

[My Blog(WIP)](https://roseline.netlify.app) was deployed in netlify.
It'll be moved to `github.io` soon later.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)
