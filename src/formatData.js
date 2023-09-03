import React from 'react';
import resume from './resume'

// Function to populate the Personal Information section
export function PersonalInfo() {
    return <section id="personalInfo">
        <p>Name: {resume.name}</p>
        <p>Experience: {resume.totalExperience}</p>
        <p>Location: {resume.location}</p>
        <p>Phone: {resume.phone}</p>
        <p>Email: {resume.mail}</p>
        <p>GitHub: <a href={resume.gitHub} target="_blank">{resume.gitHub}</a></p>
        <p>LinkedIn: <a href={resume.linkedIn} target="_blank">{resume.linkedIn}</a></p>
        <p>Website: <a href={resume.website} target="_blank">{resume.website}</a></p>
    </section>
}

// Function to populate the Summary section
export function Summary() {
  return <section id="summary">
      <h3>SUMMARY</h3>
      <p>{resume.summary}</p>
  </section>
}
const common = (title) => {
  const categories = Object.keys(resume[title])
  return  categories.map(category =>  <p  key={category}>
    <span>{category}</span> : {resume[title][category].map(skill => <code key={skill}>{skill}</code>)}
 </p>)
}
// // Function to populate the Skills section
export function Skills() {
const categories = Object.keys(resume.skills)

    return <section id="skills">
      <h3>SKILLS</h3>
      {categories.map(category =>  <p  key={category}>
         <span>{category}</span> : {resume.skills[category].map(skill => <code key={skill}>{skill}</code>)}
      </p>)}
    </section>
}

// Function to populate the Experience section
export function Experience() {

    const detailedExperience = resume.experience.map((exp) => {
      // console.log(exp)
      // company
      
      // date
      // : 
      // "June 2022 - Present"
      // description
      // : 
      // Array(1)
  
      // : 
      // "Tech Stack" : ['React', 'Map-gl js', 'HTML', 'CSS', 'AWS (Lambda)']
      // name: "Road Surveillance Management System"
      // task : []
      // location :  ['Remote', 'Gurugram', 'Bengaluru']
      // position : "Software Engineer"
      // return exp
    });
        // const ex = `
        //     // <p>${exp.position}</p>
        //     // <p>Company: <a href="${exp['company url']}" target="_blank">${exp.company}</a></p>
        //     // <p>Location: ${exp.location}</p>
        //     // <p>Date: ${exp.date}</p>
        //     // // <p>Tech Stack: ${exp.description[0]['Tech Stack'].join(', ')}</p>
        //     <h3>Tasks:</h3>
        // `;

    return  <section id="experience">
      <h3>Experience</h3>
    </section>
}

// // Function to populate the Education section
// export function populateEducation() {
//     const educationSection = document.getElementById('education');
//     const educationList = document.createElement('ul');
//     educationList.innerHTML = `
//         <li>Bachelor: ${resume.education.Bachelor}</li>
//         <li>Institute: ${resume.education.institute}</li>
//         <li>Location: ${resume.education.location}</li>
//         <li>Batch: ${resume.education.batch}</li>
//         <li>Backlog: ${resume.education.backlog}</li>
//     `;
//     educationSection.appendChild(educationList);
// }

// // Function to populate the Hobbies section
// exportv function populateHobbies() {
//     const hobbiesSection = document.getElementById('hobbies');
//     const hobbiesList = createListFromArray(resume.hobbies);
//     hobbiesSection.appendChild(hobbiesList);
// }

// // Function to populate the Projects section
// export function populateProjects() {
//     const projectsSection = document.getElementById('projects');

//     resume.projects.forEach((project, index) => {
//         const projectDiv = document.createElement('div');
//         projectDiv.classList.add('project-entry');
//         projectDiv.innerHTML = `
//             <h2>${project.name}</h2>
//             <p>${project.description}</p>
//             <p>Tech Stack: ${project['Tech Stack'].join(', ')}</p>
//         `;

//         projectsSection.appendChild(projectDiv);
//     });
// }

// // Function to populate the Social Media section
//export function populateSocialMedia() {
//     const socialMediaSection = document.getElementById('socialMedia');
//     const socialMediaList = createListFromArray([
//         `Medium: <a href="${resume['social media'].medium}" target="_blank">${resume['social media'].medium}</a>`,
//         `Instagram: <a href="${resume['social media'].instagram}" target="_blank">${resume['social media'].instagram}</a>`
//     ]);
//     socialMediaSection.appendChild(socialMediaList);
// }

// // Call functions to populate different sections
// populatePersonalInfo();
// populateSummary();
// populateSkills();
// populateExperience();
// populateEducation();
// populateHobbies();
// populateProjects();
// populateSocialMedia();
