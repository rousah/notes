import React from 'react';
import { Grid, AppBar, Toolbar, IconButton, Icon, Box } from '@material-ui/core';
import './Dashboard.css';
import {theme} from '../theme.js'

class Dashboard extends React.Component {
    render() {
        return (
            <Grid container className="dashboard" direction="row">
                <Grid container item xs={2} spacing={0} className="sideBar" style={{background:theme.palette.secondary}}>
                    Hey
                </Grid>
                <Grid container item xs={10} spacing={0} className="notes">
                    <AppBar position="static" className="appBar">
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
        );
    }
}

export default Dashboard;