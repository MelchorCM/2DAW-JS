const TaskProyect = {
    data() {
      return {
        taskList: [],
        name: "", 
        description: "", 
        v_completed: 0,
      }
    },
    methods:{
        add_task(){
            this.taskList.push(
              {
                name: this.name,
                description: this.description,
                date: new Date(),
                delet: true,
                completed: false,
                v_prioridad: 0
              }
            )
        },

        borrar(index){
          this.taskList[index].delet = true;
          this.taskList.splice(index, 1);
        },

        marcarCompletada(index){
          this.taskList[index].completed = true;

        },

        low(index){
          this.taskList[index].v_prioridad = 0
        },
 
        normal(index){
          this.taskList[index].v_prioridad = 1
        },   

        high(index){
        this.taskList[index].v_prioridad = 2
        },

        crearStorage(){
          localStorage.setItem('todos', this.taskList)
        },

        accederStorage(){
          let todos = localStorage.getItem('todos')
          console.log(cat)
        },

        actualizaLocalStorage(){
          localStorage.todos = JSON.stringify(this.listaRecordatorios)
        }

    },
    computed:
        {
          NumTaskCompleted(){
            let v_completed = 0
            for(let i of this.taskList){
              if(i.completed == true){
                v_completed++
              }
            }
            return v_completed
          }
        },
        
    mounted(){
            if (localStorage.todos){
            this.listaRecordatorios = JSON.parse(localStorage.todos)
            }
          }

  }



  window.onload = () =>{
    Vue.createApp(TaskProyect).mount('#aplicacionVue')

  }






