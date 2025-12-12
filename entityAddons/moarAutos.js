const { combineStats, makeAuto, makeRadialAuto, makeTurret, weaponArray, weaponMirror } = require("../facilitators.js")
const { smshskl } = require('../constants.js')
const g = require('../gunvals.js')

// Addon Settings
const enable_mega_autos = true // Enables Mega/Ultra-Autos
const enable_multi_autos = true // Enables Triple/Penta-Autos
const enable_auto_autos = true // Enables Auto-Autos
const enable_upgrade_autos = true // Enables *-Autos based on default class tree upgrades

// makeAuto Presets
const auto3AutoOptions = { type: "tgs_auto3AutoTurret", size: 11 }
const autoAutoOptions = { type: "tgs_autoAutoTurret" }
const autoAutoAutoOptions = { type: "tgs_autoAutoAutoTurret" }
const autoFlankAutoOptions = { type: "tgs_autoFlankAutoTurret", size: 11 }
const autoMegaAutoOptions = { type: "tgs_autoMegaAutoTurret", size: 12 }
const autoTrapperAutoOptions = { type: "tgs_autoTrapperAutoTurret", size: 11 }
const autoTripleAutoOptions = { type: "tgs_autoAutoTurret", size: 6.5, x: 5.2, angle: 0, total: 3 }
const autoTwinAutoOptions = { type: "tgs_autoTwinAutoTurret", size: 11 }
const doubleAutoOptions = { type: "tgs_doubleAutoTurret", size: 11 }
const flankAutoOptions = { type: "tgs_flankAutoTurret", size: 11 }
const gunnerAutoOptions = { type: "tgs_gunnerAutoTurret", size: 11 }
const hexaAutoOptions = { type: "tgs_hexaAutoTurret", size: 11 }
const megaAutoOptions = { type: "megaAutoTurret", size: 12 }
const megaFlankAutoOptions = { type: "tgs_megaFlankAutoTurret", size: 13 }
const megaTrapperAutoOptions = { type: "tgs_megaTrapperAutoTurret", size: 13 }
const megaTwinAutoOptions = { type: "tgs_megaTwinAutoTurret", size: 13 }
const pentaAutoOptions = { size: 5.2, x: 6.5, angle: 0, total: 5 }
const tripleAutoOptions = { size: 6.5, x: 5.2, angle: 0, total: 3 }
const tripleMegaAutoOptions = { type: "megaAutoTurret", size: 7.5, x: 5.7, angle: 0, total: 3 }
const bentAutoOptions = { type: "tgs_bentAutoTurret", size: 11 }
const tripleFlankAutoOptions = { type: "tgs_flankAutoTurret", size: 6.5, x: 5.2, angle: 0, total: 3 }
const tripleTrapperAutoOptions = { type: "tgs_trapperAutoTurret", size: 6.5, x: 5.2, angle: 0, total: 3 }
const tripleTwinAutoOptions = { type: "autoSmasherTurret", size: 6.5, x: 5.2, angle: 0, total: 3 }
const trapperAutoOptions = { type: "tgs_trapperAutoTurret", size: 11 }
const triTrapperAutoOptions = { type: "tgs_triTrapperAutoTurret", size: 11 }
const twinAutoOptions = { type: "autoSmasherTurret", size: 11 }
const ultraAutoOptions = { type: "ultraAutoTurret", size: 14 }

// makeTurret Presets
const autoTurretOptions = { label: "Turret", fov: 0.8, extraStats: [] }

