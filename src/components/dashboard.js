import dashboard_header from './dashboard_header'
import dashboard_calendar from './dashboard_calendar'
import dashboard_latestep_serienstream from './dashboard_latestep_serienstream'

const Dashboard = () => {
    const template = `
    ${dashboard_header()}
    ${dashboard_calendar()}
    ${dashboard_latestep_serienstream()}
    `
    return template;
}

export default Dashboard;