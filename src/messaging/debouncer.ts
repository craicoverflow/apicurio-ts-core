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


export interface DebouncerOptions {
    period?: number;
}

/**
 * A simple debouncer class.  Used to convert a stream of values into a less
 * granular stream of values.
 */
export class Debouncer<T> {

    private currentValue: T;
    private timeoutId: any;

    constructor(private options: DebouncerOptions, private callback: (value: T) => void) {}

    /**
     * Gets the current value.
     */
    public getValue(): T {
        return this.currentValue;
    }

    /**
     * Send a value.
     * @param value
     */
    public emit(value: T): void {
        this.currentValue = value;
        let period: number = 250;
        if (this.options.period) {
            period = this.options.period;
        }

        // Clear any outstanding timeout.
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }

        // Emit the current value in the future
        this.timeoutId = setTimeout(() => {
            this.callback(this.currentValue);
        }, period);
    }

}
