import React from 'react';
import PropTypes from 'prop-types';
import { Drawer, List, ListItem } from '@material-ui/core';
import './AlbumsDrawer.css';
import { theme } from '../theme.js'
import { withStyles } from "@material-ui/core/styles";

const styles = {
    drawerPaper: {
        backgroundColor: theme.palette.secondary.main
    },
};

function AlbumsDrawer(props) {
    const { classes } = props;
    const albumsDrawer = (
        <Drawer container anchor="left" variant="permanent" classes={{
            paper: classes.drawerPaper
        }}>
            <List>
                <ListItem button>
                    Hello
                </ListItem>
            </List>
        </Drawer>
    )
    return albumsDrawer;
}

AlbumsDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlbumsDrawer);