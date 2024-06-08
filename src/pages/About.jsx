import React, { useContext } from 'react'
// import Context from './Context'

const About = ({userPoints}) => {
  const res = useContext(Context);
  return (
    <div>About
    <p style={{color:'red'}}>State :- {userPoints}</p>
    </div>
  )
}

export default About