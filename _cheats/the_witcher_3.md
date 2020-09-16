---
title: "The Witcher 3"
cover:
  url: "the_witcher_3.jpg"
  format: "jpeg"
---
The Witcher 3: Wild Hunt is great game, but it can be made even greater with the debug console. The debug console is a window in the game that commands are typed into. Commands can spawn items, change the look of your character, give you buffs, and activate hundreds of other ways to customize your character and the world around it.

# Enable Console on PC

There are two ways to activate the debug console:

* Changing Game Config (recommended) - by setting a value to "true" in a game file.
* Installing a Mod - if you don't want to modify your game files, you can download a mod that does it for you.

## Method 1: Changing Game Config

Firstly, make sure The Witcher 3 is closed, then navigate to the game's directory, to do this:

1. Open up Steam
2. Go to your library
3. Right click "The Witcher 3: Wild Hunt" and click "Properties"
4. Click the "Local Files" tab at the top of the properties window and then click "Browse Local Files" (pictured below)

Go to the `bin` folder, then the `config` folder and then the `base` folder (`The Witcher 3/bin/config/base`).

When in the `base` folder, open the `general.ini` file with Notepad - usually it will open with notepad by default by double clicking it. If it doesn't open with notepad, right click the file, press "Open With", and then select Notepad.

Make a new line and paste the following text:

```sh
DBGConsoleOn=true
```

Press `CTRL + S` to save the file. After saving the file you can close Notepad and launch Witcher 3, the console should be enabled. One of the following keys should open the console:

* `~`
* `@`
* `§`
* `\``
* `ö`
* `ò`
* `ñ`
* `æ`

If that hasn't worked, follow Method 2 (below) to enable the console.

## Method 2: Downloading a Mod

This method is easier to do, but will break whenever The Witcher 3 updates, which can get annoying. Click the download button below to download the file:

[DOWNLOAD MOD]({{ site.url }}/assets/cheats/the_witcher_3_console_mod.zip)

