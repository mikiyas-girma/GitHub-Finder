
class Github {
  constructor() {
    this.client_id = '01c4de5157b03f2adb5d';
    this.client_secret = '48c982ce0794547410877691258b578436c79f3f';
  }

  async getUser(user) {
    // this mode 
    /* https://YOUR_CLIENT_ID:YOUR_CLIENT_SECRET@api.github.com/users/${user}
 */
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const profile = await profileResponse.json();
   
    return {
      profile
    }
  }

}
