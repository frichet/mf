// This is where project configuration and installed plugin options are located.
// Learn more: https://gridsome.org/docs/config
// https://gridsome.org/docs/deploy-to-github/

module.exports = {
  siteName: "MF",
  siteUrl: `https://frichet.github.io`,
  pathPrefix: '/mf',
  host: "0.0.0.0",
  titleTemplate: "%s - MF",
  siteDescription: "Creative artist",
  plugins: [
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "projects/**/*.md",
        typeName: "ProjectPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    },
    {
      use: "@gridsome/source-filesystem",
      options: {
        path: "journal/**/*.md",
        typeName: "JournalPost",
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: "_blank",
          externalLinksRel: ["nofollow", "noopener", "noreferrer"]
        }
      }
    }
  ],
  transformers: {
    remark: {
      plugins: ["@gridsome/remark-prismjs"]
    }
  }
};
