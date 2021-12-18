import React from 'react';
import {Box, Grid, Typography} from "@material-ui/core";
import {Props, State} from './types';
import {styles} from "./style";
import {withStyles} from "@material-ui/core";
import Container from '@mui/material/Container';
import Link from '@material-ui/core/Link'

class Footer extends React.Component<Props, State> {
    render() {
        return (
                <Box
                    px={{ xs: 3, sm: 10 }}
                    py={{ xs: 5, sm: 10 }}
                    bgcolor="#000000"
                    color="white"
                >
                    <Container maxWidth="lg">
                        <Grid container spacing={5}>
                            <Grid item xs={12} sm={4}>
                                <Box borderBottom={1}>
                                    <Typography variant= 'h6'>About</Typography>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit" variant= 'overline'>
                                        About us
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit" variant= 'overline'>
                                        Courses
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit" variant= 'overline'>
                                        Mentor
                                    </Link>

                                </Box>
                                <Box>
                                    <Link href="/" color="inherit" variant= 'overline'>
                                    Contact Us
                                </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box borderBottom={1}>
                                    <Typography variant= 'h6'>Support</Typography>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit" variant= 'overline'>
                                        Careers
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit" variant= 'overline'>
                                        Help & Support
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit" variant= 'overline'>
                                        Blog
                                    </Link>
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Box borderBottom={1}>
                                    <Typography variant= 'h6'>Company</Typography>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit" variant= 'overline'>
                                        Privacy Policy
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit" variant= 'overline'>
                                        Terms of Service
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="/" color="inherit" variant= 'overline' >
                                        Code of Conduct
                                    </Link>
                                </Box>
                            </Grid>
                        </Grid>
                        <Box textAlign="center" >
                            Copyrigth by Ilya Matvievich &reg; {new Date().getFullYear()}
                        </Box>
                    </Container>
                </Box>
        );
    }
}
export default withStyles(styles)(Footer);