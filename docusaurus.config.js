// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer").themes.github;
const darkCodeTheme = require("prism-react-renderer").themes.dracula;

const siteName = "Runme.dev";
const twitterHandle = "@statefulhq";
const prodUrl = "https://runme.dev";
const keywords = [
  "runme",
  "readme",
  "vscode",
  "code",
  "markdown",
  "README.md",
  "onboarding",
  "notebook",
  "renderer",
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RUNME",
  tagline: "Documentation for the RUNME project.",
  url: "https://docs.runme.dev",
  baseUrl: "/",
  titleDelimiter: " • ",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "stateful", // Usually your GitHub org/user name.
  projectName: "runme", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  plugins: [
    require.resolve("./plugins/koala-plugin"),
    async function tailwindCSS(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    [
      "@docusaurus/plugin-pwa",
      {
        debug: true,
        offlineModeActivationStrategies: [
          "appInstalled",
          "standalone",
          "queryString",
        ],
        pwaHead: [
          {
            tagName: "link",
            rel: "icon",
            href: "/img/logo.svg",
          },
          {
            tagName: "link",
            rel: "manifest",
            href: "/manifest.json", // your PWA manifest
          },
          {
            tagName: "meta",
            name: "theme-color",
            content: "rgb(88, 57, 218)",
          },
        ],
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/runmedev/docs.runme.dev/edit/main",
          remarkPlugins: [
            [
              require("./runme-badge-plugin.js"),
              { repository: "https://github.com/runmedev/docs.runme.dev.git" },
            ],
          ],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/runmedev/docs.runme.dev/edit/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        gtag: {
          trackingID: "G-N8HQR9WTV5",
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        /**
         * these meta tags will be fixed for all pages
         */
        { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
        { name: "keywords", content: keywords.join(",") },
        { name: "robots", content: "index, follow" },
        { name: "language", content: "English" },
        { name: "author", content: "Stateful Inc." },
        { name: "contact", content: "contact@stateful.com" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: twitterHandle },
        { property: "og:site_name", content: siteName },
        { property: "og:url", content: prodUrl },
        { property: "og:type", content: "website" },
      ],
      navbar: {
        logo: {
          alt: "RUNME Logo",
          src: "img/logo.svg",
          href: "/",
        },
        items: [
          {
            type: "html",
            position: "left",
            value: /*html*/ `<h1 class="runmeLogo">
              <a href="${prodUrl}">RUNME</a>
            </h1>`,
          },
          {
            type: "doc",
            docId: "index",
            position: "right",
            label: "Documentation",
            className: "docsLink",
          },
          {
            href: "https://runme.dev/community",
            label: "Community",
            position: "right",
            className: "discordLink",
          },
          {
            href: "https://runme.dev/blog",
            label: "Blog",
            position: "right",
            className: "discordLink",
          },
          {
            href: "https://github.com/runmedev/runme",
            label: "Open Source",
            position: "right",
            className: "githubLink",
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      /**
       * credentials available in 1password
       */
      ...(process.env.ALGOLIA_API_KEY &&
      process.env.ALGOLIA_INDEX_NAME &&
      process.env.ALGOLIA_APP_ID
        ? {
            algolia: {
              apiKey: process.env.ALGOLIA_API_KEY,
              indexName: process.env.ALGOLIA_INDEX_NAME,
              appId: process.env.ALGOLIA_APP_ID,
            },
          }
        : {}),
    }),
  headTags: [
    {
      tagName: "link",
      attributes: {
        href: "https://static.scarf.sh/a.png?x-pxid=53709e16-2848-40f3-b485-763d4d788fbb",
        rel: "preload",
        as: "image",
        referrerpolicy: "no-referrer-when-downgrade",
      },
    },
  ],
};

module.exports = config;
