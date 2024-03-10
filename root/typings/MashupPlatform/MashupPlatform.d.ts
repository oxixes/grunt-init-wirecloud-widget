// Type definitions for Wirecloud MashupPlatform
// Project: https://github.com/Wirecloud/wirecloud
// Definitions by: Rock Neurotiko <https://github.com/rockneurotiko>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "MashupPlatform" {
    export module http {
        function buildProxyURL(url: string, options?: optionsInterface): string;
        function makeRequest(url: string, options?: optionsInterface): void;
    }

    export module prefs {
        function get<T>(key: string): T;
        function registerCallback(callback: prefsCB): void;
        function set(key: string, value: prefsVals): void;
    }

    export module operator {
        var id: string;
        module context {
            function get<T>(version: string): T;
            function getAvailableContext(): Object; // Return context manager?
            function registerCallback(cb: (values: Object) => void): void;
        }
        function log(msg: string, level?: log): void;
    }

    export module widget {
        var id: string;
        module context {
            function get<T>(version: string): T;
            function getAvailableContext(): Object;  // Return context manager?
            function registerCallback(cb: (values: Object) => void): void;
        }
        function getVariable<T>(name: string): WidgetVariable<T>;
        function drawAttention(): void;
        function log(msg: string, level?: log): void;
    }

    export module wiring {
        function pushEvent(name: string, data: string): void;
        function registerCallback(name: string, cb: (data: string) => void): void;
    }

    export enum log {
        ERROR,
        WARN,
        INFO
    }

    // widget things
    interface WidgetVariable<T> {
        set(value: T): void;
        get(): T;
    }

    // prefs interfaces
    type prefsVals = boolean|number|string;

    interface prefsObj {
        [key: string]: boolean|number|string;
    }

    interface prefsCB {
        (values: prefsObj): void;
    }

    // http interfaces
    interface optionsInterface {
        contentType?: string;
        encoding?: string;
        method?: string;
        responseType?: string;
        parameters?: Object;  // Better type?
        postBody?: (ArrayBufferView|Blob|Document|string|FormData); // TODO
        requestHeaders?: Object; // Better?
        supportsAccessControl?: boolean;
        forceProxy?: boolean;
        context?: Object;
        onSuccess?: onSuccessCB;
        onFailure?: onFailureCB;
        onComplete?: onCompleteCB;
        onException?: onExceptionCB;
    }

    interface RequestInterface {
        url: string;
        options: optionsInterface;
        method: string;
        transport: XMLHttpRequest;
    }

    interface responseInterface {
        request: RequestInterface;
        status: Number;
        statusText: string;
        response?: (ArrayBuffer|Blob|string);
        responseText?: string;
    }

    interface onSuccessCB {
        (response: Object): void;
    }

    interface onFailureCB {
        (response: Object): void;
    }

    // onXYZ

    interface onCompleteCB {
        (response: Object): void;
    }

    interface onExceptionCB {
        (response: Object, exception: Error): void;
    }

    var location: string;
}
