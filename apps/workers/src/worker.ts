import { run, Task, TaskList } from "graphile-worker";
import { Pool } from "pg";
import to from "await-to-js";

const hello: Task = (payload: any, helpers) => {
  helpers.logger.info("heloo", payload);
};

const worker = async () => {
  const rootPgPool = new Pool();

  const taskList: TaskList = {
    hello,
  };

  // Run a worker to execute jobs:
  const [error] = await to(
    run({
      pgPool: rootPgPool,
      concurrency: 5,
      // Install signal handlers for graceful shutdown on SIGINT, SIGTERM, etc
      noHandleSignals: false,
      pollInterval: 1000,
      taskList,
      // crontabFile: environment.CRONTAB_FILE,
    })
  );

  if (error) {
    throw new Error(`Failed to initialize graphile-workers ${error}`);
  }
};

worker().catch((err) => {
  console.error("Failed to start workers", err);
});
