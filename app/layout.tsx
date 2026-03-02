import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import type { FC, ReactNode } from "react";

export const metadata = {
  title: "UI Kit Documentation",
  description: "A comprehensive design system for React applications",
};

type LayoutProps = Readonly<{
  children: ReactNode;
}>;

const banner = <Banner storageKey="ui-kit">UI Kit Documentation</Banner>;

const navbar = (
  <Navbar
    logo={<b>UI Kit</b>}
  />
);

const footer = <Footer>MIT {new Date().getFullYear()} © UI Kit.</Footer>;

const RootLayout: FC<LayoutProps> = async ({ children }) => {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/iqbal-codes/ui-kit"
          footer={footer}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
};

export default RootLayout;
