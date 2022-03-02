import React, { useState } from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position='static'>
          <Tabs centered indicatorColor='secondary' onChange={handleChange}>
            <Tab label='Todas as postagens' value='1'/>
            <Tab label='Sobre mim' value='2' />
          </Tabs>
        </AppBar>
        <TabPanel value='1' >
          <Box display='flex' flexWrap='wrap' justifyContent='center'>
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value='2'>
          <Typography variant='h5' gutterBottom color='textPrimary' component='h5' align='center' className="titulo">Sobre mim</Typography>
          <Typography variant='body1' gutterBottom color='textPrimary' align='justify'>Mussum Ipsum, cacilds vidis litro abertis. Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus.Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis.Quem num gosta di mim que vai caçá sua turmis!</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;