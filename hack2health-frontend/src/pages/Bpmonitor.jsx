import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {Chart as ChartJS, Title, Tooltip, LineElement, Legend,CategoryScale, LinearScale, PointElement, Filler} from 'chart.js';
import Layout from '../components/Layout';
ChartJS.register(
  Title, Tooltip, LineElement, Legend,
  CategoryScale, LinearScale, PointElement, Filler
)


function App() {
  const [data, setData] = useState({
    labels: [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "10",
      "11", "12", "13", "14", "15", "16", "17", "18", "19", "20",
      "21", "22", "23", "24", "25", "26", "27", "28", "29", "30"
    ],
    datasets: [
      {
        label: "SUCROSE-LEVEL",
        data: [
          70, 87, 190, 230, 131, 320, 239, 450, 500, 455,
          345, 234, 300, 400, 232, 80, 99, 110, 116, 234,
          221, 350, 454, 399, 499, 456, 234, 123, 342, 234
        ],
        backgroundColor: 'transparent',
        borderColor: 'red',
        tension: 0.4,
        fill: true,
        pointStyle: 'rect',
        pointBorderColor: 'blue',
        pointBackgroundColor: '#fff',
        showLine: true
      },
      {
        label: "BLOOD PRESSURE-REPORT",
        data: [
          90, 93, 95, 97, 99, 101, 105, 107, 109, 110,
          120, 115, 117, 119, 120, 100, 126, 129, 115, 134,
          136, 121, 145, 117, 100, 105, 109, 115, 123, 110
        ],
        backgroundColor: 'transparent',
        borderColor: 'blue',
        tension: 0.4,
        fill: true,
        pointStyle: 'rect',
        pointBorderColor: 'blue',
        pointBackgroundColor: '#fff',
        showLine: true
      }
    ]
  });

  return (
    <Layout>
    <div className="App" style={{ margin: '35px 0px 0px 250px',width: '1001px', height: '500px', background: 'white'}}>
      <Line data={data} options={{ maintainAspectRatio: false }} />
    </div>
    </Layout>
  );
}

export default App;