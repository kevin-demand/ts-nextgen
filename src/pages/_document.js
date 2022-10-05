import { Html, Head, Main, NextScript } from 'next/document'
import settings from "../../settings";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
            src={`https://maps.googleapis.com/maps/api/js?key=${settings?.googleMaps?.apiKey}&callback=initMap&libraries=&v=weekly`} async ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}