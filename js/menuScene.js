/* global Phaser */

// Copyright (c) 2022 Andre Deveau All rights reserved
//
// Created by: Andre Deveau
// Created on: Nov 2022
// This is the Splash Scene

/**
 * This class is the Splash Scene
 */
 class MenuScene extends Phaser.Scene {
    /**
     * This method is the constructor
     */
    constructor() {
      super({ key: "menuScene" })
  
      this.splashSceneBackgroundImage = null
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
     * Can be define on your own Scenes.
     * Use it to load assets.
     */
    preload() {
        console.log("Menu Scene")
    }

    /**
     * Can be defined on your Scenes.
     * Use it to create your game objects.
     * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
     */
    create(data) {
        // pass
    }

    /**
     * Should be overriden by your own Scenes.
     * This method is called once per game step while the is running.
     * @param {number} time - The current time.
     * @param {number} delta - The delta time in ms since the last frame.
     */
    update(time, delta) {
        //pass
    }
 }
 
 export default MenuScene