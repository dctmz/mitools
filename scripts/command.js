const { exec } = require('child_process');
const chalk = require('chalk');

module.exports = function command(cmd, options, callback) {
  console.log('\n');
  console.log(chalk.cyan(cmd.toString()));
  console.log('\n');

  var workerProcess = exec(cmd, { ...options }, callback);

  workerProcess.stdout.on('data', function (data) {
    console.log(data);
  });

  workerProcess.stderr.on('data', function (data) {
    console.log(data);
  });

  return workerProcess;
};
