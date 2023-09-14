import React from 'react'
import Data from './Data.json'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import correct from './images/correct.jpg'
import wrong from './images/wrong.png'
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Checks = () => {
    const array = Data.tasks[0].result[0].items[0].checks
    return (
        <div style={{ width: '80%', height: '60%', backgroundColor: 'white', margin: 'auto' }}>
            <p style={{ textAlign: 'center', fontSize: '1.5rem', fontWeight: '500' }}>Checks Of Website</p>
            <Box sx={{ flexGrow: 1 }} style={{ paddingBottom: '5%' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={6} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.duplicate_title_tag ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ display: 'flex', flexDirection: "column", marginLeft: '2%' }}>
                                            <p>Duplicate Title</p>
                                            <p>Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.duplicate_meta_tags ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ display: 'flex', flexDirection: "column", marginLeft: '2%' }}>
                                            <p>Duplicate Description</p>
                                            <p>Duplicate meta descriptions are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.size_greater_than_3mb ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ display: 'flex', flexDirection: "column", marginLeft: '2%' }}>
                                            <p>Size</p>
                                            <p>The size of your page is too large. This can negatively impact your page load speed and user experience.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.no_h1_tag ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ display: 'flex', flexDirection: "column", marginLeft: '2%' }}>
                                            <p>No H1 Tag</p>
                                            <p>Your page does not have an H1 tag. This can negatively impact your page load speed and user experience.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6}style={{ margin: " 0 0% 2% 0%" }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.is_broken ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ display: 'flex', flexDirection: "column", marginLeft: '2%' }}>
                                            <p>Is Broken</p>
                                            <p>Your page has broken links. This can negatively impact your page load speed and user experience.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.low_content_rate ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ display: 'flex', flexDirection: "column", marginLeft: '2%' }}>
                                            <p>Low Content Rate</p>
                                            <p>Your page has a low content rate. This can negatively impact your page load speed and user experience.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.no_image_alt ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ display: 'flex', flexDirection: "column", marginLeft: '2%' }}>
                                            <p>No Image Alt</p>
                                            <p>Your page has images without alt tags. This can negatively impact your page load speed and user experience.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={6} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.canonical ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ display: 'flex', flexDirection: "column", marginLeft: '2%' }}>
                                            <p>Canonical</p>
                                            <p>The canonical tag is an HTML tag that is used to define the canonical URL of a webpage. This tag is used by search engines.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Checks