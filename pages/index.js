import Head from "next/head";
import LightboxGallery from "../components/lightboxGallery.js";
import Navigation from "../components/navigation.js";
import Contact from "../components/contact.js";
import Offer from "../components/offer.js";
import TitledComponent from '../components/TitledComponent.js';
import Footer from '../components/footer.js';
import { Container, Row, Col } from "react-bootstrap";


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
    src: "gallery-large/img-12.jpeg",
    width: 1,
    height: 1
  },
  {
    src: "gallery-large/img-8.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-14.jpeg",
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
    src: "gallery-large/img-17.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-24.jpeg",
    width: 3,
    height: 2
  },
  {
    src: "gallery-large/img-25.jpeg",
    width: 1,
    height: 1
  }

];

export default function Home() {
  return (
    <>

      <Head>
        <title>Jochen Bieler Fotografie - Inhaber Jochen Ohlenroth</title>
        <meta name="description" content="Jochen Bieler Fotografie - Dein Fotograf in Berlin und Brandenburg" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&weight=400" rel="stylesheet" />
      </Head>

      <Navigation />

      <main>
        <TitledComponent title="Über mich" anchorId="ueber-mich">
          <Container>
          <Row className="justify-content-center">
    <Col lg={10} xl={10} xxl={10} className="mb-4">Hi, mein Name ist Jochen. Ich bin verheiratet, Vater von 2 Kindern und lebe im der Nähe von Berlin. Ich fotografiere gern alles um mich herum und das aus Leidenschaft. 
            Ich begleite Hochzeiten, fotografiere Babybäuche und führe Babyshootings durch. </Col>
            </Row>
            </Container>
            
        </TitledComponent>
        <TitledComponent title="Angebot" anchorId="angebot">
          <Offer/>
        </TitledComponent>
        <TitledComponent title="Portfolio" anchorId="portfolio">
          <LightboxGallery photos={photos} />
        </TitledComponent>
        <TitledComponent title="Kontakt" anchorId="kontakt">
          <Container>
          <Row className="justify-content-center">
    <Col lg={6} xl={6} xxl={6} className="mb-4">Schreiben Sie mir Ihre Vorstellungen und Wünsche. Ich werde mich dann umgehend mit einem auf Sie zugeschnittenen Angebot bei Ihnen melden.</Col>
            </Row>
            </Container>
          <Contact />
        </TitledComponent>
      </main>

<<<<<<< HEAD
      <Footer></Footer>
    </>
=======
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <img src="vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
>>>>>>> 1662de0f0500a0ec4cde5fdeceda85b75b46594c
  );
}
