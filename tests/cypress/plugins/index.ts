import { apiCreateUserTask, apiListUsersTask, freshUserTask } from './freshUser';

function getEnvironmentConfig(config: Cypress.PluginConfigOptions) {
  // Test env setup
  const testEnv = config.env.TEST_ENV || 'local';
  const { environmentConfig } = require(`../../config/${testEnv}`);

  environmentConfig.env.isLocal = environmentConfig.env.testEnv.toLowerCase() == 'local';
  environmentConfig.env.isDev = environmentConfig.env.testEnv.toLowerCase() == 'dev';

  return environmentConfig;
}

function plugin(on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) {
  on('task', {
    ...freshUserTask(),
    ...apiCreateUserTask(),
    ...apiListUsersTask()
  });

  const testEnvConfig = getEnvironmentConfig(config);
  console.log('config.env', config.env);
  console.log('getEnvironmentConfig.env', testEnvConfig);

  const installLogsPrinterOptions = {
    printLogsToConsole: 'always',
    includeSuccessfulHookLogs: true,
    logToFilesOnAfterRun: true,
    defaultTrimLength: 1600,
    commandTrimLength: 1600
  };
  require('cypress-terminal-report/src/installLogsPrinter')(on, installLogsPrinterOptions);

  return {
    ...config,
    ...testEnvConfig
  };
}

module.exports = plugin;
