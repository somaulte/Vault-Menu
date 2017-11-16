//====================================================//
//=VARIABLES==========================================//
//====================================================//

var maps = {
    guar: { name: "Guardian",    image: "resources/img/maps/map_8.jpg",
		   quote:"Millennia of tending has produced trees as ancient as the Forerunner structures they have grown around." },
    rive: { name: "Valhalla",    image: "resources/img/maps/map_13.jpg",
		   quote:"The crew of V-398 barely survived their unplanned landing in this gorge, but they know they are not alone." },
    aval: { name: "Diamondback", image: "resources/img/maps/map_1.jpg",
		   quote:"Hot winds blow over what should be a dead moon. A reminder of the power Forerunners once wielded." },
    edge: { name: "Edge",        image: "resources/img/maps/map_6.jpg",
		   quote:"The remote frontier world of Partition has provided this ancient databank with the safety of seclusion." },
    reac: { name: "Reactor",     image: "resources/img/maps/map_12.jpg",
		   quote:"Being constructed just prior to the Invasion, its builders had to evacuate before before it was completed." },
    turf: { name: "Icebox",      image: "resources/img/maps/map_16.jpg",
		   quote:"Downtown Tyumen's Precinct 13 offers an ideal context for urban combat training." },
    zanz: { name: "Last Resort", image: "resources/img/maps/map_18.jpg",
		   quote:"Remote industrial sites like this one are routinely requisitioned & used as part of Spartan training exercises." },
    cybe: { name: "The Pit",     image: "resources/img/maps/map_4.jpg",
		   quote:"Software simulations are held in contempt by the veteran instructors who run these training facilities." },
    bunk: { name: "Standoff",    image: "resources/img/maps/map_2.jpg",
		   quote:"Once, nearby telescopes listened for a message from the stars. Now, these silos contain our prepared response." },
    stan: { name: "Bunkerworld", image: "resources/img/maps/map_2.jpg",
		   quote:"Once, nearby telescopes listened for a message from the stars. Now, these silos contain our prepared response." },
    chil: { name: "Narrows",     image: "resources/img/maps/map_3.jpg",
		   quote:"Without cooling systems such as these, excess heat from the Ark's forges would render the construct uninhabitable." },
    shri: { name: "Sandtrap",    image: "resources/img/maps/map_14.jpg",
		   quote:"Although the Brute occupiers have been driven from this ancient structure, they left plenty to remember them by." },
    dead: { name: "High Ground", image: "resources/img/maps/map_5.jpg",
		   quote:"A relic of older conflicts, this base was reactivated after the New Mombasa Slipspace Event." },
    hang: { name: "Hangem-High", image: "resources/img/maps/map_9.jpg",
		   quote:"Tombstones for Everybody." },
    flat: { name: "Flatgrass",   image: "resources/img/maps/map_7.png",
		   quote:"Modders offering a plain flat map with an extended pallet of items ideal for Forge." },
    lock: { name: "Lockout",     image: "resources/img/maps/map_10.jpg",
		   quote:"Some believe this remote facility was once used to study the Flood. But few clues remain amidst the snow and ice." },
    stat: { name: "Station",     image: "resources/img/maps/map_15.png",
		   quote:"Custom map redesigned from Halo Reach by jabukufo for competetive play." },
    main: { name: "Mainmenu",    image: "resources/img/maps/map_11.png",
		   quote:"Map currently being selected.." },
    none: { name: "None",        image: "resources/img/maps/map_17.png",
		   quote:"Map currently being selected.." }
};
var variants = {
    ball: { name: "Oddball",          image: "resources/img/gametypes/gametype_8.png",
		   quote:"Hold the skull to earn points. It's like Hamlet, with guns." },
    slay: { name: "Slayer",           image: "resources/img/gametypes/gametype_9.png",
		   quote:"Kill your enemies. Kill your friends' enemies. Kill your friends." },
    infe: { name: "Infection",        image: "resources/img/gametypes/gametype_4.png",
		   quote:"The timeless struggle of human vs zombie. If you die by a zombie's hand, you join their ranks." },
    zomb: { name: "Zombies",          image: "resources/img/gametypes/gametype_13.png",
		   quote:"The timeless struggle of human vs zombie. If you die by a zombie's hand, you join their ranks." },
    assa: { name: "Assault",          image: "resources/img/gametypes/gametype_1.png",
		   quote:"Carry your bomb to the enemy base, plant it, & defend until it detonates." },
    koth: { name: "King Of The Hill", image: "resources/img/gametypes/gametype_6.png",
		   quote:"Control the hill to earn points. Earn points to win. It's good to be king." },
    jugg: { name: "Juggernaut",       image: "resources/img/gametypes/gametype_5.png",
		   quote:"If you meet the Juggernaut, kill the juggernaut." },
    terr: { name: "Territories",      image: "resources/img/gametypes/gametype_10.png", 
		   quote:"Defend your territory & control the land. Teams earn points for territories they control." },
    vip: {  name: "V.I.P",            image: "resources/img/gametypes/gametype_12.png", 
		  quote:"One Player on each team is Very Important. Take down the enemy VIP for points, but take care of your own." },
    ctf: {  name: "Capture The Flag", image: "resources/img/gametypes/gametype_2.png", 
		  quote:"Invade your opponet's stronghold, sieze their flag, & return it to your base to score." },
    none: { name: "None",             image: "resources/img/gametypes/gametype_7.png", 
		   quote:"Kill your enemies. Kill your friends' enemies. Kill your friends." },
    forg: { name: "Forge",            image: "resources/img/gametypes/gametype_3.png", 
		   quote:"Collaborate in real time to edit & play variations of your favorite maps, from the subtle to the insane." }
};
var colors = [
    { name: "Steel",     hex: "#626262", roster: "resources/img/player/bars/626262.png" },
    { name: "Silver",    hex: "#B0B0B0", roster: "resources/img/player/bars/B0B0B0.png" },
    { name: "White",     hex: "#DEDEDE", roster: "resources/img/player/bars/DEDEDE.png" },
    { name: "Red",       hex: "#9B3332", roster: "resources/img/player/bars/9B3332.png" },
    { name: "Mauve",     hex: "#DB6766", roster: "resources/img/player/bars/DB6766.png" },
    { name: "Salmon",    hex: "#EE807F", roster: "resources/img/player/bars/EE807F.png" },
    { name: "Orange",    hex: "#DB8B00", roster: "resources/img/player/bars/DB8B00.png" },
    { name: "Coral",     hex: "#F8AE58", roster: "resources/img/player/bars/F8AE58.png" },
    { name: "Peach",     hex: "#FECB9C", roster: "resources/img/player/bars/FECB9C.png" },
    { name: "Gold",      hex: "#CCAE2C", roster: "resources/img/player/bars/CCAE2C.png" },
    { name: "Yellow",    hex: "#F3BC2B", roster: "resources/img/player/bars/F3BC2B.png" },
    { name: "Pale",      hex: "#FDD879", roster: "resources/img/player/bars/FDD879.png" },
    { name: "Sage",      hex: "#57741A", roster: "resources/img/player/bars/57741A.png" },
    { name: "Green",     hex: "#90A560", roster: "resources/img/player/bars/90A560.png" },
    { name: "Olive",     hex: "#D8EFA7", roster: "resources/img/player/bars/D8EFA7.png" },
    { name: "Teal",      hex: "#31787E", roster: "resources/img/player/bars/31787E.png" },
    { name: "Aqua",      hex: "#4ABBC1", roster: "resources/img/player/bars/4ABBC1.png" },
    { name: "Cyan",      hex: "#91EDEC", roster: "resources/img/player/bars/91EDEC.png" },
    { name: "Blue",      hex: "#325992", roster: "resources/img/player/bars/325992.png" },
    { name: "Cobalt",    hex: "#5588DB", roster: "resources/img/player/bars/5588DB.png" },
    { name: "Sapphire",  hex: "#97B5F5", roster: "resources/img/player/bars/97B5F5.png" },
    { name: "Violet",    hex: "#553E8F", roster: "resources/img/player/bars/553E8F.png" },
    { name: "Orchid",    hex: "#9175E3", roster: "resources/img/player/bars/9175E3.png" },
    { name: "Lavender",  hex: "#C4B4FD", roster: "resources/img/player/bars/C4B4FD.png" },
    { name: "Crimson",   hex: "#830147", roster: "resources/img/player/bars/830147.png" },
    { name: "Ruby Wine", hex: "#D23C83", roster: "resources/img/player/bars/D23C83.png" },
    { name: "Pink",      hex: "#FC8BB9", roster: "resources/img/player/bars/FC8BB9.png" },
    { name: "Brown",     hex: "#513714", roster: "resources/img/player/bars/513714.png" },
    { name: "Tan",       hex: "#AC8A6E", roster: "resources/img/player/bars/AC8A6E.png" },
    { name: "Khaki",     hex: "#E0BEA2", roster: "resources/img/player/bars/E0BEA2.png" },
    { name: "None", hex: "rgba(98, 98, 98, 0.5)" }
];

