import App from './App'
import '../node_modules/materialize-css/dist/js/materialize.min.js'
import '../node_modules/materialize-css/sass/materialize.scss'



const app = () => {
    const app_Container = document.createElement('div');
    app_Container.id = 'app';
    document.body.appendChild(app_Container);
    app_Container.appendChild(App())
    
}
// Load app
app()
