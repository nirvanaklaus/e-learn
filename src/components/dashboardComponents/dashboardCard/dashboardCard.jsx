import React from 'react';
import './dashboardCard.scss'

const DashboardCard = ({title, image}) => {
    return (
        <article className="dashboard-card-main larges" style={{background: `url(${image})`, backgroundSize: '30%', backgroundPosition:'right', backgroundRepeat:'no-repeat'}}>
            <h1>{title}</h1>
            <button>View More</button>
        </article>
    );
};

export default DashboardCard;