/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/quarta`; params?: Router.UnknownInputParams; } | { pathname: `/quinta`; params?: Router.UnknownInputParams; } | { pathname: `/segunda`; params?: Router.UnknownInputParams; } | { pathname: `/sexta`; params?: Router.UnknownInputParams; } | { pathname: `/terceira`; params?: Router.UnknownInputParams; } | { pathname: `/terceira2`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/quarta`; params?: Router.UnknownOutputParams; } | { pathname: `/quinta`; params?: Router.UnknownOutputParams; } | { pathname: `/segunda`; params?: Router.UnknownOutputParams; } | { pathname: `/sexta`; params?: Router.UnknownOutputParams; } | { pathname: `/terceira`; params?: Router.UnknownOutputParams; } | { pathname: `/terceira2`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/${`?${string}` | `#${string}` | ''}` | `/quarta${`?${string}` | `#${string}` | ''}` | `/quinta${`?${string}` | `#${string}` | ''}` | `/segunda${`?${string}` | `#${string}` | ''}` | `/sexta${`?${string}` | `#${string}` | ''}` | `/terceira${`?${string}` | `#${string}` | ''}` | `/terceira2${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/quarta`; params?: Router.UnknownInputParams; } | { pathname: `/quinta`; params?: Router.UnknownInputParams; } | { pathname: `/segunda`; params?: Router.UnknownInputParams; } | { pathname: `/sexta`; params?: Router.UnknownInputParams; } | { pathname: `/terceira`; params?: Router.UnknownInputParams; } | { pathname: `/terceira2`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; };
    }
  }
}
