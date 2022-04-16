import axios from "axios";
import { Params, Data, Service, Options, Headers } from "./types/index";

export default class Repzo {
  private svAPIEndpoint: string;
  headers: Headers;
  constructor(apiKey: string, options?: Options) {
    this.svAPIEndpoint =
      !options?.env || options?.env == "production"
        ? "https://sv.api.repzo.me"
        : options?.env == "staging"
        ? "https://staging.sv.api.repzo.me"
        : options?.env == "local"
        ? "http://localhost:3030"
        : "";

    this.headers = {
      "api-key": apiKey,
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    if (options.headers) Object.assign(this.headers, options.headers);
  }

  private async _fetch(baseUrl: string, path: string, params?: Params) {
    let res = await axios.get(baseUrl + path, {
      params,
      headers: this.headers,
    });
    return res.data;
  }

  private async _create(
    baseUrl: string,
    path: string,
    body: Data,
    params?: Params
  ) {
    let res = await axios.post(baseUrl + path, body, {
      params,
      headers: this.headers,
    });
    return res.data;
  }

  private async _update(
    baseUrl: string,
    path: string,
    body: Data,
    params?: Params
  ) {
    let res = await axios.put(baseUrl + path, body, {
      params,
      headers: this.headers,
    });
    return res.data;
  }

  private async _delete(baseUrl: string, path: string, params?: Params) {
    let res = await axios.delete(baseUrl + path, {
      params,
      headers: this.headers,
    });
    return res.data;
  }

  client = {
    _path: "/client",
    find: async (
      params?: Service.Client.Find.Params
    ): Promise<Service.Client.Find.Result> => {
      let res: Service.Client.Find.Result = await this._fetch(
        this.svAPIEndpoint,
        this.client._path,
        params
      );
      return res;
      //   return axios.get(this.svAPIEndpoint + this.client.path, {
      //     params: params,
      //     headers: this.headers,
      //   });
    },

    get: async (
      id: Service.Client.Get.ID,
      params?: Service.Client.Get.Params
    ): Promise<Service.Client.Get.Result> => {
      return await this._fetch(
        this.svAPIEndpoint,
        this.client._path + `/${id}`,
        params
      );
      //   return axios.get(this.svAPIEndpoint + this.client.path + `/${id}`, {
      //     params: params,
      //   });
    },

    create: async (
      body: Service.Client.Create.Body
    ): Promise<Service.Client.Create.Result> => {
      let res = await this._create(this.svAPIEndpoint, this.client._path, body);
      return res;
      //   return axios.post(this.svAPIEndpoint + this.client.path, body, {
      //     headers: this.headers,
      //   });
    },

    update: async (
      id: Service.Client.Update.ID,
      body: Service.Client.Update.Body
    ): Promise<Service.Client.Update.Result> => {
      let res: Service.Client.Update.Result = await this._update(
        this.svAPIEndpoint,
        this.client._path + `/${id}`,
        body
      );
      return res;
      //   return axios.put(this.svAPIEndpoint + this.client.path + `/${id}`, body, {
      //     headers: this.headers,
      //   });
    },

    remove: async (
      id: Service.Client.Remove.ID
    ): Promise<Service.Client.Remove.Result> => {
      let res: Service.Client.Remove.Result = await this._delete(
        this.svAPIEndpoint,
        this.client._path + `/${id}`
      );
      return res;
      //   return axios.delete(this.svAPIEndpoint + this.client.path + `/${id}`, {
      //     headers: this.headers,
      //   });
    },
  };
}
