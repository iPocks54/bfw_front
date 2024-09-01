// src/components/UnityGame.jsx
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

const UnityGame = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/Client/UnityBuild/Client.loader.js",
    dataUrl: "/Client/UnityBuild/Client.data",
    frameworkUrl: "/Client/UnityBuild/Client.framework.js",
    codeUrl: "/Client/UnityBuild/Client.wasm",
  });

  return (
    <div id="unityContainer">
      <Unity unityProvider={unityProvider} style={{ width: '100%', height: '100%' }} />
    </div>
  );
};

export default UnityGame;
