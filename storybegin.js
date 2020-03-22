class StoryOne extends Phaser.Scene {
constructor() {
    super("firstStory");
  }

preload(){
	this.load.image("ss1", "assets/firststory.png");
}
create(){
	this.ss1spr = this.add.sprite(config.width/2, config.height/2, "ss1");
	this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}
update(){
	if (Phaser.Input.Keyboard.JustDown(this.spacebar)){
    this.scene.start("bootGame");
	}
}
}
