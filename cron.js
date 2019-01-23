var CronTab = require('cron').CronJob;
var child_process = require('child_process');
var job = new CronTab("0 0 0-23 * * *",function(){
 var task = child_process.spawn(process.execPath,['main.js']);
 task.stdout.pipe(process.stdout);
 task.stderr.pipe(process.stderr);
})
job.start();