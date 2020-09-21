import React from "react";


class ProjectCard extends React.Component {

    render() {
      return (
        <div className='project-container card' onClick= {(e) => {e.preventDefault(); window.location.href=this.props.projlink;}}>
            <h2>{this.props.name}</h2>
            <img className='projimg' src={this.props.src} alt='Project Icon' />
            <span className='projimg-text'>{this.props.text}</span>
        </div>
      )    
    }
}
 
export default ProjectCard;