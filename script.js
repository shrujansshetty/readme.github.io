function displayHTML() {
  // Get user input
  var hi = document.getElementById("hi").value;
  var name = document.getElementById("name").value;
  var subtitle=document.getElementById("subtitle").value;
  //working
  var working=document.getElementById("working").value;
  var workingProjectname=document.getElementById("working.projectname").value;
  var workingProjeclink=document.getElementById("working.projectlink").value;
  //collaborate
  var collaborate=document.getElementById("collaborate").value;
  var collaborateProjectname=document.getElementById("collaborate.projectname").value;
  var collaborateProjeclink=document.getElementById("collaborate.projectlink").value;

  //looking
  var looking=document.getElementById("looking").value;
  var lookingProjectname=document.getElementById("looking.projectname").value;
  var lookingProjeclink=document.getElementById("looking.projectlink").value;

  //learning
  var learning=document.getElementById("learning").value;
  var learningPlaceholder=document.getElementById("learning.placeholder").value;

  //ask
var ask=document.getElementById("ask").value;
var askPlaceholder=document.getElementById("ask.placeholder").value;

//reach
var reach=document.getElementById("reach").value;
var reachPlaceholder=document.getElementById("reach.placeholder").value;

//projects
var projects=document.getElementById("projects").value;
var projectsPlaceholder=document.getElementById("projects.placeholder").value;

//articles
var articles=document.getElementById("articles").value;
var articlesPlaceholder=document.getElementById("articles.placeholder").value;

//resume
var resume=document.getElementById("resume").value;
var resumePlaceholder=document.getElementById("resume.placeholder").value;

//funfact
var funfact=document.getElementById("funfact").value;
var funfactPlaceholder=document.getElementById("funfact.placeholder").value;

//social
var youtube=document.getElementById("youtube").value;
var instagram=document.getElementById("instagram").value;
var linkedin=document.getElementById("linkedin").value;




  // Create a template for the resume
  var resumeTemplate = `
  <h1 align="center">${hi},${name}</h1>
  <h3 align="center">${subtitle}</h3>

-${working} [${workingProjectname}] (${workingProjeclink})
-${learning} **${learningPlaceholder}**
-${collaborate} [${collaborateProjectname}] (${collaborateProjeclink})
-${looking} [${lookingProjectname}] (${lookingProjeclink})
-${projects} [${projectsPlaceholder}] (${projectsPlaceholder})
-${articles} [${articlesPlaceholder}] (${articlesPlaceholder})
-${ask} **${askPlaceholder}**
-${reach} **${askPlaceholder}**
-${resume} [${resumePlaceholder}] (${resumePlaceholder})
-${funfact} **${funfactPlaceholder}**
<h3 align="left">Connect with me:</h3>
<p align="left">
<a href="https://linkedin.com/in/${linkedin}" target="blank"><img align="center" src="https://github.com/Prajith004/gh-profile-readme-generator/blob/main/images/linkedin.svg"  height="30" width="40" /></a>
<a href="https://instagram.com/${instagram}" target="blank"><img align="center" src="https://github.com/Prajith004/gh-profile-readme-generator/blob/main/images/instagram.svg"  height="30" width="40" /></a>
<a href="https://www.youtube.com/c/${youtube}" target="blank"><img align="center" src="https://github.com/Prajith004/gh-profile-readme-generator/blob/main/images/youtube.svg"  height="30" width="40" /></a>
</p>




`;




  // Display the generated resume
  document.getElementById("displaycode").innerHTML = resumeTemplate;
}





document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const username = urlParams.get('username');
  const decodedUsername = decodeURIComponent(username);

  // Function to fetch GitHub stats
  async function fetchGitHubStats(username) {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('User not found');
      }
    } catch (error) {
      console.error('Error fetching GitHub stats:', error.message);
      return null;
    }
  }

  // Display GitHub stats
  async function displayGitHubStats() {
    const userData = await fetchGitHubStats(decodedUsername);

    if (userData) {
      // Display fetched data in the specified div
      const usernameDisplayDiv = document.getElementById('usernameDisplay');
      usernameDisplayDiv.innerHTML = `
        <h2>${userData.login}'s GitHub Stats</h2>
        <p>Followers: ${userData.followers}</p>
        <p>Following: ${userData.following}</p>
        <p>Public Repositories: ${userData.public_repos}</p>
        <p>Bio: ${userData.bio || 'Not available'}</p>
        <p><a href="${userData.html_url}" target="_blank">View Profile</a></p>
      `;
    } else {
      // Display error message if user data couldn't be fetched
      const usernameDisplayDiv = document.getElementById('usernameDisplay');
      usernameDisplayDiv.textContent = 'Failed to fetch user data.';
    }
  }

  // Call the function to display GitHub stats
  displayGitHubStats();
});
