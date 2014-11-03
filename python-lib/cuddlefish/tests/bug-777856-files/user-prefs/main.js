/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const { Cc, Ci } = require("chrome");

const prefs = require("sdk/preferences/service");

const test_prefs = [
  "test.user_prefs.boolean",
  "test.user_prefs.int",
  "test.user_prefs.string",
  "test.user_prefs.non_existent",
]

test_prefs.forEach(e => {
  if (prefs.has(e))
    console.log(e + " : " + prefs.get(e));
});

exports.main = function(options, callbacks) {
  // Close Firefox window. Firefox should quit.
  require("sdk/deprecated/window-utils").activeBrowserWindow.close();

  // But not on Mac where it stay alive! We have to request application quit.
  if (require("sdk/system/runtime").OS == "Darwin") {
    let appStartup = Cc['@mozilla.org/toolkit/app-startup;1'].
                     getService(Ci.nsIAppStartup);
    appStartup.quit(appStartup.eAttemptQuit);
  }
}
