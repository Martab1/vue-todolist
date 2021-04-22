/*  TO DO LIST
- stampare in pagina un item per ogni elemento contenuto in un array di todo
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista

BONUS 
- modifica testo del todo (update text)
*/


const app = new Vue({
    el:"#app",
    data:{
        // COLLEZIONE OGGETTI TODOS
        todos: [
            {
                text: "fare la spesa",
                status: false,
            },
            {
                text: "studiare",
                status: false,
            },
            {
                text: "seguire la lezione",
                status: false,
            },

        ],
        // nuovo to do in input (v-model)
        newTodo: "",
        deletedTOdO:[],
        
    },
    methods:{
        // AGGIUNTA TO DO  (a eventi di @click & @keyup)
        addTodo(){
            if (this.newTodo != ""){
                this.todos.push({
                    text:this.newTodo  ,
                    status: false,
                })

                // reset 
                this.newTodo = "";

                // focus
                // this.$refs.focusTodo.focus();
            }

            
        },
        // RIMUOVO TO DO  dalla lista tramite l'index (al @click)
        removeTodo(index){
         this.todos.splice(index,1);

         // conservare i deleted 
        //  const deleted = this.todos.splice(index,1)[0];
        //   if (){

        //   }


        },
        // MODIFICO STATUS (on/off al @click)
        updateStatus(index){
           this.todos[index].status = ! this.todos[index].status;
           
        },


        // update text
        
    }




});