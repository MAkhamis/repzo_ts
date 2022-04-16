import { Service, Options, Headers } from "./types/index";
export default class Repzo {
    private svAPIEndpoint;
    headers: Headers;
    constructor(apiKey: string, options?: Options);
    private _fetch;
    private _create;
    private _update;
    private _delete;
    client: {
        _path: string;
        find: (params?: Service.Client.Find.Params | undefined) => Promise<Service.Client.Find.Result>;
        get: (id: Service.Client.Get.ID, params?: Service.Client.Get.Params | undefined) => Promise<Service.Client.Get.Result>;
        create: (body: Service.Client.Create.Body) => Promise<Service.Client.Create.Result>;
        update: (id: Service.Client.Update.ID, body: Service.Client.Update.Body) => Promise<Service.Client.Update.Result>;
        remove: (id: Service.Client.Remove.ID) => Promise<Service.Client.Remove.Result>;
    };
}
