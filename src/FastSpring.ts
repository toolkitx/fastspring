import {FastSpringRequest} from "./FastSpringRequest";

export class FastSpring {
    private host = 'https://api.fastspring.com'

    constructor(private username: string, private password) {
    }

    api(api: string) {
        return new FastSpringRequest(this.host, this.username, this.password).url(api);
    }

    products(id?: string) {
        return this.api(this.getApiUrl('/products', id));
    }

    orders(id?: string) {
        return this.api(this.getApiUrl('/orders', id));
    }

    accounts(id?: string) {
        return this.api(this.getApiUrl('/accounts', id));
    }

    sessions(id?: string) {
        return this.api(this.getApiUrl('/sessions', id));
    }

    subscriptions(id?: string) {
        return this.api(this.getApiUrl('/subscriptions', id));
    }

    private getApiUrl(api: string, optPath?: string) {
        return optPath ? `${api}/${optPath}` : api;
    }

}
