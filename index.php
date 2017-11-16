<?php include("../html/inc/core.php"); ?>
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <title>Server Browser</title>

    <!-- RESOURCE -->
    <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
    <link href="resources/fantality-font-min.css" rel="stylesheet" />
    <link href="resources/fantality-main.css" rel="stylesheet" />
    <link type="image/x-icon" rel="icon" href="//haloshare.org/favicon.ico" />
    <link type="image/x-icon" rel="shortcut icon" href="//haloshare.org/favicon.ico" />

    <!-- LINKS -->
    <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>

</head>
<body>
<!-- MAIN -->
    <div class="main">
<!-- NAVIGATION -->
        <div class="content_navigation">
            <div class="content_navigation_container">
                <ul class="content_navigation_header">
                    <li data-filter="1" class="nav_header_item selected">DewShare</li>
                </ul>
                <ul class="content_navigation_footer">
                    <li data-filter="all" class="nav_footer_item">All</li>
                    <li data-filter="media" class="nav_footer_item">Maps</li>
                    <li data-filter="files" class="nav_footer_item">Files</li>
                    <li data-filter="mapvar" onclick="location='//haloshare.org/forge.php';" class="nav_footer_item">Media</li>
                    <li data-filter="community" class="nav_footer_item">Community</li>
					<li class="nav_footer_item selected"><i class="nav_header_item_arrow fa fa-chevron-down" aria-hidden="true"></i>Servers</li>
                </ul>
            </div>
            <div class="content_login">
                <div class="content_login_container">
                    <div class="content_login_header">
                        <img class="content_login_header_avatar" src="resources/img/ico-avatar.gif" />
                        <div class="content_login_header_container">
                            <span class="content_login_header_title">Username</span>
                            <span class="content_login_header_active">Last Active</span>
                        </div>
                    </div>
                    <div class="content_login_dropdown">
                        <form class="login_dropdown_panel" action="//haloshare.org" method="post">
                            <div class="login_dropdown_panel_container">
                                <input class="login_dropdown_username" type="text" name="uname" placeholder="Username">
                                <input class="login_dropdown_password" type="password" name="pass" placeholder="Password">
                                <button class="login_dropdown_submission" type="submit" name="login">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
<!-- BROWSER -->
        <div class="browser"><div class="browserCount" style="color:white; text-align:center; font-weight:bold; padding:10px; margin-top:40px; font-size:1.7em;">
		<?php /*
		$serve = "http://".$_SERVER['HTTP_HOST']."/resources/getServers.php";
		$servers = get_url($serve);
        if ($servers !== FALSE AND $servers !== NULL) {
    		$list = json_decode($servers, 1);
    		$totalServers = count($list);
    		$totalPlayers = 0;
    		foreach($list as $srv) {
                if ($srv['numPlayers']) {
                    $totalPlayers += $srv['numPlayers'];
                }
    		} 
    		echo "".$totalPlayers." gamers playing in ".$totalServers." servers";
        } */
		?></div>
            <div class="browser_container">
                <div class="browser_container_spacer"></div>
                <div class="browser_slots">
                </div>
                <div class="browser_container_spacer"></div>
            </div>
        </div>
        <div class="controller_container">
            <div class="controller_port_container">
                <img class="controller_port_img" src="resources/img/controller/controller_port_4.png" alt="Loading...">
                <img class="controller_port_lay" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
            </div>
            <span class="controller_port_title">NAN</span>
        </div>
    </div>

	<div class="footer">

<!-- FOOTER LEGAL -->
	<div class="content_footer_legal" alt="WE HAVE NO ASSOCIATION WITH 343 INDUSTRIES, MICROSOFT, OR BUNGIE.">
		<p>Created by FantalityStudios & maintained by HaloVault  -  Resources used from Bungie&trade;</p>
	</div>

<!-- FOOTER LOGOS -->
	<div class="content_footer_logos">
		<div class="content_footer_logos">
			<ul>
				<li>
					<span class="footer-bg-logo"><a href="//www.bungie.net/">Bungie</a></span>
				</li>
				<li>
					<span class="footer-hv-logo"><a href="//haloshare.org/">HaloVault</a></span>
				</li>
				<li>
					<span class="footer-fs-logo"><a href="//www.fantalitystudios.com/">FantalityStudios</a></span>
				</li>
			</ul>
		</div>
	</div>
