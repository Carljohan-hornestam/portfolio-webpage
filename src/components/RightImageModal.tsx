import { Grid } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface RightImageModalProps {
  images: [];
}

export default function RightImageModal(props: RightImageModalProps) {

  return (
    <Grid container item xs={12}>
      <Carousel showThumbs={false} showIndicators>
        {props.images.map((index: number) => {
          return <img alt="" height={650} key={index} src={`${index}`}></img>;
        })}
      </Carousel>
    </Grid>
  );
}