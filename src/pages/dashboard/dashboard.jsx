import React, { useState } from 'react';
import DashboardCard from '../../components/dashboardComponents/dashboardCard/dashboardCard';
import './dashboard.scss';
import calendar from '../../components/dashboardComponents/calendar.svg';
import resource from '../../components/dashboardComponents/resources.svg';
import course from '../../components/dashboardComponents/course.svg';

const Dashboard = () => {
    const [view, setView] = useState(0);
    return (
        <div className={`dashboard-main ${view === 1 ? "larges" : ""}`}>
            <h1>Student Portal</h1>
            <h3>Select A View</h3>
            <section className="select-view">
                <button onClick={()=>setView(0)} className={`${view === 0? 'on' : ''}`}>Grid</button>
                <button onClick={()=>setView(1)} className={`${view === 1? 'on' : ''}`}>List</button>
            </section>
            <section className={`view ${view === 1 ? "larges" : ""}`}>
            <DashboardCard title="Calendar" image={calendar}/>
            <DashboardCard title="Resource" image={resource}/>
            <DashboardCard title="Course" image={course}/>
            </section>
        </div>
    );
};

export default Dashboard;