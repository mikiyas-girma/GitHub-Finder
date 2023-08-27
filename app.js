// init
const github = new Github;

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

  } else {
    // Show profile
    console.log(data.profile.company)
  }
})
} else {
// Clear profile

}

});