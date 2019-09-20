declare module "@capacitor/core" {
  interface PluginRegistry {
    Concatenate: ConcatenatePlugin;
  }
}

export interface ConcatenatePlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
