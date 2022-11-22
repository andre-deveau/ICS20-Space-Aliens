/* global Phaser */

// Copyright (c) 2022 Andre Deveau All rights reserved
//
// Created by: Andre Deveau
// Created on: Nov 2022
// This is the Splash Scene

/**
 * This class is the Splash Scene
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor() {
    super({ key: "splashScene" });
    
    this.splashSceneBackgroundImage = null
  }

  /**
   * Can be defined on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create()
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  init(data)
  {
    this.cameras.main.setBackgroundColor("ffffff");
  }

  /**
   * Can be defined on your own Scenes
   * Use it to load assets
   */
  preload()
  {
    console.log("SplashScene");
    this.load.image("splashSceneBackground", "./assets/splashSceneImage.png")
  }

  /**
   * Can be defined on your own Scenes
   * Use it to creat your game objects
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    )
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.x = 1080 / 2
  }

/**
 * Should be overriden by your own Scenes
 * This method is called once per game step while the scene is running
 * @param {number} time - The current time
 * @param {number} delta - The delta time in ms since the last frame
 */
update(time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene