import Navbar from "./_components/Navbar";
import SecondNavbar from "./_components/SecondNavbar";
import { AuthProvider } from "../../AuthContext";
import "./css/Navbar.css";
import "./css/SecondNavbar.css";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          {" "}
          {/* Wrap everything in AuthProvider */}
          <Navbar />
          <SecondNavbar />
          <main>{children}</main> {/* This renders the current page */}
        </AuthProvider>
      </body>
    </html>
  );
}
