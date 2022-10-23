import React from "react";
import { useEffect, useState } from 'react';
import { ProjectCard } from "./ProjectCard";
import "./style/project.css";


const Projects = () => {
    const [githubProject, setGithubProject] = useState([]);
    function GithubRepos() {
        return githubProject.map(item => (
            <ProjectCard key={item.id} mainName={item.name} 
            user={item.owner.login} url={item.html_url} />
        ))
    }
    const fetchData = () => {
        return fetch(`https://api.github.com/users/w-lai/repos`)
        .then((response) => response.json())
        .then((data) => setGithubProject(data));
    }
    useEffect(() => {fetchData()}, []);
    return (
    <div className="Projects">
        <h1>Projects</h1>
        <div className="Cards">
            <GithubRepos />
        </div>
    </div>  
    );
}

export default Projects;