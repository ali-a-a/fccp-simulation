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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.MecDemo3Api) {
      root.MecDemo3Api = {};
    }
    root.MecDemo3Api.ProblemDetails = factory(root.MecDemo3Api.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ProblemDetails model module.
   * @module model/ProblemDetails
   * @version 0.0.1
   */

  /**
   * Constructs a new <code>ProblemDetails</code>.
   * @alias module:model/ProblemDetails
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ProblemDetails</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProblemDetails} obj Optional instance to populate.
   * @return {module:model/ProblemDetails} The populated <code>ProblemDetails</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('detail'))
        obj.detail = ApiClient.convertToType(data['detail'], 'String');
      if (data.hasOwnProperty('instance'))
        obj.instance = ApiClient.convertToType(data['instance'], 'String');
      if (data.hasOwnProperty('status'))
        obj.status = ApiClient.convertToType(data['status'], 'Number');
      if (data.hasOwnProperty('title'))
        obj.title = ApiClient.convertToType(data['title'], 'String');
      if (data.hasOwnProperty('type'))
        obj.type = ApiClient.convertToType(data['type'], 'String');
    }
    return obj;
  }

  /**
   * A human-readable explanation specific to this occurrence of the problem
   * @member {String} detail
   */
  exports.prototype.detail = undefined;

  /**
   * A URI reference that identifies the specific occurrence of the problem
   * @member {String} instance
   */
  exports.prototype.instance = undefined;

  /**
   * The HTTP status code for this occurrence of the problem
   * @member {Number} status
   */
  exports.prototype.status = undefined;

  /**
   * A short, human-readable summary of the problem type
   * @member {String} title
   */
  exports.prototype.title = undefined;

  /**
   * A URI reference according to IETF RFC 3986 that identifies the problem type
   * @member {String} type
   */
  exports.prototype.type = undefined;

  return exports;

}));
