import SlotApi from './slot-api/slot';
import SlotComponent from './slot-api/slot-component';

export default {
    install(Vue) {
        Vue.component('SlotApi', SlotApi);
        Vue.component('SlotComponent', SlotComponent);
    }
};
