import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
// purge css removes the fonts, so add the style sheet
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../common/styles/index.scss';
import { useEffect } from "react";
import { storyblokInit, apiPlugin } from '@storyblok/react';
import feature_kdm from '@/components/feature_kdm';
import Grid from '@/components/layout/Grid';
import Page from '@/components/layout/Page';
import Teaser from '@/components/Teaser';
import Hero from '@/components/Hero';
import Menu_Config from "../lib/Menu_Config";
import HeaderMenu from "@/components/header/HeaderMenu";
import MenuLink from "@/components/header/MenuLink";
import Article from "@/components/Article";
import custo_head from "@/components/header/custo_head";

const components = {
  feature_kdm: feature_kdm,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  Hero: Hero,
  config: Menu_Config,
  menu_link: MenuLink,
  HeaderMenu:HeaderMenu,
  Article: Article,
  custo_head: custo_head, 
};

storyblokInit({
  accessToken: process.env.STORYBLOK_SECRET,
  // apiOptions: {region: 'us'},
  use: [apiPlugin],
  components,
  
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;