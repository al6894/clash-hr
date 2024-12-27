import Navbar from "./_components/Navbar";
import SecondNavbar from "./_components/SecondNavbar";
import "./css/Navbar.css";
import "./css/SecondNavbar.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <SecondNavbar />
        <main>{children}</main> {/* This renders the current page */}
      </body>
    </html>
  );
}
