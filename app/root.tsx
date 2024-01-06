import React from "react";
import { Links, Meta, Outlet, Scripts, LiveReload } from "@remix-run/react";
import { LinksFunction } from "@remix-run/node";
import metaStyles from "./styles/meta.css";
import styles from "./styles/global.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: metaStyles,
    },
    {
      rel: "stylesheet",
      href: styles,
    },
  ];
};

export default function App() {
  return (
    <html>
      <head>
        <link rel="icon" href="data:image/x-icon;base64,AA" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
