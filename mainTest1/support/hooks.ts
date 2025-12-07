import {Before, After} from '@cucumber/cucumber';
import{request} from '@playwright/test';
import { CustomWorld } from './world';
import { apiClient } from './apiClient';

Before(async function (this:CustomWorld) {
    this.request = await request.newContext ({
        baseURL: "https://rahulshettyacademy.com"
    });

    this.apiClient = new apiClient(this.request);
});

After(async function (this:CustomWorld){
    if(this.request) {
        await this.request.dispose();
    }
});