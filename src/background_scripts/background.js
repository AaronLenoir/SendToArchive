/* 
    Copyright 2017 Aaron Lenoir

    This file is part of SendToArchive.

    SendToArchive is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    SendToArchive is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with SendToArchive.  If not, see <http://www.gnu.org/licenses/>.
*/

var browser = browser || chrome;

browser.browserAction.onClicked.addListener(function (tabInfo) {
    var rootUrl = "https://web.archive.org/save/";
    var targetUrl = rootUrl + tabInfo.url;
    browser.tabs.create({
        url: targetUrl,
        active: false
    });
});