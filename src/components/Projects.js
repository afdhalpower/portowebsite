// src/components/Projects.js
import React, { useState, useEffect } from 'react';

function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users/[afdhalpower]/repos')
      .then(response => response.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <section id="projects">
      <h1>My Projects</h1>
      <ul>
        {repos.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Projects;
