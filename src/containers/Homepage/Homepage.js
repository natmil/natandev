import React from "react";

import Box from "../../components/Box/Box";
import Projects from "../Projects/Projects";

const Homepage = () => {
    return (
        <div>
            <Box title={"I'm Natán Castro"}>
                <p>I'm a 👨‍💻 Software Developer based in Madrid.</p>
                <p>I have always been curious about how things worked and were made. That's why I love programming, because writing code gives me a platform to create anything I want.</p>
            </Box>

            <Box title={"Stack"}>
                <p>I do really enjoy coding with Python 🐍, specially with Django and the REST Framework.</p>
                <p>For the front I like to use JavaScript and React.</p>
                <p>I also have knowledge of Docker, Linux, AWS, SQL and NoSQL databases, Celery, Redis, Redux, HTML, CSS and styled-components.</p>
            </Box>

            <Box title={"Projects"}>
                <Projects />
            </Box>

            <Box title={"Reach me!"}>
                <a target="_blank" rel="noreferrer" href={"https://github.com/natmil"}><i class="nes-icon github is-large" /></a>
                <a target="_blank" rel="noreferrer" href={"mailto:hello@natan.dev"}><i class="nes-icon gmail is-large" /></a>
                <a target="_blank" rel="noreferrer" href={"https://www.linkedin.com/in/natancas/"}><i class="nes-icon linkedin is-large" /></a>
            </Box>
        </div>
    );
}

export default Homepage;