var nav = null;

function Navigation() {

    var self = this;
    var navVaultPages = [
        "",
        "http://halovau.lt/inc/api/listMaps.api",
        "http://halovau.lt/inc/api/listFiles.api",
        "http://halovau.lt/inc/api/listTopics.api"
    ];
    var navRedditPages = [
        "", "", ""
    ];
    var navHeader = $('.content_navigation_header')[0];
    var navFooter = $('.content_navigation_footer')[0];

    this.navVaultInit = function() {
        try 
        {
            
        } catch (ex) {
            console.log(ex.message);
        }
    }
    this.navGetVaultPage = function(type) { 
        try 
        {
            var page = navVaultPages[type];
            if (page) {
                switch (type) {
                    case 0: return "";
                    case 1: return page + "?p={0}&r={1}&uid={2}&creator={3}&map={4}&gtype={5}&search={6}";
                    case 2: return page + "?p={0}&r={1}&uid={2}&creator={3}&type={4}&search={5}";
                    case 3: return page + '?p={0}&r={1}&uid={2}&author={3}&flair={4}&search={5}';
                    default: return page;
                }
            }
        } catch (ex) {
            console.log(ex.message);
        }
    }
    this.navSetVaultPage = function(type) { 
        try 
        {
            if (navFooter) {
                $(navFooter).empty();
                switch (type) {
                    case 0: navFooter.innerHTML = 
                                '<li data-filter="0" class="nav_footer_item selected"><i class="nav_header_item_arrow fa fa-chevron-down" aria-hidden="true"></i>Recent</li>' +
                                '<li data-filter="1" class="nav_footer_item">Maps</li>' +
                                '<li data-filter="2" class="nav_footer_item">Files</li>' +
                                '<li data-filter="3" class="nav_footer_item">Community</li>' +
                                '<li data-filter="4" class="nav_footer_item">Browser</li>';
                            break;
                    case 1: navFooter.innerHTML = 
                                '<li data-filter="0" class="nav_footer_item">Recent</li>' +
                                '<li data-filter="1" class="nav_footer_item selected"><i class="nav_header_item_arrow fa fa-chevron-down" aria-hidden="true"></i>Maps</li>' +
                                '<li data-filter="2" class="nav_footer_item">Files</li>' +
                                '<li data-filter="3" class="nav_footer_item">Community</li>' +
                                '<li data-filter="4" class="nav_footer_item">Browser</li>';
                            break;
                    case 2: navFooter.innerHTML = 
                                '<li data-filter="0" class="nav_footer_item">Recent</li>' +
                                '<li data-filter="1" class="nav_footer_item">Maps</li>' +
                                '<li data-filter="2" class="nav_footer_item selected"><i class="nav_header_item_arrow fa fa-chevron-down" aria-hidden="true"></i>Files</li>' +
                                '<li data-filter="3" class="nav_footer_item">Community</li>' +
                                '<li data-filter="4" class="nav_footer_item">Browser</li>';
                            break;
                    case 3: navFooter.innerHTML = 
                                '<li data-filter="0" class="nav_footer_item">Recent</li>' +
                                '<li data-filter="1" class="nav_footer_item">Maps</li>' +
                                '<li data-filter="2" class="nav_footer_item">Files</li>' +
                                '<li data-filter="3" class="nav_footer_item selected"><i class="nav_header_item_arrow fa fa-chevron-down" aria-hidden="true"></i>Community</li>' +
                                '<li data-filter="4" class="nav_footer_item">Browser</li>';
                            break;
                    case 4: navFooter.innerHTML = 
                                '<li data-filter="0" class="nav_footer_item">Recent</li>' +
                                '<li data-filter="1" class="nav_footer_item">Maps</li>' +
                                '<li data-filter="2" class="nav_footer_item">Files</li>' +
                                '<li data-filter="3" class="nav_footer_item">Community</li>' +
                                '<li data-filter="4" class="nav_footer_item selected"><i class="nav_header_item_arrow fa fa-chevron-down" aria-hidden="true"></i>Browser</li>';
                            break;
                    default: break;
                }
            }
        } catch (ex) {
            console.log(ex.message);
        }
    }
    this.navLoadVaultPage = function(page) { }
    this.navLoadVaultPagination = function(count) { }

}

$(document).ready(function(){

})