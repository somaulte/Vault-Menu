var gamePad = null;

function GamePad() {

    var self = this;
    var gamepadValid = 'ongamepadconnected' in window;
    var gamepadControllers = [],
        gamepadControllersCount = 0;        
    var gamepadCount = 0,
        gamepadTimer = 0;

    var triggering_Stick1 = false,
        triggering_Stick2 = false,
        triggering_PadA = false,
        triggering_PadB = false;

    //=================================================//
    //=               Gamepad Functions               =//
    //=================================================//
    // 

    this.gamepadInit = function() {
        try 
        {
            if (gamepadValid === false)
                setInterval(self.gamepadFetch, 500);
            else {
                window.addEventListener("gamepadconnected", self.gamepadConnected);
                window.addEventListener("gamepaddisconnected", self.gamepadDisconnected);
            }
        } 
        catch (ex) {
            console.log(ex.message);
            return false;
        }
    }
    this.gamepadFetch = function() {
        try 
        {
            var pads = navigator.getGamepads 
                ? navigator.getGamepads() 
                : (navigator.webkitGetGamepads 
                    ? navigator.webkitGetGamepads() 
                    : []);
            for (var i = 0; i < pads.length; i++) { 
                if (pads[i] !== null)
                    gamepadCount++;
            }
            if (gamepadControllersCount > gamepadCount) {
                for (var i = 0; i < pads.length; i++) {
                    if (i in gamepadControllers && pads[i] === null) {
                        self.gamepadDisconnected(gamepadControllers[i]);
                        gamepadControllersCount--;
                    }
                }
            }
            else
            {
                for (var i = 0; i < pads.length; i++) {
                    if (pads[i]) {
                        if (pads[i].index in gamepadControllers) {
                            gamepadControllers[pads[i].index] = pads[i];
                        } else {
                            self.gamepadConnected(pads[i]);
                            gamepadControllersCount++;
                        }
                    }
                }
            }
            gamepadCount = 0;
        } 
        catch (ex) {
            console.log(ex.message);
            gamepadCount = 0;
        }
    }
    this.gamepadUpdate = function() {

        if (!gamepadValid) {
            self.gamepadFetch();
        }
        for (var j in gamepadControllers) {
            var c = gamepadControllers[j];
            if (c) {

                //A
                if (triggering_PadA) {
                    if (c.buttons[0].pressed === false) {
                        triggering_PadA = false;
                        if (browser)
                            browser.sendCommand("join", null);
                    }
                }
                else {
                    if (c.buttons[0].pressed) {
                        triggering_PadA = true;
                    }
                }
                //B
                if (triggering_PadB) {
                    if (c.buttons[1].pressed === false) {
                        triggering_PadB = false;
                        if (lobby)
                            lobby.sendCommand("exit", null);
                    }
                }
                else {
                    if (c.buttons[1].pressed) {
                        triggering_PadB = true;
                    }
                }

                //LEFT\RIGHT
                if (triggering_Stick1) {
                    if (c.axes[0].toFixed(1) > -0.5 && c.axes[0].toFixed(1) < 0.5) {
                        triggering_Stick1 = false;
                    }
                }
                else {
                    if (c.axes[0].toFixed(1) <= -0.7) {
                        triggering_Stick1 = true;
                        if (browser)
                            browser.sendCommand("select", 2);
                    }
                    else if (c.axes[0].toFixed(1) >= 0.7) {
                        triggering_Stick1 = true;
                        if (browser)
                            browser.sendCommand("select", 3);
                    }
                }

                //UP\DOWN
                if (triggering_Stick2) {
                    if (c.axes[1].toFixed(1) > -0.5 && c.axes[1].toFixed(1) < 0.5) {
                        triggering_Stick2 = false;
                    }
                }
                else 
                {
                    if (c.axes[1].toFixed(1) <= -0.7) {
                        triggering_Stick2 = true;
                        if (browser)
                            browser.sendCommand("select", 0);
                    }
                    else if (c.axes[1].toFixed(1) >= 0.7) {
                        triggering_Stick2 = true;
                        if (browser)
                            browser.sendCommand("select", 1);
                    }
                }

            }
        }
        requestAnimationFrame(self.gamepadUpdate);
    }

    //=================================================//
    //=                 Gamepad Events                =//
    //=================================================//

    this.gamepadConnected = function(e) {
        try 
        {
            if (e.index in gamepadControllers === false && (e.index >= 0 && e.index <= 3)) {
                clearTimeout(gamepadTimer);
                $(".controller_container").removeClass("toggled").addClass("toggled");
                $(".controller_port_lay").removeClass("toggled").addClass("toggled");
                $(".controller_port_img").attr("src", "resources/img/controller/controller_port_{0}.png".format(e.index));
                $(".controller_port_title").text("Controller ({0}) has been Connected!".format(e.index + 1));
                gamepadTimer = setTimeout(function() {
                    $(".controller_container").removeClass("toggled");
                    $(".controller_port_lay").removeClass("toggled");
                }, 5000);
                gamepadControllers[e.index] = e.gamepad;
                requestAnimationFrame(self.gamepadUpdate);
            }
        } 
        catch (ex) {
            console.log(ex.message)
            return false;
        }
    }
    this.gamepadDisconnected = function(e) {
        try 
        {
            delete gamepadControllers[e.index];
            if (e.index in gamepadControllers === false) {
                clearTimeout(gamepadTimer);
                $(".controller_container").removeClass("toggled").addClass("toggled");
                $(".controller_port_lay").removeClass("toggled").addClass("toggled");
                $(".controller_port_img").attr("src", "resources/img/controller/controller_port_{0}.png".format(e.index));
                $(".controller_port_title").text("Controller ({0}) has been Disconnected!".format(e.index + 1));
                gamepadTimer = setTimeout(function() {
                    $(".controller_container").removeClass("toggled");
                    $(".controller_port_lay").removeClass("toggled");
                }, 5000);
            }
        } 
        catch (ex) {
            console.log(ex.message)
            return false;
        }       
    }

}

$(document).ready(function() {

    gamePad = new GamePad();
    if (gamePad) {
        gamePad.gamepadInit();
    }

})