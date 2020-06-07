import App from './App'




const app = () => {
    const app_Container = document.createElement('div');
    app_Container.id = 'app';
    document.body.appendChild(app_Container);
    app_Container.appendChild(App())
}
// Load app
app()
