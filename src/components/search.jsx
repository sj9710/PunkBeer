import React, { useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { searchBeers } from "./API";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: "auto",
    height: 50,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

const CustomSearch = () => {
  const classes = useStyles();
  const keyword = useRef(null);
  const getKeyword = (v) => {
    console.log(v);
    searchBeers(v);
  };
  return (
    <Paper style={{ margin: "25px" }} component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        ref={keyword}
        name={"searchKeyword"}
        placeholder="Search for Beer..."
        inputProps={{ "aria-label": "search google maps" }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="text"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon onClick={(e) => getKeyword(e.targe.value)} />
      </IconButton>
    </Paper>
  );
};
export default CustomSearch;
