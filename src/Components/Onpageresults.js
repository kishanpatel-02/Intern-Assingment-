import React from 'react'
import { BarChart } from '@mui/x-charts/BarChart';
import { useSelector } from 'react-redux';

const Onpageresults = () => {
    const jdata = useSelector(state => state.data)
    console.log(jdata)
    // let data1 = jdata[0].tasks[0].result[0].items[0].meta.internal_links_count
    // let data2 = jdata[0].tasks[0].result[0].items[0].meta.external_links_count
    // let data3 = jdata[0].tasks[0].result[0].items[0].meta.images_count
    // let data4 = jdata[0].tasks[0].result[0].items[0].meta.scripts_count
    // let data5 = jdata[0].tasks[0].result[0].items[0].meta.title_length
    // let data6 = jdata[0].tasks[0].result[0].items[0].meta.description_length
    // let data7 = jdata[0].tasks[0].result[0].items[0].meta.page_timing.dom_complete
    // let data8 = jdata[0].tasks[0].result[0].items[0].meta.page_timing.waiting_time
    // let data9 = jdata[0].tasks[0].result[0].items[0].meta.page_timing.download_time
    // let data10 = jdata[0].tasks[0].result[0].items[0].meta.page_timing.fetch_end
    // let data11 = jdata[0].tasks[0].result[0].items[0].meta.page_timing.connection_time
    // if(jdata[0].tasks[0].result[0].items[0].meta.internal_links_count){
    //     data1 = jdata[0].tasks[0].result[0].items[0].meta.internal_links_count
    // }
    let data1 = jdata[0]?.result[0]?.items[0]?.meta?.internal_links_count ? jdata[0].result[0].items[0].meta.internal_links_count : 0;
    let data2 = jdata[0]?.result[0]?.items[0]?.meta?.external_links_count ? jdata[0].result[0].items[0].meta.external_links_count : 0;
    let data3 = jdata[0]?.result[0]?.items[0]?.meta?.images_count ? jdata[0].result[0].items[0].meta.images_count : 0;
    let data4 = jdata[0]?.result[0]?.items[0]?.meta?.scripts_count ? jdata[0].result[0].items[0].meta.scripts_count : 0;
    let data5 = jdata[0]?.result[0]?.items[0]?.meta?.title_length ? jdata[0].result[0].items[0].meta.title_length : 0;
    let data6 = jdata[0]?.result[0]?.items[0]?.meta?.description_length ? jdata[0].result[0].items[0].meta.description_length : 0;
    let data7 = jdata[0]?.result[0]?.items[0]?.page_timing?.dom_complete ? jdata[0].result[0].items[0].page_timing.dom_complete : 0;
    let data8 = jdata[0]?.result[0]?.items[0]?.page_timing?.waiting_time ? jdata[0].result[0].items[0].page_timing.waiting_time : 0;
    let data9 = jdata[0]?.result[0]?.items[0]?.page_timing?.download_time ? jdata[0].result[0].items[0].page_timing.download_time : 0;
    let data10 = jdata[0]?.result[0]?.items[0]?.page_timing?.fetch_end ? jdata[0].result[0].items[0].page_timing.fetch_end : 0;
    let data11 = jdata[0]?.result[0]?.items[0]?.page_timing?.connection_time ? jdata[0].result[0].items[0].page_timing.connection_time : 0;
    
    
    const uData = [data1, data2, data3, data4, data5, data6];
    const uData2 = [data7, data8, data9, data10, data11];
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
    return (
        <>
            <div style={{ width: '80%', height: '50%', margin: 'auto', backgroundColor: 'white', borderRadius: '5%', marginTop: '5%' }}>
                <h1 style={{ textAlign: 'center' }}> Onpage Results </h1>
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