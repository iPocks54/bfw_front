// src/components/UnityGame.jsx
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const UnityGame = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Client2/WebBuild/Client.loader.js",
    dataUrl: "/Client2/WebBuild/Client.data",
    frameworkUrl: "/Client2/WebBuild/Client.framework.js",
    codeUrl: "/Client2/WebBuild/Client.wasm",
  });

  return (
    <div id="unityContainer">
      <Unity unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default UnityGame;
