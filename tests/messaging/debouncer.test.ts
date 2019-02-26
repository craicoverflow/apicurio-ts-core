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

import {Debouncer} from "../../src/messaging/debouncer";


describe("Messaging - Debouncer Test", () => {

    beforeEach(() => {});

    it("Get Value", () => {
        let debouncer: Debouncer<string> = new Debouncer<string>({}, () => {});
        expect(debouncer.getValue()).toBeUndefined();
        debouncer.emit("foo");
        expect(debouncer.getValue()).toEqual("foo");
    });

    it("Debounce", async () => {
        let promise: Promise<any> = new Promise(resolve => {
            let numCallbacks: number = 0;
            let debouncer: Debouncer<string> = new Debouncer<string>({ period: 100 }, value => {
                numCallbacks++;
                resolve({
                    count: numCallbacks,
                    value: value
                });
            });
            debouncer.emit("foo");
            debouncer.emit("bar");
            debouncer.emit("baz");
        });

        let result: any = await promise;

        expect(result.value).toEqual("baz");
        expect(result.count).toEqual(1);
    });

});
