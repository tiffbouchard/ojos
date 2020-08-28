import Head from "next/head";
import { useEffect, useState } from "react";

// Sanity.io
import client from "../client";
import urlFor from "../imageUrlBuilder";

// Custom components
import Instagram from "../components/instagram";

// Bootstrap
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { Row, Col } from "react-bootstrap";

const Home = (props) => {
  const { images = [] } = props;

  // Assigns variables to specific images to maintain order (without this images would show up in random orders, and for ex. the index 0 would not necessarily correspond with imageOne - mostly for client so the titles in Sanity studio correspond with the placement of the specific image)
  const imageOne = images.filter((image) => {
    return image.title === "Image One";
  });

  const imageTwo = images.filter((image) => {
    return image.title === "Image Two";
  });

  const imageThree = images.filter((image) => {
    return image.title === "Image Three";
  });

  const imageFour = images.filter((image) => {
    return image.title === "Image Four";
  });

  // Show sub modal when page first loads..need to work on
  // const [modalShow, setModalShow] = React.useState(false);

  // useEffect(() => {
  //   setModalShow(true);
  // }, []);

  return (
    <div>
      <Head>
        <title>OJOS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container fluid>
        <Row>
          <Col xs={12} sm={12} md={5}>
            <a href={imageOne[0].url}>
              <div className="landing-image-one">
                <Image
                  fluid
                  src={urlFor(imageOne[0].image).quality(100).url()}
                />
                <a href={imageOne[0].url} className="image-description">
                  {imageOne[0].description}
                </a>
              </div>
            </a>
          </Col>
          <Col xs={12} sm={12} md={7}>
            <a href={imageTwo[0].url}>
              <div className="landing-image-two">
                <Image
                  fluid
                  src={urlFor(imageTwo[0].image).quality(100).url()}
                />
                <a href={imageTwo[0].url} className="image-description">
                  {imageTwo[0].description}
                </a>
              </div>
            </a>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} md={6}>
            <a href={imageThree[0].url}>
              <div className="landing-image-three">
                <Image
                  fluid
                  src={urlFor(imageThree[0].image).quality(100).url()}
                />
                <a href={imageThree[0].url} className="image-description">
                  {imageThree[0].description}
                </a>
              </div>
            </a>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <a href={imageFour[0].url}>
              <div className="landing-image-four">
                <Image
                  fluid
                  src={urlFor(imageFour[0].image).quality(100).url()}
                />
                <a href={imageFour[0].url} className="image-description">
                  {imageFour[0].description}
                </a>
              </div>
            </a>
          </Col>
        </Row>
      </Container>
      <h4 className="follow-header">FOLLOW OJOS ON INSTAGRAM</h4>
      <Instagram />
    </div>
  );
};

// Fetching data from Sanity.io with GROQ query
Home.getInitialProps = async () => ({
  images: await client.fetch(`
  *[_type == "homepage"]{url, description, title, image}
  `),
});

export default Home;