//====================================================//
//=SERVER XHR FUNCTIONS===============================//
//====================================================//

var serverListXHR = [];
var serverInfoXHR = [];
var serverPlayerXHR = [];
function clearXHRRequests(list) {
    try 
    {
        for (var i in list) {
            var task = list[i];
            if (task) {
                if (task.request) task.request.abort();
            }
        }
        list = [];
    } 
    catch (ex) {
        console.log(ex.message);
        return false;
    }
}
function removeXHRRequest(address, list) {
    try 
    {
        var index = -1;
        for (var i in list) {
            if ((list[i].address) && list[i].address === address) {
                index = i;
                break;
            }
        }
        if (index >= 0) {
            list.splice(index, 1);
        }
    } 
    catch (ex) {
        console.log(ex.message);
        return false;
    }
}

//====================================================//
//=SERVER FUNCTIONS===================================//
//====================================================//

function getServerList(callback) {
    "use strict";
    try
    {
        var url = "http://158.69.166.144:8080/list";
        serverListXHR.push({
            address: url,
            request: $.ajax({
                url: url,
                type: "GET",
                dataType: "json",
                error: function (error) {
                    removeXHRRequest(url, serverListXHR);
                    callback([]);
                },
                success: function (list) {
                    removeXHRRequest(url, serverListXHR);
                    if (list) {
                        return callback(list.result.servers);                        
                    }
                    return callback([]);
                }
            })
        });
    }
    catch (e) {
        removeXHRRequest(url, serverListXHR);
        console.log(e.message);
        return [];
    }
}
function getServerInfo(type, server, callback) {
    "use strict";
    try {
        var s = Date.now();
        serverInfoXHR.push({
            address: server,
            request: $.ajax({
                url: "http://" + server,
                dataType: "json",
                timeout: 5000,
                error: function () {
                    removeXHRRequest(server, serverInfoXHR);
                    return callback(null);
                },
                success: function (info) {
                    removeXHRRequest(server, serverInfoXHR);
                    if (info) {
                        var p = Math.round((Date.now() - s) * 0.45);
                        return callback(JSON.parse(JSON.stringify({
                            ping: getPingData(p),
                            server: getServerCache(info, server, type)
                        })));
                    }
                    else { callback(null); }
                }
            })
        });
    }
    catch (ex) {
        removeXHRRequest(server, serverInfoXHR);
        console.log(ex.message);
        return callback(null);
    }
}
function getServerData(name, cache) {
    "use strict";
    try {
        if (!name || !cache) {
            return undefined;
        }
        else {
            return name.split(".").reduce(function (p, c) {
                return p ? p[c] : undefined;
            }, cache);
        }
    }
    catch (ex) {
        return undefined;
    }
}
function getServerFavorite(ip, list, callback) {
    try
    {
        if (ip && list) {
            for (var s in list) {
                if (list[s] && list[s].ip === ip) {
                    return callback(s);
                }
            }
        }
    }
    catch (e) {
        console.log(e.message);
        return callback(-1);
    }
    return callback(-1);
}
function getServerFromIndex(index) {
    try 
    {
        var slot = null;
        var slots = document.getElementsByClassName("browser_slots")[0];
        if (slots) {
            $(slots).children().each(function(i, s) {
                var id = $(s).attr("data-index");
                if (id === index) {
                    slot = s;
                    return true;
                }
            });
        }
        return (slot) ? slot : null;
    } 
    catch (ex) {
        console.log(ex.message);
        return null;
    }
}
function getServerFromId(id, serverList) {
    try 
    {
        for (var i in serverList) {
            if (serverList[i] === id)
                return serverList[i];
        }
        return null;
    } catch (ex) {
        console.log(ex.message);
        return null;
    }
}
function getServerFromAddress(address) {
    try 
    {
        var slot = document.getElementById(address);
        return (slot) ? slot : null;
    } catch (ex) {
        console.log(ex.message);
        return null;
    }
}
function getServerFromTrigger(trigger, className, classRoot) {
    try
    {
        var p = trigger;
        if (p) {
            if (p.className === className) return p;
            else if (p.className === classRoot) return null;
            else return getServerFromTrigger(p.parentNode, className, classRoot);
        }
        else return null;
    }
    catch (e) {
        console.log(e.message);
        return null;
    }
}

