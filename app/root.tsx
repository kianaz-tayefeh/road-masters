import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/custom-bootstrap.css";
// import "./styles/bootstrap-breakpoint.scss";
// import bootstrapStylesheetUrl from "~/styles/bootstrap-breakpoint.css";
import { useEffect } from "react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

// export const links: LinksFunction = () => {
//   return [
// { rel: "stylesheet", href: "/fonts/nunito-sans/font.css" },
// { rel: "stylesheet", href: bootstrapStylesheetUrl },
// cssBundleHref ? { rel: "stylesheet", href: cssBundleHref } : [],
//   ];
// };

export default function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
