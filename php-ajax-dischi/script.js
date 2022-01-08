var app = new Vue({
   el: '#app',
   data: {
     listMusic: [],
   },

   mounted(){
      
      this.printListMusic()

   },
     
   methods:{

      printListMusic(){

         axios.get('http://localhost:8888/php-ajax-dischi/db/myfile.json')
         .then(response => {

            this.listMusic = response.data;

            this.listMusic.forEach(singleMusic => {

               console.log(singleMusic.author);
               console.log(singleMusic.poster);
               console.log(singleMusic.title);
               console.log(singleMusic.year);
               console.log("-----");

            });

         })
         .catch(error => console.error(error));
      }
        
   }
})