//====================================================//
//=PLAYER FUNCTIONS===================================//
//====================================================//

var previousMvp = "";
var serverPlayerEmblems = [];

function getPlayerSort(cache, callback) {
    try
    {
        var flag = cache.server.settings.teams.enabled;
        return (flag) 
            ? callback(cache.server.players.active.sort(function (a, b) {
                return (a.team.index - b.team.index || b.score - a.score || b.kills - a.kills || b.deaths - a.deaths || b.uid - a.uid);
            }))
            : callback(cache.server.players.active.sort(function (a, b) {
                return (b.score - a.score || b.kills - a.kills || b.deaths - a.deaths || b.uid - a.uid);
            }));

    }
    catch (e) {
        console.log(e.message);
        callback([]);
    }
}
function getPlayerInfo(name, callback) {
    try
    {
        if (previousMvp === name)
            return;
        else {
            $.ajax({
				crossOrigin: true,
                url: "http://browser.haloshare.org/getStats.php?name=" + name,
                dataType: "json",
                timeout: 5000,
                error: function () {
                    previousMvp = "";
                    return callback(null);
                },
                success: function (info) {
                    if (info.data && info.data[0]) {
                        var data = info.data[0];
                            previousMvp = data.Name;
                        return callback(JSON.parse(JSON.stringify({
                            id: data.PlayerID,
                            name: data.Name,
                            exp: data.EXP,
                            kills: data.Kills,
                            deaths: data.Deaths,
                            suicides: data.Suicides,
                            assists: data.Assists,
                            betrayals: data.Betrayals,
                            emblem: {
                                image: data.EmblemData.profilePicture,
                                color: data.EmblemData.backgroundColor,
                                colorRgba : hexToRgba(data.EmblemData.backgroundColor, 0.5)
                            }
                        })));
                    }
                    else { callback(null); }
                }
            });
        }
    } catch (ex) {
        previousMvp = "";
        console.log(ex.message);
        callback(null);
    }
}
function getPlayerFromName(name, playerList, callback) {
    try {
        for (var player in playerList) {
            var player = playerList[player];
            if (player.name === name) {
                if (callback)
                    callback(player);
                return player;
            }
        }
        return null;
    }
    catch (e) {
        console.log(e.message);
    }
}
function getPlayerEmbem(name) {
    try 
    {
        var flag = getPlayerEmblemFromName(name);
        if (flag !== null)
            return flag;
        else
        {
            var a1 = Math.floor(Math.random() * 29);
            var a2 = Math.floor(Math.random() * 29);
            var e1 = Math.floor(Math.random() * 29);
            var e2 = Math.floor(Math.random() * 29);
            var foreground = Math.floor(Math.random() * 79);
            var background = Math.floor(Math.random() * 47);
            var toggle = Math.floor(Math.random() * 1);
            var data = {
                name: name,
                emblem: {
                    image: "https://halo.bungie.net/stats/emblem.ashx?s=120&0={0}&1={1}&2={2}&3={3}&fi={4}&bi={5}&fl={6}&m=1"
                                .format(a1, a2, e1, e2, foreground, background, toggle),
                    foreground: foreground,
                    background: background
                }
            };
            serverPlayerEmblems.push(data);
            return data;
        }
    }
    catch (ex) {
        console.log(ex.message);
    }
}
function getPlayerEmblemFromName(name, callback) {
    try 
    {
        if (new String(name).valueOf() == "Unverified Player" || new String(name).valueOf() == "")
            return { 
                name: "{0} (A Lingering Soul Fragment)".format(name),
                emblem: {
                    error: true,
                    color: "rgba(98, 98, 98, 0.5)",
                    image: "http://i.imgur.com/wdGi3gM.png"
                }
            };
        else
        {
            for (var i in serverPlayerEmblems) {
                var emblem = serverPlayerEmblems[i];
                if (emblem && (new String(emblem.name).valueOf() == new String(name).valueOf())) {
                    if (callback) callback(i);
                    return emblem;
                }
            }
            return null;
        }
    } 
    catch (ex) {
        console.log(ex.message);
        return null;
    }
}

