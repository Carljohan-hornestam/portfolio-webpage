import { Grid } from "@material-ui/core";

interface LeftImageModalProps {
  imageSrc: string;
}
export default function LeftImageModal(props: LeftImageModalProps) {

console.log('leftimagemodal');

  return (
    <Grid container item xs={12}>
      <img alt="" src={`${props.imageSrc}`}></img>
    </Grid>
  )
}