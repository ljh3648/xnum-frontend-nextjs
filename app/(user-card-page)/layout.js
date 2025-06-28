import "./globals.css";

export const metadata = {
  title: "X-NUM",
  description: "Safe your phone number",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
