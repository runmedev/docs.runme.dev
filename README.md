---
runme:
  id: 01HPS63DBFZ40KX2WT6H287DAC
  version: v3
---

# docs.runme.dev

This is the primary documentation website for Runme, located at docs.runme.dev. It primarily serves markdown using [Docusaurus 2](https://docusaurus.io/) to help runme users find installation, configuration, features, intergrations, faq and other information about using or contributing to Runme the open source project (runme.dev).

### Check for broken links

```sh {"id":"01HPS5X3F7947CR1D70Y6MHWH3"}
$ npm install broken-link-checker -g
```

Run it against production site.

```sh {"id":"01HPS5VV6PQV280R8XVCJWY9TH"}
$ rm -f links.log; npx blc https://docs.runme.dev -ro > links.log
# expected to fail if any non 2xx/3xx status code occur
```

All 404s.

```sh {"id":"01HPS67YRQ942VG2C4QXA238QX","interactive":"false"}
$ grep "HTTP_404" links.log
```

Ignore externals.

```sh {"id":"01HPS5ZD9VAJA60MJWEACJ04W5","interactive":"false"}
$ cat links.log | grep -v "https://github.com" | grep -v "https://marketplace" | grep "HTTP_404" | grep -v "/static/videos/"
```

### Installation

Install all the dependencies using npm.

```sh {"id":"01HPS5TSQ0VYD6QXQZEPJPZ60A","name":"setup"}
npm install
```

### Local Development

When developing locally we remove the build directory to avoid any confusion and run the docusaurus server.

```sh {"background":"true","id":"01HPS5TSQ00E1RC31EMBG5W9WE","name":"start"}
rm -rf build/
npm run start
```

Most changes are reflected live without having to restart the server.

### Build

To build the website locally, or to test/preview the build process that will run in CI.

```sh {"id":"01HPS5TSQ025AQBEY5C5R7BQK4","name":"build"}
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Upgrade dependencies

```sh {"id":"01HY0WFKM0C6QHVG0DF42AFZMM","name":"upgrade"}
npm i @docusaurus/core@latest @docusaurus/plugin-pwa@latest @docusaurus/preset-classic@latest @docusaurus/module-type-aliases@latest @docusaurus/types@latest
```

### Serve locally

```sh {"background":"true","id":"01HTMQZMYX58ZX7PK297YNYZ36","name":"serve"}
cd build; python3 -m http.server 9000
```

### Deployment

This website is auto-deployed via Vercel's GitHub integration, when your branch is merged into main.

The status can be found here: [https://vercel.com/stateful/docs-runme-dev](https://vercel.com/stateful/docs-runme-dev)
