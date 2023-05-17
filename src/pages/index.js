import React from 'react';
import { ThemeProvider } from 'theme-ui';
import { StickyProvider } from 'contexts/app/app.provider';
import theme from 'theme';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import WhyMe from 'sections/whyMe';
import CallToAction from 'sections/call-to-action';
import Featured from 'sections/featured';
import Pricing from 'sections/pricing';
import Testimonials from 'sections/testimonials';
import Blogs from 'sections/blogs';
import FAQ from 'sections/faq';
import Subscribe from 'sections/subscribe';
import Jackpot from 'sections/whyMe';

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Nam Hoang" />
          <Banner />
          <Services />
          <WhyMe />
          <Pricing />
          <Blogs />
          <Testimonials />
          <FAQ />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
