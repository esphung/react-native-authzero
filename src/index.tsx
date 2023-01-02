import { NativeModules, Platform } from 'react-native';

import {default as useAuth0} from './hooks/use-auth0';
import {default as Auth0Provider} from './hooks/auth0-provider';
import {TimeoutError} from './utils/fetchWithTimeout';

const LINKING_ERROR =
  `The package 'react-native-authzero' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

const Authzero = NativeModules.Authzero
  ? NativeModules.Authzero
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

function multiply(a: number, b: number): Promise<number> {
  return Authzero.multiply(a, b);
}

export default {
  ...Authzero,
  useAuth0,
  Auth0Provider,
  TimeoutError,
};

