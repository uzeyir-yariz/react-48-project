import React from "react"

export interface IHomePageProps {}

const Home: React.FunctionComponent<IHomePageProps> = (props) => {

  props; // to avoid linting error

  return (
    <>
      <p>home page (protect by firebase)</p> 
    </>
  )
}

export default Home
