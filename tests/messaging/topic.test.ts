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

import {Topic, TopicSubscription} from "../../src/messaging/topic";


describe("Messaging - Topic Test", () => {

    beforeEach(() => {});

    it("Get Value", () => {
        let topic: Topic<string> = new Topic<string>();
        expect(topic.getValue()).toBeUndefined();
        topic.send("foo");
        expect(topic.getValue()).toEqual("foo");
    });

    it("Subscribe", () => {
        let topic: Topic<string> = new Topic<string>();
        let theValue: string = undefined;
        topic.subscribe( value => {
            theValue = value;
        });

        expect(theValue).toBeUndefined();
        topic.send("foo");
        expect(theValue).toEqual("foo");
    });

    it("Unsubscribe", () => {
        let topic: Topic<string> = new Topic<string>();
        let theValue: string = undefined;
        let subscription:TopicSubscription<string> = topic.subscribe( value => {
            theValue = value;
        });

        expect(theValue).toBeUndefined();
        topic.send("foo");
        expect(theValue).toEqual("foo");

        subscription.unsubscribe();
        topic.send("bar");
        expect(theValue).toEqual("foo");
    });

});
