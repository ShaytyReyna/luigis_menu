import React, { useState } from 'react';
import { Grid, Paper, IconButton, Box } from "@mui/material";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CardRes from '../components/Home_cards/CardRes';
import CardStar from '../components/Home_cards/CardStar';
import CardCash from '../components/Home_cards/CardCash';
import Footer from '../components/Footer/Footer';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const items = [
  {
    src: 'https://images.pexels.com/photos/260922/pexels-photo-260922.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Slide 1',
    caption: 'Vive la experiencia',
    key: 1,
  },
  {
    src: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Slide 2',
    caption: 'Conoce nuevos sabores',
    key: 2,
  },
  {
    src: 'https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    altText: 'Slide 3',
    caption: 'Comenta y comparte tus experiencias',
    key: 3,
  },
];

export default function Home(args) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <div >
          <img src={item.src} alt={item.altText} width="100%" height='650px' id='imagenes' />
        </div>
        <CarouselCaption
          captionText={item.caption}
          //captionHeader={item.caption}
          className="subtitulo"
        />
      </CarouselItem>
    );
  });
  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
        interval={4000}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={goToIndex}
        />
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
        />
      </Carousel>
      <br />
      <div id='contenido'>
        <Grid
          item
          container
          justifyContent="center"
          sx={{
            padding: "8px",
            margin: "10px",
          }}
        >
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Restaurantes" {...a11yProps(0)} />
                <Tab label="Estrellas" {...a11yProps(1)} />
                <Tab label="Precio" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Grid
                item
                container
                direction="row"
                alignItems="left"
                justifyContent="left"
              >
                <CardRes></CardRes>
                <CardRes></CardRes>
                <CardRes></CardRes>
              </Grid>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Grid
                item
                container
                direction="row"
                alignItems="left"
                justifyContent="left"
              >
                <CardStar></CardStar>
                <CardStar></CardStar>
                <CardStar></CardStar>
              </Grid>

            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Grid 
              item
              container
              direction="row"
              alignItems="left"
              justifyContent="left"
              >
                <CardCash></CardCash>
                <CardCash></CardCash>
                <CardCash></CardCash>
              </Grid>
              
            </CustomTabPanel>
          </Box>
        </Grid>
      </div>
      <div>
          <Footer></Footer>
      </div>

    </div>

  );
}
