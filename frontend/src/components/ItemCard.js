import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@mui/material";

const ItemCard = ({ name, description, image, price }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" height="200" image={image} alt={name} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{price}</Button>
      </CardActions>
    </Card>
  );
};

export default ItemCard;
