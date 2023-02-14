import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  ImageList, ImageListItem, ImageListItemBar, Typography, useMediaQuery,
} from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import theme from 'theme/theme';
import ApiService from '../../services/api-service';

const CarListPage = () => {
  const matchDownSm = useMediaQuery(theme.breakpoints.between('xs', 'sm'));
  const matchDownMd = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const matchDownLg = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const matchUpLg = useMediaQuery(theme.breakpoints.up('lg'));

  const responsiveConditions = () => {
    if (matchDownSm) return 1;
    if (matchDownMd) return 2;
    if (matchDownLg) return 3;
    return 4;
  };

  const [data, setData] = React.useState<CarModel[]>([]);
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange = (isExpanded: boolean, car: string) => {
    setExpanded(isExpanded ? car : false);
  };

  React.useEffect(() => {
    const fetchCars = async () => {
      const carsData = await ApiService.fetchCars();
      setData(carsData);
    };
    fetchCars();
  }, []);

  return (
    <ImageList
      sx={{
        overflowY: 'hidden',
      }}
      variant={matchUpLg ? 'woven' : ''}
      cols={responsiveConditions()}
      gap={matchDownSm ? 120 : 20}
    >
      {data.map((car) => (
        <ImageListItem
          key={car.id}
          sx={{ border: 1, borderColor: 'primary.main' }}
        >
          <img
            src={`${car.images[0]}?w=164&h=164&fit=crop&auto=format&dpr=2`}
            alt={`${car.name}-imgage`}
          />
          <ImageListItemBar
            title={car.name.toUpperCase()}
            position="top"
            subtitle={car.year}
          />
          <Accordion
            expanded={expanded === `car${car.id}`}
            onChange={(e, isExpanded) => handleChange(isExpanded, `car${car.id}`)}
            sx={{
              color: 'info.dark',
              zIndex: 'tooltip',
            }}
          >
            <AccordionSummary
              sx={{
                position: 'absolute',
                top: '-40px',
                right: '0',
              }}
              id={`car${car.id}-header`}
            >
              <Typography>
                <InfoIcon />
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Horse power:
                {car.technical_characteristics.horsepower}
                HP
              </Typography>
              <Typography>
                Weight:
                {car.technical_characteristics.weight_in_lbs}
                lbs
              </Typography>
              <Typography>
                Acceleration up to 100km/h:
                {car.technical_characteristics.acceleration}
                s
              </Typography>
            </AccordionDetails>
          </Accordion>
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default CarListPage;
