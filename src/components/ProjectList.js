import React from 'react';
import projectList from '../projectList';
import ProjectContainer from './ProjectContainer';


let ProjectList = () => {

  let arr = [];
  for (let i = 0; i < projectList.length; i += 2) {
    arr.push(<ProjectContainer project1={projectList[i]} project2={projectList[i + 1]} />);
  }
  return (arr);
};

export default ProjectList;