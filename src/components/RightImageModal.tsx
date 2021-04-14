import { Grid } from "@material-ui/core";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface RightImageModalProps {
  imageSrc: string;
  images: [];
}

// width={550} height={835}
export default function RightImageModal(props: RightImageModalProps) {

  return (
    <Grid container item xs={12}>
      <Carousel showThumbs={false}>
        {props.images.map((index: number) => {
          return <img alt="" src={`${index}`}></img>;
        })}
      </Carousel>
    </Grid>
  )
}