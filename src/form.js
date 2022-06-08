import Vue from "vue";
import vueForm from "vue-form";

var options = {
    validators: {
        'no-espacios' : function(value) {
            return !value.includes(' ')
        }
    }
}


Vue.use(vueForm, options)

