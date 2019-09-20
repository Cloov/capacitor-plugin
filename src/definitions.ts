declare module "@capacitor/core" {
  interface PluginRegistry {
    Concatenate: ConcatenatePlugin;
  }
}

export interface ConcatenatePlugin {
  concat(args: { left: string, right: string }): Promise<{ concatenatedString: string }>;
}
