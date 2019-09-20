import { WebPlugin } from '@capacitor/core';
import { ConcatenatePlugin } from './definitions';

export class ConcatenateWeb extends WebPlugin implements ConcatenatePlugin {
  constructor() {
    super({
      name: 'Concatenate',
      platforms: ['web']
    });
  }

  async concat(args: { left: string, right: string }): Promise<{ concatenatedString: string }> {
    
    console.log("[Web] concat '" + args.left + "' and '" + args.right + "'");

    // [Shaun]
    // Here, I'm choosing to return an object with a single named string in the Promise,
    // rather than just a string, because the native equivalents to plugin methods
    // follow this format, and so this is probably the only way to ensure the handling
    // of the return value is totally agnostic at the call site. It's verbose, but not
    // as verbose as having conditionals to check for different possible return-value
    // structures expected by each of native and non-native.

    return { concatenatedString: args.left + args.right };
  }
}

const Concatenate = new ConcatenateWeb();

export { Concatenate };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Concatenate);
