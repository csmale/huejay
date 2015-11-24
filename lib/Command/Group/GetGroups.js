'use strict';

let Group = require('../../Model/Group');

/**
 * Get groups command
 *
 * Get a list of groups
 */
class GetGroups {
  /**
   * Invoke command
   *
   * @param {Client} client Client
   *
   * @return {Promise} Promise for chaining
   */
  invoke(client) {
    let options = {
      path: `api/${client.username}/groups`
    };

    return client.getTransport()
      .sendRequest(options)
      .then(result => {
        return Object.keys(result).map(groupId => {
          return new Group(groupId, result[groupId], result[groupId].action);
        })
      });
  }
}

module.exports = GetGroups;