
const portfolio = document.getElementById('portfolio');

// Array of projects
const projects = [
    {
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'project1.jpg',
        link: 'https://mufazaaleem.github.io/E-commerce_Website-/'
    },
    {
        title: 'Project 2',
        description: 'Praesent eu libero a nunc efficitur efficitur.',
        image: 'project2.jpg',
        link: 'https://mufazaaleem.github.io/JavaScript-clock-/'
    },
    
];

// Generate portfolio items
projects.forEach(project => {
    const projectElement = document.createElement('div');
    projectElement.classList.add('project');

    const titleElement = document.createElement('h2');
    titleElement.textContent = project.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.textContent = project.description;

    const imageElement = document.createElement('img');
    imageElement.src = project.image;

    const linkElement = document.createElement('a');
    linkElement.href = project.link;
    linkElement.textContent = 'View Project';

    projectElement.appendChild(titleElement);
    projectElement.appendChild(descriptionElement);
    projectElement.appendChild(imageElement);
    projectElement.appendChild(linkElement);

    portfolio.appendChild(projectElement);
});
