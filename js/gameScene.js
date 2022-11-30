/* global Phaser */

// Copyright (c) 2022 Andre Deveau All rights reserved
//
// Created by: Andre Deveau
// Created on: Nov 2022
// This is the Game Scene

/**
 * This class is the Splash Scene
 */
 class GameScene extends Phaser.Scene {
    /**
     * This method is the constructor
     */
    constructor() {
      super({ key: "gameScene" })

      this.background = null
      this.ship = null
    }
  
    /**
     * Can be defined on your own Scenes.
     * This method is called by the Scene Manager when the scene starts,
     *   before preload() and create()
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
     */
    init(data) {
      this.cameras.main.setBackgroundColor("ffffff")
    }
  
    /**
     * Can be defined on your own Scenes
     * Use it to load assets
     */
    preload() {
      console.log("Game Scene")
      
      this.load.image("starBackground", "./assets/starBackground.png")
      this.load.image("ship", "./assets/spaceShip.png")
    }
  
    /**
     * Can be defined on your own Scenes
     * Use it to creat your game objects
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
     */
    create(data) {
      this.background = this.add.image(0, 0, "starBackground").setScale(2.0)
      this.background.set0rigin(0, 0)

      this.ship = this.physics.add.sprite(1920 / 2, 1080 - 100, "ship")
    }
  
    /**
     * Should be overriden by your own Scenes
     * This method is called once per game step while the scene is running
     * @param {number} time - The current time
     * @param {number} delta - The delta time in ms since the last frame
     */
    update(time, delta) {
      // pass
    }
  }
  
  export default GameScene
  