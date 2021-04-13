import { Grid } from "@material-ui/core";

interface RightImageModalProps {
  imageSrc: string;
}
export default function RightImageModal(props: RightImageModalProps) {

  return (
    <Grid container item xs={12}>
      <img alt="" src={`${props.imageSrc}`} width={1200} height={850}></img>
    </Grid>
  )
}