</div>
	<!-- LOBBY -->
        <div class="lobby">
            <div class="lobby_container">
                <div class="lobby_info_container">
					<div class="lobby_info_title"></div>
                    <div class="lobby_info_header">
                        <img class="lobby_info_img" src="resources/img/maps/map_4.jpg" />
                        <div class="lobby_info_mapinfo">
                            <div class="lobby_maptype_container">
                                <span class="lobby_maptype_type">{mapType}</span>
                                <span class="lobby_maptype_name">{mapName}</span>
                            </div>
                            <div class="lobby_mapinfo_container">
                                <span class="lobby_mapinfo_game_name">{mapVariant}</span>
                                <span class="lobby_mapinfo_game">{mapGame}</span>
                                <span class="lobby_mapinfo_teams">{mapTeams}</span>
                                <span class="lobby_mapinfo_leader">{mapTeams}</span>
                            </div>
                            <div class="lobby_mapstate_container">
                                <span class="lobby_mapstate_status">{mapStatus}</span>
                                <span class="lobby_mapstate_joinable">{mapJoinable}</span>
                                <span class="lobby_mapstate_party">{mapParty}</span>
                                <span class="lobby_mapstate_version">{mapVersion}</span>
                            </div>
                        </div>
                    </div>
                    <div class="lobby_info_footer">
                        <div class="lobby_mapstat_header">
                            <div class="lobby_mapstat_menu_info">
                                <img class="lobby_mapstat_img" src="resources/img/gametypes/gametype_7.png" />
                                <div class="lobby_mapstat_title">
                                    <span class="lobby_mapstat_type">Team Slayer</span>
                                    <span class="lobby_mapstat_name">on Guardian</span>
                                </div>
                            </div>
                            <div class="lobby_mapstat_menu_options">
                                <div class="lobby_mapstat_option_join">
                                    <img class="lobby_option_join_img" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                                    <span class="lobby_option_join_title">Join Game</span>
                                </div>
                                <div class="lobby_mapstat_option_exit">
                                    <img class="lobby_option_exit_img" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="/>
                                    <span class="lobby_option_exit_title">Leave Lobby</span>
                                </div>
                            </div>
                        </div>
                        <div class="lobby_mapstat_footer">
                            <div class="lobby_mapinfo_left">
								<div class="lobby_mapinfo_quote"></div>
								<div class="lobby_mapinfo_gamequote"></div>
                            </div>
                            <div class="lobby_mapinfo_right">
                                <div class="mapinfo_stats_container">
                                    <span class="mapinfo_stats_title">MVP: None</span>
                                    <div class="mapinfo_stats_info">
                                        <img class="mapinfo_stats_info_outer" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" />
                                        <div class="mapinfo_stats_info_inner">
                                            <img class="mapinfo_stats_emblem" src="https://halo.bungie.net/stats/emblem.ashx?s=70&0=0&1=2&2=2&3=0&fi=0&bi=0&fl=1&m=1" />
                                            <div class="mapinfo_stats_player">
                                                <span class="mapinfo_stats_playerkills">0 Kills</span>
                                                <span class="mapinfo_stats_playerdeaths">0 Deaths</span>
                                                <span class="mapinfo_stats_playerassists">0 Assists</span>
                                                <span class="mapinfo_stats_playerratio">0 Ratio</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="lobby_players_container">
                    <div class="lobby_players_header">
                        <span class="lobby_players_header_players">0 Players (0 Max)</span>
                    </div>
                    <div class="lobby_players_footer">
                        <div class="player_slots">
                        </div>
                    </div>
                </div>
            </div>
        </div>


    <script type="text/javascript" src="resources/fantality-utils-min.js"></script>
    <script type="text/javascript" src="resources/fantality-browser-test.js"></script>
    <script type="text/javascript" src="resources/fantality-lobby-test.js"></script>
    <script type="text/javascript" src="resources/fantality-gamepad-test.js"></script>
    <script type="text/javascript" src="resources/auth.js"></script>
    <!--<script type="text/javascript" src="resources/nav-utils.js"></script>-->

    <script>

        $(document).ready(function() {

            browser = new Browser();
            if (browser) { 
                browser.browserInit();
                browser.browserFetch();
            }

        });

    </script>

</body>
</html>