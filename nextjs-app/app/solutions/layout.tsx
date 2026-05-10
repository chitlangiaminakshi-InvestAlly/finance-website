import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comprehensive Financial Solutions | InvestAlly",
  description: "Expert financial solutions for wealth building, insurance protection, loans & financing, and advisory services. Tailored strategies for high-net-worth individuals.",
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
