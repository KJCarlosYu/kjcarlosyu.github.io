$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/simulator.jpg',
            link: 'https://github.com/KJCarlosYu/Myproject/tree/main/Bike_count_simulator',
            title: 'Rental counts Simulator',
            demo: 'https://share.streamlit.io/app/bikerentalcountssimulator/',
            technologies: ['Python','XGBoost','Streamlit'],
            description: "Streamlit Application for predicting the number of bikes rented according to the time.",
            categories: ['Prediction']
        },
        {
            image: 'assets/images/greenhouse.png',
            link: 'https://github.com/KJCarlosYu/Myproject/blob/main/Looker-Studio/Kangjie_%20Yu_Individual_Assignment.pdf',
            title: 'Greenhouse gas emissions',
            demo: 'https://lookerstudio.google.com/reporting/62ca2cc3-7d6d-45da-bbbe-60c5a5a83221',
            technologies: ['Python','Pandas','Looker Studio'],
            description: "A interactive looker studio dashboard about greenhouse gas emissions in Europe.",
            categories: ['Visualisations']
        },
        {
            image: 'assets/images/smoke.jpg',
            link: 'https://github.com/KJCarlosYu/Myproject/blob/main/Machine-Learning/Binary%20classification%20of%20smokers/Machine_learning_project.ipynb',
            title: 'Classification of smokers',
            demo: false,
            technologies: ['Python','Random Forest','XGBoost'],
            description: "Binary classification model to predict the smoking status of a certain person.",
            categories: ['Classification']
        },
        {
            image: 'assets/images/kmeans.png',
            link: 'https://github.com/KJCarlosYu/Myproject/tree/main/Machine-Learning/K-means_clustering_proposal_for_travel_agency',
            title: 'Clustering',
            demo: false,
            technologies: ['KMeans','Dataiku'],
            description: "Clustering based on a dataset from a travel agency, devided the trips into 4 types.",
            categories: ['Clustering','BA']
        },
        {
            image: 'assets/images/rent.png',
            link: 'https://github.com/KJCarlosYu/Myproject/tree/main/Machine-Learning/Predicting_Rent',
            title: 'Rent-predicting',
            demo: false,
            technologies: ['Dataiku','Ordinary Least Squares'],
            description: "Machine learning project predicting the rent in Madrid.",
            categories: ['Prediction']
        },
        {
            image: 'assets/images/lander.png',
            link: 'https://github.com/KJCarlosYu/Myproject/tree/main/Machine-Learning/Lunar_lander',
            title: 'Lunar Lander',
            demo: false,
            technologies: ['Python','PPO','RL'],
            description: "Reinforcement learning on lunar lander.",
            categories: []
        },
        {
            image: 'assets/images/bcgx.jpg',
            link: 'https://github.com/KJCarlosYu/Myproject/tree/main/Data%20Analysitcs/Corporate%20Project',
            title: 'Customer Churn Prediction',
            demo: false,
            technologies: ['Python','Xgboost','Data Engineering'],
            description: "Corporate project with BCG X.",
            categories: ['Prediction','Visualisations','Clustering','BA']
        },
        {
            image: 'assets/images/heavenhill.png',
            link: 'https://github.com/KJCarlosYu/Myproject/tree/main/Data%20Analysitcs/IOWA%20Alcohol%20sales',
            title: 'IOWA Alcohol Sales Analysis',
            demo: false,
            technologies: ['Python','Prophet','Data Engineering'],
            description: "Business analysis on alcohol sales of Heaven Hill",
            categories: ['Prediction','Visualisations','BA']
        },
        {
            image: 'assets/images/NLP.jpg',
            link: 'https://github.com/KJCarlosYu/Myproject/tree/main/NLP',
            title: 'Disease Entity Recognition',
            demo: false,
            technologies: ['Python','NLP','TF-IDF'],
            description: "NLP project identifying disease based on comments",
            categories: ['Classification']
        },
        {
            image: 'assets/images/iebags.jpg',
            link: 'https://github.com/KJCarlosYu/Myproject/tree/main/DeepLearning',
            title: 'IE Bag Detection',
            demo: false,
            technologies: ['Python','Yolov8','Transfer Learning'],
            description: "Deep Learning project detecting IE bags.",
            categories: ['Classification']
        }

    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}