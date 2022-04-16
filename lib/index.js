import axios from "axios";
export default class Repzo {
    constructor(apiKey, options) {
        this.client = {
            _path: "/client",
            find: async (params) => {
                let res = await this._fetch(this.svAPIEndpoint, this.client._path, params);
                return res;
            },
            get: async (id, params) => {
                return await this._fetch(this.svAPIEndpoint, this.client._path + `/${id}`, params);
            },
            create: async (body) => {
                let res = await this._create(this.svAPIEndpoint, this.client._path, body);
                return res;
            },
            update: async (id, body) => {
                let res = await this._update(this.svAPIEndpoint, this.client._path + `/${id}`, body);
                return res;
            },
            remove: async (id) => {
                let res = await this._delete(this.svAPIEndpoint, this.client._path + `/${id}`);
                return res;
            }
        };
        this.svAPIEndpoint =
            !(options === null || options === void 0 ? void 0 : options.env) || (options === null || options === void 0 ? void 0 : options.env) == "production"
                ? "https://sv.api.repzo.me"
                : (options === null || options === void 0 ? void 0 : options.env) == "staging"
                    ? "https://staging.sv.api.repzo.me"
                    : (options === null || options === void 0 ? void 0 : options.env) == "local"
                        ? "http://localhost:3030"
                        : "";
        this.headers = {
            "api-key": apiKey,
            "Content-Type": "application/json",
            Accept: "application/json"
        };
        if (options === null || options === void 0 ? void 0 : options.headers)
            Object.assign(this.headers, options.headers);
    }
    async _fetch(baseUrl, path, params) {
        let res = await axios.get(baseUrl + path, {
            params,
            headers: this.headers
        });
        return res.data;
    }
    async _create(baseUrl, path, body, params) {
        let res = await axios.post(baseUrl + path, body, {
            params,
            headers: this.headers
        });
        return res.data;
    }
    async _update(baseUrl, path, body, params) {
        let res = await axios.put(baseUrl + path, body, {
            params,
            headers: this.headers
        });
        return res.data;
    }
    async _delete(baseUrl, path, params) {
        let res = await axios.delete(baseUrl + path, {
            params,
            headers: this.headers
        });
        return res.data;
    }
}
