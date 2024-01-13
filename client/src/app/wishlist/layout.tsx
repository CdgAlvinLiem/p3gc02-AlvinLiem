import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ProtectedComponents from "@/components/ProtectedComponent";

const inter = Inter({ subsets: ["latin"] });

export default function WishListLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ProtectedComponents>{children}</ProtectedComponents>;
}