//====================================================//
//=DATA FUNCTIONS=====================================//
//====================================================//

function getMap(name) {
    "use strict";
    try {
        name = (name) ? name.toLowerCase() : null;
        if (name) {
            if (name.includes("main")) { return maps.main; }
            if (name.includes("guar")) { return maps.guar; }
            if (name.includes("rive")) { return maps.rive; }
            if (name.includes("aval")) { return maps.aval; }
            if (name.includes("edge")) { return maps.edge; }
            if (name.includes("reac")) { return maps.reac; }
            if (name.includes("turf")) { return maps.turf; }
            if (name.includes("zanz")) { return maps.zanz; }
            if (name.includes("cybe")) { return maps.cybe; }
            if (name.includes("bunk")) { return maps.bunk; }
            if (name.includes("stan")) { return maps.stan; }
            if (name.includes("chil")) { return maps.chil; }
            if (name.includes("shri")) { return maps.shri; }
            if (name.includes("dead")) { return maps.dead; }
            if (name.includes("hang")) { return maps.hang; }
            if (name.includes("flat")) { return maps.flat; }
            if (name.includes("lock")) { return maps.lock; }
            if (name.includes("stat")) { return maps.stat; }
            if (name.includes("none")) { return maps.none; }
            else { return maps.none; }
        }
        return maps.none;
    }
    catch (ex) {
        console.log(ex.message);
        return maps.none;
    }
}
function getVariant(name) {
    "use strict";
    try {
        name = (name) ? name.toLowerCase() : null;
        if (name) {
            if (name.includes("ball")) { return variants.ball; }
            if (name.includes("slay")) { return variants.slay; }
            if (name.includes("zomb")) { return variants.zomb; }
            if (name.includes("assa")) { return variants.assa; }
            if (name.includes("forg")) { return variants.forg; }
            if (name.includes("koth")) { return variants.koth; }
            if (name.includes("infe")) { return variants.infe; }
            if (name.includes("jugg")) { return variants.jugg; }
            if (name.includes("terr")) { return variants.terr; }
            if (name.includes("none")) { return variants.none; }
            if (name.includes("vip")) { return variants.vip; }
            if (name.includes("ctf")) { return variants.ctf; }
            else { return variants.none; }
        }
        return variants.none;
    }
    catch (ex) {
        console.log(ex.message);
        return variants.none;
    }
}

