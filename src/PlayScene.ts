import Phaser from "phaser";
import { Colors } from "./Colors";

class PlayScene extends Phaser.Scene {
  private txtCorrectNumber: Phaser.GameObjects.Text;
  private txtNumber1: Phaser.GameObjects.Text;
  private txtNumber2: Phaser.GameObjects.Text;
  private txtNumber3: Phaser.GameObjects.Text;
  private txtNumber4: Phaser.GameObjects.Text;
  private txtNumber5: Phaser.GameObjects.Text;
  private txtNumber6: Phaser.GameObjects.Text;

  constructor() {
    super('PlayScene');
  }

  get gameWidth(): number {
    return this.game.config.width as number;
  }

  get gameHeight(): number {
    return this.game.config.height as number;
  }

  preload(): void {
  }

  create(): void {
    this.createNumbers();
    this.createResultBox();
  }

  update(time: number, delta: number): void {
  }

  createNumbers(): void {
    this.txtCorrectNumber = this.createNumberBox(this.gameWidth / 2, 100, 3);
    this.txtNumber1 = this.createNumberBox(this.gameWidth / 2 - 400, 200, 1);
    this.txtNumber2 = this.createNumberBox(this.gameWidth / 2 - 300, 200, 1);
    this.txtNumber3 = this.createNumberBox(this.gameWidth / 2 - 200, 200, 1);
    this.txtNumber4 = this.createNumberBox(this.gameWidth / 2 - 100, 200, 1);
    this.txtNumber5 = this.createNumberBox(this.gameWidth / 2 + 100, 200, 2);
    this.txtNumber6 = this.createNumberBox(this.gameWidth / 2 + 300, 200, 3);
  }

  createResultBox(): void {
    this.add.rectangle(50, 300, this.gameWidth - 100, 300, Colors.d)
      .setStrokeStyle(1, Colors.a)
      .setOrigin(0, 0);
  }

  createNumberBox(x: number, y: number, len: number): Phaser.GameObjects.Text {
    const textStyle: Phaser.Types.GameObjects.Text.TextStyle = {
      fontSize: 28,
      color: Colors.toString(Colors.a),
    }

    this.add.rectangle(x, y, 50 * len, 50, Colors.d)
      .setStrokeStyle(1, Colors.a)
      .setOrigin(0.5);

    return this.add.text(x, y, Array.from({ length: len }, (_, idx) => `${idx + 1}`).join(' '), textStyle)
      .setOrigin(0.5);
  }
}

export default PlayScene;
