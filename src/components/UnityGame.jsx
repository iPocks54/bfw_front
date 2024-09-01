// src/components/UnityGame.jsx
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const UnityGame = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Client/Build/Client.loader.js",
    dataUrl: "/Client/Build/Client.data",
    frameworkUrl: "/Client/Build/Client.framework.js",
    codeUrl: "/Client/Build/Client.wasm",
  });

  return (
    <div id="unityContainer">
      <Unity unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default UnityGame;
