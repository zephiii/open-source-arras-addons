const { makeAuto } = require("../facilitators.js")

// Tier 1
Class.tgsAuto_autoBasic = makeAuto("basic")

// Tier 2
Class.tgsAuto_autoDesmos = makeAuto("desmos")
Class.tgsAuto_autoDirector = makeAuto("director")
Class.tgsAuto_autoFlankGuard = makeAuto("flankGuard")
Class.tgsAuto_autoMachineGun = makeAuto("machineGun")
Class.tgsAuto_autoPounder = makeAuto("pounder")
Class.tgsAuto_autoSniper = makeAuto("sniper")
Class.tgsAuto_autoTwin = makeAuto("twin")
Class.tgsAuto_megaAutoBasic = makeAuto("basic", "Mega Auto-Basic", { type: "megaAutoTurret", size: 12 })
Class.tgsAuto_tripleAutoBasic = makeAuto("basic", "Triple Auto-Basic", { size: 6.5, x: 5.2, angle: 0, total: 3 })

// Tier 3
Class.tgsAuto_autoArtillery = makeAuto("artillery")
Class.tgsAuto_autoAuto3 = makeAuto("auto3")
Class.tgsAuto_autoDestroyer = makeAuto("destroyer")
Class.tgsAuto_autoHelix = makeAuto("helix")
Class.tgsAuto_autoHexaTank = makeAuto("hexaTank")
Class.tgsAuto_autoHunter = makeAuto("hunter")
Class.tgsAuto_autoLauncher = makeAuto("launcher")
Class.tgsAuto_autoMarksman = makeAuto("marksman")
Class.tgsAuto_autoMinigun = makeAuto("minigun")
Class.tgsAuto_autoRifle = makeAuto("rifle")
Class.tgsAuto_autoSprayer = makeAuto("sprayer")
Class.tgsAuto_autoTrapGuard = makeAuto("trapGuard")
Class.tgsAuto_autoTripleShot = makeAuto("tripleShot")
Class.tgsAuto_autoUnderseer = makeAuto("underseer")
Class.tgsAuto_megaAutoDesmos = makeAuto("desmos", "Mega Auto-Desmos", { type: "megaAutoTurret", size: 12 })
Class.tgsAuto_megaAutoDirector = makeAuto("director", "Mega Auto-Director", { type: "megaAutoTurret", size: 12 })
Class.tgsAuto_megaAutoFlankGuard = makeAuto("flankGuard", "Mega Auto-Flank Guard", { type: "megaAutoTurret", size: 12 })
Class.tgsAuto_megaAutoMachineGun = makeAuto("machineGun", "Mega Auto-Machine Gun", { type: "megaAutoTurret", size: 12 })
Class.tgsAuto_megaAutoPounder = makeAuto("pounder", "Mega Auto-Pounder", { type: "megaAutoTurret", size: 12 })
Class.tgsAuto_megaAutoSniper = makeAuto("sniper", "Mega Auto-Sniper", { type: "megaAutoTurret", size: 12 })
Class.tgsAuto_megaAutoTrapper = makeAuto("trapper", "Mega Auto-Trapper", { type: "megaAutoTurret", size: 12 })
Class.tgsAuto_megaAutoTwin = makeAuto("twin", "Mega Auto-Twin", { type: "megaAutoTurret", size: 12 })
Class.tgsAuto_pentaAutoBasic = makeAuto("basic", "Penta Auto-Basic", { size: 5.2, x: 6.2, angle: 0, total: 5 })
Class.tgsAuto_tripleAutoDesmos = makeAuto("desmos", "Triple Auto-Desmos", { size: 6.5, x: 5.2, angle: 0, total: 3 })
Class.tgsAuto_tripleAutoDirector = makeAuto("director", "Triple Auto-Director", { size: 6.5, x: 5.2, angle: 0, total: 3 })
Class.tgsAuto_tripleAutoFlankGuard = makeAuto("flankGuard", "Triple Auto-Flank Guard", { size: 6.5, x: 5.2, angle: 0, total: 3 })
Class.tgsAuto_tripleAutoMachineGun = makeAuto("machineGun", "Triple Auto-Machine Gun", { size: 6.5, x: 5.2, angle: 0, total: 3 })
Class.tgsAuto_tripleAutoPounder = makeAuto("pounder", "Triple Auto-Pounder", { size: 6.5, x: 5.2, angle: 0, total: 3 })
Class.tgsAuto_tripleAutoSniper = makeAuto("sniper", "Triple Auto-Sniper", { size: 6.5, x: 5.2, angle: 0, total: 3 })
Class.tgsAuto_tripleAutoTrapper = makeAuto("trapper", "Triple Auto-Trapper", { size: 6.5, x: 5.2, angle: 0, total: 3 })
Class.tgsAuto_tripleAutoTwin = makeAuto("twin", "Triple Auto-Twin", { size: 6.5, x: 5.2, angle: 0, total: 3 })
Class.tgsAuto_tripleMegaAutoBasic = makeAuto("basic", "Triple Mega Auto-Basic", { type: "megaAutoTurret", size: 7.5, x: 5.7, angle: 0, total: 3 })
Class.tgsAuto_ultraAutoBasic = makeAuto("basic", "Ultra Auto-Basic", { type: "ultraAutoTurret", size: 14 })