// Auto-Turrets
Class.tgs_atgAutoTurret = makeTurret({
    GUNS: [
        {
            POSITION: [22, 10, 1, 0, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret]),
                TYPE: "bullet",
            },
        },
    ],
}, {label: "Turret", canRepel: true, limitFov: true, fov: 3, extraStats: []})
Class.tgs_auto3AutoTurret = makeTurret(makeRadialAuto("tgs_atgAutoTurret", {isTurret: true, danger: 6}), autoTurretOptions)
Class.tgs_bentAutoTurret = makeTurret({
    GUNS: [
    	...weaponMirror({
			POSITION: {
				LENGTH: 20,
				WIDTH: 6,
				ANGLE: 25,
				DELAY: 0.5
			},
        	PROPERTIES: {
            	SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, { speed: 1.2 }, g.machineGun, g.pounder, { reload: 0.75 }, { reload: 0.75 }]),
            	TYPE: "bullet",
            	STAT_CALCULATOR: "fixedReload"
        	}
        }, 0),
		{
			POSITION: {
				LENGTH: 22,
				WIDTH: 6
			},
        	PROPERTIES: {
            	SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, { speed: 1.2 }, g.machineGun, g.pounder, { reload: 0.75 }, { reload: 0.75 }]),
            	TYPE: "bullet",
            	STAT_CALCULATOR: "fixedReload"
        	}
		}
    ]
}, autoTurretOptions)
Class.tgs_doubleAutoTurret = makeTurret({
    GUNS: weaponArray(weaponMirror({
        POSITION: [20, 6, 1, 0, 5, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, { speed: 1.2 }, g.machineGun, g.pounder, { reload: 0.75 }, { reload: 0.75 }]),
            TYPE: "bullet",
            STAT_CALCULATOR: "fixedReload",
        },
    }), 2)
}, autoTurretOptions)
Class.tgs_flankAutoTurret = makeTurret({
    GUNS: weaponArray({
        POSITION: [19, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.pelleter, g.power, { recoil: 1.15 }, g.turret]),
            TYPE: "bullet"
        }
    }, 3)
}, autoTurretOptions)
Class.tgs_gunnerAutoTurret = makeTurret({
	GUNS: weaponMirror([
		{
			POSITION: {
				LENGTH: 15,
				WIDTH: 2.5,
				Y: 7.5,
				DELAY: 0.5
			},
        	PROPERTIES: {
        	    SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, { speed: 1.2 }, g.machineGun, g.pounder, { reload: 0.75 }, { reload: 0.75 }]),
        	    TYPE: "bullet",
        	    STAT_CALCULATOR: "fixedReload",
        	}
		},
		{
			POSITION: {
				LENGTH: 18,
				WIDTH: 2.5,
				Y: 2.85
			},
        	PROPERTIES: {
        	    SHOOT_SETTINGS: combineStats([g.basic, g.pelleter, g.power, { recoil: 1.15 }, g.turret, { speed: 1.2 }, g.machineGun, g.pounder, { reload: 0.75 }, { reload: 0.75 }]),
        	    TYPE: "bullet",
        	    STAT_CALCULATOR: "fixedReload",
        	}
		}
	], 0.25)
}, autoTurretOptions)
Class.tgs_hexaAutoTurret = makeTurret({
    GUNS: weaponArray({
        POSITION: [19, 7, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.flankGuard, g.flankGuard, g.pelleter, g.power, { recoil: 1.15 }, g.turret]),
            TYPE: "bullet"
        }
    }, 6, 0.5)
}, autoTurretOptions)
Class.tgs_megaFlankAutoTurret = makeTurret({
    GUNS: weaponArray({
        POSITION: [19, 10, 1, 0, 0, 0, 0],
        PROPERTIES: {
            SHOOT_SETTINGS: combineStats([g.basic, g.pounder, g.flankGuard, g.pelleter, g.power, { recoil: 1.15 }, g.turret]),
            TYPE: "bullet"
        }
    }, 3)
}, autoTurretOptions)
Class.tgs_megaTrapperAutoTurret = makeTurret({
    GUNS: [
        {
            POSITION: [16, 18, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 18, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowPower, { shudder: 0.4, speed: 0.9, reload: 2 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}, autoTurretOptions)
Class.tgs_megaTwinAutoTurret = makeTurret({
	GUNS: weaponMirror({
		POSITION: {
			LENGTH: 20,
			WIDTH: 9,
			Y: 5.5
		},
		PROPERTIES: {
			SHOOT_SETTINGS: combineStats([g.basic, g.twin, g.pounder, g.pelleter, g.power, { recoil: 1.15 }, g.turret]),
			TYPE: "bullet"
		}
	})
}, autoTurretOptions)
Class.tgs_trapperAutoTurret = makeTurret({
    GUNS: [
        {
            POSITION: [16, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowPower, { shudder: 0.4, speed: 0.9, reload: 2 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ],
}, autoTurretOptions)
Class.tgs_triTrapperAutoTurret = makeTurret({
    GUNS: weaponArray([
        {
            POSITION: [16, 14, 1, 0, 0, 0, 0],
        },
        {
            POSITION: [4, 14, 1.8, 16, 0, 0, 0],
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.trap, g.lowPower, { shudder: 0.4, speed: 0.9, reload: 2 }]),
                TYPE: "trap",
                STAT_CALCULATOR: "trap",
            },
        },
    ], 3)
}, autoTurretOptions)

// Auto-Auto-Turrets
Class.tgs_autoAutoTurret = makeAuto("autoTurret", "Turret")
Class.tgs_autoAutoAutoTurret = makeAuto("autoTurret", "Turret", { type: "tgs_autoAutoTurret" })
Class.tgs_autoMegaAutoTurret = makeAuto("megaAutoTurret", "Turret")
Class.tgs_autoFlankAutoTurret = makeAuto("tgs_flankAutoTurret", "Turret")
Class.tgs_autoTrapperAutoTurret = makeAuto("tgs_trapperAutoTurret", "Turret")
Class.tgs_autoTwinAutoTurret = makeAuto("autoSmasherTurret", "Turret")

// Tier 1
Class.tgs_autoBasic = makeAuto("basic")

// Tier 2
Class.tgs_autoAutoBasic = makeAuto("basic", "Auto-Auto-Basic", autoAutoOptions)
Class.tgs_autoDesmos = makeAuto("desmos")
Class.tgs_autoDirector = makeAuto("director")
Class.tgs_autoFlankGuard = makeAuto("flankGuard")
Class.tgs_autoMachineGun = makeAuto("machineGun")
Class.tgs_autoPounder = makeAuto("pounder")
Class.tgs_autoSniper = makeAuto("sniper")
Class.tgs_autoTwin = makeAuto("twin")
Class.tgs_flankAutoBasic = makeAuto("basic", "Flank Auto-Basic", flankAutoOptions)
Class.tgs_megaAutoBasic = makeAuto("basic", "Mega Auto-Basic", megaAutoOptions)
Class.tgs_tripleAutoBasic = makeAuto("basic", "Triple Auto-Basic", tripleAutoOptions)
Class.tgs_trapperAutoBasic = makeAuto("basic", "Trapper Auto-Basic", trapperAutoOptions)
Class.tgs_twinAutoBasic = makeAuto("basic", "Twin Auto-Basic", twinAutoOptions)

// Tier 3
Class.tgs_auto3AutoBasic = makeAuto("basic", "Auto-3 Auto-Basic", auto3AutoOptions)

Class.autoSmasher = makeAuto({
	PARENT: "genericSmasher",
	LABEL: "Smasher",
	DANGER: 6,
	TURRETS: [
		{
			POSITION: [21.5, 0, 0, 0, 360, 0],
			TYPE: "smasherBody"
		}
	],
	SKILL_CAP: {
		RELOAD: smshskl,
		PENETRATION: smshskl,
		BULLET_HEALTH: smshskl,
		BULLET_DAMAGE: smshskl,
		BULLET_SPEED: smshskl,
		SHIELD_CAPACITY: smshskl,
		BODY_DAMAGE: smshskl,
		MAX_HEALTH: smshskl,
		SHIELD_REGENERATION: smshskl,
		MOVEMENT_SPEED: smshskl
	}
})
Class.tgs_autoArtillery = makeAuto("artillery")
Class.tgs_autoAuto3 = makeAuto("auto3")

Class.tgs_autoAutoAutoBasic = makeAuto("basic", "Auto-Auto-Auto-Basic", autoAutoAutoOptions)
Class.tgs_autoAutoDesmos = makeAuto("desmos", "Auto-Auto-Desmos", autoAutoOptions)
Class.tgs_autoAutoDirector = makeAuto("director", "Auto-Auto-Director", autoAutoOptions)
Class.tgs_autoAutoFlankGuard = makeAuto("flankGuard", "Auto-Auto-Flank Guard", autoAutoOptions)
Class.tgs_autoAutoMachineGun = makeAuto("machineGun", "Auto-Auto-Machine Gun", autoAutoOptions)
Class.tgs_autoAutoPounder = makeAuto("pounder", "Auto-Auto-Pounder", autoAutoOptions)
Class.tgs_autoAutoSniper = makeAuto("sniper", "Auto-Auto-Sniper", autoAutoOptions)
Class.tgs_autoAutoTrapper = makeAuto("trapper", "Auto-Auto-Trapper", autoAutoOptions)
Class.tgs_autoAutoTwin = makeAuto("twin", "Auto-Auto-Twin", autoAutoOptions)

Class.tgs_autoDestroyer = makeAuto("destroyer")
Class.tgs_autoFlankAutoBasic = makeAuto("basic", "Auto-Flank Auto-Basic", autoFlankAutoOptions)
Class.tgs_autoHelix = makeAuto("helix")
Class.tgs_autoHexaTank = makeAuto("hexaTank")
Class.tgs_autoHunter = makeAuto("hunter")
Class.tgs_autoLauncher = makeAuto("launcher")
Class.tgs_autoMarksman = makeAuto("marksman")
Class.tgs_autoMegaAutoBasic = makeAuto("basic", "Auto-Mega Auto-Basic", autoMegaAutoOptions)
Class.tgs_autoMinigun = makeAuto("minigun")
Class.tgs_autoRifle = makeAuto("rifle")
Class.tgs_autoSprayer = makeAuto("sprayer")
Class.tgs_autoTrapGuard = makeAuto("trapGuard")
Class.tgs_autoTrapperAutoBasic = makeAuto("basic", "Auto-Trapper Auto-Basic", autoTrapperAutoOptions)
Class.tgs_autoTripleAutoBasic = makeAuto("basic", "Auto-Triple Auto-Basic", autoTripleAutoOptions)
Class.tgs_autoTripleShot = makeAuto("tripleShot")
Class.tgs_autoTwinAutoBasic = makeAuto("basic", "Auto-Twin Auto-Basic", autoTwinAutoOptions)
Class.tgs_autoUnderseer = makeAuto("underseer")

Class.tgs_bentAutoBasic = makeAuto("basic", "Bent Auto-Basic", bentAutoOptions)
Class.tgs_doubleAutoBasic = makeAuto("basic", "Double Auto-Basic", doubleAutoOptions)

Class.tgs_flankAutoDesmos = makeAuto("desmos", "Flank Auto-Desmos", flankAutoOptions)
Class.tgs_flankAutoDirector = makeAuto("director", "Flank Auto-Director", flankAutoOptions)
Class.tgs_flankAutoFlankGuard = makeAuto("flankGuard", "Flank Auto-Flank Guard", flankAutoOptions)
Class.tgs_flankAutoMachineGun = makeAuto("machineGun", "Flank Auto-Machine Gun", flankAutoOptions)
Class.tgs_flankAutoPounder = makeAuto("pounder", "Flank Auto-Pounder", flankAutoOptions)
Class.tgs_flankAutoSniper = makeAuto("sniper", "Flank Auto-Sniper", flankAutoOptions)
Class.tgs_flankAutoTrapper = makeAuto("trapper", "Flank Auto-Trapper", flankAutoOptions)
Class.tgs_flankAutoTwin = makeAuto("twin", "Flank Auto-Twin", flankAutoOptions)

Class.tgs_gunnerAutoBasic = makeAuto("basic", "Gunner Auto-Basic", gunnerAutoOptions)
Class.tgs_hexaAutoBasic = makeAuto("basic", "Hexa Auto-Basic", hexaAutoOptions)

Class.tgs_megaAutoDesmos = makeAuto("desmos", "Mega Auto-Desmos", megaAutoOptions)
Class.tgs_megaAutoDirector = makeAuto("director", "Mega Auto-Director", megaAutoOptions)
Class.tgs_megaAutoFlankGuard = makeAuto("flankGuard", "Mega Auto-Flank Guard", megaAutoOptions)
Class.tgs_megaAutoMachineGun = makeAuto("machineGun", "Mega Auto-Machine Gun", megaAutoOptions)
Class.tgs_megaAutoPounder = makeAuto("pounder", "Mega Auto-Pounder", megaAutoOptions)
Class.tgs_megaAutoSniper = makeAuto("sniper", "Mega Auto-Sniper", megaAutoOptions)
Class.tgs_megaAutoTrapper = makeAuto("trapper", "Mega Auto-Trapper", megaAutoOptions)
Class.tgs_megaAutoTwin = makeAuto("twin", "Mega Auto-Twin", megaAutoOptions)

Class.tgs_megaFlankAutoBasic = makeAuto("basic", "Mega Flank Auto-Basic", megaFlankAutoOptions)
Class.tgs_megaTrapperAutoBasic = makeAuto("basic", "Mega Trapper Auto-Basic", megaTrapperAutoOptions)
Class.tgs_megaTwinAutoBasic = makeAuto("basic", "Mega Twin Auto-Basic", megaTwinAutoOptions)

Class.tgs_pentaAutoBasic = makeAuto("basic", "Penta Auto-Basic", pentaAutoOptions)

Class.tgs_trapperAutoDesmos = makeAuto("desmos", "Trapper Auto-Desmos", trapperAutoOptions)
Class.tgs_trapperAutoDirector = makeAuto("director", "Trapper Auto-Director", trapperAutoOptions)
Class.tgs_trapperAutoFlankGuard = makeAuto("flankGuard", "Trapper Auto-Flank Guard", trapperAutoOptions)
Class.tgs_trapperAutoMachineGun = makeAuto("machineGun", "Trapper Auto-Machine Gun", trapperAutoOptions)
Class.tgs_trapperAutoPounder = makeAuto("pounder", "Trapper Auto-Pounder", trapperAutoOptions)
Class.tgs_trapperAutoSniper = makeAuto("sniper", "Trapper Auto-Sniper", trapperAutoOptions)
Class.tgs_trapperAutoTrapper = makeAuto("trapper", "Trapper Auto-Trapper", trapperAutoOptions)
Class.tgs_trapperAutoTwin = makeAuto("twin", "Trapper Auto-Twin", trapperAutoOptions)

Class.tgs_triTrapperAutoBasic = makeAuto("basic", "Tri-Trapper Auto-Basic", triTrapperAutoOptions)

Class.tgs_tripleAutoDesmos = makeAuto("desmos", "Triple Auto-Desmos", tripleAutoOptions)
Class.tgs_tripleAutoDirector = makeAuto("director", "Triple Auto-Director", tripleAutoOptions)
Class.tgs_tripleAutoFlankGuard = makeAuto("flankGuard", "Triple Auto-Flank Guard", tripleAutoOptions)
Class.tgs_tripleAutoMachineGun = makeAuto("machineGun", "Triple Auto-Machine Gun", tripleAutoOptions)
Class.tgs_tripleAutoPounder = makeAuto("pounder", "Triple Auto-Pounder", tripleAutoOptions)
Class.tgs_tripleAutoSniper = makeAuto("sniper", "Triple Auto-Sniper", tripleAutoOptions)
Class.tgs_tripleAutoTrapper = makeAuto("trapper", "Triple Auto-Trapper", tripleAutoOptions)
Class.tgs_tripleAutoTwin = makeAuto("twin", "Triple Auto-Twin", tripleAutoOptions)

Class.tgs_tripleFlankAutoBasic = makeAuto("basic", "Triple Flank Auto-Basic", tripleFlankAutoOptions)

Class.tgs_tripleMegaAutoBasic = makeAuto("basic", "Triple Mega Auto-Basic", tripleMegaAutoOptions)

Class.tgs_tripleTrapperAutoBasic = makeAuto("basic", "Triple Trapper Auto-Basic", tripleTrapperAutoOptions)
Class.tgs_tripleTwinAutoBasic = makeAuto("basic", "Triple Twin Auto-Basic", tripleTwinAutoOptions)

Class.tgs_twinAutoDesmos = makeAuto("desmos", "Twin Auto-Desmos", twinAutoOptions)
Class.tgs_twinAutoDirector = makeAuto("director", "Twin Auto-Director", twinAutoOptions)
Class.tgs_twinAutoFlankGuard = makeAuto("flankGuard", "Twin Auto-Flank Guard", twinAutoOptions)
Class.tgs_twinAutoMachineGun = makeAuto("machineGun", "Twin Auto-Machine Gun", twinAutoOptions)
Class.tgs_twinAutoPounder = makeAuto("pounder", "Twin Auto-Pounder", twinAutoOptions)
Class.tgs_twinAutoSniper = makeAuto("sniper", "Twin Auto-Sniper", twinAutoOptions)
Class.tgs_twinAutoTrapper = makeAuto("trapper", "Twin Auto-Trapper", twinAutoOptions)
Class.tgs_twinAutoTwin = makeAuto("twin", "Twin Auto-Twin", twinAutoOptions)

Class.tgs_ultraAutoBasic = makeAuto("basic", "Ultra Auto-Basic", ultraAutoOptions)

// Class Tree
Class.basic.UPGRADES_TIER_1.push("tgs_autoBasic")
	Class.twin.UPGRADES_TIER_2.push("tgs_autoTwin")
		Class.tripleShot.UPGRADES_TIER_3.push("tgs_autoTripleShot")
	Class.sniper.UPGRADES_TIER_2.push("tgs_autoSniper")
		Class.hunter.UPGRADES_TIER_3.push("tgs_autoHunter")
		Class.rifle.UPGRADES_TIER_3.push("tgs_autoRifle")
		Class.marksman.UPGRADES_TIER_3.push("tgs_autoMarksman")
	Class.machineGun.UPGRADES_TIER_2.push("tgs_autoMachineGun")
		Class.minigun.UPGRADES_TIER_3.push("tgs_autoMinigun")
		Class.sprayer.UPGRADES_TIER_3.push("tgs_autoSprayer")
	Class.flankGuard.UPGRADES_TIER_2.push("tgs_autoFlankGuard")
		Class.hexaTank.UPGRADES_TIER_3.push("tgs_autoHexaTank")
		Class.auto3.UPGRADES_TIER_3.push("tgs_autoAuto3")
	Class.director.UPGRADES_TIER_2.push("tgs_autoDirector")
		Class.underseer.UPGRADES_TIER_3.push("tgs_autoUnderseer")
	Class.pounder.UPGRADES_TIER_2.push("tgs_autoPounder")
		Class.destroyer.UPGRADES_TIER_3.push("tgs_autoDestroyer")
		Class.artillery.UPGRADES_TIER_3.push("tgs_autoArtillery")
		Class.launcher.UPGRADES_TIER_3.push("tgs_autoLauncher")
	Class.trapper.UPGRADES_TIER_2.push("autoTrapper")
		Class.trapGuard.UPGRADES_TIER_3.push("tgs_autoTrapGuard")
	Class.desmos.UPGRADES_TIER_2.push("tgs_autoDesmos")
		Class.helix.UPGRADES_TIER_3.push("tgs_autoHelix")
	Class.tgs_autoBasic.UPGRADES_TIER_2 = ["tgs_autoTwin", "tgs_autoSniper", "tgs_autoMachineGun", "tgs_autoFlankGuard", "tgs_autoDirector", "tgs_autoPounder", "autoTrapper", "tgs_autoDesmos"]
		Class.tgs_autoBasic.UPGRADES_TIER_3 = ["autoSmasher"]
		Class.tgs_megaAutoBasic.UPGRADES_TIER_3 = ["Twin", "Sniper", "MachineGun", "FlankGuard", "Director", "Pounder", "Trapper", "Desmos"].map(x => "tgs_megaAuto" + x)
		Class.tgs_tripleAutoBasic.UPGRADES_TIER_3 = ["Twin", "Sniper", "MachineGun", "FlankGuard", "Director", "Pounder", "Trapper", "Desmos"].map(x => "tgs_tripleAuto" + x)
		Class.tgs_autoAutoBasic.UPGRADES_TIER_3 = ["Twin", "Sniper", "MachineGun", "FlankGuard", "Director", "Pounder", "Trapper", "Desmos"].map(x => "tgs_autoAuto" + x)
		Class.tgs_twinAutoBasic.UPGRADES_TIER_3 = ["Twin", "Sniper", "MachineGun", "FlankGuard", "Director", "Pounder", "Trapper", "Desmos"].map(x => "tgs_twinAuto" + x)
		Class.tgs_flankAutoBasic.UPGRADES_TIER_3 = ["Twin", "Sniper", "MachineGun", "FlankGuard", "Director", "Pounder", "Trapper", "Desmos"].map(x => "tgs_flankAuto" + x)
		Class.tgs_trapperAutoBasic.UPGRADES_TIER_3 = ["Twin", "Sniper", "MachineGun", "FlankGuard", "Director", "Pounder", "Trapper", "Desmos"].map(x => "tgs_trapperAuto" + x)
		Class.tgs_autoTwin.UPGRADES_TIER_3 = ["autoDouble", "tgs_autoTripleShot", "autoGunner", "tgs_autoHexaTank", "tgs_autoHelix"]
		Class.tgs_autoSniper.UPGRADES_TIER_3 = ["autoAssassin", "tgs_autoHunter", "tgs_autoMinigun", "tgs_autoRifle", "tgs_autoMarksman"]
		Class.tgs_autoMachineGun.UPGRADES_TIER_3 = ["tgs_autoArtillery", "tgs_autoMinigun", "autoGunner", "tgs_autoSprayer"]
		Class.tgs_autoFlankGuard.UPGRADES_TIER_3 = ["tgs_autoHexaTank", "autoTriAngle", "tgs_autoAuto3", "tgs_autoTrapGuard", "hexaTrapper"]
		Class.tgs_autoDirector.UPGRADES_TIER_3 = ["autoOverseer", "autoCruiser", "tgs_autoUnderseer", "autoSpawner"]
		Class.tgs_autoPounder.UPGRADES_TIER_3 = ["tgs_autoDestroyer", "autoBuilder", "tgs_autoArtillery", "tgs_autoLauncher"]
		Class.autoTrapper.UPGRADES_TIER_3 = ["autoBuilder", "hexaTrapper", "tgs_autoTrapGuard"]
		Class.tgs_autoDesmos.UPGRADES_TIER_3 = ["Helix"].map(x => "tgs_auto" + x)

if (enable_upgrade_autos) {
	Class.tgs_autoBasic.UPGRADES_TIER_2.splice(0, 0, "tgs_twinAutoBasic", "tgs_flankAutoBasic", "tgs_trapperAutoBasic")
		Class.tgs_megaAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_megaTwinAutoBasic", "tgs_megaFlankAutoBasic", "tgs_megaTrapperAutoBasic")
		Class.tgs_tripleAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleTwinAutoBasic", "tgs_tripleFlankAutoBasic", "tgs_tripleTrapperAutoBasic")
		Class.tgs_autoAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_autoTwinAutoBasic", "tgs_autoFlankAutoBasic", "tgs_autoTrapperAutoBasic")
		Class.tgs_twinAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_doubleAutoBasic", "tgs_bentAutoBasic", "tgs_gunnerAutoBasic", "tgs_hexaAutoBasic")
		Class.tgs_flankAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_hexaAutoBasic", "tgs_auto3AutoBasic", "tgs_triTrapperAutoBasic")
		Class.tgs_trapperAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_triTrapperAutoBasic")
		Class.tgs_autoTwin.UPGRADES_TIER_3.splice(0, 0, "tgs_twinAutoTwin", "tgs_flankAutoTwin", "tgs_trapperAutoTwin")
		Class.tgs_autoSniper.UPGRADES_TIER_3.splice(0, 0, "tgs_twinAutoSniper", "tgs_flankAutoSniper", "tgs_trapperAutoSniper")
		Class.tgs_autoMachineGun.UPGRADES_TIER_3.splice(0, 0, "tgs_twinAutoMachineGun", "tgs_flankAutoMachineGun", "tgs_trapperAutoMachineGun")
		Class.tgs_autoFlankGuard.UPGRADES_TIER_3.splice(0, 0, "tgs_twinAutoFlankGuard", "tgs_flankAutoFlankGuard", "tgs_trapperAutoFlankGuard")
		Class.tgs_autoDirector.UPGRADES_TIER_3.splice(0, 0, "tgs_twinAutoDirector", "tgs_flankAutoDirector", "tgs_trapperAutoDirector")
		Class.tgs_autoPounder.UPGRADES_TIER_3.splice(0, 0, "tgs_twinAutoPounder", "tgs_flankAutoPounder", "tgs_trapperAutoPounder")
		Class.autoTrapper.UPGRADES_TIER_3.splice(0, 0, "tgs_twinAutoTrapper", "tgs_flankAutoTrapper", "tgs_trapperAutoTrapper")
		Class.tgs_autoDesmos.UPGRADES_TIER_3.splice(0, 0, "tgs_twinAutoDesmos", "tgs_flankAutoDesmos", "tgs_trapperAutoDesmos")
}
if (enable_auto_autos) {
	Class.tgs_autoBasic.UPGRADES_TIER_2.splice(0, 0, "tgs_autoAutoBasic")
		Class.tgs_megaAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_autoMegaAutoBasic")
		Class.tgs_tripleAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_autoTripleAutoBasic")
		Class.tgs_autoAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_autoAutoAutoBasic")
		Class.tgs_twinAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_autoTwinAutoBasic")
		Class.tgs_flankAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_autoFlankAutoBasic")
		Class.tgs_trapperAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_autoTrapperAutoBasic")
		Class.tgs_autoTwin.UPGRADES_TIER_3.splice(0, 0, "tgs_autoAutoTwin")
		Class.tgs_autoSniper.UPGRADES_TIER_3.splice(0, 0, "tgs_autoAutoSniper")
		Class.tgs_autoMachineGun.UPGRADES_TIER_3.splice(0, 0, "tgs_autoAutoMachineGun")
		Class.tgs_autoFlankGuard.UPGRADES_TIER_3.splice(0, 0, "tgs_autoAutoFlankGuard")
		Class.tgs_autoDirector.UPGRADES_TIER_3.splice(0, 0, "tgs_autoAutoDirector")
		Class.tgs_autoPounder.UPGRADES_TIER_3.splice(0, 0, "tgs_autoAutoPounder")
		Class.autoTrapper.UPGRADES_TIER_3.splice(0, 0, "tgs_autoAutoTrapper")
		Class.tgs_autoDesmos.UPGRADES_TIER_3.splice(0, 0, "tgs_autoAutoDesmos")
}
if (enable_multi_autos) {
	Class.tgs_autoBasic.UPGRADES_TIER_2.splice(0, 0, "tgs_tripleAutoBasic")
		Class.tgs_megaAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleMegaAutoBasic")
		Class.tgs_tripleAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_pentaAutoBasic")
		Class.tgs_autoAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_autoTripleAutoBasic")
		Class.tgs_twinAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleTwinAutoBasic")
		Class.tgs_flankAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleFlankAutoBasic")
		Class.tgs_trapperAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleTrapperAutoBasic")
		Class.tgs_autoTwin.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleAutoTwin")
		Class.tgs_autoSniper.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleAutoSniper")
		Class.tgs_autoMachineGun.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleAutoMachineGun")
		Class.tgs_autoFlankGuard.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleAutoFlankGuard")
		Class.tgs_autoDirector.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleAutoDirector")
		Class.tgs_autoPounder.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleAutoPounder")
		Class.autoTrapper.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleAutoTrapper")
		Class.tgs_autoDesmos.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleAutoDesmos")
}
if (enable_mega_autos) {
	Class.tgs_autoBasic.UPGRADES_TIER_2.splice(0, 0, "tgs_megaAutoBasic")
		Class.tgs_megaAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_ultraAutoBasic")
		Class.tgs_tripleAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_tripleMegaAutoBasic")
		Class.tgs_autoAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_autoMegaAutoBasic")
		Class.tgs_twinAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_megaTwinAutoBasic")
		Class.tgs_flankAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_megaFlankAutoBasic")
		Class.tgs_trapperAutoBasic.UPGRADES_TIER_3.splice(0, 0, "tgs_megaTrapperAutoBasic")
		Class.tgs_autoTwin.UPGRADES_TIER_3.splice(0, 0, "tgs_megaAutoTwin")
		Class.tgs_autoSniper.UPGRADES_TIER_3.splice(0, 0, "tgs_megaAutoSniper")
		Class.tgs_autoMachineGun.UPGRADES_TIER_3.splice(0, 0, "tgs_megaAutoMachineGun")
		Class.tgs_autoFlankGuard.UPGRADES_TIER_3.splice(0, 0, "tgs_megaAutoFlankGuard")
		Class.tgs_autoDirector.UPGRADES_TIER_3.splice(0, 0, "tgs_megaAutoDirector")
		Class.tgs_autoPounder.UPGRADES_TIER_3.splice(0, 0, "tgs_megaAutoPounder")
		Class.autoTrapper.UPGRADES_TIER_3.splice(0, 0, "tgs_megaAutoTrapper")
		Class.tgs_autoDesmos.UPGRADES_TIER_3.splice(0, 0, "tgs_megaAutoDesmos")
}
