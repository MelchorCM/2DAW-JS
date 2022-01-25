const Counter = {
    data() {
        return {
            dato: "titulo comun"
        }
    }
}
var app;
window.onload = () => {
    app = Vue.createApp(Counter);
    app.component('button-counter', {
        data() {
            return {
                counter: 0
            }
        },

        props:["titulo", "color"],

        template: `
        <h1>{{titulo}} - {{color}}</h1>
        <button @click="counter++">
            You clicked me {{counter}} times.
        </button-<`
    })
    app.mount('#counter')
}