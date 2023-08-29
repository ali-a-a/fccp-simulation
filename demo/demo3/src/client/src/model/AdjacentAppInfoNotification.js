/*
 * Copyright (c) 2022  The AdvantEDGE Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * MEC Demo 3 API
 * Demo 3 is an edge application that can be used with AdvantEDGE or ETSI MEC Sandbox to demonstrate MEC011 and MEC021 usage
 *
 * OpenAPI spec version: 0.0.1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.29
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AdjacentAppInfoNotificationAdjacentAppInfo', 'model/AssociateId', 'model/Link', 'model/TimeStamp'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AdjacentAppInfoNotificationAdjacentAppInfo'), require('./AssociateId'), require('./Link'), require('./TimeStamp'));
  } else {
    // Browser globals (root is window)
    if (!root.MecDemo3Api) {
      root.MecDemo3Api = {};
    }
    root.MecDemo3Api.AdjacentAppInfoNotification = factory(root.MecDemo3Api.ApiClient, root.MecDemo3Api.AdjacentAppInfoNotificationAdjacentAppInfo, root.MecDemo3Api.AssociateId, root.MecDemo3Api.Link, root.MecDemo3Api.TimeStamp);
  }
}(this, function(ApiClient, AdjacentAppInfoNotificationAdjacentAppInfo, AssociateId, Link, TimeStamp) {
  'use strict';

  /**
   * The AdjacentAppInfoNotification model module.
   * @module model/AdjacentAppInfoNotification
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>AdjacentAppInfoNotification</code>.
   * @alias module:model/AdjacentAppInfoNotification
   * @class
   * @param notificationType {String} Shall be set to \"AdjacentAppInfoNotification\".
   * @param links {module:model/Link} 
   */
  var exports = function(notificationType, links) {
    OneOfInlineNotification.call(this);
    this.notificationType = notificationType;
    this.links = links;
  };

  /**
   * Constructs a <code>AdjacentAppInfoNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AdjacentAppInfoNotification} obj Optional instance to populate.
   * @return {module:model/AdjacentAppInfoNotification} The populated <code>AdjacentAppInfoNotification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('notificationType'))
        obj.notificationType = ApiClient.convertToType(data['notificationType'], 'String');
      if (data.hasOwnProperty('timeStamp'))
        obj.timeStamp = TimeStamp.constructFromObject(data['timeStamp']);
      if (data.hasOwnProperty('associateId'))
        obj.associateId = ApiClient.convertToType(data['associateId'], [AssociateId]);
      if (data.hasOwnProperty('adjacentAppInfo'))
        obj.adjacentAppInfo = ApiClient.convertToType(data['adjacentAppInfo'], [AdjacentAppInfoNotificationAdjacentAppInfo]);
      if (data.hasOwnProperty('_links'))
        obj.links = Link.constructFromObject(data['_links']);
    }
    return obj;
  }

  /**
   * Shall be set to \"AdjacentAppInfoNotification\".
   * @member {String} notificationType
   */
  exports.prototype.notificationType = undefined;

  /**
   * @member {module:model/TimeStamp} timeStamp
   */
  exports.prototype.timeStamp = undefined;

  /**
   * 1 to N identifiers to associate the information for specific
   * @member {Array.<module:model/AssociateId>} associateId
   */
  exports.prototype.associateId = undefined;

  /**
   * @member {Array.<module:model/AdjacentAppInfoNotificationAdjacentAppInfo>} adjacentAppInfo
   */
  exports.prototype.adjacentAppInfo = undefined;

  /**
   * @member {module:model/Link} links
   */
  exports.prototype.links = undefined;

  // Implement OneOfInlineNotification interface:
  return exports;

}));