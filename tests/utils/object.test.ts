///<reference path="../../node_modules/@types/jasmine/index.d.ts"/>

/**
 * @license
 * Copyright 2019 Red Hat
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {ObjectUtils} from "../../src/utils/object";


describe("Utils - ObjectUtils", () => {

    beforeEach(() => {});

    it("isNullOrUndefined", () => {
        expect(ObjectUtils.isNullOrUndefined(null)).toBe(true);
        expect(ObjectUtils.isNullOrUndefined(undefined)).toBe(true);
        expect(ObjectUtils.isNullOrUndefined("value")).toBe(false);
    });

    it("undefinedAsNull", () => {
        expect(ObjectUtils.undefinedAsNull(undefined)).toBeNull();
        expect(ObjectUtils.undefinedAsNull("foo")).toEqual("foo");
    });

    it("objectEquals", () => {
        expect(ObjectUtils.objectEquals("foo", "foo")).toBe(true);
        expect(ObjectUtils.objectEquals("foo", "bar")).toBe(false);

        let x: any = {};
        let y: any = {};
        expect(ObjectUtils.objectEquals(x, y)).toBe(true);

        x = { "property-1": "value-1" };
        y = { "property-1": "value-1" };
        expect(ObjectUtils.objectEquals(x, y)).toBe(true);

        x = { "property-1": "value-1" };
        y = { "property-1": "value-2" };
        expect(ObjectUtils.objectEquals(x, y)).toBe(false);

        x = [ "value1", "value2", "value3" ];
        y = [ "value1", "value2", "value3" ];
        expect(ObjectUtils.objectEquals(x, y)).toBe(true);

        x = [ "value1", "value2", "value3" ];
        y = [ "value3", "value1", "value2" ];
        expect(ObjectUtils.objectEquals(x, y)).toBe(false);

        x = { "property-1": "value-1", "property-2": "value-2" };
        y = { "property-2": "value-2", "property-1": "value-1" };
        expect(ObjectUtils.objectEquals(x, y)).toBe(true);

        x = {
            "property-1": "value-1",
            "property-2": {
                "subp1": "subv1",
                "subp2": "subv2"
            }
        };
        y = {
            "property-1": "value-1",
            "property-2": {
                "subp1": "subv1",
                "subp2": "subv2"
            }
        };
        expect(ObjectUtils.objectEquals(x, y)).toBe(true);

    });

});
