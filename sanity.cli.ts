import { defineCliConfig } from "sanity/cli";

export default defineCliConfig({
  api: {
    projectId: 'qwhul4zk',
    dataset: 'testing'
  },
  /**
   * Enable auto-updates for studios.
   * Learn more at https://www.sanity.io/docs/cli#auto-updates
   */
  autoUpdates: false,
});
