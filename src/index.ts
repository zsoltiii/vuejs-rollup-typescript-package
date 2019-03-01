// Import vue components
import * as components from './components/index';

// install function executed by Vue.use()

function install(Vue: any) {
    //@ts-ignore
    if (install.installed) return;
    //@ts-ignore
    install.installed = true;
    Object.keys(components).forEach((componentName) => {
        Vue.component(componentName, (components as any)[componentName]);
    });
}

// Create module definition for Vue.use()
const plugin = {
    install,
};

// To auto-install when vue is found
/* global window global */
let GlobalVue = null;
let global: any;
if (typeof window !== 'undefined') {
    GlobalVue = (window as any).Vue;
} else if (typeof global !== 'undefined') {
    GlobalVue = global.Vue;
}
if (GlobalVue) {
    GlobalVue.use(plugin);
}

// Default export is library as a whole, registered via Vue.use()
export default plugin;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from './components/index';
