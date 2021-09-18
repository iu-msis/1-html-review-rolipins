const Profile = {
    data() {
      return {
          "person": {},
        
        }
    },
    created() {  //event book function "created" by vue.js
        

        fetch('https://randomuser.me/api/')
        .then( response => response.json())
        .then((parsedJson) => {
            console.log(parsedJson);
            this.person = parsedJson.results[0]
            
        })
        .catch( errF => {
          console.error(err)
        })

        
    }
  }
  
Vue.createApp(Profile).mount('#profileApp');
