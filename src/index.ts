import Phaser from 'phaser';
import PlayScene from './PlayScene';
import { Colors } from './Colors';

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 1000,
  height: 800,
  backgroundColor: Colors.c,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
    }
  },
  scene: [PlayScene],
};

new Phaser.Game(config);
