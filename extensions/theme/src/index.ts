import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import { IThemeManager } from '@jupyterlab/apputils';

/**
 * Initialization data for the apex-jupyterlite-theme extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'apex-jupyterlite-theme:plugin',
  description: 'APEx JupyterLite Theme',
  autoStart: true,
  requires: [IThemeManager],
  activate: (app: JupyterFrontEnd, manager: IThemeManager) => {
    console.log('JupyterLab extension apex-jupyterlite-theme is activated!');
    const style = 'apex-jupyterlite-theme/index.css';

    manager.register({
      name: 'apex-jupyterlite-theme',
      isLight: true,
      load: () => manager.loadCSS(style),
      unload: () => Promise.resolve(undefined)
    });
  }
};

export default plugin;
