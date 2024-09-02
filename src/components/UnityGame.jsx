// src/components/UnityGame.jsx
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const UnityGame = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Client/WebBuild/Client.loader.js",
    dataUrl: "/Client/WebBuild/Client.data",
    frameworkUrl: "/Client/WebBuild/Client.framework.js",
    codeUrl: "/Client/WebBuild/Client.wasm",
  });

  return (
    <div id="unityContainer">
      <Unity unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default UnityGame;
