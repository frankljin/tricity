import axios from "axios";

import TabPanel from "../components/TabPanel";
import ItemMapper from "../util/ItemMapper";

import { useState, useEffect } from "react";
import { Tabs, Tab, Grid } from "@mui/material";

const Menu = () => {
  const items = [
    {
      attributes: {
        Category: "Main",
        Name:"Ebidon",
        Price:9.99,
      }
    },
    {
      attributes: {
        Category: "Main",
        Name:"Salmon Don",
        Price:10.99,
      }
    },
    {
      attributes: {
        Category: "Main",
        Name:"Shrimp Tempura",
        Price:11.99,
      }
    },
    {
      attributes: {
        Category: "Main",
        Name:"Spicy Salmon Don",
        Price:15.99,
      }
    },
    {
      attributes: {
        Category: "Main",
        Name:"Yakitori Don",
        Price:13.99,
      }
    },
    {
      attributes: {
        Category: "Main",
        Name:"Zuke Don",
        Price:12.99,
      }
    },
  ];
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // useEffect(() => {
  //   axios.get("https://stark-dusk-10281.herokuapp.com/api/items?populate=*").then((res) => {
  //     setItems(res?.data?.data);
  //   });
  // }, []);

  const allyProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`
    };
  };

  return (
    <main>
      <h1>Menu</h1>
      <Tabs variant="scrollable" value={value} onChange={handleChange} centered>
        <Tab label="Mains" {...allyProps(0)} />
        <Tab label="Appetizers" {...allyProps(1)} />
        <Tab label="Sashimi" {...allyProps(2)} />
        <Tab label="Drinks" {...allyProps(3)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <Grid container spacing={2}>
          <ItemMapper items={items} foodType="Main" />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Grid container spacing={2}>
          <ItemMapper items={items} foodType="Appetizer" />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Grid container spacing={2}>
          <ItemMapper items={items} foodType="Sashimi" />
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Grid container spacing={2}>
          <ItemMapper items={items} foodType="Drink" />
        </Grid>
      </TabPanel>
    </main>
  );
};

export default Menu;
