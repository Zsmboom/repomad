# MenuLib
名称：MenuLib
下载文件地址：public/downloads/repomod-MenuLib-1.0.5.zip
介绍内容：Menu Lib
A library for creating UI!

This was released early in so I could properly update REPOConfig.
As REPOConfig gets updated, so will this library.

# MoreHeadPlus
名称：MoreHeadPlus
下载文件地址：public/downloads/repomod-MoreHeadPlus-0.2.0.zip
介绍内容：This mod requires the following mods to function
MoreHead

MoreHeadPlus
Introduction Adds several new models to the MoreHead mod.
Models may be added in batches as I enjoy game more.

# REPOLib
名称：REPOLib
下载文件地址：public/downloads/repomod-REPOLib-1.4.2.zip
介绍内容：Library for adding content to R.E.P.O.

Features
Registering network prefabs.
Registering valuables.
Registering items.
Registering enemies.
Registering custom chat /commands
Built-in dev mode commands: Spawn Valuable, Spawn Item
Fixing audio mixer groups.
Making networked events.
Registering features without code using the REPOLib-Sdk.
Usage
Click to expand
[!NOTE] Registering features (Valuables, Items, Enemies, etc...) automatically registers their prefabs as a network prefab.

[!NOTE] Registering features (Valuables, Items, Enemies, etc...) automatically fixes their prefabs audio mixer groups.

[!IMPORTANT] You should only register network prefabs and features (Valuables, Items, Enemies, etc...) from your plugin's awake function.

[!TIP] You can enable extended logging in the config settings to get more info about features being registered, custom network prefabs being spawned, and more.

Chat Commands
[!IMPORTANT] You must enable DeveloperMode in the config settings to use developer mode commands.

Chat commands currently only work in multiplayer since you need access to the in-game chat to use commands.

This mod comes with a few built-in chat commands:

1. Spawn Valuable /spawnvaluable <name>
This command will spawn a valuable in front of you.
Replace <name> with the name of the valuable prefab.
Names are not case-sensitive.
Example usage: /spawnvaluable diamond
This command has multiple aliases: /spawnval, /sv
This command requires developer mode to be enabled.
This command is host-only!

2. Spawn Item /spawnitem <name>
This command will spawn an item in front of you.
Replace <name> with the name of the item or item prefab.
Names are not case-sensitive.
Example usage: /spawnitem gun
This command has one alias: /si
This command requires developer mode to be enabled.
This command is host-only!

[!TIP] Commands can be enabled/disabled in the config settings.

If you are a mod developer and want to add your own custom chat commands to your mod, check the Usage > Chat commands section.


# ExtractionPointConfirmButton
名称：ExtractionPointConfirmButton
下载文件地址：public/downloads/repomod-ExtractionPointConfirmButton-1.0.1.zip
介绍内容：This mod requires the following mods to function REPOLib
ExtractionPointConfirmButton
Adds a confirm button to extraction points.

以上完成

# MoreReviveHP
名称：MoreReviveHP
下载文件：public/downloads/repomod-MoreReviveHP-1.0.1.zip
介绍内容：More Revive HP Mod
More Revive HP is a mod that increases the health of players upon revival in the game. This mod allows you to configure the amount of extra health added when a player is revived.

Features
Increase the health of players upon revival.
Configure the amount of extra health added.
Installation
Download and install BepInEx.
Place the MoreReviveHP.dll file in the BepInEx/plugins directory.
Configuration
After the first run, a configuration file will be generated at BepInEx/config/Tidaleus.MoreReviveHP.cfg. You can edit this file to change the mod settings.

Configuration Options
ExtraHealth: Extra health to add to the 1 you spawn with, therefore make this something 1 through 99. Default is 19.
Usage
The mod will automatically increase the health of players upon revival based on the configured extra health amount.


# LateJoin
名称：LateJoin
下载文件：public/downloads/repomod-LateJoin-0.1.2.zip
介绍内容：LateJoin
Have you ever played R.E.P.O. only to be faced with a friend who wants to join after you've started the lobby? Fret not!

How can players late join currently?
Truck (Lobby after the Shop)
The master client will reopen the room after you leave the shop, during the intermission where you are in the truck. Players should be able to join normally, and this mod should support other mods like MorePlayers and REPO ServerList out of the box.

