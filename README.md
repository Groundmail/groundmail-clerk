# groundmail-clerk

Deliver [Clerk](https://clerk.com) auth emails through [Groundmail](https://groundmail.dev) when you disable **Delivered by Clerk**.

Clerk has no custom SMTP form — turn off delivery per template, listen for `email.created`, and send with Groundmail.

## Install

```bash
npm install groundmail-clerk groundmail
```

```bash
GROUNDMAIL_API_KEY=gm_your_key_here
GROUNDMAIL_FROM_EMAIL=noreply@yourdomain.com
```

## Usage

```ts
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { createClerkEmailDeliverer } from 'groundmail-clerk'

const deliver = createClerkEmailDeliverer({
  from: process.env.GROUNDMAIL_FROM_EMAIL!,
  // apiKey: process.env.GROUNDMAIL_API_KEY,
})

export async function POST(req: Request) {
  const evt = await verifyWebhook(req)
  if (evt.type === 'email.created') {
    await deliver(evt.data)
  }
  return new Response('ok')
}
```

Also available as `import { createClerkEmailDeliverer } from 'groundmail/clerk'`.

## Docs

https://docs.groundmail.dev/guides/clerk

## License

MIT
