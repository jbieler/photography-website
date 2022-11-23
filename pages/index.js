import Head from "next/head";
import LightboxGallery from "../components/lightboxGallery.js";
import Navigation from "../components/navigation.js";
import Contact from "../components/contact.js";
import Offer from "../components/offer.js";
import TitledComponent from '../components/TitledComponent.js';
import Footer from '../components/footer.js';
import AboutMe from '../components/aboutme.js';
import Stack from 'react-bootstrap/Stack';

const photos = [
  {
    src: "gallery-large/img-0.jpeg",
    width: 2,
    height: 3
  },
  {
    src: "gallery-large/img-1.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-2.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-3.jpeg",
    width: 2,
    height: 3
  },
  {
    src: "gallery-large/img-4.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-5.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-6.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-7.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-18.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-19.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-20.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-21.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-22.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-23.jpeg",
    width: 2,
    height: 3
  },
  {
    src: "gallery-large/img-9.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-26.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-27.jpeg",
    width: 2,
    height: 3
  },
  {
    src: "gallery-large/img-13.jpeg",
    width: 1,
    height: 1
  },
  {
    src: "gallery-large/img-10.jpeg",
    width: 1,
    height: 1
  },
  {
    src: "gallery-large/img-11.jpeg",
    width: 1,
    height: 1
  },
  {
    src: "gallery-large/img-14.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-8.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-15.jpeg",
    width: 2,
    height: 3
  },
  {
    src: "gallery-large/img-16.jpeg",
    width: 4,
    height: 5
  },
  {
    src: "gallery-large/img-24.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-17.jpeg",
    width: 3,
    height: 2
  }

];

import { Montserrat } from '@next/font/google'

const inter = Montserrat({ subsets: ['latin'] });

export default function Home() {
  return (
    <>

      <Head>
        <title>Jochen Bieler Fotografie - Inhaber Jochen Ohlenroth</title>
        <meta name="description" content="Jochen Bieler Fotografie - Dein Fotograf in Berlin und Brandenburg" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Navigation />

      <main className={inter.className}>

      <Stack gap={5} >

        <TitledComponent title="" anchorId="portfolio">
          <LightboxGallery photos={photos} />
        </TitledComponent>

        <TitledComponent title="Angebot" anchorId="angebot">
          <Offer/>
        </TitledComponent>

        <TitledComponent title="Über mich" anchorId="ueber-mich">
          <AboutMe/>
        </TitledComponent>

        <TitledComponent title="Kontakt" anchorId="kontakt">
          <Contact />
        </TitledComponent>

      </Stack>
      </main>

      <Footer></Footer>
    </>
  );
}
