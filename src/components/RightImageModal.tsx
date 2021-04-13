import { Grid } from "@material-ui/core";

interface RightImageModalProps {
  imageSrc: string;
}
export default function RightImageModal(props: RightImageModalProps) {

  console.log('rightimagemodal');

  return (
    <Grid container item xs={12}>
      <img alt="" src={`${props.imageSrc}`}></img>
    </Grid>
  )
}