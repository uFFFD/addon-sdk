/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const prefs = require("sdk/preferences/service");

exports.testPrefs = function(test) {
  const branches = [
    "test.user_prefs1",
    "test.user_prefs2",
    "test.user_prefs3",
  ];
  for (let b of branches) {
    test.assert(prefs.has(b + ".boolean"));
    test.assert(prefs.has(b + ".int"));
    test.assert(prefs.has(b + ".string"));
    test.assertEqual(false, prefs.get(b + ".boolean"));
    test.assertEqual(1024, prefs.get(b + ".int"));
    test.assertEqual("string", prefs.get(b + ".string"));
  }
  test.assert(prefs.has("test.user_prefs.overwritten"));
  test.assertEqual(3, prefs.get("test.user_prefs.overwritten"));
};
