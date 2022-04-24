import ItemCard from "../components/ItemCard";
import { Grid } from "@mui/material";

// goes through all items stored in the Strapi collection, returning all that are foodType
const ItemMapper = ({ items, foodType }) => {
  let itemsToShow = [];
  items.forEach((item) => {
    const itemAttributes = item.attributes;
    if (itemAttributes.Category === foodType) {
      itemsToShow.push(
        <Grid item xs={12} sm={3} style={{ display: "flex" }}>
          <ItemCard
            name={itemAttributes.Name}
            description={itemAttributes.Description}
            image={
              "https://stark-dusk-10281.herokuapp.com" +
              itemAttributes.Image.data.attributes.formats.large.url
            }
            price={itemAttributes.Price}
          />
        </Grid>
      );
    }
  });
  return itemsToShow;
};

export default ItemMapper;
