// @flow
import os from 'os';
import path from 'path';
import electron from 'electron'; // eslint-disable-line

export const getZcashFolder = () => {
  const { app } = electron;

  if (os.platform() === 'darwin') {
    return path.join(app.getPath('appData'), 'Arrow');
  }

  if (os.platform() === 'linux') {
    return path.join(app.getPath('home'), '.arrow');
  }

  return path.join(app.getPath('appData'), 'Arrow');
};
