import React from 'react';
import { Drawer, List, ListItem } from '@material-ui/core';
import './AlbumsDrawer.css';
import { theme } from '../theme.js'
import { withStyles } from "@material-ui/core/styles";

const styles = {
    drawer: {
        backgroundColor: 'blue'
    },
};

function AlbumsDrawer(props) {
    const { classes } = props;
    const albumsDrawer = (
        <Drawer container anchor="left" variant="permanent" className={classes.drawer}>
            <List>
                <ListItem button>
                    Hello
                    </ListItem>
            </List>
        </Drawer>
    )
    return albumsDrawer;
}

export default withStyles(styles)(AlbumsDrawer);