/**
 * onecx-data-orchestrator-bff
 * OneCX Data Orchestrator BFF
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: tkit_dev@1000kit.org
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { Status } from './status';
import { CustomResourcePermissionSpec } from './customResourcePermissionSpec';
import { Metadata } from './metadata';


export interface CustomResourcePermission { 
    apiVersion?: string;
    kind?: string;
    spec?: CustomResourcePermissionSpec;
    status?: Status;
    metadata?: Metadata;
}

