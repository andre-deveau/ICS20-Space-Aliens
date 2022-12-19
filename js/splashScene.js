/* global Phaser*/

// Copyright (c) 2022 Andre Deveau All rights reserved
//
//Created by: Andre Deveau
//Created on: Dec 2022
//This is the Menu Scene

/**
 * This class is the menu scene
 */
class MenuScene extends Phaser.Scene {
  /**
   * This method is the constructor
   */
  constructor() {
    super({ key: "menuScene" })
    
    this.menuSceneBackgroundImage = null
    this.startButton = null
    }

  init(data) {
    this.cameras.main.setBackgroundColor("#ffffff")
  }

  preload() {
    console.log("Menu Scene")
    this.load.image("menuSceneBackground", "./assets/aliens_screen_image2.jpg")
    this.load.image("startButton", "./assets/start.png")
  }

  create(data) {
    this.menuSceneBackgroundImage = this.add.sprite(0, 0, "menuSceneBackground")
    this.menuSceneBackgroundImage.x = 1920 / 2
    this.menuSceneBackgroundImage.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton")
    this.startButton.setInteractive({ useHandCursor: true })
    this.startButton.on("pointerdown", () => this.clickButton())
  }

  update(time, delta) {
  }

  clickButton() {
    this.scene.start("gameScene")
  }
}
export default MenuScene
