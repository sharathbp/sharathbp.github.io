import React from "react"

const ProjectTemplate = (props) => {
  const project = props.data
  return (
      <div>
        <h1>{project.title}</h1>
      </div>
  )
}

export default ProjectTemplate
