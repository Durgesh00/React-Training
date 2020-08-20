import React from 'react';
import projectList from '../projectList';
import ProjectRow from '../components/ProjectRow';
import getProjects from '../apis/projectApi';
import apiHelper from '../apis/apiHelper';
import axios from 'axios';
import {useSelector} from 'react-redux';

let ProjectListContainer = () => {
    console.log("here");
    // getProjects( 'http://localhost:8000/api/v1/projects',  {
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    // const {userDetails} = useSelector(state => state.loginReducer);
    // const AUTH_TOKEN = "eyJ1c2VyX2F1dGhlbnRpY2F0aW9uX2lkIjo0NDUyNTd9:1k8fDj:GU2C3Gb7JF7k3r8AwQyiYZhogis";// userDetails.auth_token
    // axios.post(
    //     'http://localhost:8000/api/v1/projects', {
    //         "creation_template": 1,
    //         "description": "My sample project",
    //         "is_backlog_activated": false,
    //         "is_issues_activated": true,
    //         "is_kanban_activated": true,
    //         "is_private": false,
    //         "is_wiki_activated": true,
    //         "name": "Beta project",
    //         "total_milestones": 3,
    //         "total_story_points": 20.0,
    //         "videoconferences": "jitsi",
    //         "videoconferences_extra_data": null
    //     }, {
    //         headers: {
    //         "Content-Type": "application/json",
    //         "Authorization": `Bearer ${AUTH_TOKEN}`
    //     }
    // })
    // .then((res) => {
    //     console.log("project created",res);
    // });

    
    let arr = [];
    for( let i=0; i<projectList.length; i+=2){
        arr.push(<ProjectRow project1 = {projectList[i]} project2 = {projectList[i+1]}/>);
    }
    return (arr);
};

export default ProjectListContainer;