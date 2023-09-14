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
const data7 = fdata.tasks[0].result[0].items[0].meta.page_timing.dom_complete
const data8 = fdata.tasks[0].result[0].items[0].meta.page_timing.waiting_time
const data9 = fdata.tasks[0].result[0].items[0].meta.page_timing.download_time
const data10 = fdata.tasks[0].result[0].items[0].meta.page_timing.fetch_end
const data11 = fdata.tasks[0].result[0].items[0].meta.page_timing.connection_time
const uData = [data1, data2, data3, data4, data5, data6];
const uData2 = [data1, data2, data3, data4, data5];
const xLabels1 = [
    'Internal Links',
    'External Links',
    'Number of Images',
    'Scripts',
    'title length',
    'Description Length',
];

const xLabels2 = [
    'Dom Complete',
    'Waiting Time',
    'Download Time',
    'Fetch End',
    'Connection time',
];

const Onpageresults = () => {
    return (
        <>
            <div style={{ width: '80%', height: '50%', margin: 'auto', backgroundColor: 'white', borderRadius: '5%', marginTop: '5%' }}>
                <h1 style={{ textAlign: 'center'}}> Onpage Results </h1>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <BarChart
                        width={700}
                        height={500}
                        series={[
                            { data: uData, label: "lengths", id: 'uvId' },
                        ]}
                        xAxis={[{ data: xLabels1, scaleType: 'band' }]}
                    />
                    <BarChart
                        width={700}
                        height={500}
                        series={[
                            { data: uData2, label: "Page-Timings", id: 'pvId' },
                        ]}
                        xAxis={[{ data: xLabels2, scaleType: 'band' }]}
                    />
                </div>
            </div>
        </>
    )
}

export default Onpageresults