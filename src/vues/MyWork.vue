<template lang="html">
  <div id="myWork" class="uk-section">
    <div class="uk-container">
      <h1 class="uk-heading-divider uk-text-center">MY WORK<p class="uk-text-center uk-text-meta">All of the cool projects I've been lucky to work on by now 😊</p></h1>

      <div class="uk-grid">
        <div id="projectsFilter" class="uk-visible@m uk-width-auto">
          <ul class="uk-tab-left" uk-tab>
            <li class="uk-active uk-padding-small"><a href="" v-on:click="selectedLanguage = 'all'">ALL</a></li>
            <li class="uk-padding-small"><a href="" v-on:click="selectedLanguage = 'JavaScript'">JavaScript</a></li>
            <li class="uk-padding-small"><a href="" v-on:click="selectedLanguage = 'NodeJS'">NodeJS</a></li>
            <li class="uk-padding-small"><a href="" v-on:click="selectedLanguage = 'C#'">C#</a></li>
            <li class="uk-padding-small"><a href="" v-on:click="selectedLanguage = 'Java'">Java</a></li>
            <li class="uk-padding-small"><a href="" v-on:click="selectedLanguage = 'PHP'">PHP</a></li>
            <li class="uk-padding-small"><a href="" v-on:click="selectedLanguage = 'HTML'">HTML</a></li>
            <li class="uk-padding-small"><a href="" v-on:click="selectedLanguage = 'CSS'">CSS</a></li>
            <li class="uk-padding-small"><a href="" v-on:click="selectedLanguage = 'AngularJS'">Angular</a></li>
            <li class="uk-padding-small"><a href="" v-on:click="selectedLanguage = 'Vue'">VueJS</a></li>
            <li class="uk-padding-small"><a href="" v-on:click="selectedLanguage = 'Project Management'">Project Management</a></li>
          </ul>
        </div>
        <div class="uk-grid uk-child-width-1-3@xl uk-child-width-1-2@m uk-child-width-1-1@s uk-width-expand">
          <div class="uk-card uk-card-default uk-card-body" v-for="project in listOfProjects" uk-scrollspy="cls:uk-animation-fade">
            <div class="project_cards">
              <div class="uk-card-header uk-cover-container">
                <div class="uk-grid">
                  <div class="uk-width-3-5 uk-padding-remove">
                    <img src="src/assets/logo.png" alt="" uk-cover>
                  </div>
                  <div class="uk-width-2-5 uk-padding-remove">
                      <div class="uk-badge uk-label project-badge" v-bind:class="{ 'pink': (badge == 'Personal'), 'green': (badge == 'School') }"  v-for="badge in project.category">
                        {{ badge }}
                      </div>
                  </div>
                </div>
              </div>
              <div class="uk-card-body">
                <div class="uk-card-title">{{ project.name }}</div>
                <p>{{ project.description }}</p>
                <p>{{ project.languages.toString().replace(/,/g , " | ") }}</p>
              </div>
              <div class="uk-card-footer">
                <a v-bind:href="project.repo_url" class="uk-button gitBtn uk-button-small">
                  <span><i class="fa fa-github" aria-hidden="true"></i> Repo</span>
                </a>
                <a v-if="project.site_url != ''" v-bind:href="project.site_url" class="uk-button uk-button-primary siteBtn uk-button-small">
                  <span>Go to site</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Import the projects data
let projects = require('../data/projects');

export default {
  name: "myWork",
  data() {
    return {
      projects: projects,
      selectedLanguage: "VueJS"
    }
  },
  computed: {
    // return the filtered list of projects
    listOfProjects: function () {
      // check the criteria
      return (this.selectedLanguage == "all") ?
      // return all projects
      this.projects :
      // return only projects that contain the selected language
      projects.filter((project) => {
          return project.languages.concat(project.sub_categories).includes(this.selectedLanguage);
      });
    }
  }
}
</script>

<style lang="css">

h1 {
  font-family: "Raleway", "Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
}

.project-badge {
  position: relative;
}

.project_cards {
  border: 1px solid #000;
  border-radius: 50px;
}

.project_cards .uk-card-header.uk-cover-container {
  min-height: 130px;
}

.pink {
  background-color: #EC3B83;
}

.green {
  background-color: #90EE90;
}

.gitBtn {
  color: #000;
  font-size: 1em;
  background: #fff;
  border: 1px solid #000;
  border-radius: 25px;
}
.gitBtn span i.fa.fa-github {
    font-size: 1.2em;
}

.gitBtn:hover {
  border: 1px solid #0F7AE5;
}

.siteBtn {
  border: 1px solid #0F7AE5;
  border-radius: 25px;
}

#projectsFilter .uk-padding-small {
  padding: 5px;
}

.uk-tab>.uk-active>a {
    margin-right: -5px;
}

.uk-card-footer a {
  margin-right: 1em;
}

</style>
