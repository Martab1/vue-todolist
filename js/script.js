/*  TO DO LIST
- stampare in pagina un item per ogni elemento contenuto in un array di todo
- predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
- ogni item ha una "x" associata: cliccando su di essa, l'item viene rimosso dalla lista
*/


const app = new Vue({
    el:"#app",
    data:{
        // array di oggetti todos
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
        
    },
    methods:{
        // aggiunta to do (a eventi di @click & @keyup)
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
        // rimuovo to do dalla lista tramite l'index (al @click)
        removeTodo(index){
         this.todos.splice(index,1);

        },
    }



});