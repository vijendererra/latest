import { KeycloakService } from 'keycloak-angular';
export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
  // return (): Promise<any> => {
  //   return new Promise(async (resolve, reject) => {
  //     try {
  //       await keycloak.init({
  //         config: {
  //           url: 'http://localhost:8080/auth',
  //           realm: 'vijju',
  //           clientId: 'vijju-ui-client',
  //         },
  //         loadUserProfileAtStartUp:false,
  //         initOptions:{
  //           onLoad:'login-required',
  //           checkLoginIframe:true
  //         },
  //         bearerExcludedUrls:[]
  //       });
  //       // console.log(resolve);
  //       resolve(resolve);
  //     } catch (err) {
  //       reject(err)
  //     }
  //   })
  // }

  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth',
        realm: 'vijju',
        clientId: 'vijju-ui-client',
      },
      initOptions: {
        onLoad:'login-required',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html',
      },
    });

}