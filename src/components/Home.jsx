import React, { useState, useEffect } from "react";
import BeerCard from "./beerCard";
import { Content, Loading } from "./App.styles";
import { getBeers } from "./API";
import CustomNavbar from "./navbar";
import CustomSearch from "./search";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleScroll = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;

    if (scrollHeight - scrollTop === clientHeight) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      const newUsers = await getBeers(page);
      setUsers((prev) => [...prev, ...newUsers]);
      setLoading(false);
    };

    loadUsers();
  }, [page]);
  const deleteItem = (data) => {
    const updatedData = users.filter((i) => i.id !== data);
    setUsers(updatedData);
  };
  return (
    <div className="App">
      <CustomNavbar />
      <CustomSearch />
      <Content onScroll={handleScroll}>
        <Grid container spacing={4}>
          {users &&
            users.map((data) => (
              <Grid item xs={12} sm={6} md={3}>
                <BeerCard
                  key={data.id}
                  description={data.description}
                  image={data.image_url}
                  name={data.name}
                  deleteItem={() => deleteItem(data.id)}
                />
              </Grid>
            ))}
        </Grid>
      </Content>
      {loading && <Loading>Loading ...</Loading>}
    </div>
  );
};

export default Home;
