import React, { useState } from 'react'
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
import { useSelector } from 'react-redux'

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
  const dataforclg = useSelector(state => state.data)
  let error = false
  let h1yes = false
  let h2yes = false
  let h3yes = false
  let h1
  let h2
  let h3
  if (dataforclg[0].result[0].items[0].meta.htags !== null) {
    if (dataforclg[0].result[0].items[0].meta.htags.h1 !== null) {
      h1 = dataforclg[0].result[0].items[0].meta.htags.h1
    }
    if (dataforclg[0].result[0].items[0].meta.htags.h2 !== null) {
      h2 = dataforclg[0].result[0].items[0].meta.htags.h2
    }
    if (dataforclg[0].result[0].items[0].meta.htags.h3 !== null) {
      h3 = dataforclg[0].result[0].items[0].meta.htags.h3
    }
    if (h1) {
      console.log(h1.length)
      if(h1.length >0){
        h1yes = true
        h1.slice(0, 10)
      }
    }
    if (h2) {
      console.log(h2.length)
      if(h2.length >0){
        h2yes = true
        h2.slice(0, 10)
      }
    }
    if (h3) {
      console.log(h3.length)
      if(h3.length >0){
        h3yes = true
        h3.slice(0, 10)
      }
    }
  }
  else{
    error=true
  }


  return (
    <>
      {!error && <div style={{ backgroundColor: '#b2bfca',height:'100%' }}>
        <div style={{ display: 'flex', flexDirection: 'row'}}>
          {h1yes && <Box sx={{ flexGrow: 1, maxWidth: 752, width: '40%', paddingLeft: '5%', backgroundColor: '#e7e4e4', borderRadius: '0%', marginLeft: '2%', marginRight: '3%', marginTop: '5%' }}>
            <p style={{ color: 'black', fontFamily: 'Ubuntu', fontSize: '2rem', textAlign: 'center', marginRight: '5%' }}>
              H1 Tags
            </p>
            <Demo>
              <List style={{ backgroundColor: '#e7e4e4' }} >
                {h1.map((item) => generate(
                  <ListItem >
                    <ListItemAvatar>
                      <Avatar>
                        <img src={FolderIcon} alt="h1" style={{ width: '100%', height: '' }} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item}
                      style={{ width: '100%', color: '#8f0505f2', fontFamily: 'Roboto', fontSize: '1.2rem' }}
                    />
                  </ListItem>,
                ))}
              </List>
            </Demo>

          </Box>}
          {h2yes &&<Box sx={{ flexGrow: 1, maxWidth: 752, width: '40%', paddingLeft: '5%', backgroundColor: '#e7e4e4', borderRadius: '0%', marginRight: '5%', marginTop: '5%' }}>
            <p style={{ color: 'black', fontFamily: 'Ubuntu', fontSize: '2rem', textAlign: 'center', marginRight: '5%' }}>
              H2 Tags
            </p>
            <Demo>
              <List style={{ backgroundColor: '#e7e4e4' }} >
                { h2.map((item) => generate(
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <img src={h2tag} alt="h1" style={{ width: '100%', height: '' }} />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={item}
                      style={{ width: '100%', color: '#8f0505f2', fontFamily: 'Roboto', fontSize: '1.2rem' }}
                    />
                  </ListItem>,
                ))}
              </List>
            </Demo>

          </Box>}
        </div>
        {h3yes && <Box sx={{ flexGrow: 1, maxWidth: 752, width: '40%', paddingLeft: '2%', backgroundColor: '#e7e4e4', borderRadius: '0%', marginLeft: '2%', marginRight: '3%', marginTop: '5%' }}>
          <p style={{ color: 'black', fontFamily: 'Ubuntu', fontSize: '2rem', textAlign: 'center', marginRight: '5%' }}>
            h3 Tags
          </p>
          <Demo>
            <List style={{ backgroundColor: '#e7e4e4' }}>
                {h3.map((item) => generate(
                <ListItem >
                  <ListItemAvatar>
                    <Avatar>
                      <img src={h4tag} alt="h1" style={{ width: '100%', height: '' }} />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item}
                    style={{ width: '100%', color: '#8f0505f2', fontFamily: 'Roboto' }}
                  />
                </ListItem>,
              ))}
            </List>
          </Demo>
        </Box>}
      </div>}
      {error && <div style={{height:'100vh'}}><p>There are no tags on this website</p></div>}
    </>
  )
}

export default Htags