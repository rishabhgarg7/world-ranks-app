## Learnings:

- The main and important thing I learned in this project is **What is client-side rendering, static rendering and server side rendering** and what's the difference between them.
- Learned about dynamic routing and how to do it in nextJS using **[id]** approach in file-based routing.
- Learned about the **Link** component in nextJS and how it makes the webapp faster by loading the page early on.
- I learned about and implemented getStaticProps and getStaticPaths(static rendering) in nextJS.
  - Basically, getStaticProps helps to build/generate the HTML for a page at the build time by storing the data needed for an page. The data that's being fetched is static(doesn't change with time).
  - And getStaticPaths is used when we use dynamic routing for static pages or have many static pages, so nextJS require/need to know the paths of all of those pages so that it can build/generate the HTML for all of those pages at build time.
- Learned how to do basic searching and filtering of many components in an webapp.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) deployed on [Vercel Platform.](https://vercel.com/)
