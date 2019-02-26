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


/**
 * A queue that holds onto the items added to it and then dispatches them all
 * when the consumer subscribes.  Does not support multiple consumers.
 */
export class DispatchQueue<T> {

    private queuedValues: T[] = [];
    private subscriber: (value: T) => void;

    /**
     * Enqueues a value to onto the queue.  Dispatches the item immediately to the consumer
     * if one exists, otherwise adds the item to the queue for later dispatch.
     * @param value
     */
    public enqueue(value: T): void {
        if (this.subscriber) {
            this.subscriber(value);
        } else {
            this.queuedValues.push(value);
        }
    }

    /**
     * Called by a consumer to subscribe to the topic.  Returns a subscription that can be used to
     * unsubscribe.
     * @param next
     */
    public subscribe(subscriber: (value: T) => void): void {
        this.subscriber = subscriber;
        if (this.queuedValues && this.queuedValues.length > 0) {
            this.queuedValues.forEach( value => {
                this.subscriber(value);
            });
            this.queuedValues = [];
        }
    }

}
