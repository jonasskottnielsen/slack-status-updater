import Cron from './Cron.js';

const Slack = {
    async init(){
        Cron.init();
    }
}

Slack.init();