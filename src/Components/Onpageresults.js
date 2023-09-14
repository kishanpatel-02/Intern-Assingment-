import React from 'react'
import classes from './Onpageresults.module.css'
import { BarChart } from '@mui/x-charts/BarChart';
import fdata from './Data.json'

const data1 = fdata.tasks[0].result[0].items[0].meta.internal_links_count
const data2 = fdata.tasks[0].result[0].items[0].meta.external_links_count
const data3 = fdata.tasks[0].result[0].items[0].meta.images_count
const data4 = fdata.tasks[0].result[0].items[0].meta.scripts_count
const data5 = fdata.tasks[0].result[0].items[0].meta.title_length
const data6 = fdata.tasks[0].result[0].items[0].meta.description_length
const uData = [data1, data2, data3, data4, data5, data6];
const xLabels = [
    'Internal Links',
    'External Links',
    'Number of Images',
    'Scripts',
    'title length',
    'Description Length',
];
const Onpageresults = () => {
    return (
        <>
            <div style={{width:'70%',height:'50%',margin:'auto',backgroundColor:'white',borderRadius:'5%',marginTop:'5%'}}>
                <h1 style={{textAlign:'center',marginTop:'2%'}}> Onpage Results </h1>
                <BarChart
                    width={700}
                    height={500}
                    series={[
                        { data: uData, id: 'uvId' },
                    ]}
                    xAxis={[{ data: xLabels, scaleType: 'band' }]}
                />
            </div>
        </>
    )
}

export default Onpageresults