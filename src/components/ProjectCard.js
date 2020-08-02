import React from "react";


class ProjectCard extends React.Component {

    render() {
      return (
        <div className='project-container card' onClick= {(e) => {e.preventDefault(); window.location.href=this.props.projlink;}}>
            <h2 style={{position:'absolute', top:'3%', left:'30%'}}>{this.props.name}</h2>
            <img className='projimg' src={this.props.src} alt='Project Icon' />
            <span className='projimg-text'>This is a Project that I doobity do{/* TODO ADD A prop for text */}</span>
        </div>
      )    
    }
}
 
export default ProjectCard;