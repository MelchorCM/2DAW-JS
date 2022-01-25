const Counter = {
    data() {
      return {
        midato: 'Mxl',
        lista_nombres: [],
        new_name:"",
      }
    },
    
    methods:{
        incrementa(){
            this.lista_nombres.push(this.new_name);
            this.new_name = ""; 
            this.mostrar = true;
        }
    }
  }

  window.onload = () =>{
    Vue.createApp(Counter).mount('#aplicacionVue')
  }
