import "./globals.css";

export const metadata = {
  title: "Lesson With Sandipan",
  description: "A minimal, scalable Next.js boilerplate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
