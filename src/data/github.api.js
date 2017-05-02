
let repositoriesCollection = [];

let repositories = [];

fetch("https://api.github.com/users/pranav-kural/repos").then(function(response) {
  return response.json();
}).then(function(data) {
  data.forEach((repository) => {
    //console.log(repository.name);
    if (!repository.fork){
      repositories.push({
        name: repository.name,
        repo_url: repository.html_url,
        languages: []
      });
      fetch(repository.languages_url).then((response) => {
                       return response.json();
                    }).then((repo_languages_object) => {
                       repositories[repositories.length - 1] = Object.keys(repo_languages_object);
                    }).catch(function() {
                        console.log("Error retreiving the repository data from GitHub");
                    })
    }
});
  //console.log(repositories);
}).catch(function() {
  console.log("Error retreiving the repository data from GitHub");
});

// get repo languages
function getRepoLanguages() {

}

//var a = getRepoLanguages("https://api.github.com/repos/pranav-kural/Autour/languages");
//console.log(a);
