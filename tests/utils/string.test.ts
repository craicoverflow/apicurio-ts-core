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

import {StringUtils} from "../../src/utils/string";


describe("Utils - StringUtils", () => {

    beforeEach(() => {});

    it("isJSON", () => {
        expect(StringUtils.isJSON(null)).toBe(false);
        expect(StringUtils.isJSON("")).toBe(false);
        expect(StringUtils.isJSON("Hello World")).toBe(false);
        expect(StringUtils.isJSON("[]")).toBe(true);
        expect(StringUtils.isJSON("[1, 2, 3]")).toBe(true);
        expect(StringUtils.isJSON("{ 'foo': 'bar' }")).toBe(true);
    });

    it("isXml", () => {
        expect(StringUtils.isXml(null)).toBe(false);
        expect(StringUtils.isXml("")).toBe(false);
        expect(StringUtils.isXml("Hello World")).toBe(false);
        expect(StringUtils.isXml("[]")).toBe(false);
        expect(StringUtils.isXml("[1, 2, 3]")).toBe(false);
        expect(StringUtils.isXml("{ 'foo': 'bar' }")).toBe(false);
        expect(StringUtils.isXml("<root />")).toBe(true);
    });


});
