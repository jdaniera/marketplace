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
                    label: "# of People (thousand)",
                    data: [468, 245, 116, 65],
                    borderColor: [
                        'rgb(53, 89, 235)',
                        'rgb(89, 211, 65)',
                        'rgb(23, 180, 53)',
                         ],
                    backgroundColor: [
                        'rgb(53, 162, 235, 0.4)',
                        'rgb(102, 53, 65, 0.4)',
                        'rgb(23, 180, 32, 0.4)',
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
    })


    return(
        <>
            <div className={style.chartContainer}>
                <Pie data={chartData} options={chartOptions} style={{width: "400px", height:"400px"}}/>
            </div>
        </>
    )
}