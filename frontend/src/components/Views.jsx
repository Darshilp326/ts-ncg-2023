import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import Chart from 'chart.js/auto';
import { auto } from '@popperjs/core';


function Views() {

    const [views,setViews] = useState([{
        "id": 151,
        "name": "Hpppfe",
        "chartType": "Column",
        "country":"USA",
        "indicator":"Literacy rate",
        "startDate": "2012",
        "endDate": "2022"
    },{
        "id": 153,
        "chartType": "Column",
        "country":"Afr",
        "indicator":"Poverty",
        "startDate": "2012",
        "endDate": "2022"
    },
    {
        "id": 152,
        "name": "Hpppfe",
        "chartType": "Column",
        "country":"Aus",
        "indicator":"Access to electricity",
        "startDate": "2012",
        "endDate": "2022"
    }])

    const fetchViews = async(url)=>{
        try{

            const {data} = await axios.get("http://localhost:9000/views")
            setViews(data)
        }catch(e){
            console.log(e)
        }
    }

    const handleDelete = async(viewId)=>{
        try{

            await axios.delete(`http://localhost:9000/views/${viewId}`)
            alert("View deleted.")
            const {data} = await axios.get("http://localhost:9000/views")
            console.log(data)
        }catch(e){
            console.log(e)
        }  
    }

    useEffect(()=>{
        fetchViews()
    },[])

    const handleCanvas = ()=>{
        console.log("Clicked")
        const data=[
            {
                "indicator": {
                    "id": "1.2_ACCESS.ELECTRICITY.RURAL",
                    "value": "Access to electricity (% of rural population with access)"
                },
                "country": {
                    "id": "ABW",
                    "value": "Aruba"
                },
                "countryiso3code": "",
                "date": "2000",
                "value": 84.3583628446729,
                "unit": "",
                "obs_status": "",
                "decimal": 2
            },
            {
                "indicator": {
                    "id": "1.2_ACCESS.ELECTRICITY.RURAL",
                    "value": "Access to electricity (% of rural population with access)"
                },
                "country": {
                    "id": "ABW",
                    "value": "Aruba"
                },
                "countryiso3code": "",
                "date": "1999",
                "value": 83.366145106817,
                "unit": "",
                "obs_status": "",
                "decimal": 2
            },
            {
                "indicator": {
                    "id": "1.2_ACCESS.ELECTRICITY.RURAL",
                    "value": "Access to electricity (% of rural population with access)"
                },
                "country": {
                    "id": "ABW",
                    "value": "Aruba"
                },
                "countryiso3code": "",
                "date": "1998",
                "value": 82.7588139599625,
                "unit": "",
                "obs_status": "",
                "decimal": 2
            },
            {
                "indicator": {
                    "id": "1.2_ACCESS.ELECTRICITY.RURAL",
                    "value": "Access to electricity (% of rural population with access)"
                },
                "country": {
                    "id": "ABW",
                    "value": "Aruba"
                },
                "countryiso3code": "",
                "date": "1997",
                "value": 82.1027166849793,
                "unit": "",
                "obs_status": "",
                "decimal": 2
            },
            {
                "indicator": {
                    "id": "1.2_ACCESS.ELECTRICITY.RURAL",
                    "value": "Access to electricity (% of rural population with access)"
                },
                "country": {
                    "id": "ABW",
                    "value": "Aruba"
                },
                "countryiso3code": "",
                "date": "1996",
                "value": 81.4007969502741,
                "unit": "",
                "obs_status": "",
                "decimal": 2
            },
            {
                "indicator": {
                    "id": "1.2_ACCESS.ELECTRICITY.RURAL",
                    "value": "Access to electricity (% of rural population with access)"
                },
                "country": {
                    "id": "ABW",
                    "value": "Aruba"
                },
                "countryiso3code": "",
                "date": "1995",
                "value": 80.6571779362336,
                "unit": "",
                "obs_status": "",
                "decimal": 2
            },
            {
                "indicator": {
                    "id": "1.2_ACCESS.ELECTRICITY.RURAL",
                    "value": "Access to electricity (% of rural population with access)"
                },
                "country": {
                    "id": "ABW",
                    "value": "Aruba"
                },
                "countryiso3code": "",
                "date": "1994",
                "value": 79.8781975588869,
                "unit": "",
                "obs_status": "",
                "decimal": 2
            },
            {
                "indicator": {
                    "id": "1.2_ACCESS.ELECTRICITY.RURAL",
                    "value": "Access to electricity (% of rural population with access)"
                },
                "country": {
                    "id": "ABW",
                    "value": "Aruba"
                },
                "countryiso3code": "",
                "date": "1993",
                "value": 79.0683826025832,
                "unit": "",
                "obs_status": "",
                "decimal": 2
            },
            {
                "indicator": {
                    "id": "1.2_ACCESS.ELECTRICITY.RURAL",
                    "value": "Access to electricity (% of rural population with access)"
                },
                "country": {
                    "id": "ABW",
                    "value": "Aruba"
                },
                "countryiso3code": "",
                "date": "1992",
                "value": 78.2344621051053,
                "unit": "",
                "obs_status": "",
                "decimal": 2
            },
            {
                "indicator": {
                    "id": "1.2_ACCESS.ELECTRICITY.RURAL",
                    "value": "Access to electricity (% of rural population with access)"
                },
                "country": {
                    "id": "ABW",
                    "value": "Aruba"
                },
                "countryiso3code": "",
                "date": "1991",
                "value": 77.4314673727702,
                "unit": "",
                "obs_status": "",
                "decimal": 2
            },
            {
                "indicator": {
                    "id": "1.2_ACCESS.ELECTRICITY.RURAL",
                    "value": "Access to electricity (% of rural population with access)"
                },
                "country": {
                    "id": "ABW",
                    "value": "Aruba"
                },
                "countryiso3code": "",
                "date": "1990",
                "value": 76.7569079282355,
                "unit": "",
                "obs_status": "",
                "decimal": 2
            }
        ]
        const chartLabels = data.map((item) => item.date);
        const chartData = data.map((item) => item.value);
        const chartOptions = {
            responsive: false,
            width: 30,
            height: 30, 
          };

        const ctx = document.getElementById('chart').getContext('2d');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: chartLabels,
                datasets: [
                    {
                        label: 'Data',
                        data: chartData,
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: chartOptions
        });
    }
  return (
    <section >
        <h2 style={{textAlign:"center"}}>All of your saved views are shown below.</h2>
        <div className='cards-container'>
        {
            views.map((view)=>{
                const {id,country,startDate,endDate,indicator,chartType,metadata} = view
                return <Card key ={id} sx={{ minWidth: 275 }} style={{margin:"20px", width:"30vw"}}>
                <CardContent>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Country: {country}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Indicator: {indicator}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Start Date: {startDate}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    End Date: {endDate}
                  </Typography>
                  <Typography x={{ mb: 1.5 }} color="text.secondary">
                    Chart Type: {chartType}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" onClick={()=>handleCanvas(metadata)}>Open</Button>
                  <Button size="small" onClick={()=>handleDelete(id)}>Delete</Button>
                </CardActions>
              </Card>

            })
        }
        </div>
        <div style={{margin:auto}}>
            <canvas id="chart" width="400" height="400"></canvas>
        </div>
    </section>
  )
}

export default Views