function getPointType(cache) {
    "use strict";
    try {
        if (cache) {
            var t = cache.variantType;
            var n = (t) ? t.toLowerCase() : null;
            if (n) {
                switch (n) {
                    case "assault":
                    case "territories":
                    case "ctf":
                    case "oddball":
                    case "koth": 
                        return 0;
                    case "zombies":
                    case "infection":
                    case "slayer":
                    case "juggernaut":
                    case "vip":
                        return 1;
                    default: 
                        return 0;
                }
            }
        }
        return 0;
    }
    catch (ex) {
        console.log(ex.message);
        return 0;
    }
}
function getPingData(ping) {
    "use strict";
    try {
        ping = (parseInt(ping)) ? ping : 0;
        var data = {
            value: ping,
            prefix: ping + "ms",
            quality: "Unknown",
            image: "resources/img/bars/bars_0.png"
        };
        if (ping >= 1 && ping <= 50) {
            data.image = "resources/img/bars/bars_4.png";
            data.quality = "Excellent";
        }
        else if (ping >= 51 && ping <= 90) {
            data.image = "resources/img/bars/bars_4.png";
            data.quality = "Good";
        }
        else if (ping >= 91 && ping <= 150) {
            data.image = "resources/img/bars/bars_3.png";
            data.quality = "Acceptable";
        }
        else if (ping >= 151 && ping <= 300) {
            data.image = "resources/img/bars/bars_2.png";
            data.quality = "Concerning";
        }
        else {
            data.image = "resources/img/bars/bars_1.png";
            data.quality = "Poor";
        }
        return data;
    }
    catch (ex) {
        console.log(ex.message);
        return null;
    }
}
function getSettingData(cache) {
    "use strict";
    try {
        var data = {
            teams: {
                enabled: false,
                image: "resources/img/state/teams_0.png"
            },
            sprint: {
                enabled: false,
                unlimited: false,
                image: "resources/img/state/sprint_0.png"
            },
            assassinations: {
                enabled: false,
                image: "resources/img/state/alive_2.png"
            },
            voice: {
                enabled: false,
                image: "resources/img/state/voice_0.png"
            },
            private: {
                enabled: false,
				width: 0,
                image: "resources/img/state/private_0.png"
            }
        };
        if (Number(cache.teams) === 1) {
            data.teams.enabled = true;
            data.teams.image = "resources/img/state/teams_0.png";
        }
        if (Number(cache.sprintEnabled) === 1) {
            data.sprint.enabled = true;
            data.sprint.image = "resources/img/state/sprint_1.png";
            if (parseInt(cache.sprintUnlimitedEnabled) === 1) {
                data.sprint.unlimited = true;
                data.sprint.image = "resources/img/state/sprint_1.png";
            }
        }
        if (Number(cache.assassinationEnabled) === 1) {
            data.assassinations.enabled = true;
            data.assassinations.image = "resources/img/state/alive_2.png";
        }
        if (Number(cache.VoIP) === 1) {
            data.voice.enabled = true;
            data.voice.image = "resources/img/state/voice_1.png";
        }
        var flag = getServerData("passworded", cache);
        if (flag != undefined && Number(flag) === 1) {
            data.private.enabled = true;
            data.private.image = "resources/img/state/private_1.png";
			data.private.width = "20px";
        }
        return data;
    }
    catch (ex) {
        console.log(ex.message);
        return null;
    }
}
function getTeamData(cache) {
    "use strict";
    try {
        var data = { 
            count: 0,
            leader: {
                team: "None",
                color: "None",
                kills: 0,
                score: 0,
                deaths: 0,
                ratio: 0,
                prefix: "None"
            },
            prefix: "None"
        };
        if (cache) {
            var flag = Number(cache.teams) === 1;
            var priv = Number(cache.passworded) === 1
            if (priv) {
                data.prefix = "This game is private";
                return data;
            }
            else {
                var teamStat = "";
                var teamType = -1;
                var teamPlayers = cache.players.sort(function(a, b) { return (a.team - b.team); });
                getTeamValueData(teamPlayers, function(teams) {
                    if (teams && teams.length >= 1) {

                        teamType    = getPointType(cache);
                        teamPlayers = teams.sort(function(a, b) { 
                            return (teamType === 0) 
                                ? (b.score - a.score) 
                                : (b.kills - a.kills); 
                        });

                        var teamA = teamPlayers[0],
                            teamB = teamPlayers[1] ? teamPlayers[1] : null,
                            teamC = teamPlayers[2] ? teamPlayers[2] : null;

                        var teamAColor = (teamA) ? getTeamColorData(teamA, flag) : null,
                            teamBColor = (teamB) ? getTeamColorData(teamB, flag) : null,
                            teamCColor = (teamC) ? getTeamColorData(teamC, flag) : null;

                        data.count = teamPlayers.length;
                        data.prefix = (teamAColor)
                            ? "1st: {0}".format(teamAColor.name)
                            : (teamA)
                                ? "1st: {0}".format(teamA.team)
                                : "1st: Unknown";
                        data.leader = {
                            team:   (teamA)      ? teamA.team      : "None",
                            color:  (teamAColor) ? teamAColor.name : "None",
                            kills:  (teamA)      ? teamA.kills     : 0,
                            deaths: (teamA)      ? teamA.deaths    : 0,
                            score:  (teamA)      ? teamA.score     : 0,
                            ratio:  (teamA)
                                ? (teamA.kills === 0 && teamA.deaths <= 0)
                                    ? "-{0}.00".format(teamA.deaths) 
                                    : parseFloat(teamA.kills / teamA.deaths).toFixed(2)
                                : 0,
                            prefix: "{0} with {1} {2}"
                                .format((teamAColor) ? teamAColor.name : (teamA) ? teamA.team : "None", 
                                        (teamA) ? (teamType === 1) ? teamA.kills : teamA.score : 0,
                                        (teamType === 1) ? "Kill(s)" : "Point(s)")
                        };

                        if (flag && teamPlayers.length === 2) {
                            if (teamA && teamB && isTie(teamA, teamB, teamType)) {
                                data.leader = {
                                    team: "None",
                                    color: "None",
                                    kills: "Tie",
                                    deaths: 0,
                                    score:  "Tie",
                                    ratio: 0,
                                    prefix: "Tie Game"
                                };
                            }
                            data.prefix = (teamAColor && teamBColor)
                                ? "1st: {0}, 2nd: {1}".format(teamAColor.name, teamBColor.name)
                                : (teamA && teamB)
                                    ? "1st: {0}, 2nd: {1}".format(teamA.team, teamB.team)
                                    : "1st: Unknown, 2nd: Unknown";
                        }
                        else {
                            data.prefix = "";
                            if (teamAColor || teamA) {
                                data.prefix += "1st: {0}".format((teamAColor)
                                    ? teamAColor.name
                                    : (teamA) ? teamA.team : "Unknown");
                            }
                            if (teamBColor || teamB) {
                                teamStat = (teamAColor) ? ", 2nd: {0}" : "1st: {0}";
                                data.prefix += teamStat.format((teamBColor)
                                    ? teamBColor.name
                                    : (teamB) ? teamB.team : "Unknown");
                            }
                            if (teamCColor || teamC) {
                                teamStat = (teamAColor && teamBColor) ? ", 3rd: {0}" : "1st: {0}";
                                data.prefix += teamStat.format((teamCColor)
                                    ? teamCColor.name
                                    : (teamC) ? teamC.team : "Unknown");
                            }
                        }

                    }
                });
            }
        }
        return data;
    }
    catch (ex) {
        console.log(ex.message);
        return { error: true };
    }
}
function getTeamColorData(team, teamFlag) {
    try 
    {
        if (!team) return colors[0];
        else
        {
            return (teamFlag)
                ? (team && team.team === 0) 
                    ? colors[18] 
                    : colors[3] 
                : (team && team.team <= colors.length) 
                    ? colors[team.team] 
                    : null;
        }
    } 
    catch (ex) {
        console.log(ex.message);
        return colors[0];
    }
}
function getTeamValueData(playerList, callback) {
    try 
    {
        var teams = [];
        for (var i in playerList) {
            var player = playerList[i];
            if (new String(player.name).valueOf() == null || new String(player.name).valueOf() == "") continue;
            else 
            {
                if (teams[player.team]) {
                    teams[player.team].kills  += player.kills;
                    teams[player.team].deaths += player.deaths;
                    teams[player.team].score  += player.score;
                }
                else {
                    teams.push({
                        team: player.team,
                        kills: player.kills,
                        deaths: player.deaths,
                        score: player.score
                    });
                }
            }
        }
        return (teams) ? callback(teams) : callback([]);
    } 
    catch (ex) {
        console.log(ex.message);
        return callback([]);
    }
}
function getPlayerData(cache, type) {
    "use strict";
    try {
        var data = {
            count: 0,
            allowed: 0,
            available: 0,
            prefix: "0 Players (0 Max)",
            prefixShort: "0/0",
            active: [],
            mvp: {
                name: ""
            }
        };
        if (cache) {
            var min = cache.numPlayers,
                max = cache.maxPlayers,
                flag = cache.teams,
                players = cache.players;
            data.count = min;
            data.allowed = max;
            data.available = (max - min);
            data.prefix = "{0} Players ({1} Max)".format(min, max);
            data.prefixShort = "{0}/{1}".format(min, max);
            if (players) {
                for (var i in players) {
                    var player = players[i];
                    if (player) {
                        var load = isPregame(cache);
                        var name = (player.name === "") ? "Unverified Player" : player.name;
                        var team = (load) ? colors[30] : (flag) ? (player.team === 0) ? colors[18] : colors[3] : colors[player.team];
                        data.active.push({
                            name: name,
                            score: player.score,
                            kills: player.kills,
                            deaths: player.deaths,
                            assists: player.assists,
                            ratio: (player.deaths <= 0) 
                                ? parseFloat(player.kills / 1).toFixed(2) 
                                : (player.kills === 0 && player.deaths > 0) 
                                    ? "-{0}.00".format(player.deaths) 
                                    : parseFloat(player.kills / player.deaths).toFixed(2),
                            uid: player.uid,
                            team: {
                                name: team.name,
                                color: team.hex,
                                colorRgba: hexToRgba(team.hex, 0.6),
                                index: player.team
                            },
                            state: {
                                value: (Number(player.isAlive) === 1) 
                                    ? "Alive" 
                                    : "Dead",
                                image: (load) 
                                    ? "resources/img/state/alive_0.png"
                                    : (Number(player.isAlive) === 1)
                                        ? "resources/img/state/alive_1.png"
                                        : "resources/img/state/alive_0.png"
                            },
                            profile: (type === "lobby") ? getPlayerEmbem(player.name) : {}
                        });
                    }
                }
                var players = data.active.sort(function(a, b) {
                    return (b.score - a.score || b.kills - a.kills);
                });
                if (players && players.length >= 1) {
                    data.mvp = {
                        name: players[0].name,
                        data: players[0]
                    };
                }
                return data;
            }
        }
        return data;
    }
    catch (ex) {
        console.log(ex.message);
        return null;
    }
}
function getMapData(cache) {
    "use strict";
    try {
        var data = {
            name: "Unknown",
            type: {
                name: "Unknown",
                prefix: "Default Map"
            },
            image: "resources/img/maps/map_17.png"
        };
        var map = getMap(cache.mapFile);
        if (map) {
            data.name = map.name;
            data.quote = map.quote;
            data.type = {
                name: cache.map,
                prefix: (cache.map.toLowerCase() === map.name.toLowerCase()) 
                    ? "{0}".format(cache.map)
                    : "{0}".format(cache.map)
            };
            data.image = map.image;
        }
        return data;
    }
    catch(ex) {
        console.log(ex.message);
        return null;
    }
}
function getVariantData(cache) {
    "use strict";
    try {
        var data = {
            name: "Unknown",
            type: "Unknown",
            image: "resources/img/gametypes/gametype_7.png"
        };
        var flag = cache.teams;
        var type = cache.variant;
        var variant = getVariant(cache.variantType);
        if (variant) {
            data.name = variant.name;
            data.custo = cache.variant;
            data.type = type;
            data.image = variant.image;
            data.quote = variant.quote;
            data.prefix = (flag) ? "Team {0}".format(variant.name) : "FFA {0}".format(variant.name);
        }
        return data;
    }
    catch(ex) {
        console.log(ex.message);
        return null;
    }
}
function getStatusData(cache) {
    try 
    {
        var data = { 
            state: "Unknown",
            prefix: "Unknown",
            joinable: "No",
            slots: 0
        };
        if (cache) {
            data.state = isPregame(cache);
			data.serverTitle = cache.name;
            data.prefix = (cache.status === "InGame") 
                ? "SESSION IN PROGRESS" 
                : (cache.status === "InLobby") 
                    ? "WAITING FOR MATCH TO BEGIN" 
                    : (cache.status === "Loading") 
                        ? "MATCH IS ABOUT TO BEGIN" 
                        : "" || "Unknown";
            data.joinable = (cache.numPlayers < cache.maxPlayers) 
                ? "Yes" 
                : "No" || "No";
            data.slots = parseInt(cache.maxPlayers - cache.numPlayers) || 0;
        }
        return data;
    } 
    catch (ex) {
        console.log(ex.message);
        return { error: true };
    }
}