This download is from our servers as Nexus Mods only offers a RAR file, which requires WinRar to open (and that complicates things). If you want to download the mod directly, visit the official mod page at [https://www.nexusmods.com/witcher3/mods/1555](https://www.nexusmods.com/witcher3/mods/1555)

After downloading that file, make sure your game is closed and then navigate to the game's directory, to do this:

1. Open up Steam
2. Go to your library
3. Right click "The Witcher 3: Wild Hunt" and click "Properties"
4. Click the "Local Files" tab at the top of the properties window and then click "Browse Local Files" (pictured below)

After opening up the game's files:

1. Go to the `bin` folder, and then the `x64` folder (`The Witcher 3/bin/x64`)
2. Open the `zip` file and put both the "`plugins`" folder and the "`dssound.dll`" file into the `x64` folder

After doing this, the console will be enabled. Pressing the `F2` key should open the console.

If the console isn't enabled after doing the above, check the following:

* Install the latest version of `Microsoft Redistributable x64` at [https://www.microsoft.com/en-us/download/details.aspx?id=48145](https://www.microsoft.com/en-us/download/details.aspx?id=48145).
* Check the official mod page at [https://www.nexusmods.com/witcher3/mods/1555](https://www.nexusmods.com/witcher3/mods/1555).
* Consider following `Method 1` to enable the console.

# Useful Commands

* `addkeys`
* `addmoney(1234321)`
* `addexp(123456)`
* `setlevel(100)`
* `levelup`
* `god`
* `god2`
* `likeaboss`
* `settattoo`
* `ShowAllFT`
* `ShowPins`
* `AllowFT(1/0)`
* `settime(365, 10, 00, 00, 00)`
* `addgwintcards`* `secretgwint`
* `winGwint(true/false)`
* `additem('gwint_card_ciri', 100)`
* `removeitem('Aerondight EP2')`
* `activateAllGlossaryCharacters`
* `activateAllGlossaryBeastiary`

# Best Armor & Weapon

## SQUIRE'S STEEL SWORD - RELIC

`additem('Squire steel sword 3')`

## AMI - RELIC

`additem('EP2 Silver sword 3R')`

## AERONDIGHT - RELIC

`additem('Aerondight EP2')`

## EXPLODING BOLT - RELIC

`additem('Explosive Bolt Legendary', 200)`

## URSINE CROSSBOW - WITCH GEAR

`additem('Bear School Crossbow')`

## HEN GAIDTH ARMOR - RELIC

`additem('q704_vampire_armor')`

## HEN GAIDTH GAUNTLETS - RELIC

`additem('q704_vampire_gloves')`

## HEN GAIDTH TROUSERS - RELIC

`additem('q704_vampire_pants')`

## HEN GAIDTH BOOTS - RELIC

`additem('q704_vampire_boots')`

## GRIFFIN TROPHY - RELIC

## BEAUCLAIR SADDLEBAGS - COMMON

## CAPARISON OF LAMENT - RELIC

`additem('Devil Saddle')`

## CAED MYRKVID BLINDERS - COMMON

## Soltis Vodka

`additem('Soltis Vodka')`

## HORN OF PLENTY - RELIC

`additem('Cornucopia')`

# Mutagen

## GREATER BLUE MUTAGEN - COMMON

`additem('Greater mutagen blue', 10)`
## GREATER GREEN MUTAGEN - COMMON

`additem('Greater mutagen green', 10)`
## GREATER RED MUTAGEN - COMMON

`additem('Greater mutagen red', 10)`

# Runes

## 流血

`additem('Rune devana greater')`
## 燃烧

`additem('Rune dazhbog greater')`

## 冰冻

`additem('Rune zoria greater')`

## 昏迷

`additem('Rune triglav greater')`

## 中毒

`additem('Rune morana greater')`

## 失衡

`additem('Rune stribog greater')`

## 护甲穿刺

`additem('Rune svarog greater')`

## 攻击力

`additem('Rune elemental greater')`

## 肾上腺素
`additem('Rune perun greater')`

## 法印强度

`additem('Rune veles greater')`

# Glyphs

## 阿尔德

`additem('Glyph aard greater')`

## 亚克席

`additem('Glyph axii greater')`

## 伊格尼

`additem('Glyph igni greater')`

## 昆恩

`additem('Glyph quen greater')`

## 亚登

`additem('Glyph yrden greater')`

# Dye

* `additem('Dye Solution',100)`: 染剂溶剂 (工艺栏)
* `additem('Dye Default',100)`: 染色去除剂
* `additem('Dye Red',100)`: 红色护甲染剂
* `additem('Dye Blue',100)`: 蓝色护甲染剂
* `additem('Dye Gray',100)`: 灰色护甲染剂
* `additem('Dye Black',100)`: 黑色护甲染剂
* `additem('Dye White',100)`: 白色护甲染剂
* `additem('Dye Green',100)`: 绿色护甲染剂
* `additem('Dye Brown',100)`: 棕色护甲染剂
* `additem('Dye Purple',100)`: 紫色护甲染剂
* `additem('Dye Yellow',100)`: 黄色护甲染剂
* `additem('Dye Pink',100)`: 粉红色护甲染剂
* `additem('Dye Orange',100)`: 橘色护甲染剂
* `additem('Dye Turquoise',100)`: 蓝绿色护甲染剂
# Gwent

* `addgwintcards`* `secretgwint`
* `winGwint(true/false)`
* `additem('gwint_card_ciri', 100)`

## Cards

## Common

* `gwint_card_albrich`
* `gwint_card_arachas`
* `gwint_card_arachas_behemoth`
* `gwint_card_arachas2`
* `gwint_card_arachas3`
* `gwint_card_archer_support`
* `gwint_card_archer_support2`
* `gwint_card_assire`
* `gwint_card_avallach`
* `gwint_card_ballista`
* `gwint_card_ballista_officer`
* `gwint_card_barclay`
* `gwint_card_black_archer`
* `gwint_card_black_archer2`
* `gwint_card_blue_stripes`
* `gwint_card_blue_stripes2`
* `gwint_card_blue_stripes3`
* `gwint_card_botchling`
* `gwint_card_bruxa`
* `gwint_card_cahir`
* `gwint_card_catapult`
* `gwint_card_catapult2`
* `gwint_card_celaeno_harpy`
* `gwint_card_ciaran`
* `gwint_card_ciri`
* `gwint_card_clear_sky`
* `gwint_card_cockatrice`
* `gwint_card_combat_engineer`
* `gwint_card_crinfrid`
* `gwint_card_crinfrid2`
* `gwint_card_crinfrid3`
* `gwint_card_crone_brewess`
* `gwint_card_crone_weavess`
* `gwint_card_crone_whispess`
* `gwint_card_cynthia`
* `gwint_card_dandelion`
* `gwint_card_dennis`
* `gwint_card_dijkstra`
* `gwint_card_dol_archer`
* `gwint_card_dol_dwarf`
* `gwint_card_dol_dwarf2`
* `gwint_card_dol_dwarf3`
* `gwint_card_dol_infantry`
* `gwint_card_dol_infantry2`
* `gwint_card_dol_infantry3`
* `gwint_card_draug`
* `gwint_card_dummy`
* `gwint_card_dun_banner_medic`
* `gwint_card_earth_elemental`
* `gwint_card_eithne`
* `gwint_card_ekkima`
* `gwint_card_elf_skirmisher`
* `gwint_card_elf_skirmisher2`
* `gwint_card_elf_skirmisher3`
* `gwint_card_emhyr_bronze`
* `gwint_card_emhyr_copper`
* `gwint_card_emhyr_gold`
* `gwint_card_emhyr_silver`
* `gwint_card_emiel`
* `gwint_card_endrega`
* `gwint_card_eredin_bronze`
* `gwint_card_eredin_copper`
* `gwint_card_eredin_gold`
* `gwint_card_eredin_silver`
* `gwint_card_esterad`
* `gwint_card_fiend`
* `gwint_card_filavandrel`
* `gwint_card_fire_elemental`
* `gwint_card_fleder`
* `gwint_card_fog`
* `gwint_card_fogling`
* `gwint_card_foltest_bronze`
* `gwint_card_foltest_copper`
* `gwint_card_foltest_gold`
* `gwint_card_foltest_silver`
* `gwint_card_forktail`
* `gwint_card_francesca_bronze`
* `gwint_card_francesca_copper`
* `gwint_card_francesca_gold`
* `gwint_card_francesca_silver`
* `gwint_card_frightener`
* `gwint_card_fringilla`
* `gwint_card_frost`
* `gwint_card_gargoyle`
* `gwint_card_garkain`
* `gwint_card_geralt`
* `gwint_card_ghoul`
* `gwint_card_ghoul2`
* `gwint_card_ghoul3`
* `gwint_card_grave_hag`
* `gwint_card_griffin`
* `gwint_card_harpy`
* `gwint_card_havekar_nurse`
* `gwint_card_havekar_nurse2`
* `gwint_card_havekar_nurse3`
* `gwint_card_havekar_support`
* `gwint_card_havekar_support2`
* `gwint_card_havekar_support3`
* `gwint_card_heavy_zerri`
* `gwint_card_horn`
* `gwint_card_ice_giant`
* `gwint_card_ida`
* `gwint_card_imlerith`
* `gwint_card_impera_brigade`
* `gwint_card_impera_brigade2`
* `gwint_card_impera_brigade3`
* `gwint_card_impera_brigade4`
* `gwint_card_iorveth`
* `gwint_card_isengrim`
* `gwint_card_kaedwen`
* `gwint_card_kaedwen2`
* `gwint_card_katakan`
* `gwint_card_kayran`
* `gwint_card_leshen`
* `gwint_card_letho`
* `gwint_card_mahakam`
* `gwint_card_mahakam2`
* `gwint_card_mahakam3`
* `gwint_card_mahakam4`
* `gwint_card_mahakam5`
* `gwint_card_menno`
* `gwint_card_milva`
* `gwint_card_moorvran`
* `gwint_card_morteisen`
* `gwint_card_natalis`
* `gwint_card_nausicaa`
* `gwint_card_nausicaa2`
* `gwint_card_nausicaa3`
* `gwint_card_nekker`
* `gwint_card_nekker2`
* `gwint_card_nekker3`
* `gwint_card_philippa`
* `gwint_card_plague_maiden`
* `gwint_card_poor_infantry`
* `gwint_card_poor_infantry2`
* `gwint_card_poor_infantry3`
* `gwint_card_puttkammer`
* `gwint_card_rain`
* `gwint_card_rainfarn`
* `gwint_card_renuald`
* `gwint_card_riordain`
* `gwint_card_rotten`
* `gwint_card_saskia`
* `gwint_card_scorch`
* `gwint_card_shilard`
* `gwint_card_siege_support`
* `gwint_card_siege_tower`
* `gwint_card_siegfried`
* `gwint_card_stefan`
* `gwint_card_stennis`
* `gwint_card_sweers`
* `gwint_card_thaler`
* `gwint_card_tibor`
* `gwint_card_toruviel`
* `gwint_card_triss`
* `gwint_card_vanhemar`
* `gwint_card_vattier`
* `gwint_card_vernon`
* `gwint_card_vesemir`
* `gwint_card_villen`
* `gwint_card_vreemde`
* `gwint_card_vrihedd_brigade`
* `gwint_card_vrihedd_brigade2`
* `gwint_card_vrihedd_cadet`
* `gwint_card_werewolf`
* `gwint_card_witch_hunters`
* `gwint_card_wyvern`
* `gwint_card_yaevinn`
* `gwint_card_yennefer`
* `gwint_card_young_emissary`
* `gwint_card_young_emissary2`
* `gwint_card_zerri`
* `gwint_card_zoltan`

# Other Items

## Books and Notes

* `Armor maintenance`
* `Beasts vol 1`
* `Beasts vol 2`
* `Boat vol 1`
* `Boat vol 2`
* `Book of Arachases`
* `br201_notice`
* `br202_notice`
* `br301_notice`
* `br302_notice`
* `cg_notice_baron`
* `cg_notice_mousesack`
* `cg_notice_sq306_maverick`
* `cg_notice_stjepan`
* `cg_notice_vivaldi`
* `Cursed Monsters vol 1`
* `Cursed Monsters vol 2`
* `Draconides vol 1`
* `Draconides vol 2`
* `ff100_notice`
* `ff200_notice`
* `ff300_notice`
* `flotsam_experiment`
* `Gear improvement`
* `Glossary Temerian Dynasty`
* `gp_prologue_bandit_note01`
* `gp_prologue_bandit_note02`
* `gp_prologue_bandit_note03`
* `gp_prologue_cultist_note01`
* `gp_prologue_cultist_note02`
* `Horse vol 1`
* `Horse vol 2`
* `hr101_notice`
* `hr200_notice`
* `Hybrid Monsters vol 1`
* `Hybrid Monsters vol 2`
* `Insectoids vol 1`
* `Insectoids vol 2`
* `item_name_mq1051_contract`
* `item_name_mq2052_contract`
* `item_name_mq3031_notice`
* `item_name_sq201_werewolf_contract`
* `item_name_sq210_notice`
* `Jacob of Varazze Chronicles`
* `Journey into the mind`
* `lore_about_the_fourth_witch`
* `lore_aleksanders_notes`
* `lore_an_seidhe_and_aen_elle`
* `lore_basics_of_magic`
* `lore_bells_of_beauclair`
* `lore_brother_adalbert_bestiary`
* `lore_cirilla_of_cintra`
* `lore_conjunction_of_spheres`
* `lore_cult_of_freyia`
* `lore_cult_of_hemdall`
* `lore_druids`
* `lore_elder_blood`
* `lore_elven_legends`
* `lore_elven_ruins`
* `lore_elven_sages`
* `lore_fall_of_wyzima`
* `lore_fate_of_temeria`
* `lore_goetia`
* `lore_hydromancy`
* `lore_imperial_edict_i`
* `lore_imperial_edict_ii`
* `lore_inteligence_report_about_ciri`
* `lore_journals_from_urskar_1`
* `lore_journals_from_urskar_2`
* `lore_journals_from_urskar_3`
* `lore_journals_from_urskar_4`
* `lore_journals_from_urskar_5`
* `lore_journals_from_urskar_6`
* `lore_journals_from_urskar_7`
* `lore_kovir`
* `lore_last_wish`
* `lore_lodge_of_sorceresses`
* `lore_monstrum`
* `lore_naglfar_demonic_drakkar`
* `lore_necromancy`
* `lore_nilfgaardian_empire`
* `lore_nilfgaardian_history_book`
* `lore_nilfgaardian_royal_dynasty`
* `lore_nilfgaardian_transport_orders`
* `lore_non_humans`
* `lore_novigrad`
* `lore_oneiromancy`
* `lore_oxenfurt`
* `lore_polymorphism`
* `lore_popiels_journal`
* `lore_principles_of_eternal_fire`
* `lore_prophecy_of_ithlinne`
* `lore_radovid_propaganda_pamphlet`
* `lore_radovids_rise_to_power`
* `lore_ragnarok`
* `lore_redania`
* `lore_redanian_secret_service`
* `lore_sands_of_zerrikania`
* `lore_skellige_heroes_broddr`
* `lore_skellige_heroes_grymmdjarr`
* `lore_skellige_heroes_modolf`
* `lore_skellige_heroes_otkell`
* `lore_skellige_heroes_sove`
* `lore_skellige_heroes_tyr`
* `lore_skellige_island`
* `lore_study_on_white_cold`
* `lore_summit_of_loc_muinne`
* `lore_the_great_four`
* `lore_theory_of_spheres`
* `lore_third_war_with_nilfgaard`
* `lore_tyromancy`
* `lore_unfinished_war_annals`
* `lore_velen`
* `lore_war_between_astrals`
* `lore_wars_with_nilfgaard`
* `lore_wild_hunt`
* `lore_witch_hunters`
* `lore_witcher_signs`
* `lore_witchers`
* `lore_yennefer_journals`
* `lw_bm6_merchant_note`
* `lw_cb17_bandits_note`
* `lw_cp13_bandit_note`
* `lw_cp13_refugee_note`
* `lw_cp14_bandit_note`
* `lw_cp14_child_note`
* `lw_cp33_treasure_note`
* `lw_cp36_note`
* `lw_cp39_captains_log`
* `lw_de_wett_note`
* `lw_de11_note`
* `lw_de32_treasure_note`
* `lw_gf2_white_note`
* `lw_gr_poi_042_letter`
* `lw_gr12_ferry_man_note`
* `lw_gr13_poppy_slaver_note`
* `lw_gr13_slaver_note`
* `lw_gr15_bandits_note`
* `lw_gr15_ghouls_note`
* `lw_gr29_bandit_note`
* `lw_gr34_note`
* `lw_gr39_note`
* `lw_gr40_note`
* `lw_gr41_note`
* `lw_gr7_soldiers_note`
* `lw_hs2_bandit_note`
* `lw_hs2_scoiatael_note`
* `lw_mp4_merchant_note`
* `lw_prologue_fallen_soldier_letter01`
* `lw_prologue_temerian_loot_manifest`
* `lw_prologue_temerian_treasure_note`
* `lw_sb12_pirate_note`
* `lw_sb13_smugglers_note`
* `lw_sb14_fisherman_letter`
* `lw_sb14_pirate_note`
* `lw_sb18_camps_note`
* `lw_sb2_base_camp_map`
* `lw_sb2_base_camp_note`
* `lw_sb2_sunken_ships_map`
* `lw_sb2_sunken_ships_note`
* `lw_sb20_chest_note`
* `lw_sb24_note`
* `lw_sb3_camps_note`
* `lw_sb3_giggler_note_pirates`
* `lw_sb3_giggler_note_workers`
* `lw_sb5_giggler_leader_note`
* `lw_sk_poi_005_treasure_note`
* `lw_sk_poi_050_note`
* `lw_sk_poi_056_note`
* `lw_sk16_village_note`
* `lw_sk25_bandits_note`
* `lw_sk25_blood_countess_note`
* `lw_sk3_ship_note`
* `lw_sk30_villager_note`
* `lw_sk31_note`
* `lw_sk32_note`
* `lw_sk38_treasure_note`
* `lw_sk4_note`
* `lw_sk41_prison_island_note`
* `lw_sk42_treasure_note`
* `lw_sk57_treasure_note`
* `lw_sk86_guards_note`
* `lw_sk86_old_mans_note`
* `lw_tm_underwater_dungeon_note`
* `lw_tm12_bandit_note`
* `lw_tm15_treasure_hunter_note`
* `lw_tm5_villager_note`
* `lw_tm6_note`
* `Magical Monsters vol 1`
* `Magical Monsters vol 2`
* `mh101_contract`
* `mh102_contract`
* `mh103_contract`
* `mh104_contract`
* `mh106_contract`
* `mh107_contract`
* `mh108_contract`
* `mh201_contract`
* `mh202_contract`
* `mh203_contract`
* `mh206_contract`
* `mh207_contract`
* `mh210_contract`
* `mh301_contract`
* `mh302_contract`
* `mh303_contract`
* `mh304_contract`
* `mh305_contract`
* `mh306_contract`
* `mh307_contract`
* `mh308_contract`
* `mq0001_contract`
* `mq0003_contract`
* `mq1002_3012_notice`
* `mq1006_notice`
* `mq1011_notice`
* `mq1013_notice`
* `mq1016_notice`
* `mq1022_notice`
* `mq1043_notice`
* `mq1050_notice`
* `mq1051_orders_note`
* `mq2001_notice_board_holmstein`
* `mq2001_notice_board_kaer_trolde`
* `mq2030_nithing`
* `Necronomicon`
* `Necrophage vol 1`
* `Necrophage vol 2`
* `Nilfgard arms and tactics`
* `noon_shadow_loot_note`
* `Norther Kingdoms arms and tactics`
* `Ogres vol 1`
* `Ogres vol 2`
* `Orders from Shilard`
* `Poems of Gonzal de Verceo`
* `poi_bandit_camp_3_note`
* `poi_telescope_note`
* `poi_temerian_treasure_note`
* `q301_notice_haunted_house`
* `Relict Monsters vol 1`
* `Relict Monsters vol 2`
* `sk48_splintered_ships_note`
* `Skelige arms and tactics`
* `Specters vol 1`
* `Specters vol 2`
* `sq102_contract`
* `sq104_werewolf`
* `sq106_name_ekimma_contract`
* `sq108_griffon_contract`
* `sq204_forest_spirit_contract`
* `sq305_notice`
* `Theatre Glossary vol 1`
* `Theatre Glossary vol 2`
* `Vampires vol 1`
* `Vampires vol 2`
* `Weapon maintenance`
* `Wild Hunt`
## Quest Items

* `cg100_barons_notes`
* `cg300_roches_list`
* `FeromoneBomb`
* `lw_sb13_note`
* `lw_temerian_soldiers_journal`
* `mh103_girls_journal`
* `mh103_killers_knife`
* `mh106_hags_skulls`
* `mh107_fiend_dung`
* `mh207_lighthouse_keeper_letter`
* `mh301_merc_contract`
* `mh305_doppler_letter`
* `mh306_mages_journal`
* `mh306_tenant_journal`
* `mh307_minion_lair_key`
* `mh308_dagger`
* `mq0002_box`
* `mq0003_girls_diary`
* `mq0003_ornate_bracelet`
* `mq0004_burnt_papers`
* `mq0004_frying_pan`
* `mq0004_thalers_monocle`
* `mq1001_dog_collar`
* `mq1001_locker_diary`
* `mq1001_locker_key`
* `mq1002_aeramas_journal`
* `mq1002_aeramas_journal_2`
* `mq1002_artifact_1`
* `mq1002_artifact_2`
* `mq1002_artifact_3`
* `mq1010_ring`
* `mq1014_old_mine_journal`
* `mq1015_hang_man_note`
* `mq1017_nilfgaardian_letter`
* `mq1019_oil`
* `mq1022_paint`
* `mq1023_fake_papers`
* `mq1028_muggs_papers`
* `mq1033_fight_diary`
* `mq1036_refugee_letter`
* `mq1050_dragon_root`
* `mq1051_spyglass`
* `mq1052_bandit_key`
* `mq1052_monster_trophy`
* `mq1053_letter_to_emhyr`
* `mq1053_martins_notes`
* `mq1053_report`
* `mq1053_skull`
* `mq1055_letters`
* `mq1056_chain_cutter`
* `mq2001_horn`
* `mq2001_journal_1a`
* `mq2001_journal_1b`
* `mq2001_journal_1c`
* `mq2001_journal_2a`
* `mq2001_journal_2b`
* `mq2001_kuilu`
* `mq2002_sword`
* `mq2003_bandit_journal`
* `mq2006_key_1`
* `mq2006_key_2`
* `mq2006_map_1`
* `mq2006_map_2`
* `mq2008_journal`
* `mq2010_lumbermill_journal_1`
* `mq2010_lumbermill_journal_2`
* `mq2010_lumbermill_journal_3`
* `mq2012_letter`
* `mq2015_kurisus_note`
* `mq2018_lugos_note`
* `mq2030_shawl`
* `mq2033_captain_journal`
* `mq2033_captain_note`
* `mq2033_tp_stone`
* `mq2037_dimun_directions`
* `mq2037_drakkar_chest_key`
* `mq2038_headsman_sword`
* `mq2039_Honeycomb`
* `mq2041_dexterity_token`
* `mq2043_conviction_token`
* `mq2048_guide_notes`
* `mq2048_ships_logbook`
* `mq2048_stone_medalion`
* `mq2048_waxed_letters`
* `mq2049_book_1`
* `mq2049_book_2`
* `mq2049_book_3`
* `mq2049_book_4`
* `mq2049_book_5`
* `mq3002_hidden_messages_note_01`
* `mq3002_hidden_messages_note_02`
* `mq3002_hidden_messages_note_03`
* `mq3012_noble_statuette`
* `mq3012_soldier_statuette`
* `mq3017_reds_diary`
* `mq3026_horse_racing_leaflet`
* `mq3026_varese_invitation`
* `mq3027_fluff_book_1`
* `mq3027_fluff_book_2`
* `mq3027_fluff_book_3`
* `mq3027_fluff_book_4`
* `mq3027_letter`
* `mq3027_my_manifest`
* `mq3030_trader_documents`
* `mq3031_mother_of_pearl`
* `mq3032_basilisk_leather`
* `mq3032_leather_boots`
* `mq3035_philppa_ring`
* `mq3035_talar_notes`
* `mq3039_loot_chest_key`
* `mq4001_book`
* `mq4002_note`
* `mq4003_husband_ring`
* `mq4003_letter`
* `mq4003_siren_ring`
* `mq4004_boy_remains`
* `mq4005_note_1`
* `mq4006_book`
* `q001_academic_book`
* `q001_bedroom_key`
* `q001_crystal_skull`
* `q001_letter_from_yenn`
* `q002_yenn_notes_about_ciri`
* `q101_candle_instruction`
* `q101_hendrik_notes`
* `q101_hendrik_trapdoor_key`
* `q103_about_eve`
* `q103_baron_dagger`
* `q103_botch_blood`
* `q103_curse_book`
* `q103_incense`
* `q103_letter_from_graden_1`
* `q103_letter_from_graden_2`
* `q103_love_letter`
* `q103_medallion`
* `q103_nilfgaardian_demand`
* `q103_safe_conduct`
* `q103_spinning_top`
* `q103_talisman`
* `q103_tamara_prayer`
* `q103_wooden_doll`
* `q104_aleksander_letter`
* `q104_avallach_notes`
* `q104_avallach_poetry`
* `q104_cure_recipe`
* `q104_eye_ink_recipe`
* `q104_oillamp`
* `q105_book_about_witches`
* `q105_johnnys_doll`
* `q105_marabella_receptions`
* `q105_ravens_feather`
* `q105_ritual_dagger`
* `q105_soltis_ear`
* `q105_witch_bones`
* `q106_alexander_notes_01`
* `q106_alexander_notes_02`
* `q106_alexander_notes_03`
* `q106_alexander_notes_04`
* `q106_anabelle_remains`
* `q106_anabelle_vial`
* `q106_magic_communicator`
* `q106_note_from_keira`
* `q107_doll_anna`
* `q107_doll1`
* `q107_doll2`
* `q107_doll3`
* `q107_doll5`
* `q107_doll6`
* `q108_necklet`
* `q109_popiels_formula`
* `q110_bill_of_exchange`
* `q111_ergot_beer`
* `q111_falkas_coin`
* `q111_fugas_top_key`
* `q111_imlerith_acorn`
* `q201_criminal`
* `q201_mead`
* `q201_mousesack_letter`
* `q201_pine_cone`
* `q201_poisoned_source`
* `q201_skull`
* `q201_wild_hunt_book`
* `q201_yen_journal_1`
* `q202_nails`
* `q202_navigator_horn`
* `q202_sail`
* `q202_shackles`
* `q203_broken_eyeofloki`
* `q203_broksvard`
* `q203_chest_key`
* `q205_avallach_book`
* `q205_gaelnos_root`
* `q205_hvitr_universal_key`
* `q205_mirt_green`
* `q205_mirt_yellow`
* `q205_swallow_green`
* `q205_swallow_yellow`
* `q206_arits_letter`
* `q206_arnvalds_letter`
* `q206_herb_mixture`
* `q206_wine_sample`
* `q208_heroesmead`
* `q210_avallach_lover_notes`
* `q210_avallach_notes_01`
* `q210_avallach_notes_02`
* `q210_letter_for_emhyr`
* `q210_solarstein`
* `q301_burdock`
* `q301_drawing_crib`
* `q301_drawing_oven`
* `q301_haunted_doll`
* `q301_magic_rat_incense`
* `q301_rose_remembrance`
* `q301_triss_parcel`
* `q302_casino_register`
* `q302_crafter_notes`
* `q302_dijkstras_notes`
* `q302_estate_key`
* `q302_igor_note`
* `q302_rico_thugs_notes`
* `q302_ring_door_key`
* `q302_roche_letter`
* `q302_roche_report`
* `q302_whoreson_letter_to_radowid`
* `q302_zdenek_contract`
* `q303_bomb_cap`
* `q303_bomb_fragment`
* `q303_contact_note`
* `q303_dudus_briefing`
* `q303_marked_bible`
* `q303_note_for_ciri`
* `q303_wine_bottle`
* `q304_ambasador_letter`
* `q304_dandelion_ballad`
* `q304_dandelion_diary`
* `q304_letter_1`
* `q304_letter_2`
* `q304_letter_3`
* `q304_priscilla_letter`
* `q304_rosa_lover_letter`
* `q305_dandelion_signet`
* `q305_script_comedy_title1`
* `q305_script_comedy_title2`
* `q305_script_drama_title1`
* `q305_script_drama_title2`
* `q305_script_for_irina`
* `q308_anneke_invite`
* `q308_coroner_msg`
* `q308_last_invite`
* `q308_nathanel_sermon_1`
* `q308_priscilla_invite`
* `q308_psycho_farewell`
* `q308_sermon_1`
* `q308_sermon_2`
* `q308_sermon_3`
* `q308_sermon_4`
* `q308_sermon_5`
* `q308_vegelbud_invite`
* `q308_vg_ethanol`
* `q308_vg_guillotine`
* `q308_vg_paraffin`
* `q309_glejt_from_dijkstra`
* `q309_key_letters`
* `q309_key_orders`
* `q309_key_piece1`
* `q309_key_piece2`
* `q309_key_piece3`
* `q309_mssg_from_triss`
* `q309_note_from_varese`
* `q309_three_keys_combined`
* `q309_witch_hunters_orders`
* `q310_backdoor_key`
* `q310_cell_key`
* `q310_explorer_note`
* `q310_journal_notes_1`
* `q310_journal_notes_2`
* `q310_lever`
* `q310_sewer_door_key`
* `q310_wine`
* `q310_yen_trinket`
* `q311_aen_elle_notes`
* `q311_lost_diary1`
* `q311_lost_diary2`
* `q311_lost_diary3`
* `q311_lost_diary4`
* `q401_avallachs_wisp`
* `q401_bread`
* `q401_bucket_and_rag`
* `q401_cheese`
* `q401_disgusting_meal`
* `q401_forktail_brain`
* `q401_sausages`
* `q401_trial_key_ingredient_a`
* `q401_trial_key_ingredient_b`
* `q401_trial_key_ingredient_c`
* `q401_triss_earring`
* `q401_yen_journal_2`
* `q403_treaty`
* `q504_fish`
* `q505_gems`
* `q505_nilf_diary_lost1`
* `q505_nilf_diary_lost2`
* `q505_nilf_diary_won1`
* `quest_test_ring`
* `scrambled_eggs`
* `sq101_letter_from_keira`
* `sq101_safe_goods`
* `sq101_shipment_list`
* `sq102_dolores_diary`
* `sq102_huberts_diary`
* `sq102_loose_papers`
* `sq104_key`
* `sq104_notes`
* `sq106_hammond_whereabouts`
* `sq106_manuscript`
* `sq107_vault_key`
* `sq108_acid_gland`
* `sq108_smith_tools`
* `sq201_chamber_key`
* `sq201_cursed_jewel`
* `sq201_padlock_key`
* `sq201_rotten_meat`
* `sq201_ship_manifesto`
* `sq201_werewolf_meat`
* `sq202_book_1`
* `sq202_book_2`
* `sq202_half_seal`
* `sq204_leshy_talisman`
* `sq204_wolf_heart`
* `sq205_brewing_instructions`
* `sq205_brewmasters_log`
* `sq205_fernflower_petal`
* `sq205_moonshine_spirit`
* `sq205_preserved_mash`
* `sq206_sleipnir_formula`
* `sq206_sleipnir_ingredient`
* `sq206_sleipnir_potion`
* `sq207_portal_stone_blue`
* `sq207_portal_stone_green`
* `sq207_portal_stone_red`
* `sq208_ashes`
* `sq208_herbs`
* `sq208_letter`
* `sq208_otkell_journal`
* `sq208_portait_brodrr`
* `sq208_portait_otkell`
* `sq208_portait_saemingr`
* `sq208_portait_tyr`
* `sq208_raghnaroog`
* `sq210_blank_brain`
* `sq210_burnt_heart`
* `sq210_conch`
* `sq210_drm_brain`
* `sq210_gog_book`
* `sq210_gog_brain`
* `sq210_gog_recipe`
* `sq210_gold_token`
* `sq210_golems_charged_heart`
* `sq210_golems_heart`
* `sq302_agates`
* `sq302_crystal`
* `sq302_eyes`
* `sq302_generator_2`
* `sq302_generator_3`
* `sq302_philippa_letter`
* `sq303_lesser_white_honey`
* `sq303_robbery_speech`
* `sq304_aluminium`
* `sq304_chemicals`
* `sq304_ferrum_cadmiae`
* `sq304_ledger_book`
* `sq304_monster_trophy`
* `sq304_smithing_mtrls`
* `sq304_thermite`
* `sq305_conduct`
* `sq305_trophies`
* `sq306_sacha_letter`
* `sq307_cat_accessories`
* `sq307_cattrap`
* `sq307_flower`
* `sq308_martin_mask`
* `sq309_girl_notebook`
* `sq309_iorweth_arrow`
* `sq309_mage_letter`
* `sq310_ledger_book`
* `sq310_package`
* `sq311_spy_papers`
* `sq312_medicine`
* `sq313_iorveth_letters`
* `sq314_cure`
* `sq314_cure_recipe`
* `sq314_var_rechte_journal`
* `sq401_old_sword`
* `sq401_orders`
* `sq402_aether`
* `sq402_florence_flask`
* `sq402_florence_flask_with_water`
* `sq402_hydragenum`
* `sq402_ingredient`
* `sq402_quebrith`
* `sq402_rebis`
* `sq402_vitriol`
* `th003_journal_wolf_part3`
* `th004_map_wolf_jacket_upgrade1`
* `th005_map_wolf_jacket_upgrade2`
* `th006_map_wolf_jacket_upgrade3`
* `th007_map_wolf_gloves_upgrade1`
* `th008_map_wolf_pants_upgrade1`
* `th009_map_wolf_boots_upgrade1`
* `th010_map_wolf_silver_sword_upgrade1`
* `th011_map_wolf_silver_sword_upgrade2`
* `th012_map_wolf_silver_sword_upgrade3`
* `th013_map_wolf_steel_sword_upgrade1`
* `th014_map_wolf_steel_sword_upgrade2`
* `th015_map_wolf_steel_sword_upgrade3`
* `th1001_journal_viper_part1`
* `th1001_journal_viper_part2`
* `th1003_ireneus_lab_key`
* `th1003_journal_cat_lady`
* `th1003_journal_lynx_part1`
* `th1003_journal_lynx_part2`
* `th1003_journal_lynx_part3`
* `th1003_journal_lynx_part4`
* `th1003_journal_lynx_part5`
* `th1003_journal_lynx_part6`
* `th1003_journal_lynx_part7`
* `th1003_journal_lynx_part8`
* `th1003_map_lynx_upgrade1a`
* `th1003_map_lynx_upgrade1b`
* `th1003_map_lynx_upgrade2`
* `th1003_map_lynx_upgrade3`
* `th1005_journal_gryphon_part1`
* `th1005_journal_gryphon_part2`
* `th1005_journal_gryphon_part3`
* `th1005_journal_gryphon_part4`
* `th1005_journal_gryphon_part5`
* `th1005_journal_gryphon_part6`
* `th1005_journal_gryphon_part7`
* `th1005_map_gryphon_upgrade1a`
* `th1005_map_gryphon_upgrade1b`
* `th1005_map_gryphon_upgrade2`
* `th1005_map_gryphon_upgrade3`
* `th1007_journal_bear_part1`
* `th1007_journal_bear_part2`
* `th1007_journal_bear_part3`
* `th1007_journal_bear_part4`
* `th1007_journal_bear_part5`
* `th1007_journal_bear_part6`
* `th1007_journal_bear_part7`
* `th1007_map_bear_upgrade1a`
* `th1007_map_bear_upgrade1b`
* `th1007_map_bear_upgrade2`
* `th1007_map_bear_upgrade3`
* `th1009_journal_wolf_part1`
* `th1009_journal_wolf_part2`
* `vivaldis_bill_of_exchange`
* `yennefers_omelette`
* `yennefers_omelette_fantasie`

## Miscellaneous Items

* `Aether`
* `Albedo`
* `Alchemical paste`
* `Alchemists powder`
* `Alcohest`
* `Alghoul bone marrow`
* `Alghoul claw`
* `Amber`
* `Amber dust`
* `Amber flawless`
* `Amber fossil`
* `Amethyst`
* `Amethyst dust`
* `Amethyst flawless`
* `an_skellige_map`
* `Ancient Leshy mutagen`
* `Apple`
* `Apple juice`
* `Arachas eyes`
* `Arachas mutagen`
* `Arachas venom`
* `ard_skellige_map`
* `Armor maintenancet`
* `Armor repair kit 1`
* `Armor repair kit 2`
* `Armor repair kit 3`
* `Ashes`
* `Axe head`
* `Bag of grain`
* `Bag of weed`
* `Baked apple`
* `Baked potato`
* `Banana`
* `Bandalur butter knife`
* `Basilisk mutagen`
* `Basilisk plate`
* `Basilisk venom`
* `Bear fat`
* `Bear pelt`
* `Beauclair White`
* `Bell pepper`
* `Berserker pelt`
* `Black pearl`
* `Black pearl dust`
* `Blasting powder`
* `Blueberries`
* `Blunt axe`
* `Blunt pickaxe`
* `Book`
* `Bottle`
* `Bottled water`
* `Bread`
* `Broken paddle`
* `Broken rakes`
* `Bun`
* `Burned bread`
* `Burned bun`
* `Butter Bandalura`
* `Calcium equum`
* `Candelabra`
* `Candle`
* `Candy`
* `Casket`
* `Cave Troll liver`
* `Chain`
* `Cheese`
* `Cherry cordia`
* `Cherry Cordial`
* `Chicken`
* `Chicken leg`
* `Chicken sandwich`
* `Child doll`
* `Chips`
* `Chitin scale`
* `ciris_phylactery`
* `Coal`
* `Cockatrice egg`
* `Cockatrice maw`
* `Cockatrice mutagen`
* `Cotton`
* `Cow hide`
* `Cows milk`
* `Crowns`
* `Crystalized essence`
* `Cucumber`
* `Cyclops eye`
* `Czart hide`
* `Czart mutagen`
* `Dao mutagen`
* `Dark iron ingot`
* `Dark iron ore`
* `Dark iron plate`
* `Dark steel ingot`
* `Dark steel plate`
* `Deer hide`
* `Diamond`
* `Diamond dust`
* `Diamond flawless`
* `Dijkstra Dry`
* `Dismantle Kit`
* `Dog tallow`
* `Doppler mutagen`
* `Draconide leather`
* `Dragon scales`
* `Dried fruit`
* `Dried fruit and nuts`
* `Drowned dead tongue`
* `Drowner brain`
* `Drum`
* `Ducal water`
* `Dwarven spirit`
* `Dwimeritium chains`
* `Dwimeritium shackles`
* `Dwimeryte ingot`
* `Dwimeryte ore`
* `Dwimeryte plate`
* `Dye`
* `Egg`
* `Ekimma epidermis`
* `Ekimma mutagen`
* `Elemental essence`
* `Emerald`
* `Emerald dust`
* `Emerald flawless`
* `Empty bottle`
* `Empty vial`
* `Endriag chitin plates`
* `Endriag embryo`
* `Endriag heart`
* `Erveluce`
* `Erynie eye`
* `Est Est`
* `faroe_map`
* `Feather`
* `Fiber`
* `Fiend eye`
* `Fiend mutagen`
* `Fifth essence`
* `Fish`
* `Fishing net`
* `Fishing rod`
* `Fisstech`
* `Flask`
* `Florens`
* `Flowers`
* `Flute_junk`
* `Fogling 1 mutagen`
* `Fogling 2 mutagen`
* `Fogling teeth`
* `Fondue`
* `Forktail mutagen`
* `Forktail plate`
* `Fox pelt`
* `Free nilfgaardian lemon`
* `Free roasted chicken leg`
* `Fried fish`
* `Fried meat`
* `Fur square`
* `Gargoyle dust`
* `Gargoyle heart`
* `Ghoul blood`
* `Glamarye`
* `Glass`
* `Glowing ingot`
* `Glowing ore`
* `Glyph infusion greater`
* `Glyph infusion lesser`
* `Goat hide`
* `Goats milk`
* `Goblet`
* `Gold candelabra`
* `Gold diamond necklace`
* `Gold diamond ring`
* `Gold mineral`
* `Gold ore`
* `Gold pearl necklace`
* `Gold ring`
* `Gold ruby ring`
* `Gold sapphire necklace`
* `Gold sapphire ring`
* `Golden casket`
* `Golden mug`
* `Golden platter`
* `Golem heart`
* `Grapes`
* `Grave Hag ear`
* `Grave Hag mutagen`
* `Greater mutagen blue`
* `Greater mutagen green`
* `Greater mutagen red`
* `Greater Rotfiend blood`
* `Grilled chicken sandwich`
* `Grilled pork`
* `Gryphon egg`
* `Gryphon feathers`
* `Gryphon mutagen`
* `Gutted fish`
* `Haft`
* `Hag teeth`
* `Ham sandwich`
* `Hardened leather`
* `Hardened timber`
* `Harpy egg`
* `Harpy feathers`
* `Harpy talon`
* `hindarsfjal_map`
* `Honeycomb`
* `Horse hide`
* `Hydragenum`
* `Illusion Medallion`
* `Infused crystal`
* `Infused dust`
* `Infused shard`
* `Inkwell`
* `Iron ingot`
* `Iron Lamp`
* `Iron oil candle`
* `Iron ore`
* `Jar`
* `Jug`
* `Jumping rope`
* `Kaedwenian Stout`
* `Katakan mutagen`
* `Ladle`
* `Lamia lock of hair`
* `Lamia mutagen`
* `Lead ore`
* `Leather`
* `Leather squares`
* `Leather straps`
* `Leshy mutagen`
* `Leshy resin`
* `Lesser mutagen blue`
* `Lesser mutagen green`
* `Lesser mutagen red`
* `Linen`
* `Local pepper vodka`
* `Lunar shards`
* `Lute`
* `Mahakam Spirit`
* `Mandrake cordial`
* `Melitele figurine`
* `Meteorite ingot`
* `Meteorite ore`
* `Meteorite plate`
* `Meteorite silver ingot`
* `Meteorite silver plate`
* `Mettina Rose`
* `mh107_czart_lure`
* `Monstrous blood`
* `Monstrous bone`
* `Monstrous brain`
* `Monstrous claw`
* `Monstrous dust`
* `Monstrous ear`
* `Monstrous egg`
* `Monstrous essence`
* `Monstrous eye`
* `Monstrous feather`
* `Monstrous hair`
* `Monstrous heart`
* `Monstrous hide`
* `Monstrous liver`
* `Monstrous plate`
* `Monstrous saliva`
* `Monstrous tongue`
* `Monstrous tooth`
* `Mug`
* `Mushroom`
* `Mutagen blue`
* `Mutagen green`
* `Mutagen red`
* `Mutton curry`
* `Mutton leg`
* `Nails`
* `Necrophage skin`
* `Nekker blood`
* `Nekker claw`
* `Nekker eye`
* `Nekker heart`
* `Nekker warrior liver`
* `Nekker Warrior mutagen`
* `Nightwraith dark essence`
* `Nightwraith mutagen`
* `Nightwraiths hair`
* `Nigredo`
* `Nilfgaardian Lemon`
* `Nilfgaardian special forces insignia`
* `Noonwraith light essence`
* `Noonwraith mutagen`
* `Note`
* `Oil`
* `Oil Lamp`
* `Old bear skin`
* `Old goat skin`
* `Old rusty breadknife`
* `Old sheep skin`
* `Olive`
* `Onion`
* `Optima mater`
* `ore_oxenfurt`
* `Orens`
* `Ornate silver shield replica`
* `Ornate silver sword replica`
* `Parchment`
* `Patchwork vest`
* `Pear`
* `Pearl`
* `Pepper`
* `Perfume`
* `Phosphorus`
* `Pickaxe head`
* `Pig hide`
* `Platter`
* `Plum`
* `Pork`
* `Potatoes`
* `Potestaquisitor`
* `Powdered pearl`
* `Pure silver`
* `Q1_short_steel_sword`
* `q103_bell`
* `q203_eyeofloki`
* `q403_ciri_meteor`
* `Quebrith`
* `Quicksilver solution`
* `Rabbit pelt`
* `Raspberries`
* `Raspberry juice`
* `Raw meat`
* `Razor`
* `Rebis`
* `Redanian Herbal`
* `Redanian Lager`
* `Redanian special forces insignia`
* `Resin`
* `Rivian Kriek`
* `Roasted chicken`
* `Roasted chicken leg`
* `Rope`
* `Rotfiend blood`
* `Rotten meat`
* `Rubedo`
* `Ruby`
* `Ruby dust`
* `Ruby flawless`
* `Runestone greater`
* `Runestone lesser`
* `Rusty hammer head`
* `Salt pepper shaker`
* `Saltpetre`
* `Sap`
* `Sapphire`
* `Sapphire dust`
* `Sapphire flawless`
* `Scoiatael trophies`
* `Seashell`
* `Shell`
* `Silk`
* `Silver amber necklace`
* `Silver amber ring`
* `Silver candelabra`
* `Silver casket`
* `Silver emerald necklace`
* `Silver emerald ring`
* `Silver ingot`
* `Silver mineral`
* `Silver mug`
* `Silver ore`
* `Silver pantaloons`
* `Silver plate`
* `Silver platter`
* `Silver ruby necklace`
* `Silver sapphire ring`
* `Silver teapot`
* `Silverware`
* `Siren vocal cords`
* `Skull`
* `Smithing tools`
* `Smithing tools dwarven`
* `Smithing tools elven`
* `Smithing tools gnomish`
* `Smoking pipe`
* `Specter dust`
* `spikeroog_map`
* `Stammelfords dust`
* `Steel ingot`
* `Steel plate`
* `Strawberries`
* `String`
* `Succubus mutagen`
* `Sulfur`
* `Temerian Rye`
* `Temerian special forces insignia`
* `Thread`
* `Timber`
* `Tirnalia potion`
* `Toffee`
* `Troll mutagen`
* `Troll skin`
* `Twine`
* `undvik_map`
* `Valuable fossil`
* `Vampire fang`
* `Vampire saliva`
* `Venom extract`
* `Vermilion`
* `Very good honey`
* `Vinegar`
* `Vitriol`
* `Viziman Champion`
* `Volcanic Gryphon mutagen`
* `Voodoo doll`
* `Water essence`
* `Water Hag mutagen`
* `Water Hag teeth`
* `Wax`
* `Weapon repair kit 1`
* `Weapon repair kit 2`
* `Weapon repair kit 3`
* `Werewolf mutagen`
* `Werewolf pelt`
* `Werewolf saliva`
* `Whetstone`
* `Whetstone dwarven`
* `Whetstone elven`
* `Whetstone gnomish`
* `White bear pelt`
* `White Gull 1`
* `White wolf pelt`
* `Wine stone`
* `Wire`
* `Wire rope`
* `Wolf liver`
* `Wolf pelt`
* `Wooden rung rope ladder`
* `Worn leather pelt`
* `Wraith essence`
* `Wraith mutagen`
* `Wyvern egg`
* `Wyvern mutagen`
* `Wyvern plate`