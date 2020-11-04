# @toolkitx/fastspring

[![npm version](https://img.shields.io/npm/v/@toolkitx/fastspring.svg?style=flat-square)](https://www.npmjs.com/package/@toolkitx/fastspring)
[![npm downloads](https://img.shields.io/npm/dm/@toolkitx/fastspring.svg?style=flat-square)](https://www.npmjs.com/package/@toolkitx/fastspring)

## Installing
Using npm

```
npm install @toolkitx/fastspring
```

## Example
Get instance
```ts
import {FastSpring, FastSpringPageResponse} from '@toolkitx/fastspring';
const fastSprint = new FastSpring('YOUR_USER_NAME', 'YOUR_PASSWORD');
```
Chain
```ts
fastSprint
.api('URL')
.head(key, value)
.query({key: 'value'})
.get()
// or .post(payload)
```

* Get accounts

```ts
const accounts: FastSpringPageResponse = await fastSprint.accounts().get();
```

* Get single account

```ts
const account = await fastSprint.accounts('ACCOUNT_ID').get();
```


* Query accounts

```ts
const accounts = await fastSprint.accounts().query({email: 'EXAMPLE@EMAIL'}).get();
```

* Create Session
```ts
const payload = {
    account: 'YOUR_ACCOUNT_ID',
    items: [
        {
            product: 'YOUR_PRODUCT_ID',
            quantity: 1,
        },
    ],
};
const session = await fastSprint.sessions().post(payload);
```

## Custom Request
```ts
await fastSprint.api('RELATE_URL').get();
await fastSprint.api('RELATE_URL').post(payload);;
```

