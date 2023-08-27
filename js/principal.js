var app = new Vue({
    el: '#app',
    data: {
        // titulo : 'hola mundo'
        nombre: '',
        promedio: '',
        lista: [ ]
    },
    methods: {
        agregarNota: function(){
            if (this.nombre!="" && this.promedio!="") {
                this.lista.push({nombre: this.nombre, promedio: this.promedio})
                this.nombre= '';
                this.promedio = '';

            } else {
                alert('Nombre y promedio son obligatorios');
            }
        }
    }
})
