import { WebPlugin } from '@capacitor/core';
import { ConcatenatePlugin } from './definitions';

export class ConcatenateWeb extends WebPlugin implements ConcatenatePlugin {
  constructor() {
    super({
      name: 'Concatenate',
      platforms: ['web']
    });
  }

  async concat(args: { left: string, right: string }): Promise<string> {
    console.log("[Web] concat '" + args.left + "' and '" + args.right + "'");
    return args.left + args.right;
  }
}

const Concatenate = new ConcatenateWeb();

export { Concatenate };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Concatenate);
