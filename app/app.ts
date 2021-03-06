import 'es6-shim';
import {App, Platform, Events} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {TabsPage} from './pages/tabs/tabs';
import { PluginManager } from './components/components';
import { TabsProvider, ProfileProvider } from './providers/providers';


@App({
  directives: [PluginManager],
  providers: [TabsProvider, ProfileProvider],
  template:
  `
  <ion-nav [root]="rootPage"></ion-nav>
  <plugin-manager></plugin-manager>
  `,
  config: {
    tabbarPlacement: 'bottom'
  }
})
export class MyApp {

  events: Events;
  rootPage: any = TabsPage;

  constructor(platform: Platform, events: Events) {
    this.events = events;

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.show();
      StatusBar.styleDefault();
    });
  }
}
