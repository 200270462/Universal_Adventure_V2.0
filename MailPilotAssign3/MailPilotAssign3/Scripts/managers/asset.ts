module managers {
    var manifest = [
        { id: "ocean", src: "assets/images/ocean.png" },
        { id: "game_background", src: "assets/images/ocean.png" },
        { id: "engine", src: "assets/sounds/engine.ogg" },
        { id: "thunder", src: "assets/sounds/thunder.ogg" },
        { id: "yay", src: "assets/sounds/yay.ogg" },
        { id: "space_shot", src: "assets/sounds/space_shot.wav" },
        { id: "boss_engine", src: "assets/sounds/boss_engine.wav" },
        { id: "boss_explosion", src: "assets/sounds/boss_explosion.wav" },
        { id: "enemy_engine", src: "assets/sounds/enemy_engine.wav" },
        { id: "enemy_explosion", src: "assets/sounds/enemy_explosion.wav" },
        { id: "enemy_shot", src: "assets/sounds/enemy_shot.wav" },
        { id: "space_engine", src: "assets/sounds/space_engine.wav" },
        { id: "space_explosion", src: "assets/sounds/space_explosion.wav" },
        { id: "space_shot", src: "assets/sounds/space_shot.wav" },
        { id: "space_powerup", src: "assets/sounds/space_powerup.wav" },
        { id: "background", src: "assets/sounds/background.mp3" },

        //For Level2
        { id: "ocean2", src: "assets/images/ocean2.png" },
        { id: "game_background2", src: "assets/images/ocean2.png" },
        { id: "engine2", src: "assets/sounds/engine.ogg" },
        { id: "thunder2", src: "assets/sounds/thunder.ogg" },
        { id: "yay2", src: "assets/sounds/yay.ogg" },
        { id: "space_shot2", src: "assets/sounds/space_shot.wav" },
        { id: "boss_engine2", src: "assets/sounds/boss_engine.wav" },
        { id: "boss_explosion2", src: "assets/sounds/boss_explosion.wav" },
        { id: "enemy_engine2", src: "assets/sounds/enemy_engine.wav" },
        { id: "enemy_explosion2", src: "assets/sounds/enemy_explosion.wav" },
        { id: "enemy_shot2", src: "assets/sounds/enemy_shot.wav" },
        { id: "space_engine2", src: "assets/sounds/space_engine.wav" },
        { id: "space_explosion2", src: "assets/sounds/space_explosion.wav" },
        { id: "space_shot2", src: "assets/sounds/space_shot.wav" },
        { id: "space_powerup2", src: "assets/sounds/space_powerup.wav" },
        { id: "background2", src: "assets/sounds/background.mp3" },
        
        //For Level3
        { id: "ocean3", src: "assets/images/ocean3.png" },
        { id: "game_background3", src: "assets/images/ocean3.png" },
        { id: "engine3", src: "assets/sounds/engine.ogg" },
        { id: "thunder3", src: "assets/sounds/thunder.ogg" },
        { id: "yay3", src: "assets/sounds/yay.ogg" },
        { id: "space_shot3", src: "assets/sounds/space_shot.wav" },
        { id: "boss_engine3", src: "assets/sounds/boss_engine.wav" },
        { id: "boss_explosion3", src: "assets/sounds/boss_explosion.wav" },
        { id: "enemy_engine3", src: "assets/sounds/enemy_engine.wav" },
        { id: "enemy_explosion3", src: "assets/sounds/enemy_explosion.wav" },
        { id: "enemy_shot3", src: "assets/sounds/enemy_shot.wav" },
        { id: "space_engine3", src: "assets/sounds/space_engine.wav" },
        { id: "space_explosion3", src: "assets/sounds/space_explosion.wav" },
        { id: "space_shot3", src: "assets/sounds/space_shot.wav" },
        { id: "space_powerup3", src: "assets/sounds/space_powerup.wav" },
        { id: "background3", src: "assets/sounds/background.mp3" },
    ];
    
    // SpriteSheet Data Object
    var spriteSheetData = {
        "images": ["assets/images/blueprint.png"],
        "frames": [

            [290, 132, 80, 80],
            [372, 198, 25, 12],
            [481, 216, 32, 32],
            [416, 2, 128, 128],
            [372, 132, 64, 64],
            [2, 2, 136, 128],
            [140, 2, 136, 128],
            [278, 2, 136, 128],
            [389, 212, 44, 40],
            [435, 198, 44, 40],
            [438, 132, 44, 40],
            [481, 174, 44, 40],
            [484, 132, 44, 40],
            [527, 174, 44, 40],
            [530, 132, 44, 40],
            [573, 174, 44, 40],
            [576, 132, 44, 40],
            [619, 174, 44, 40],
            [2, 227, 127, 25],
            [622, 132, 24, 24],
            [515, 216, 32, 32],
            [549, 216, 32, 32],
            [546, 2, 128, 128],
            [2, 132, 140, 93],
            [144, 132, 144, 80],
            [131, 227, 127, 25],
            [260, 214, 127, 25]
        ],
        "animations": {

            "bullet": [0],
            "bullet2": [1],
            "bullet3": [2],
            "cloud2": [3],
            "cloud3": [4],
            "cloud": [5],
            "cloud_2": [6],
            "cloud_3": [7],
            "coin01": [8],
            "coin02": [9],
            "coin03": [10],
            "coin04": [11],
            "coin05": [12],
            "coin06": [13],
            "coin07": [14],
            "coin08": [15],
            "coin09": [16],
            "coin10": [17],
            "instructions": [18],
            "island": [19],
            "island2": [20],
            "island3": [21],
            "plane": [22],
            "plane2": [23],
            "plane3": [24],
            "start": [25],
            "tryagain": [26]
        },
    }

export class assets {

        public static loader;
        public static atlas: createjs.SpriteSheet;
        public static level2atlas: createjs.SpriteSheet;
        public static level3atlas: createjs.SpriteSheet;




        public static init() {
            createjs.Sound.initializeDefaultPlugins();
            this.loader = new createjs.LoadQueue();
            this.loader.installPlugin(createjs.Sound);
            this.loader.loadManifest(manifest);
            this.atlas = new createjs.SpriteSheet(spriteSheetData);
        }

   
    }
} 