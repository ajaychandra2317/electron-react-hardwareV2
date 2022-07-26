/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Component } from 'react';
import Phaser from 'phaser';
import OutlinePipelinePlugin from 'phaser3-rex-plugins/plugins/outlinepipeline-plugin.js';
import Game from 'renderer/scene/Game';
import DropShadowPipelinePlugin from 'phaser3-rex-plugins/plugins/dropshadowpipeline-plugin.js';
import { Link } from 'react-router-dom';

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
  },
  width: window.innerWidth * window.devicePixelRatio,
  height: window.innerHeight * window.devicePixelRatio,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  plugins: {
    global: [
      {
        key: 'rexOutlinePipeline',
        plugin: OutlinePipelinePlugin,
        start: true,
      },
      {
        key: 'rexDropShadowPipeline',
        plugin: DropShadowPipelinePlugin,
        start: true,
      },
    ],
  },
  scene: [Game],
};

class UncoverGame extends Component {
  phaserGame: any;

  componentDidMount() {
    this.phaserGame = new Phaser.Game(config);
  }

  componentWillUnmount() {
    // When we navigate to different route the game is destroyed.
    // this.phaserGame.destroy(true);
    // When we navigate to different route the game is destroyed, but assets and all are not destroyed.
    this.phaserGame.destroy(true, false);
  }

  switchToApp = () => {
    console.log('switching to app');
    window.electron.ipcRenderer.sendMessage('swith_to_app', ['swith_to_app']);
  };

  render() {
    return (
      <div>
        <div id="phaser-container" />
        <Link
          to="/"
          style={{
            position: 'fixed',
            bottom: '10px',
            right: '17px',
            color: 'red',
            fontSize: '48px',
            fontWeight: '900',
            cursor: 'pointer',
            fontFamily: 'cursive',
            textDecoration: 'none',
          }}
        >
          x
        </Link>
      </div>
    );
  }
}

export default UncoverGame;
