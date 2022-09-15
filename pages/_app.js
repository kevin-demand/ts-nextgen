import '../styles/tailwind.css';
import { storyblokInit, apiPlugin } from '@storyblok/react';
import feature_kdm from '../components/feature_kdm';
import Grid from '../components/Grid';
import Page from '../components/Page';
import Teaser from '../components/Teaser';
import Hero from '../components/Hero';

const components = {
  feature_kdm: feature_kdm,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  Hero: Hero,
};

storyblokInit({
  accessToken: 'XRlJp45WFwDm4fMn2kIi2gtt',
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;