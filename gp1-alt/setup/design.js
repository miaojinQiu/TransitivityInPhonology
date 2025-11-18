Experigen.initialize = function () {
	
	var items  = this.resource("items");
	var frames = this.resource("frames");
	var pictures = this.resource("pictures");

	var train0 = []
			.concat(items.subset("type","train0"))
			.pairWith("view", "0.train.ejs")
			.shuffle()
			;

	var train1 = []
			.concat(items.subset("type","train1"))
			.pairWith("view", "0.train.ejs")
			.shuffle()
			;
			
	var train2 = []
			.concat(items.subset("type","train2"))
			.pairWith("view", "0.train.ejs")
			.shuffle()
			;
			
	var train3 = []
			.concat(items.subset("type","train3"))
			.pairWith("view", "0.train.ejs")
			.shuffle()
			;
			
	var train4 = []
			.concat(items.subset("type","train4"))
			.pairWith("view", "0.train.ejs")
			.shuffle()
			;
			
	var train5 = []
			.concat(items.subset("type","train5"))
			.pairWith("view", "0.train.ejs")
			.shuffle()
			;
			
	var blick_well = []
			.concat(items.subset("type", "1_blick").subset("subtype", "well"))
			.pairWith("view", "1.blick_well.ejs")
			;

	var blick_ti = []
			.concat(items.subset("type", "1_blick").subset("subtype", "ti"))
			.pairWith("view", "1.blick_ti.ejs")
			;

	var blick_te = []
			.concat(items.subset("type", "1_blick").subset("subtype", "te"))
			.pairWith("view", "1.blick_te.ejs")
			;

	var blick_tite = []
			.concat(items.subset("type", "1_blick").subset("subtype", "tite"))
			.pairWith("view", "1.blick_tite.ejs")
			;

	var blick = []
			.concat(blick_well)
			.concat(blick_ti)
			.concat(blick_te)
			.concat(blick_tite)
			.shuffle()
			;
			
	// 실험자극이 c-plural -> t-plural
	var wug_i_c_t = []
			.concat(items.subset("type", "2_wug_c_t").subset("subtype", "i"))
			.pairWith("view", "2.wug_i_c_t.ejs")
			;

	var wug_e_c_t = []
			.concat(items.subset("type", "2_wug_c_t").subset("subtype", "e"))
			.pairWith("view", "2.wug_e_c_t.ejs")
			;

	var wug_nopal_c_t = []
			.concat(items.subset("type", "2_wug_c_t").subset("subtype", "x"))
			.pairWith("view", "2.wug_nopal_c_t.ejs")
			;

	// 실험자극이 t-plural -> c-plural
	var wug_i_t_c = []
			.concat(items.subset("type", "2_wug_t_c").subset("subtype", "i"))
			.pairWith("view", "2.wug_i_t_c.ejs")
			;

	var wug_e_t_c = []
			.concat(items.subset("type", "2_wug_t_c").subset("subtype", "e"))
			.pairWith("view", "2.wug_e_t_c.ejs")
			;

	var wug_nopal_t_c = []
			.concat(items.subset("type", "2_wug_t_c").subset("subtype", "x"))
			.pairWith("view", "2.wug_nopal_t_c.ejs")
			;

	var wug = []
			.concat(wug_i_c_t)
			.concat(wug_i_t_c)
			.concat(wug_e_c_t)
			.concat(wug_e_t_c)
			.concat(wug_nopal_c_t)
			.concat(wug_nopal_t_c)
			.shuffle()
			;

	this.addStaticScreen("-1.intro.ejs")
	this.addStaticScreen("-1.instruction.ejs")
	this.addStaticScreen("0.train__instruction.ejs")
	this.addBlock(train0.chooseRandom(2))
	this.addStaticScreen("0.train__relax.ejs")
	this.addBlock(train1.chooseRandom(2))
	// this.addStaticScreen("0.train__relax.ejs")
	// this.addBlock(train2)
	// this.addStaticScreen("0.train__relax.ejs")
	// this.addBlock(train3)
	// this.addStaticScreen("0.train__relax.ejs")
	// this.addBlock(train4)
	// this.addStaticScreen("0.train__relax.ejs")
	// this.addBlock(train5)
	this.addStaticScreen("1.blick__instruction.ejs")
	this.addBlock(blick)
	this.addStaticScreen("2.wug__instruction.ejs")
	this.addBlock(wug)
	this.addStaticScreen("demographic.ejs")
	this.addStaticScreen("finalthanks.ejs")
	
}