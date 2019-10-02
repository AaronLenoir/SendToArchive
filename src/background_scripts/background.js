/* 
    Copyright 2019 Aaron Lenoir

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

browser.contextMenus.create({
    id: "send-to-archive",
    title: browser.i18n.getMessage("contextMenuTitle"),
    contexts: ["link"]
});

browser.browserAction.onClicked.addListener(function (tabInfo) {
    sendToInternetArchive(tabInfo.url);
});

browser.contextMenus.onClicked.addListener((info) => {
    if (info.menuItemId === "send-to-archive") {
        sendToInternetArchive(info.linkUrl);
    }
});

var sendToInternetArchive = function (url) {
    var rootUrl = "https://web.archive.org/save/";
    var targetUrl = rootUrl + url;
    browser.tabs.create({
        url: targetUrl,
        active: false
    });
};