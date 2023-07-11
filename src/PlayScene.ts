import Phaser from "phaser";
import { Colors } from "./Colors";
import { numberToDigits, randomNumber } from "./utils";

class PlayScene extends Phaser.Scene {
  private txtCorrectNumber: Phaser.GameObjects.Text;
  private txtNumber1: Phaser.GameObjects.Text;
  private txtNumber2: Phaser.GameObjects.Text;
  private txtNumber3: Phaser.GameObjects.Text;
  private txtNumber4: Phaser.GameObjects.Text;
  private txtNumber5: Phaser.GameObjects.Text;
  private txtNumber6: Phaser.GameObjects.Text;

  private correctNumber: number;
  private number1: number;
  private number2: number;
  private number3: number;
  private number4: number;
  private number5: number;
  private number6: number;

  private randomInterval: number = 75;
  private currentInterval: number = 0;

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
    this.currentInterval += delta;
    if (this.currentInterval >= this.randomInterval) {
      this.currentInterval = 0;

      this.correctNumber = randomNumber(1, 999);
      this.txtCorrectNumber.setText(numberToDigits(this.correctNumber, 3).join(' '));

      this.number1 = randomNumber(1, 9);
      this.txtNumber1.setText(numberToDigits(this.number1, 1).join(' '));
      this.number2 = randomNumber(1, 9);
      this.txtNumber2.setText(numberToDigits(this.number2, 1).join(' '));
      this.number3 = randomNumber(1, 9);
      this.txtNumber3.setText(numberToDigits(this.number3, 1).join(' '));
      this.number4 = randomNumber(1, 9);
      this.txtNumber4.setText(numberToDigits(this.number4, 1).join(' '));
      this.number5 = randomNumber(2, 4) * 5;
      this.txtNumber5.setText(numberToDigits(this.number5, 2).join(' '));
      this.number6 = randomNumber(1, 4) * 25;
      this.txtNumber6.setText(numberToDigits(this.number6, 3).map((el, idx) => idx > 0 || el > 0 ? el : ' ').join(' '));
    }
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