// Class Tree
Class.basic.UPGRADES_TIER_1.push("tgsAuto_autoBasic")
	Class.twin.UPGRADES_TIER_2.push("tgsAuto_autoTwin")
		Class.tripleShot.UPGRADES_TIER_3.push("tgsAuto_autoTripleShot")
	Class.sniper.UPGRADES_TIER_2.push("tgsAuto_autoSniper")
		Class.hunter.UPGRADES_TIER_3.push("tgsAuto_autoHunter")
		Class.rifle.UPGRADES_TIER_3.push("tgsAuto_autoRifle")
		Class.marksman.UPGRADES_TIER_3.push("tgsAuto_autoMarksman")
	Class.machineGun.UPGRADES_TIER_2.push("tgsAuto_autoMachineGun")
		Class.minigun.UPGRADES_TIER_3.push("tgsAuto_autoMinigun")
		Class.sprayer.UPGRADES_TIER_3.push("tgsAuto_autoSprayer")
	Class.flankGuard.UPGRADES_TIER_2.push("tgsAuto_autoFlankGuard")
		Class.hexaTank.UPGRADES_TIER_3.push("tgsAuto_autoHexaTank")
		Class.auto3.UPGRADES_TIER_3.push("tgsAuto_autoAuto3")
	Class.director.UPGRADES_TIER_2.push("tgsAuto_autoDirector")
		Class.underseer.UPGRADES_TIER_3.push("tgsAuto_autoUnderseer")
	Class.pounder.UPGRADES_TIER_2.push("tgsAuto_autoPounder")
		Class.destroyer.UPGRADES_TIER_3.push("tgsAuto_autoDestroyer")
		Class.artillery.UPGRADES_TIER_3.push("tgsAuto_autoArtillery")
		Class.launcher.UPGRADES_TIER_3.push("tgsAuto_autoLauncher")
	Class.trapper.UPGRADES_TIER_2.push("autoTrapper")
		Class.trapGuard.UPGRADES_TIER_3.push("tgsAuto_autoTrapGuard")
	Class.desmos.UPGRADES_TIER_2.push("tgsAuto_autoDesmos")
		Class.helix.UPGRADES_TIER_3.push("tgsAuto_autoHelix")
	Class.tgsAuto_autoBasic.UPGRADES_TIER_2 = ["tgsAuto_megaAutoBasic", "tgsAuto_tripleAutoBasic", "tgsAuto_autoTwin", "tgsAuto_autoSniper", "tgsAuto_autoMachineGun", "tgsAuto_autoFlankGuard", "tgsAuto_autoDirector", "tgsAuto_autoPounder", "autoTrapper", "tgsAuto_autoDesmos"]
		Class.tgsAuto_autoBasic.UPGRADES_TIER_3 = ["autoSmasher"]
		Class.tgsAuto_megaAutoBasic.UPGRADES_TIER_3 = ["ultraAutoBasic", "tripleMegaAutoBasic", "megaAutoTwin", "megaAutoSniper", "megaAutoMachineGun", "megaAutoFlankGuard", "megaAutoDirector", "megaAutoPounder", "megaAutoTrapper", "megaAutoDesmos"].map(x => "tgsAuto_" + x)
		Class.tgsAuto_tripleAutoBasic.UPGRADES_TIER_3 = ["tripleMegaAutoBasic", "pentaAutoBasic", "tripleAutoTwin", "tripleAutoSniper", "tripleAutoMachineGun", "tripleAutoFlankGuard", "tripleAutoDirector", "tripleAutoPounder", "tripleAutoTrapper", "tripleAutoDesmos"].map(x => "tgsAuto_" + x)
		Class.tgsAuto_autoTwin.UPGRADES_TIER_3 = ["tgsAuto_megaAutoTwin", "tgsAuto_tripleAutoTwin", "autoDouble", "tgsAuto_autoTripleShot", "autoGunner", "tgsAuto_autoHexaTank", "tgsAuto_autoHelix"]
		Class.tgsAuto_autoSniper.UPGRADES_TIER_3 = ["tgsAuto_megaAutoSniper", "tgsAuto_tripleAutoSniper", "autoAssassin", "tgsAuto_autoHunter", "tgsAuto_autoMinigun", "tgsAuto_autoRifle", "tgsAuto_autoMarksman"]
		Class.tgsAuto_autoMachineGun.UPGRADES_TIER_3 = ["tgsAuto_megaAutoMachineGun", "tgsAuto_tripleAutoMachineGun", "tgsAuto_autoArtillery", "tgsAuto_autoMinigun", "autoGunner", "tgsAuto_autoSprayer"]
		Class.tgsAuto_autoFlankGuard.UPGRADES_TIER_3 = ["tgsAuto_megaAutoFlankGuard", "tgsAuto_tripleAutoFlankGuard", "tgsAuto_autoHexaTank", "autoTriAngle", "tgsAuto_autoAuto3", "tgsAuto_autoTrapGuard", "hexaTrapper"]
		Class.tgsAuto_autoDirector.UPGRADES_TIER_3 = ["tgsAuto_megaAutoDirector", "tgsAuto_tripleAutoDirector", "autoOverseer", "autoCruiser", "tgsAuto_autoUnderseer", "autoSpawner"]
		Class.tgsAuto_autoPounder.UPGRADES_TIER_3 = ["tgsAuto_megaAutoPounder", "tgsAuto_tripleAutoPounder", "tgsAuto_autoDestroyer", "autoBuilder", "tgsAuto_autoArtillery", "tgsAuto_autoLauncher"]
		Class.autoTrapper.UPGRADES_TIER_3 = ["tgsAuto_megaAutoTrapper", "tgsAuto_tripleAutoTrapper", "autoBuilder", "hexaTrapper", "tgsAuto_autoTrapGuard"]
		Class.tgsAuto_autoDesmos.UPGRADES_TIER_3 = ["tgsAuto_megaAutoDesmos", "tgsAuto_tripleAutoDesmos", "tgsAuto_autoHelix"]
