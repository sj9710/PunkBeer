import React from "react";
import CustomNavbar from "./navbar";
import BeerCard from "./beerCard";
import Grid from "@material-ui/core/Grid";

const Favourite = () => {
  return (
    <div>
      <CustomNavbar />
      <Grid container spacing={4}>
        {Object.entries(localStorage).map(([key, valueJSON]) => {
          const value = JSON.parse(valueJSON);
          return (
            <Grid item xs={12} sm={6} md={3}>
              <BeerCard
                description={value.descp}
                image={value.img}
                name={value.id}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default Favourite;
