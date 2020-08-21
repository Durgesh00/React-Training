import React from 'react';
import ProjectRow from '../components/ProjectRow';
import { useSelector, useDispatch } from 'react-redux';
import { getProjects } from '../actions/projectActions';

let ProjectListContainer = () => {
  const dispatch = useDispatch();
  dispatch(getProjects());

  let result = useSelector(state => state.projectsReducer);
  const { projectList } = result;
  let arr = [];
  for (let i = 0; i < projectList.length; i += 2) {
    arr.push(<ProjectRow project1={projectList[i]} project2={projectList[i + 1]} />);
  }
  return (arr);
};
export default ProjectListContainer