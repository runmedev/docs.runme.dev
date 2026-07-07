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

const visrAnnouncementDismissScript = `(function() {
  var dismissedAtKey = "runme.visrAnnouncement.dismissedAt";
  var docusaurusDismissKey = "docusaurus.announcement.dismiss";
  var dismissedAttribute = "data-runme-visr-announcement-dismissed";
  var ttl = 48 * 60 * 60 * 1000;

  function setDismissedAttribute(isDismissed) {
    document.documentElement.setAttribute(dismissedAttribute, String(isDismissed));
  }

  try {
    var value = window.localStorage.getItem(dismissedAtKey);
    var dismissedAt = Number(value);
    var isDismissed =
      Boolean(value) &&
      Number.isFinite(dismissedAt) &&
      Date.now() - dismissedAt < ttl;

    if (isDismissed) {
      window.localStorage.setItem(docusaurusDismissKey, "true");
    } else {
      window.localStorage.removeItem(dismissedAtKey);
      window.localStorage.setItem(docusaurusDismissKey, "false");
    }

    setDismissedAttribute(isDismissed);
  } catch (err) {
    setDismissedAttribute(false);
  }
})();`;

const legacyServiceWorkerCleanupScript = `(function() {
  var reloadKey = "runme.legacySwCleanupReloaded";

  function clearReloadMarker() {
    try {
      window.sessionStorage.removeItem(reloadKey);
    } catch (err) {}
  }

  if (!("serviceWorker" in navigator)) {
    clearReloadMarker();
    return;
  }

  Promise.all([
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
      return Promise.all(
        registrations.map(function(registration) {
          return registration.unregister();
        }),
      ).then(function() {
        return registrations.length > 0;
      });
    }),
    "caches" in window
      ? window.caches.keys().then(function(keys) {
          return Promise.all(
            keys.map(function(key) {
              return window.caches.delete(key);
            }),
          ).then(function() {
            return keys.length > 0;
          });
        })
      : Promise.resolve(false),
  ]).then(function(results) {
    var clearedState = results.some(Boolean);
    var alreadyReloaded = false;

    try {
      alreadyReloaded = window.sessionStorage.getItem(reloadKey) === "true";
    } catch (err) {}

    if (clearedState && !alreadyReloaded) {
      try {
        window.sessionStorage.setItem(reloadKey, "true");
      } catch (err) {}
      window.location.reload();
    } else {
      clearReloadMarker();
    }
  });
})();`;

const safeGtagScript = `(function() {
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function() {
    window.dataLayer.push(arguments);
  };
})();`;

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
    async function tailwindCSS(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("@tailwindcss/postcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
    async function fullPageReloadInDev() {
      return {
        name: "full-page-reload-in-dev",
        configureWebpack() {
          return {
            devServer: {
              hot: false,
              liveReload: true,
            },
          };
        },
      };
    },
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
      announcementBar: {
        id: "runme_eval_agents_post",
        content:
          '<a target="_blank" rel="noopener noreferrer" href="https://runme.dev/blog/runme-eval">Task evals for the other 99% of agent users &rarr;</a>',
        backgroundColor: "#facc15",
        textColor: "#000000",
        isCloseable: true,
      },
      navbar: {
        logo: {
          alt: "RUNME Logo",
          src: "img/logo-lockup.svg",
          href: "/",
        },
        items: [
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
      tagName: "script",
      attributes: {},
      innerHTML: visrAnnouncementDismissScript,
    },
    {
      tagName: "script",
      attributes: {},
      innerHTML: safeGtagScript,
    },
    {
      tagName: "script",
      attributes: {},
      innerHTML: legacyServiceWorkerCleanupScript,
    },
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