Future plans
We'll try to figure out if we can allow players to join in the shop, (and potentially even during active games, where you would end up as a spectator rather than a player). Theoretically in the case of loading the shop, loading into any level should be possible in that case, but can't be promised and if added, would need to be an experimental feature.

How does it work?
The game treats the host as the "master client" which dictates players and how they are spawned. Because of this, we are able to change the level for the late joiner, by utilising the buffered RPCs that are provided by Photon PUN. However, doing this requires some fairly major code changes.

Therefore, be warned, this mod may not be fully compatible with other mods, especially ones that rely on important data that is handled by the client, rather than the master client!


以上完成


# MoreShopItems
名称：MoreShopItems
下载文件：public/downloads/repomod-MoreShopItems-1.2.5.zip
介绍内容：This mod requires the following mods to function REPOLib
Additional shopping shelves with increased shop loot

Features
Increased item spawn rate in the shop.
Additional shelving for more of each item.
Important
In the config, the "Max Amount In Shop" value should only be changed if are playing with "Max Purchase Override" toggled off (set to false).

Also, this mod does not increase the spawning of carts and pocket carts, only items.

Bug reports
https://github.com/InfusedGalaxy/MoreShopItems/issues

Potential Issues that will be addressed soon
Truck only has 16 upgrades spots, 16 small item spots, 8 large high item spots, 4 large plus item spots, 12 medium item spots, 12 health pack spots, and 4 large item spots.

There is potentially a loss of extra items, but the truck does spawn the "rest" after loading into the next level. I do plan to increase the storage in the truck.


# MoreUpgrades
名称：MoreUpgrades
下载文件：public/downloads/repomod-MoreUpgrades-1.2.7.zip
介绍内容：MoreUpgrades
Adds more upgrade items to the game.

Items
Sprint Usage: It uses less stamina when sprinting. Can be upgraded multiple times.
Valuable Count: Displays the number of valuables under the mission text. Can be upgraded only once.
Map Enemy Tracker: Tracks enemies in the map radar. Can be upgraded only once.
Map Player Tracker: Tracks players in the map radar. Can be upgraded only once.
Configuration
Enabled: Whether the upgrade item can be spawned to the shop.
Max Amount: The maximum number of times the upgrade item can appear in the truck.
Max Amount In Shop: The maximum number of times the upgrade item can appear in the shop.
Minimum Price: The minimum cost to purchase the upgrade item.
Maximum Price: The maximum cost to purchase the upgrade item.
Price Increase Scaling: The scale of the price increase based on the total number of upgrade item purchased.
Max Purchase Amount: The maximum number of times the upgrade item can be purchased before it is no longer available in the shop.
Allow Team Upgrades: Whether the upgrade item applies to the entire team instead of just one player.
Starting Amount: The number of times the upgrade item is applied at the start of the game.
Display Name: The display name of the upgrade item.
Note
Some upgrade items have more configuration. Check the config file after updates, as values may change between versions.


以上完成

# TeamUpgrades
名称：TeamUpgrades
下载文件：public/downloads/repomod-TeamUpgrades-1.1.4.zip
介绍内容：All upgrades now work for the whole team!

# TeamHeals
名称：TeamHeals
下载文件：public/downloads/repomod-TeamHeals-1.0.1.zip
介绍内容：Health Packs now work for the whole team!
健康包现在适用于整个团队！

Note  笔记
Ensure that everyone has the same HealAmountMultiplier value in their config. For now, I'm not sure how to override the value on the server.


以上完成

# LethalCompanyValuables
名称：LethalCompanyValuables
下载文件：public/downloads/repomod-LethalCompanyValuables-1.1.1.zip
介绍内容：This mod requires the following mods to function  REPOLib
LethalCompanyValuables
Adds 30 scrap items from Lethal Company as valuables.

Valuables
Airhorn
Apparatus
Big Bolt
Bottles
Brass Bell
Cash Register
Chemical Jug
Clown Horn
Fancy Lamp
Flask
Gift Box
Gold Bar
Golden Cup
Hair Brush
Hairdryer
Jar Of Pickles
Large Axle
Painting
Magnifying Glass
Metal Sheet
Old Phone
Perfume Bottle
Plastic Fish
Red Soda
Rubber Ducky
Tea Kettle
Teeth
Toy Cube
Toy Robot
V-Type Engine
