// 启动台
const shell = require('shelljs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const { log, warn, error } = require('./log.js');

const constants = {
  prefix: '======>',
  suffix: '<======',
};

// 开发命令选择 TODO: koa  express command 需要补充
const _developChoices = [
  {
    name: 'nodeServer',
    command: 'npm run dev',
  },
  {
    name: 'koaServer',
    command: 'npm run dev',
  },
  {
    name: 'expressServer',
    command: 'npm run dev',
  },
  new inquirer.Separator(),
  {
    name: 'exit',
    command: 'exit',
  },
];

// 不同项目对应目录
const cwds = {
  nodeServer: './node/',
  koaServer: './koa/',
  expressServer: './express/',
};

const workPrompt = {
  type: 'list',
  message: 'develop project select',
  name: 'work',
  choices: _developChoices,
  ...constants,
};

log(`
.########..#######..########...#######.
....##....##.....##.##.....##.##.....##
....##....##.....##.##.....##.##.....##
....##....##.....##.##.....##.##.....##
....##....##.....##.##.....##.##.....##
....##....##.....##.##.....##.##.....##
....##.....#######..########...#######.
`);

inquirer.prompt(workPrompt).then((answer) => {
  const work = _developChoices.find((item) => item.name === answer.work);

  if (work && work.command) {
    if (work.command === 'exit') {
      warn('exit server');
      shell.exit(0);
    }
    warn(`shell.exec: ${work.command}`);
    // 切换到目录下进行启动
    shell.cd(cwds[work.name]);
    shell.exec(work.command);
  } else {
    error(chalk.yellow('command not found'));
    shell.exit(1);
  }
  return work;
});
