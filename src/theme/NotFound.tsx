import React from "react";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";

export default function NotFound() {
  const css = /*css*/ `
    body {
      display: flex
    }
    body #__docusaurus {
      width: 100%
    }
  `;
  return (
    <>
      <PageMetadata title="Page Not Found">
        <style>{css}</style>
      </PageMetadata>
      <Layout>
        <main className="container margin-vert--xl w-full h-full">
          <div className="row">
            <div className="col col--6 col--offset-3 text-center">
              <h1 className="hero__title mb-4">
                Ouch, something didn't <b>Run</b> well 🐛
              </h1>
              <p>We could not find what you were looking for.</p>
              <p>
                It would mean the world to us if you get let us know on{" "}
                <a href="https://discord.gg/runme">Discord</a>.
              </p>
              <p>Thank you!</p>
            </div>
          </div>
        </main>
        <footer className="w-full text-white border-t border-neutral-100/20 bg-purpledk">
          <div className="max-w-screen-lg pt-12 pb-6 mx-auto md:px-0">
            <div className="flex flex-col space-y-6 text-center md:text-left md:space-y-0 md:flex-row justify-evenly">
              <div className="flex flex-col space-y-3 ">
                <div className="font-mono text-sm font-semibold tracking-wider uppercase text-neutral-400">
                  social
                </div>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="text-[color:var(--ifm-navbar-link-color)] hover:underline">
                    <a href="https://twitter.com/runmedev">Twitter</a>
                  </div>
                  <div className="text-[color:var(--ifm-navbar-link-color)] hover:underline">
                    <a href="https://discord.gg/runme">Discord</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3 ">
                <div className="font-mono text-sm font-semibold tracking-wider uppercase text-neutral-400">
                  project
                </div>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="text-[color:var(--ifm-navbar-link-color)] hover:underline">
                    <a href="https://github.com/runmedev/runme">GitHub</a>
                  </div>
                  <div className="text-[color:var(--ifm-navbar-link-color)] hover:underline">
                    <a href="https://runme.dev/community">Community</a>
                  </div>
                  <div className="text-[color:var(--ifm-navbar-link-color)] hover:underline">
                    <a href="https://runme.dev/list">Mailing List</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3 ">
                <div className="font-mono text-sm font-semibold tracking-wider uppercase text-neutral-400">
                  documentation
                </div>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="text-[color:var(--ifm-navbar-link-color)] hover:underline">
                    <a href="https://docs.runme.dev/installation/">
                      Installation
                    </a>
                  </div>
                  <div className="text-[color:var(--ifm-navbar-link-color)] hover:underline">
                    <a href="https://docs.runme.dev/getting-started">
                      Getting started
                    </a>
                  </div>
                  <div className="text-[color:var(--ifm-navbar-link-color)] hover:underline">
                    <a href="https://docs.runme.dev/usage">Usage</a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-3 ">
                <div className="font-mono text-sm font-semibold tracking-wider uppercase text-neutral-400">
                  resources
                </div>
                <div className="flex flex-col space-y-2 text-sm">
                  <div className="text-[color:var(--ifm-navbar-link-color)] hover:underline">
                    <a href="https://runme.dev/blog">Blog</a>
                  </div>
                  <div className="text-[color:var(--ifm-navbar-link-color)] hover:underline">
                    <a href="https://www.youtube.com/@statefulhq">Youtube</a>
                  </div>
                  <div className="text-[color:var(--ifm-navbar-link-color)] hover:underline">
                    <a href="https://runme.dev/events">Events</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-6 mx-auto">
            <div className="w-[40px] h-[41px] relative">
              <img
                alt="Runme"
                loading="lazy"
                decoding="async"
                data-nimg="fill"
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: "transparent",
                }}
                src="/img/logo.svg"
              />
            </div>
          </div>
          <div className="flex flex-col items-center pt-4 pb-6 text-sm text-neutral-400">
            <div>Made with ❤️ in Berkeley, Medellín and Durham </div>
            <div>Copyright © 2023 Stateful Inc.</div>
          </div>
        </footer>
      </Layout>
    </>
  );
}
