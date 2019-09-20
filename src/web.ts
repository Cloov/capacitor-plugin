import { WebPlugin } from '@capacitor/core';
import { ConcatenatePlugin } from './definitions';

export class ConcatenateWeb extends WebPlugin implements ConcatenatePlugin {
  constructor() {
    super({
      name: 'Concatenate',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const Concatenate = new ConcatenateWeb();

export { Concatenate };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Concatenate);
