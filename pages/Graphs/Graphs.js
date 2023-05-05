import React, { useState, useEffect } from 'react'
import { Doughnut, Pie, PolarArea } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import axios from 'axios';
import Loading from '../../components/Loading/Loading'
import './Graphs.css'
import { Legend } from 'chart.js';

export default function Home() {
    //const unitLocation = useSelector((state) => state.posts);
    // console.log(unitLocation);
    const [loading, setLoading] = useState(true);
    const [campus, setCampus] = useState();
    const [cloud, setCloud] = useState();
    const [burwood, setBurwood] = useState();
    const [geelong, setGeelong] = useState();
    const [seniors, setSeniors] = useState();
    const [juniors, setJuniors] = useState();
    const [b_CyberSec, setB_CyberSec] = useState();
    const [m_CyberSec, setM_CyberSec] = useState();
    const [m_CyberSec_P, setM_CyberSec_P] = useState();
    const [b_IT, setB_IT] = useState();
    const [m_IT, setM_IT] = useState();
    const [m_IT_P, setM_IT_P] = useState();
    const [b_CSc, setB_CSc] = useState();
    const [m_DSc, setM_DSc] = useState();
    const [C_Sc, setC_Sc] = useState();
    const [D_Sc, setD_Sc] = useState();
    const [IT, setIT] = useState();
    const [C_Sec, setC_Sec] = useState();
    const [p_A, setP_A] = useState();
    const [p_B, setP_B] = useState();
    const [mp_A, setMP_A] = useState();
    const [mp_B, setMP_B] = useState();


    useEffect(() => {
        axios.get("http://localhost:5000/student/unitMode")
            .then(res => {
                setCampus(res.data.ON);
                setCloud(res.data.OFF);
                setLoading(false);
            })
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:5000/student/unitLocation")
            .then(res => {
                setBurwood(res.data.Burwood)
                setGeelong(res.data.Geelong)
            })
            .catch(err => console.log(err));
    })

    useEffect(() => {
        axios.get("http://localhost:5000/student/Type")
            .then(res => {
                setSeniors(res.data.Seniors)
                setJuniors(res.data.Juniors)
            })
            .catch(err => console.log(err));
    })
    useEffect(() => {
        axios.get("http://localhost:5000/student/itSubCourse")
            .then(res => {
                setB_IT(res.data.B_IT)
                setM_IT(res.data.M_IT)
                setM_IT_P(res.data.M_IT_P)
            })
            .catch(err => console.log(err));
    })
    useEffect(() => {
        axios.get("http://localhost:5000/student/subCourse")
            .then(res => {
                setB_CyberSec(res.data.B_CyberSec)
                setM_CyberSec(res.data.M_CyberSec)
                setM_CyberSec_P(res.data.M_CyberSec_P)
            })
            .catch(err => console.log(err));
    })

    useEffect(() => {
        axios.get("http://localhost:5000/student/science")
            .then(res => {
                setB_CSc(res.data.B_CSc)
                setM_DSc(res.data.M_DSc)
            })
            .catch(err => console.log(err));
    })
    useEffect(() => {
        axios.get("http://localhost:5000/student/Course")
            .then(res => {
                setC_Sc(res.data.B_CSc)
                setD_Sc(res.data.M_DSc)
                setIT(res.data.M_IT + res.data.B_IT + res.data.M_IT_P)
                setC_Sec(res.data.M_CyberSec + res.data.M_CyberSec_P + res.data.B_CyberSec)
            })
            .catch(err => console.log(err));
    })

    useEffect(() => {
        axios.get("http://localhost:5000/student/Unit")
            .then(res => {
                setP_A(res.data.B_P_A)
                setP_B(res.data.B_P_B)
                setMP_A(res.data.M_P_A)
                setMP_B(res.data.M_P_B)
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

    const typeChart = {
        labels: [
            'Seniors',
            'Juniors'
        ],
        datasets: [{
            label: 'quantities of Seniors and Juniors',
            data: [seniors, juniors],
            backgroundColor: [
                'rgb(92, 201, 245)',
                'rgb(247, 142, 160)',
            ],
            hoverOffset: 4
        }]
    };

    const ITChart = {
        labels: [
            'Bachelor of IT',
            'Master of IT',
            'Master of IT (Professional)'
        ],
        datasets: [{
            label: 'Subgroup IT',
            data: [b_IT, m_IT, m_IT_P],
            backgroundColor: [
                'rgb(92, 201, 245)',
                'rgb(160, 158, 214)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };
    const CyberSecChart = {
        labels: [
            'Bacehlor of CyberSecurity',
            'Master of CyberSecurity',
            'Master of CyberSecurity (Professional)'
        ],
        datasets: [{
            label: 'Subgroup Cybersecurity',
            data: [b_CyberSec, m_CyberSec, m_CyberSec_P],
            backgroundColor: [
                'rgb(92, 201, 245)',
                'rgb(247, 142, 160)',
                'rgb(255, 205, 86)'
            ],
            hoverOffset: 4
        }]
    };

    const ScienceChart = {
        labels: [
            'Bachelor of Computer Science',
            'Master of Data Science'
        ],
        datasets: [{
            label: 'subgroup',
            data: [b_CSc, m_DSc],
            backgroundColor: [
                'rgb(92, 201, 245)',
                'rgb(160, 158, 214)'
            ],
            hoverOffset: 4
        }]
    };
    const CourseChart = {
        labels: [
            'Computer Science',
            'Cybersecuirty',
            'Information Technology',
            'Data Science'
        ],
        datasets: [{
            label: 'Subgroup Cybersecurity',
            data: [C_Sc, C_Sec, IT, D_Sc],
            backgroundColor: [
                'rgb(92, 201, 245)',
                'rgb(247, 142, 160)',
                'rgb(255, 205, 86)',
                'rgb(160, 158, 214)'
            ],
            hoverOffset: 4
        }]
    };
    const UnitChart = {
        labels: [
            'SIT374 - Team Project (A) - Project Management and Practices',
            'SIT378 - Team Project (B) - Execution and Delivery',
            'SIT764 - Team Project (A) - Project Management and Practices',
            'SIT782 - Team Project (B) - Execution and Delivery'
        ],
        datasets: [{
            label: 'Unit',
            data: [p_A, p_B, mp_A, mp_B],
            backgroundColor: [
                'rgb(92, 201, 245)',
                'rgb(247, 142, 160)',
                'rgb(255, 205, 86)',
                'rgb(160, 158, 214)'
            ],
            hoverOffset: 4
        }]
    };

    return (
        <div className="container py-5">
            {loading || !campus ? (<Loading />) :
                (
                    <div>
                        <div class="row">
                            <div class="col">
                                <section className="card study_mode_card">
                                    <h5 className="card-header study_mode_header"><strong>Study Mode</strong></h5>
                                    <div className="card-body">
                                        <div className="doughnut_chart_studyMode d-flex justify-content-between" style={{ width: "400px", position: "relative", textAlign: "center" }}>
                                            <Pie data={studyModeChart} options={{ responsive: true }} />
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <br></br>
                            <div class="col">
                                 <section className="card all_charts">
                                    <h5 className="card-header location_header"><strong>Location</strong></h5>
                                    <div className="card-body">
                                        <div className="doughnut_chart_location" style={{ width: "400px", position: "relative", textAlign: "center" }}>
                                            <Pie data={locationChart} options={{ responsive: true }} />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <br></br>
                        <div class="row">
                            <div class="col">
                                <section className="card all_charts">
                                    <h5 className=" card-header type_header"><strong>Student Type</strong></h5>
                                    <div className="card-body">
                                        <div className="pie_chart_type d-flex justify-content-between" style={{ width: "400px", position: "relative", textAlign: "center" }}>
                                            <Pie data={typeChart} options={{ responsive: true }} />
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div class="col">
                                <section className="card all_charts">
                                    <h5 className=" card-header type_header"><strong>Course</strong></h5>
                                    <div className="card-body">
                                        <div className="pie_chart_type d-flex justify-content-between" style={{ width: "400px", position: "relative", textAlign: "center" }}>
                                            <Pie data={CourseChart} options={{ responsive: true }} />
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </div>
                        <br></br>
                        
                        <section className=" card sub_group_charts">
                            <h5 className=" card-header subgroupit_header"><strong>Course Sub-Group</strong></h5>
                            <div className="card-body">
                                <div className="pie_chart_type d-flex justify-content-between" style={{ width: "400px", position: "relative", textAlign: "center", alignItems: "center" }}>
                                    <Pie data={ITChart} options={{ responsive: true }} />
                                    <Pie data={CyberSecChart} options={{ responsive: true }} />
                                    <Pie data={ScienceChart} options={{ responsive: true }} />
                                </div>
                            </div>
                        </section>
                        <br></br>
                        <section className=" card all_charts ">
                            <h5 className=" card-header subgroupit_header"><strong>Student based on Unit</strong></h5>
                            <div className="card-body">
                                <div className="pie_chart_type d-flex justify-content-between" style={{ width: "400px", position: "relative", textAlign: "center"}}>
                                    <Pie data={UnitChart} options={{ responsive: true }} />
                                </div>
                            </div>
                        </section>
                    </div>
                )}
        </div >


    )

}
