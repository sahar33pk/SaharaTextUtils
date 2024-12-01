import React from 'react'

const JobDetails = (props) => {
  return (
    <div>
      <div className={`container my-2 text-${props.color==="light"?"info":"light"} `}>
        <div className="row">
          <div className="col-sm-4 bg-primary py-1">
            <p><b>Name:</b></p>
            <p>sahar</p>
          </div>
          <div className="col-sm-4 bg-info py-1">
            <p><b>Jobs:</b></p>
            <p>Try Hard for learning</p>
          </div>
          <div className="col-sm-4 bg-success py-1">
            <p><b>Address:</b></p>
            <p>Pirmahal Toba Tek Singh</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default JobDetails
