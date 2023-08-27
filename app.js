// init Github
const github = new Github;
//initialiaze UI
const ui = new UI;

// get elements 

const searchUser = document.getElementById('searchUser');


// event listeners
searchUser.addEventListener('keyup', (e) => {
const userText =e.target.value;
if(userText !== '') {
github.getUser(userText)
.then(data => {
  if(data.profile.message === 'Not Found') {
    // Show alert
    ui.showAlert('user not found!', 'alert alert-danger');

  } else {
    // Show profile
    ui.showProfile(data.profile);
    ui.showRepos(data.repos);
  }
})
} else {
// Clear profile
  ui.clearProfile();
}

});