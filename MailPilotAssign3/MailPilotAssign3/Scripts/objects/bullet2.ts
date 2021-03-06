﻿/// <reference path="../managers/asset.ts" />
module objects {
    // Bullet Class
    export class Bullet2 {
        image: createjs.Sprite;
        stage: createjs.Stage;
        game: createjs.Container;
        bulletSound2: createjs.SoundInstance;
        width: number;
        height: number;
        constructor(stage: createjs.Stage, game: createjs.Container) {
            this.stage = stage;
            this.game = game;
            this.image = new createjs.Sprite(managers.assets.atlas, "bullet2");
            this.image.x = stage.canvas.width;
            this.width = this.image.getBounds().width;
            this.height = this.image.getBounds().height;
            game.addChild(this.image);
        }

        update() {
            if (this.image.x > 0 && stage.canvas.width + this.width > this.image.x) {
                this.image.x += constants.BULLET_SPEED;
            } else {
                //this.destroy();
            }
        }

        reset(x: number, y: number) {
            this.bulletSound2 = createjs.Sound.play('space_shot');
            this.image.x = x;
            this.image.y = y;
        }

        destroy() {
            this.bulletSound2.stop();
            this.image.x = -600;
        }
    }
}  