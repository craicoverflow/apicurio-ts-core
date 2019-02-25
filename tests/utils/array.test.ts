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

import {ArrayUtils} from "../../src/utils/array";


describe("Utils - ArrayUtils Test", () => {

    beforeEach(() => {});

    it("intersect", () => {
        expect(ArrayUtils.intersect([1, 3, 5], [])).toEqual([])
        expect(ArrayUtils.intersect([1, 3, 5], [1, 5])).toEqual([1, 5])
        expect(ArrayUtils.intersect([1, 3, 5], [2, 4, 6])).toEqual([])
        expect(ArrayUtils.intersect([1, 3, 5], [1, 2, 3, 4, 5])).toEqual([1, 3, 5])
    });

    it("contains", () => {
        expect(ArrayUtils.contains([1, 3, 5], 3)).toBe(true);
        expect(ArrayUtils.contains([1, 3, 5], "foo")).toBe(false);
        expect(ArrayUtils.contains(["foo", "bar", "baz"], "foo")).toBe(true);
    });

    it("equals", () => {
        expect(ArrayUtils.equals([1, 3, 5], [])).toBe(false);
        expect(ArrayUtils.equals([1, 3, 5], [1, 3, 5])).toBe(true);
        expect(ArrayUtils.equals(["foo", "bar"], [1, 3, 5])).toBe(false);
        expect(ArrayUtils.equals(["foo", "bar"], ["foo"])).toBe(false);
        expect(ArrayUtils.equals(["foo", "bar"], ["foo", "bar"])).toBe(true);
    });

});
