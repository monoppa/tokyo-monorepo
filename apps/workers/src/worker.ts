import { run, TaskList } from "graphile-worker";
import { Pool } from "pg";
import to from "await-to-js";
import refreshCoinPrice from "./tasks/refreshCoinPrice";
import "dotenv/config";

const worker = async () => {
  const rootPgPool = new Pool();

  const taskList: TaskList = {
    refreshCoinPrice,
  };

  // Run a worker to execute jobs:
  const [error, runner] = await to(
    run({
      crontabFile: "crontab",
      pgPool: rootPgPool,
      concurrency: 5,
      // Install signal handlers for graceful shutdown on SIGINT, SIGTERM, etc
      noHandleSignals: false,
      pollInterval: 1000,
      taskList,
    })
  );

  if (error) {
    throw new Error(
      `Failed to initialize graphile-workers ${JSON.stringify(error)}`
    );
  }

  // If the worker exits (whether through fatal error or otherwise), this
  // promise will resolve/reject:
  await runner.promise;
};

worker().catch((err) => {
  console.error("Failed to start workers", err);
  process.exit(1);
});
