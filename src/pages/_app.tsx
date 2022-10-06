import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas);
// purge css removes the fonts, so add the style sheet
import '@fortawesome/fontawesome-svg-core/styles.css'
import '../common/styles/index.scss';
import { ReactChild, ReactChildren, useEffect } from "react";
import { store } from 'lib/store'
import { Provider } from 'react-redux'
import { AppProps } from 'next/app'
import { useAppSelector, useAppDispatch } from 'hooks/typedReduxHooks'
import { getToken, getLegacyToken } from 'features/auth'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
import { storyblokInit, apiPlugin } from '@storyblok/react';
import feature_kdm from "components/feature_kdm";
import Grid from 'components/layout/Grid';
import Page from 'components/layout/Page';
import Teaser from 'components/Teaser';
import Hero from 'components/Hero';
import Menu_Config from "lib/Menu_Config";
import HeaderMenu from "components/header/HeaderMenu";
import MenuLink from "components/header/MenuLink";
import Article from "components/Article";
import custo_head from "components/header/custo_head";

let persistor = persistStore(store)

interface Props {
    children: ReactChild | ReactChildren
}

const App: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
      <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
              <Wrapper>
                  <Component {...pageProps} />
              </Wrapper>
          </PersistGate>
      </Provider>
  )
}

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

const Wrapper: React.FC<Props> = ({ children }: Props) => {
  const dispatch = useAppDispatch()
  const { token, legacyToken } = useAppSelector((state) => state.tokens)

  const getTokens = () => {
      !token && dispatch(getToken())
      !legacyToken && dispatch(getLegacyToken())
  }
  useEffect(() => {
    getTokens()
    //Get new tokens after 30 minutes idle
    const i = window.setInterval(getTokens, 1000 * 60 * 30)
    return () => {
        window.clearInterval(i)
    }
}, [children, getTokens])

return <>{children}</>
}

export default App



// function MyApp({ Component, pageProps }) {
//   useEffect(() => {
//     require("bootstrap/dist/js/bootstrap.bundle.min.js");
//   }, []);
//   return <Component {...pageProps} />;
// }

// export default MyApp;