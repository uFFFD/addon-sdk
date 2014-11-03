/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const prefs = require("sdk/preferences/service");

exports.testPrefs = function(test) {
  test.assert(prefs.has("test.user_prefs.boolean"));
  test.assert(prefs.has("test.user_prefs.int"));
  test.assert(prefs.has("test.user_prefs.string"));
  test.assert(!prefs.has("test.user_prefs.non_existent"));
  test.assertEqual(false, prefs.get("test.user_prefs.boolean"));
  test.assertEqual(1024, prefs.get("test.user_prefs.int"));
  test.assertEqual("string", prefs.get("test.user_prefs.string"));
};
