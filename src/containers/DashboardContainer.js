import React from 'react';
import { useSelector } from 'react-redux';
import DashboardComponent from '../components/DashboardComponent'

import { Row, Col } from 'reactstrap';
import ProjectListContainer from './ProjectListContainer';

const DashboardContainer = () => {
  const { userDetails } = useSelector(state => state)
  return (
    <>
      <DashboardComponent userDetails={userDetails} />
      <ProjectListContainer />
    </>
  )
}

export default DashboardContainer;