import React from 'react'
import classes from './Htags.module.css'
import data from './Data.json'
import h2tag from './images/h2tag.jpg'
import h4tag from './images/h4tag.png'

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import FolderIcon from './images/h1tag.png';


function generate(element) {
  return [0].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));

const Htags = () => {

  const h1 = data.tasks[0].result[0].items[0].meta.htags.h1.slice(0, 10)
  const h2 = data.tasks[0].result[0].items[0].meta.htags.h2.slice(0, 10)
  const h4 = data.tasks[0].result[0].items[0].meta.htags.h4.slice(0, 10)
  return (
    <div style={{backgroundColor:'#b2bfca'}}>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <Box sx={{ flexGrow: 1, maxWidth: 752, width: '40%', paddingLeft: '5%',backgroundColor:'#e7e4e4',borderRadius:'10%',marginLeft:'2%',marginRight:'3%',marginTop:'5%' }}>
          <p style={{ color: 'black', fontFamily: 'Ubuntu', fontSize: '2rem',textAlign:'center',marginRight:'5%' }}>
            H1 Tags
          </p>
          <Demo>
            <List style={{backgroundColor:'#e7e4e4'}} >
              {h1.map((item) => generate(
                <ListItem >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={FolderIcon} alt="h1" style={{ width: '100%', height: '' }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item}
                    style={{ width: '100%',color:'#8f0505f2',fontFamily:'Roboto',fontSize:'1.2rem' }}
                  />
                </ListItem>,
              ))}
            </List>
          </Demo>

        </Box>
        <Box sx={{ flexGrow: 1, maxWidth: 752, width: '40%', paddingLeft: '5%',backgroundColor:'#e7e4e4',borderRadius:'10%',marginRight:'5%',marginTop:'5%' }}>
          <p style={{ color: 'black', fontFamily: 'Ubuntu', fontSize: '2rem',textAlign:'center',marginRight:'5%' }}>
            H2 Tags
          </p>
          <Demo>
            <List style={{backgroundColor:'#e7e4e4'}} >
              {h2.map((item) => generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <img src={h2tag} alt="h1" style={{ width: '100%', height: '' }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item}
                    style={{ width: '100%',color:'#8f0505f2',fontFamily:'Roboto',fontSize:'1.2rem' }}
                  />
                </ListItem>,
              ))}
            </List>
          </Demo>

        </Box>
      </div>
      <Box sx={{flexGrow: 1, maxWidth: 752, width: '40%', paddingLeft: '5%',backgroundColor:'#e7e4e4',borderRadius:'10%',marginLeft:'2%',marginRight:'3%',marginTop:'5%' }}>
        <p style={{ color: 'black', fontFamily: 'Ubuntu', fontSize: '2rem',textAlign:'center',marginRight:'5%' }}>
          H4 Tags
        </p>
        <Demo>
          <List style={{backgroundColor:'#e7e4e4'}}>
            {h4.map((item) => generate(
              <ListItem >
                <ListItemAvatar>
                  <Avatar>
                    <img src={h4tag} alt="h1" style={{ width: '100%', height: '' }} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={item}
                  style={{ width: '100%',color:'#8f0505f2',fontFamily:'Roboto',fontSize:'1.2rem' }}
                />
              </ListItem>,
            ))}
          </List>
        </Demo>
      </Box>
    </div>
  )
}

export default Htags