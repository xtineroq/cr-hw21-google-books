import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
  },
  title: {
    flexGrow: 1,
    padding: "2rem",
    fontFamily: "Roboto",
  },
  tabText: {
    fontWeight: 500,
    letterSpacing: "2px",
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary">
        <Typography variant="h4" className={classes.title}>
          Google Books Search App
        </Typography>
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: { backgroundColor: "black", height: "3px" },
          }}
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            className={classes.tabText}
            label="Search"
            icon={<FindInPageIcon />}
            component={Link}
            to="/search"
          />
          <Tab
            className={classes.tabText}
            label="Saved"
            icon={<MenuBookIcon />}
            component={Link}
            to="/saved"
          />
        </Tabs>
      </AppBar>
    </div>
  );
}
