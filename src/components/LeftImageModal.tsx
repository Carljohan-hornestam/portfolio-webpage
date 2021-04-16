import { Grid } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface LeftImageModalProps {
  images: [];
}

export default function LeftImageModal(props: LeftImageModalProps) {

  return (
    <Grid container item xs={12}>
      <Carousel showThumbs={false} showIndicators>
        {props.images.map((index: number) => {
          return <img alt="" key={index} src={`${index}`}></img>;
        })}
      </Carousel>
    </Grid>
  );
}
