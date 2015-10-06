// Type definitions for Wirecloud NGSI
// Project: https://github.com/Wirecloud/wirecloud
// Definitions by: Rock Neurotiko <https://github.com/rockneurotiko>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "NGSI" {

    export interface Entity {
        id: string;
        isPattern?: boolean;
        type?: string;
    }

    export interface Attribute {
        name: string;
        type?: string;
    }

    export interface Condition {
        type: string;
        values: string[];
    }

    export interface AttributeValue {
        contextValue: Object;
        name: string;
        type?: AttributeValueT;
    }

    export type AttributeValueT = (string|Object[]|{[key: string]: Object});

    export interface AttributeUpdate {
        attributes: AttributeValue[];
        entity: Entity;
    }

    export interface AttributeDeletion {
        attributes: Attribute;
        entity: Entity;
    }

    export type Duration = string;

    export class Connection{
        constructor(url: string, options?: ConnectionOps);

        createRegistration(entities: Entity[], attributes: Attribute[], duration: Duration, providingApplication: string, options?: CreateRegOps): void;

        updateRegistration(regID: string, entities: Entity[], attributes: Attribute[], duration: Duration, providingApplication: string, options?: CreateRegOps): void;

        cancelRegistration(regID: string, options?: EmptyRegOps): void;

        discoverAvailability(entities: Entity[], attributeNames: string[], options?: CreateRegOps): void;

        query(entities: Entity[], attributeNames: string[], options?: QueryOps): void;

        updateAttributes(update: AttributeUpdate[], options?: GeneralOps): void;

        addAttributes(toAdd: AttributeUpdate[], options?: AddAttrOps): void;

        deleteAttributes(toDelete: AttributeDeletion[], options: DelAttrOps): void;

        createSubscription(entities: Entity[], attributeNames: string[], duration: Duration, throttling: Duration, conditions: Condition[], options: SubsOps): void;

        updateSubscription(subId: string, duration: Duration, throttling: Duration, conditions: Condition[], options?: SubsOps): void;

        cancelSubscription(subId: string, options?: SubsBaseOps): void;
    }

    // INTERFACES

    interface ConnectionOps {
        ngsi_proxy_url?: string;
        request_headers?: {[key: string]: string};
        use_user_fiware_token?: boolean;
    }

    interface ConnectionMethodsOps {
        onFailure?: () => void;
        onComplete?: () => void;
    }

    interface EmptyRegOps extends ConnectionMethodsOps {
        onSuccess?: () => void;
    }

    interface GeneralOps extends ConnectionMethodsOps {
        onSuccess?: (data: Object) => void;
    }

    interface CreateRegOps extends ConnectionMethodsOps {
        onSuccess?: (values: {registrationID: string, duration: Duration}) => void;
    }

    interface QueryOps extends ConnectionMethodsOps {
        flat?: boolean;
        onSuccess?: (values: Object[], details: Object) => void;
    }

    interface AddAttrOps extends ConnectionMethodsOps {
        onSuccess?: (data: Object, partial_errors: AttributeUpdate[]) => void;
    }

    interface DelAttrOps extends ConnectionMethodsOps {
        onSuccess?: (data: Object, partial_errors: AttributeDeletion[]) => void;
    }

    interface SubsBaseOps extends ConnectionMethodsOps {
        onSuccess?: (data: {subscriptionId: string}) => void;
    }

    interface SubsOps extends SubsBaseOps {
        onNotify: string|((data: Object) => void);
    }

}
