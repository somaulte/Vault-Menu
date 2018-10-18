var browser = null;
var browserDelay = 5000;
var browserTimer = null;
var browserClearing = false;
var browserAbort = false;
var browserAbortDelay = 2500;
var browserList = [];
var browserFavorites = [];

var browserSelected;
var browserSelectedSpot = 0;


function Browser() {

    "use strict";
    var self = this;

    //=================================================//
    //=               Browser Functions               =//
    //=================================================//
    // TODO:
    //
    //
    //

    this.browserSort = function() {
        try 
        {
            return true;
        } catch (ex) {
            console.log(ex.message);
            return false;
        }
    }
    this.browserClear= function() {
        try 
        {

            clearTimeout(browserTimer);
            clearXHRRequests(serverListXHR);
            clearXHRRequests(serverInfoXHR);
            clearXHRRequests(serverPlayerXHR);

            browserTimer = null;
            browserAbort = false;
            browserList = [];
            browserFavorites = [];
            browserClearing = true;

            //Set browser state
            $(".browser").removeClass("toggled");
            $(".browser_slots").empty();

            $(".browser_slot").on('click', '.browser_slot_img', self.browserSlotClick);
            $(".browser_slot").on('mouseenter', '.browser_slot_img', self.browserSlotMouse);
            $(".browser_slot").on('mouseleave', '.browser_slot_img', self.browserSlotMouse);
            $(".browser_slot").on('click', '.browser_slot_favi', self.browserFavoriteClick);

        } 
        catch (ex) {
            console.log(ex.message);
            return false;
        }
    }
    this.browserFetch = function() {
        try 
        {
            console.log("Getting list of servers.");
            console.log(" > Current pull interval is ({0} seconds)".format(browserDelay / 500));

            getServerList(function (serverList) {

                self.browserRemove(serverList);

                for (var i in serverList) {
                    getServerInfo("server", serverList[i], function(serverInfo) {
                        if (browserClearing) return;
                        else
                        {
                            if (serverInfo) {
                                var server = getServerFromAddress(serverInfo.server.address.url);
                                var flag = (server)
                                    ? self.browserUpdate(server, serverInfo)
                                    : self.browserCreate(serverInfo, i)
                            }
                        }
                    });
                }

                browserTimer = setTimeout(function () {
                    self.browserFetch();
                }, browserDelay);

            });

        } 
        catch (ex) {
            console.log(ex.message);
            return false;
        }
    }
    this.browserRemove = function(cache) {
        try 
        {
            var slots = document.getElementsByClassName("browser_slots")[0];
            if (slots) {
                if ($(slots).children().length <= 0)
                    return true;
                else
                {
                    $(slots).children().each(function(i, slot){
                        var id = $(slot).attr("id");
                        var name = $(slot).attr("name");
                        if (id) { 
                            var server = getServerFromId(id, cache);
                            if (server === null) { 
                                slots.removeChild(slot);
                                console.log(" > ({0}) has been removed.".format(name));
                            }
                        }
                    });
                }
            }
            return true;
        } catch (ex) {
            console.log(ex.message);
            return false;
        }
    }
    this.browserUpdate = function(server, cache) {
        try 
        {
            if (server && cache) {
				//var serverMap = getServerData("server", cache);
                var isFavorite = (browserFavorites.includes(cache.server.address.url)) 
                    ? "resources/img/misc/favorite_1.png" 
                    : "resources/img/misc/favorite_0.png";

                $($(server).find('.browser_slot_ping')[0])
                    .attr("title", "{0} : {1}".format(cache.ping.quality, cache.ping.prefix))
                    .attr("src", cache.ping.image);
                $($(server).find('.browser_slot_favi')[0]).attr("src", isFavorite);  
                $($(server).find('.browser_slot_players')[0]).text(cache.server.players.prefixShort);
                $($(server).find('.browser_slot_map')[0]).text(cache.server.map.name);
                $($(server).find('.browser_slot_map_name')[0]).text(cache.server.map.type.prefix);
                $($(server).find('.browser_slot_img')[0]).attr("src", cache.server.map.image);
                $($(server).find('.browser_slot_type')[0]).text(cache.server.variant.prefix);
                $($(server).find('.browser_slot_type_name')[0]).text(cache.server.variant.custo);
                $($(server).find('.browser_slot_variant')[0]).attr("src", cache.server.variant.image);
                $($(server).find('.browser_slot_private')[0]).attr("src", cache.server.settings.private.image);
                $($(server).find('.browser_slot_private')[0]).attr("width", cache.server.settings.private.width);
                $($(server).find('.browser_slot_sprint')[0]).attr("src", cache.server.settings.sprint.image);
                $($(server).find('.browser_slot_assass')[0]).attr("src", cache.server.settings.assassinations.image);
                $($(server).find('.browser_slot_teams')[0]).attr("src", cache.server.settings.teams.image);
                $($(server).find('.browser_slot_voice')[0]).attr("src", cache.server.settings.voice.image);
                //console.log(" > ({0}) has been updated.".format(cache.server.name));
                return true;
            }
        }
        catch (ex) {
            console.log(ex.message);
            return false;
        }
        return false;
    }
    this.browserCreate = function(cache, index) {
        try 
        {
            var slots = document.getElementsByClassName("browser_slots")[0];
            if (slots) {
                var slot = self.browserElement(cache, index);
                if (slot) {
                    var flagFavi = (browserFavorites.includes(cache.server.address.url)) 
                        ? "resources/img/misc/favorite_1.png" 
                        : "resources/img/misc/favorite_0.png";
                    slot.innerHTML = 
                        '<div class="browser_slot_outer">' +
                            '<img class="browser_slot_img" src="' + cache.server.map.image + '" />' +
                            '<div class="browser_slot_content">' +
                                '<span class="browser_slot_players">' + cache.server.players.prefixShort + '</span>' +
                                '<div class="browser_slot_header">' +
                                    '<div class="browser_slot_header_content">' +
                                        '<span class="browser_slot_name">' + cache.server.name + '</span>' +
                                        '<img class="browser_slot_favi" src="' + flagFavi + '" data-ip="' + cache.server.address.url + '" />' +
                                        '<img class="browser_slot_ping" title="' + "{0} : {1}".format(cache.ping.quality, cache.ping.prefix) + '" src="' + cache.ping.image + '" />' +
                                    '</div>' +
                                '</div>' +
								'<div class="browser_slot_basic_details">' +
                                        '<span class="browser_slot_type">' + cache.server.variant.prefix + '</span>' +
                                        '<span class="browser_slot_space"> on </span>' +
                                        '<span class="browser_slot_map">' + cache.server.map.name + '</span>' +
                                '</div>' +
                                '<div class="browser_slot_footer">' +
                                    '<div class="browser_slot_footer_content">' +
                                        '<span class="browser_slot_map_name">' + cache.server.map.type.prefix + '</span>' +
                                        '<span class="browser_slot_space_name"> on </span>' +
                                        '<span class="browser_slot_type_name">' + cache.server.variant.custo + '</span>' +
                                        '<img class="browser_slot_private" src="' + cache.server.settings.private.image + '" width="' + cache.server.settings.private.width + '" />' +
                                        '<img class="browser_slot_sprint" src="' + cache.server.settings.sprint.image + '" />' +
                                        '<img class="browser_slot_assass" src="' + cache.server.settings.assassinations.image + '" />' +
                                        '<img class="browser_slot_teams" src="' + cache.server.settings.teams.image + '" />' +
                                        '<img class="browser_slot_voice" src="' + cache.server.settings.voice.image + '" />' +
                                        '<img class="browser_slot_variant" src="' + cache.server.variant.image + '" />' +
                                    '</div>' +
                                '</div>' +
                            '</div>' +
                        '</div>';
                    if (slot.innerHTML) {
                        browserList.push(cache.server.address.url);
                        slots.appendChild(slot);
                        updateBrowserList();
                        //console.log(" > ({0}) has been added.".format(cache.server.name));
                        return true;
                    }
                }
            }
            return false;
        } 
        catch (ex) {
            console.log(ex.message);
            return false;
        }
    }
    this.browserElement = function(cache, index) {
        try 
        {
            var slot = document.createElement("div");
            if (slot) {

                slot.setAttribute("id", cache.server.address.url);
                slot.setAttribute("name", cache.server.name);
                slot.setAttribute("class", "browser_slot");
                slot.setAttribute("data-index", index);

                $(slot).on('click', '.browser_slot_img', self.browserSlotClick);
                $(slot).on('mouseenter', '.browser_slot_img', self.browserSlotMouse);
                $(slot).on('mouseleave', '.browser_slot_img', self.browserSlotMouse);

                $(slot).on('click', '.browser_slot_favi', self.browserFavoriteClick);

            }
            return (slot) ? slot : null;
        } catch (ex) {
            console.log(ex.message);
            return false;
        }
    }
    this.browserInit = function() {
        try 
        {

            $(".browser").addClass("toggled");
            $(".browser_slots").empty();

            browserTimer = null;
            browserAbort = false;
            browserClearing = false;
            browserList = [];
            browserFavorites = [];

            if (lobby)
                lobby = null;

            setTimeout(function() {
                browserAbort = true;
            }, browserAbortDelay);

        }
        catch (ex) {
            console.log(ex.message);
            return false;
        }
    }
    this.browserSelect = function(state) {
        try 
        {
            var type = parseInt(state);
            var slots = document.getElementsByClassName("browser_slots")[0];
            if (slots) {
                var count = $(slots).children().length;
                if (count >= 1) {
                    switch (type) {
                        case 0: //UP
                            browserSelectedSpot = (browserSelectedSpot <= 1) 
                                ? browserSelectedSpot 
                                : ((browserSelectedSpot - 3) >= 0) 
                                    ? browserSelectedSpot - 3 
                                    : 0;
                            break;
                        case 1: //DOWN
                            browserSelectedSpot = (browserSelectedSpot > (count - 2)) 
                                ? browserSelectedSpot 
                                : ((browserSelectedSpot + 3) <= count - 1) 
                                    ? browserSelectedSpot + 3 
                                    : count - 1;
                            break;
                        case 2: //LEFT
                            browserSelectedSpot = (browserSelectedSpot - 1 <= 0) ? 0 : browserSelectedSpot - 1;
                            break;
                        case 3: //RIGHT
                            browserSelectedSpot = (browserSelected == null && browserSelectedSpot === 0)
                                ? 0 
                                : (browserSelectedSpot + 1 >= count) 
                                    ? count - 1 
                                    : browserSelectedSpot + 1;
                            break;
                        default: return false;
                    }
                    if (browserSelected) {
                        $($(browserSelected).find('.browser_slot_img')[0]).removeClass('selected');
                        $($(browserSelected).find('.browser_slot_footer')[0]).removeClass('selected');
                        $($(browserSelected).find('.browser_slot_basic_details')[0]).removeClass('selected');
                        $($(browserSelected).find('.browser_slot_players')[0]).removeClass('selected');
                        browserSelected = null;
                    }
                    var slot = $(slots).children()[browserSelectedSpot];
                    if (slot) {
                        var i = $(slot).find('.browser_slot_img')[0];
                        var f = $(slot).find('.browser_slot_footer')[0];
                        var b = $(slot).find('.browser_slot_basic_details')[0];
                        var p = $(slot).find('.browser_slot_players')[0];
                        if (i) { $(i).addClass('selected'); }
                        if (f) { $(f).addClass('selected'); }
                        if (b) { $(b).addClass('selected'); }
                        if (p) { $(p).addClass('selected'); }
                        browserSelected = slot;
                        if ((slot.offsetTop + slot.clientHeight) > slots.clientHeight) {
                            $(slots).scrollTop(Math.abs((slots.clientHeight - (slot.offsetTop + slot.clientHeight))));
                        }
                        else $(slots).scrollTop(0);
                    }
                }
            }
        } 
        catch (ex) {
            console.log(ex.message);
            return false;
        }
    }
    this.sendCommand = function(command, args) { 
        try 
        {
            if (command) {
                switch (command) {
                    case "join":
                        if (browserSelected) {
                            self.browserClear();
                            var address = $(browserSelected).attr("id");
                            if (address) {
                                lobby = new Lobby();
                                if (lobby) {
                                    lobby.lobbyInit(address);
                                    lobby.lobbyFetch();
                                }
                            }
                        }
                        break;
                    case "select":
                        return (self.browserSelect(args));
                        break;
                    default: return false;
                }
            }
        } 
        catch (ex) {
            console.log(ex.message);
            return false;
        }
    }


    //=================================================//
    //=                Browser Events                 =//
    //=================================================//
    // TODO:
    //
    //
    //

    this.browserSlotClick = function(event) {
        var t = $(event.target)[0];
        if (t) {
            var slot = getServerFromTrigger(t, "browser_slot", "browser_slots");
            if (slot) {
                self.browserClear();
                var address = $(slot).attr("id");
                if (address) {
                    lobby = new Lobby();
                    if (lobby) {
                        lobby.lobbyInit(address);
                        lobby.lobbyFetch();
                    }
                }
            }
        }
    }
    this.browserSlotMouse = function(event) {
        try 
        {
            var t = $(event.target)[0];
            if (t) {
                var i = $(t.parentNode).find('.browser_slot_img')[0];
                var f = $(t.parentNode).find('.browser_slot_footer')[0];
                var b = $(t.parentNode).find('.browser_slot_basic_details')[0];
                var p = $(t.parentNode).find('.browser_slot_players')[0];
                switch (event.type) {
                    case "mouseenter": 
                        if (i) { $(i).addClass('selected'); }
                        if (f) { $(f).addClass('selected'); }
                        if (b) { $(b).addClass('selected'); }
                        if (p) { $(p).addClass('selected'); }
                        break;
                    case "mouseleave": 
                        if (i) { $(i).removeClass('selected'); }
                        if (f) { $(f).removeClass('selected'); }
                        if (b) { $(b).removeClass('selected'); }
                        if (p) { $(p).removeClass('selected'); }
                        break;
                    default: return;
                }
            }
        } 
        catch (ex) {
            console.log(ex.message);
            return false;
        }
    }
    this.browserFavoriteClick = function(event) {
        var t = $(event.target)[0];
        var slot = getServerFromTrigger(t, "browser_slot", "browser_slots");
        if (slot) {
            var fav = $(slot).attr("id");
            getServerFavorite(fav, browserFavorites, function (index) {
                if (index === -1 && browserFavorites.includes(fav) === false) {
                    $(t).attr('src', "resources/img/misc/favorite_1.png");
                    browserFavorites.push(fav);
                }
                else {
                    $(t).attr('src', "resources/img/misc/favorite_0.png");
                    browserFavorites.splice(index, 1);
                }
            });
        }
    }

}

$(document).ready(function() {

    $(window).on("keyup", {}, function(event) {
        try 
        {
            if (browser === null) return;
            else
            {
                switch (event.which) {
                    case 27: //Esc
                        browser.browserClear();
						dew.hide();
                    break;
                    default: break;
                }
            }
        } 
        catch (ex) {
            console.log(ex.message);
        }
    })

})

