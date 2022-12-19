/* global Phaser*/

// Copyright (c) 2022 Andre Deveau All rights reserved
//
//Created by: Andre Deveau
//Created on: Dec 2022
//This is the Menu Scene

/**
 * This class is the menu scene
 */
class SplashScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor() {
    super({ key: "splashScene" });

    this.splashSceneBackgroundImage = null
  }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Splash Scene")
    this.load.image("splashSceneBackground", "./assets/splashSceneImage.png")
  }

  create(data) {
    this.splashSceneBackgroundImage = this.add.sprite(
      0,
      0,
      "splashSceneBackground"
    );
    this.splashSceneBackgroundImage.x = 1920 / 2
    this.splashSceneBackgroundImage.y = 1080 / 2
  }

  update(time, delta) {
    if (time > 3000) {
      this.scene.switch("titleScene")
    }
  }
}

export default SplashScene
