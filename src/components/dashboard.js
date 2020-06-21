import dashboard_header from './dashboard_header'
import dashboard_calendar from './dashboard_calendar'
import dashboard_latestep_serienstream from './dashboard_latestep_serienstream'
import dashboard_interests from './dashboard_interests'
import dashboard_latestep_gogoanimes from './dashboard_latestep_gogoanimes'

const Dashboard = () => {
    const template = `
    <div class="dashboard">
    ${dashboard_header()}
    ${dashboard_calendar()}
    ${dashboard_latestep_serienstream()}
    ${dashboard_interests()}
    ${dashboard_latestep_gogoanimes()}
    </div>
    `
    return template;
}

export default Dashboard;