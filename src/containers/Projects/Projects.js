import React, { useState } from "react";

import videre_cover from "../../assets/projects/videre/videre_apng.png";
import quadow_cover from "../../assets/projects/quadow/quadow.jpg";

import Project from "../../components/Project/Project";

import "./Projects.css";

const Projects = () => {
    const [video, setVideo] = useState(false);

    return (
        <div className={"project-container"}>
            <Project title={"Videre"}>
                <img className={"project-cover"} src={videre_cover} alt={"Videre"} />
              A video streaming platform built with...
                <div class="lists">
                    <ul class="nes-list is-disc">
                        <li><span class="nes-text is-primary">Python</span> and <span class="nes-text is-primary">Django</span> (REST Framework) 🐍</li>
                        <li><span class="nes-text is-primary">JavaScript</span> and <span class="nes-text is-primary">React</span> ⚛️</li>
                        <li><span class="nes-text is-primary">Docker</span> 🐳</li>
                        <li>PostgreSQL, Celery, Redis and FFmpeg 🚦</li>
                    </ul>
                </div>
                <button 
                    type="button" 
                    class="nes-btn is-warning" 
                    onClick={() => window.open('https://videre.natan.dev', '_blank')}
                    >Demo
                </button>
            </Project>

            <Project title={"Quadow"}>
                <img className={"project-cover"} src={quadow_cover} alt={"Videre"} />
                A bug tracker! Don't be mean, it was my first project.🙃
                <div class="lists">
                    <ul class="nes-list is-disc">
                        <li><span class="nes-text is-primary">Python</span> and <span class="nes-text is-primary">Django</span> 🐍</li>
                        <li>PostgreSQL, and Amazon S3 for the static content</li>
                    </ul>
                </div>
                <button 
                    type="button" 
                    class="nes-btn is-warning" 
                    onClick={() => window.open('https://github.com/natmil/quadow-bugtracker', '_blank')}
                    >Source code
                </button>
                <button 
                    type="button" 
                    class={`nes-btn is-${video ? "error" : "warning"}`} 
                    onClick={() => setVideo(!video)}
                    >{video ? "Close demo" : "Video demo"}
                </button>
                {video ?
                        <video width="100%" controls>
                            <source src="https://github.com/natmil/quadow-bugtracker/blob/master/Quadow_Guide.mp4?raw=true" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video> : null}
            </Project>
        </div>
    );
}

export default Projects;