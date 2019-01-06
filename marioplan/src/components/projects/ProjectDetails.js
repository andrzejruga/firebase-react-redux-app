import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi porro repellat accusamus veritatis doloribus at in architecto vero dolores? Hic cupiditate nihil, repellendus nesciunt excepturi aliquam amet veniam neque similique!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Andy</div>
                    <div>6th January, 17:00</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