function getServerCache(cache, server, type) {
    "use strict";
    try {
        var data = {
            name: "",
            host: "",
            isPregame: -1,
            private: false,
            settings: {},
            teams: {},
            players: {},
            map: {},
            variant: {},
            status: {},
            version: {
                game: "",
                lobby: ""
            },
            address: {
                url: server,
                prefix: "http://{0}".format(server)
            }
        };
        if (cache) {            
            data.name     = cache.name       || "Unknown";
            data.host     = cache.hostPlayer || "Unknown";
            data.private  = Number(cache.passworded) === 1;
            data.status   = getStatusData(cache);
            data.settings = getSettingData(cache);
            data.teams    = getTeamData(cache);
            data.players  = getPlayerData(cache, type, data.status);
            data.map      = getMapData(cache);
            data.variant  = getVariantData(cache);
            data.version.game  = cache.gameVersion;
            data.version.lobby = cache.eldewritoVersion;

        }
        return data;
    }
    catch (ex) {
        console.log(ex.message);
        return null;
    }
}

//====================================================//
//=CUSTOM FUNCTIONS===================================//
//====================================================//

function isTie(teamA, teamB, scoreType) {
    try 
    {
        return ((scoreType === 0 && teamA.score === teamB.score) || (scoreType === 1 && teamA.kills === teamB.kills));
    } 
    catch (ex) {
        console.log(ex.message);
        return false;
    }
}
function isPregame(cache) {
    try 
    {
        return (cache.status === "InLobby" || cache.status === "Loading");
    } 
    catch (ex) {
        console.log(ex.message);
        return false;
    }
}
function updateBrowserList() {
    var c = $(".browser_slots");
    if (c && c.children().length > 9)
        c.css("width", "1035px");
    else
        c.css("width", "1022px");
}

String.prototype.format = function () {
    var result = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp("\\{" + i + "\\}", "gi");
        result = result.replace(regexp, arguments[i]);
    }
    return result;
}

function hexToRgba(hex, opacity) {
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result 
        ? "rgba({0}, {1}, {2}, {3})"
            .format(parseInt(result[1], 16), 
                    parseInt(result[2], 16), 
                    parseInt(result[3], 16), opacity) 
        : "";
}

jQuery.fn.sortDomElements = (function () {
    return function (comparator) {
        return Array.prototype.sort.call(this, comparator).each(function (i) {
            this.parentNode.appendChild(this);
        });
    };
})();