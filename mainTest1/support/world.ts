import {IWorldOptions, setWorldConstructor, World } from '@cucumber/cucumber';
import { APIRequestContext, APIResponse } from 'playwright';
import { apiClient } from './apiClient';

export class CustomWorld extends World {
    request!: APIRequestContext;
    apiClient!: apiClient;

    //scenario specific data
    placeId!: string;
    response!: APIResponse;
    getPlaceBody!:any;

    constructor(options: IWorldOptions){
        super(options);
    }
}