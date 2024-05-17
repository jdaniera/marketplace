import { Pie } from "react-chartjs-2"
import style from './PieChart.module.css'

import {
    Chart as ChartJS, 
    CategoryScale, 
    ArcElement, 
    Tooltip,
    Legend
} from 'chart.js';

import { useState, useEffect } from 'react';

ChartJS.register(
    CategoryScale,
    ArcElement,
    Tooltip,
    Legend
)

export default function PieChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    });

    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            label: ["Delivery Service", "Personal Transport", "Selling of Goods"], 
            datasets: [
                {
                    label: "# of People (thousands)",
                    data: [468, 245, 116, 65],
                    borderColor: [
                        'rgb(36, 106, 115)', 
                        'rgb(54, 143, 139)',  
                        'rgb(243, 223, 193)',     
                        'rgb(221, 190, 168)', 
                         ],
                    backgroundColor: [
                        'rgb(36, 106, 115)', 
                        'rgb(54, 143, 139)',  
                        'rgb(243, 223, 193)',    
                        'rgb(221, 190, 168)', 
                    ]
                }
            ]
            })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: 'Gig Workers in Canada'
                },
                maintainAspectRatio: false,
                responsive: false
            }
        })
    }, [])


    return(
        <>
            <div className={style.chartContainer}>
                <div className={style.chartInnerContainer}>
                    <Pie data={chartData} options={chartOptions} style={{width: "400px", height:"400px"}}/>
                </div>
            </div>
        </>
    )
}