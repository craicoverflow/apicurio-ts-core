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

import {DispatchQueue} from "../../src/messaging/queue";


describe("Messaging - DispatchQueue", () => {

    beforeEach(() => {});

    it("enqueue", () => {
        let queue: DispatchQueue<string> = new DispatchQueue<string>();
        let values: string[] = [];
        queue.subscribe( value => {
            values.push(value);
        });
        queue.enqueue("one");
        queue.enqueue("two");
        queue.enqueue("three");
        queue.enqueue("four");

        expect(values).toEqual(["one", "two", "three", "four"]);
    });

    it("dispatch", () => {
        let queue: DispatchQueue<string> = new DispatchQueue<string>();
        let values: string[] = [];
        queue.enqueue("one");
        queue.enqueue("two");
        queue.enqueue("three");
        queue.subscribe( value => {
            values.push(value);
        });
        queue.enqueue("four");

        expect(values).toEqual(["one", "two", "three", "four"]);
    });

});
