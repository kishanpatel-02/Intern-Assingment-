import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import correct from './images/correct.jpg'
import wrong from './images/wrong.png'
import Grid from '@mui/material/Grid';
import {useSelector} from 'react-redux'


const Checks = () => {
    const dataforclg = useSelector(state=>state.data)
    const array = dataforclg[0].result[0].items[0].checks
    return (
        <div style={{ width: '90%', height: '60%', backgroundColor: 'white', margin: 'auto' }}>
            <p style={{ marginLeft:'3%', fontSize: '1.5rem', fontWeight: '500' }}>Checks Of Website</p>
            <Box sx={{ flexGrow: 1 }} style={{ paddingBottom: '5%' }}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={2} sm={4} md={4} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card style={{backgroundColor:'rgb(200 196 196 / 25%)',marginLeft:'5%'}}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.duplicate_title_tag ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ marginLeft: '2%' }}>
                                            <p style={{fontSize:'1.2rem',fontWeight:'550',fontFamily:'Roboto'}}>Duplicate Title</p>
                                            <p style={{fontSize:'1rem',color:'gray',fontFamily:'Ubuntu'}}>Duplicate title tags are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card style={{backgroundColor:'rgb(200 196 196 / 25%)'}}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.duplicate_meta_tags ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{marginLeft: '2%' }}>
                                           <p style={{fontSize:'1.2rem',fontWeight:'550',fontFamily:'Roboto'}}>Duplicate Description</p>
                                            <p style={{fontSize:'1rem',color:'gray',fontFamily:'Ubuntu'}}>Duplicate meta descriptions are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card style={{backgroundColor:'rgb(200 196 196 / 25%)',marginRight:'5%'}}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.size_greater_than_3mb ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ marginLeft: '2%' }}>
                                           <p style={{fontSize:'1.2rem',fontWeight:'550',fontFamily:'Roboto'}}>Size</p>
                                            <p style={{fontSize:'1rem',color:'gray',fontFamily:'Ubuntu'}}>The size of your page is too large. This can negatively impact your page load speed and user experience.Nothing this so much amazing</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card style={{backgroundColor:'rgb(200 196 196 / 25%)',marginLeft:'5%'}}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.no_h1_tag ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ marginLeft: '2%' }}>
                                           <p style={{fontSize:'1.2rem',fontWeight:'550',fontFamily:'Roboto'}}>No H1 Tag</p>
                                            <p style={{fontSize:'1rem',color:'gray',fontFamily:'Ubuntu'}}>Your page does not have an H1 tag. This can negatively impact your page load speed and user experience.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4}style={{ margin: " 0 0% 2% 0%" }}>
                        <Card style={{backgroundColor:'rgb(200 196 196 / 25%)'}}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.is_broken ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ marginLeft: '2%' }}>
                                           <p style={{fontSize:'1.2rem',fontWeight:'550',fontFamily:'Roboto'}}>Is Broken</p>
                                            <p style={{fontSize:'1rem',color:'gray',fontFamily:'Ubuntu'}}>Your page has broken links. This can negatively impact your page load speed and user experience.So we should trust this and so on.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card style={{backgroundColor:'rgb(200 196 196 / 25%)',marginRight:'5%'}}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.low_content_rate ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ marginLeft: '2%' }}>
                                           <p style={{fontSize:'1.2rem',fontWeight:'550',fontFamily:'Roboto'}}> Low Content Rate</p>
                                            <p style={{fontSize:'1rem',color:'gray',fontFamily:'Ubuntu'}}>Your page has a low content rate. This can negatively impact your page load speed and user experience.Nothing this is so much amazing.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card style={{backgroundColor:'rgb(200 196 196 / 25%)',marginLeft:'5%'}}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.no_image_alt ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{ marginLeft: '2%' }}>
                                           <p style={{fontSize:'1.2rem',fontWeight:'550',fontFamily:'Roboto'}}>No Image Alt</p>
                                            <p style={{fontSize:'1rem',color:'gray',fontFamily:'Ubuntu'}}>Your page has images without alt tags. This can negatively impact your page load speed and user experience.</p>
                                        </div>
                                    </div>
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={2} sm={4} md={4} style={{ margin: " 0 0% 2% 0%" }}>
                        <Card style={{backgroundColor:'rgb(200 196 196 / 25%)'}}>
                            <CardContent>
                                <Typography variant="h5" component="div" gutterBottom>
                                    <div style={{ display: 'flex', flexDirection: "row" }}>
                                        <img src={array.canonical ? correct : wrong} style={{ width: '8%', height: '8%', marginTop: '15%', borderRadius: '10%' }} alt="" />
                                        <div style={{  marginLeft: '2%' }}>
                                           <p style={{fontSize:'1.2rem',fontWeight:'550',fontFamily:'Roboto'}}>Canonical</p>
                                            <p style={{fontSize:'1rem',color:'gray',fontFamily:'Ubuntu'}}>The canonical tag is an HTML tag that is used to define the canonical URL of a webpage.It tells us how many are there.</p>
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