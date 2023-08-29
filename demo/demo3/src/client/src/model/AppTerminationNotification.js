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
    define(['ApiClient', 'model/AppTerminationNotificationLinks', 'model/OperationActionType'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AppTerminationNotificationLinks'), require('./OperationActionType'));
  } else {
    // Browser globals (root is window)
    if (!root.MecDemo3Api) {
      root.MecDemo3Api = {};
    }
    root.MecDemo3Api.AppTerminationNotification = factory(root.MecDemo3Api.ApiClient, root.MecDemo3Api.AppTerminationNotificationLinks, root.MecDemo3Api.OperationActionType);
  }
}(this, function(ApiClient, AppTerminationNotificationLinks, OperationActionType) {
  'use strict';

  /**
   * The AppTerminationNotification model module.
   * @module model/AppTerminationNotification
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>AppTerminationNotification</code>.
   * This type represents the information that the MEC platform notifies the subscribed application instance about  the corresponding application instance termination/stop.
   * @alias module:model/AppTerminationNotification
   * @class
   * @param notificationType {String} Shall be set to AppTerminationNotification.
   * @param operationAction {module:model/OperationActionType} 
   * @param maxGracefulTimeout {Number} Maximum timeout value in seconds for graceful termination or graceful stop of an application instance.
   * @param links {module:model/AppTerminationNotificationLinks} 
   */
  var exports = function(notificationType, operationAction, maxGracefulTimeout, links) {
    this.notificationType = notificationType;
    this.operationAction = operationAction;
    this.maxGracefulTimeout = maxGracefulTimeout;
    this.links = links;
  };

  /**
   * Constructs a <code>AppTerminationNotification</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppTerminationNotification} obj Optional instance to populate.
   * @return {module:model/AppTerminationNotification} The populated <code>AppTerminationNotification</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('notificationType'))
        obj.notificationType = ApiClient.convertToType(data['notificationType'], 'String');
      if (data.hasOwnProperty('operationAction'))
        obj.operationAction = OperationActionType.constructFromObject(data['operationAction']);
      if (data.hasOwnProperty('maxGracefulTimeout'))
        obj.maxGracefulTimeout = ApiClient.convertToType(data['maxGracefulTimeout'], 'Number');
      if (data.hasOwnProperty('_links'))
        obj.links = AppTerminationNotificationLinks.constructFromObject(data['_links']);
    }
    return obj;
  }

  /**
   * Shall be set to AppTerminationNotification.
   * @member {String} notificationType
   */
  exports.prototype.notificationType = undefined;

  /**
   * @member {module:model/OperationActionType} operationAction
   */
  exports.prototype.operationAction = undefined;

  /**
   * Maximum timeout value in seconds for graceful termination or graceful stop of an application instance.
   * @member {Number} maxGracefulTimeout
   */
  exports.prototype.maxGracefulTimeout = undefined;

  /**
   * @member {module:model/AppTerminationNotificationLinks} links
   */
  exports.prototype.links = undefined;

  return exports;

}));
