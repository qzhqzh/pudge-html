import Vue from "vue";
import config from '@/config';

Vue.prototype.$appName = 'Pudge'
Vue.prototype.$baseUrl = config.baseUrl



Array.prototype.remove = function(v) {
    if (isNaN(v) || v > this.length) {
        return false
    }
    for (let i = 0, j = 0; i < this.length; i++) {
        if (this[i] != this[v]) {
            this[j++] = this[i]
        }
    }
    this.length -= 1
}

