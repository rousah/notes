import React from 'react';
import { Grid, AppBar, Toolbar, IconButton, Icon, Box } from '@material-ui/core';
import './Dashboard.css';
import { theme } from '../theme.js'
import AlbumsDrawer from '../AlbumsDrawer/AlbumsDrawer.js'

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <AlbumsDrawer></AlbumsDrawer>
                <Grid container className="dashboard" direction="row">
                    <Grid container item xs={12} spacing={0} className="notes" style={{ background: theme.palette.background.main }}>
                        <AppBar position="static" className="appBar" style={{ background: theme.palette.primary.main }}>
                            <Toolbar>
                                <Box display='flex' flexGrow={1}>
                                    {/* whatever is on the left side */}
                                </Box>
                                {/*Whatever is on the right side */}
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <Icon fontSize="large">more_horiz</Icon>
                                </IconButton>
                            </Toolbar>
                        </AppBar>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Dashboard;