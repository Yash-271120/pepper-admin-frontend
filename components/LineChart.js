
import { Line } from "react-chartjs-2";
import {Chart as ChartJS,CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,} from 'chart.js/auto'

    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
      );

const options = {
    responsive: true,
    scales: {
        y: {
          beginAtZero: true
        }
      },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Number of Clicks on daily basis',
      },
    },
  };

const LineChart = ({chartData})=>{
    return (
        <div className="basis-8/12 h-96 rounded-2xl p-10 m-5">
            <Line data = {chartData} options={options} className=" bg-white rounded-2xl"/>
        </div>
    )
}

export default LineChart;