import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'I can get you an incredible apartment for an unbelivable price.',
    heading: 'Real Estate Services',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      'I can help you with tourist visas, business visas, and visa extensions when you are in Vietnam.',
    heading: 'Visa Support',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'I can help make your house look just like home. Comfort and luxury are my specialties!',
    heading: 'Interior Design',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      'Get your info tests delivered at home collect a sample from the your progress tests.',
    heading: 'Marketing & advertising',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      'Get your info tests delivered at home collect a sample from the your progress tests.',
    heading: 'Ultimate development',
    path: '#',
  },
  {
    image: serviceImage6,
    text:
      'Get your info tests delivered at home collect a sample from the your progress tests.',
    heading: 'Online support',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="How I can help you"
          text="Your personal concierge in Vietnam"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
