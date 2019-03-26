import { Observable } from 'tns-core-modules/data/observable';
import { ExtensionPlugin } from 'nativescript-extensionPlugin';

export class HelloWorldModel extends Observable {
  public message: string;
  private extensionPlugin: ExtensionPlugin;

  constructor() {
    super();

    this.extensionPlugin = new ExtensionPlugin();
    this.message = this.extensionPlugin.message;
  }
}
