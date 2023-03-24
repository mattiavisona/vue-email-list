
const { createApp } = Vue;

createApp({
  // una lista di todo
  // che posso vedere e eliminare quelli che ho già fatto

  data() {
    return {
      
      emails: [],
    }
  },

  created() {
    this.getEmails(10);
  

  },

  methods: {
    getEmails(quantity){
        for (let i = 0; i < quantity; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) =>{
                const mailReceived = res.data.response;
        
                //Inserisco la costante mailRecived dentro l'array emails
                this.emails.push(mailReceived);
            })
              
        }
       
    }

  },




}).mount('#app');

