import React, {useState, useEffect} from 'react'
import {Doughnut, Pie, PolarArea } from 'react-chartjs-2';
// import {useSelector} from 'react-redux';
import axios from 'axios';
import Loading from '../../components/Loading/Loading'
import './Home.css'

export default function Home() {
    // const unitLocation = useSelector((state) => state.posts);
    // console.log(unitLocation);
    const [loading, setLoading] = useState(true);
    const [campus, setCampus] = useState();
    const [cloud, setCloud] = useState();
    const [burwood, setBurwood] = useState();
    const [geelong, setGeelong] = useState();

    
    useEffect(() => {
        axios.get("http://localhost:5000/student/unitMode")
            .then(res =>{
                setCampus(res.data.ON);
                setCloud(res.data.OFF);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:5000/student/unitLocation")
            .then(res =>{
                setBurwood(res.data.Burwood)
                setGeelong(res.data.Geelong)
            })
            .catch(err => console.log(err));
    })

    const studyModeChart = {
        labels: [
          'Campus',
          'Cloud',
        ],
        datasets: [{
          label: 'Students quantities based on Unit Mode',
          data: [campus, cloud],
          backgroundColor: [
            'rgb(92, 201, 245)',
            'rgb(247, 142, 160)',
          ],
          hoverOffset: 4
        }]
    };

    const locationChart = {
        labels: [
          'Burwood',
          'Geelong',
        ],
        datasets: [{
          label: 'Students quantities based on Location',
          data: [burwood, geelong],
          backgroundColor: [
            'rgb(92, 201, 245)',
            'rgb(247, 142, 160)',
          ],
          hoverOffset: 4
        }]
    };
     
    return (
        <div className="container py-5">
            {loading || !campus ? (<Loading/>):
            ( 
            <div>
                <section className="card study_mode_card">
                    <h5 className="card-header study_mode_header"><strong>Study Mode</strong></h5>
                    <div className="card-body">
                        <div className="doughnut_chart_studyMode d-flex justify-content-between" style={{ width:"400px" ,position: "relative", textAlign:"center"}}>
                            <Doughnut data={studyModeChart} options={{responsive:true}}/>
                            <Pie data={studyModeChart} options={{responsive:true}}/>
                            <PolarArea data={studyModeChart} options={{responsive:true}}/>
                        </div>
                    
                    </div>
                </section>

                <section className="all_charts py-5">
                    <div className="card-deck row justify-content-between">
                        <div className="card col-3">
                        <h5 className="card-header location_header"><strong>Location</strong></h5>
                        <div className="card-body">
                            <div className="doughnut_chart_location " style={{ width:"250px" ,position: "relative", textAlign:"center"}}>
                                <Doughnut data={locationChart} options={{responsive:true}}/>
                                <p className="card-text text-center"><small className="text-muted">Last updated 3 mins ago</small></p>

                            </div>
                        </div>
                        </div>
                        <div className="card col-3">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p className="card-text text-center"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                        <div className="card col-3">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                        </div>
                    </div>
                </section>
            </div>


            )}
        </div>

    )
}
