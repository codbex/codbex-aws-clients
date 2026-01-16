# codbex-aws-clients

This package provides streamlined SDK clients for AWS services, designed for seamless integration within codbex platforms.

## Installation

```bash
npm install @codbex/codbex-aws-clients
```

## Configuration

The clients can be configured with AWS credentials and region either through constructor parameters or environment variables:

- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_REGION`

When deployed to AWS ECS, ensure that the task's IAM role has the necessary permissions for the AWS services being used.

Example:

```typescript
const client = new SESClient({
    accessKeyId: 'your-access-key',
    secretAccessKey: 'your-secret-key',
    region: 'us-east-1'
});
```

## Usage

### Example: Sending an Email with SES

```javascript
import { response } from "@aerokit/sdk/http";
import { SESClient } from 'codbex-aws-clients/ses/SESClient';

const client = new SESClient();

try {
    const result = client.sendEmail({
        Source: 'noreply@example.com',
        Destination: {
            ToAddresses: ['user@example.com']
        },
        Message: {
            Subject: {
                Data: 'Test'
            },
            Body: {
                Text: {
                    Data: 'Hello World'
                },
                Html: {
                    Data: '<h1>Hello World</h1>'
                }
            }
        },

    });
    response.println("Email successfully sent: " + JSON.stringify(result, null, 4));
} catch (e) {
    response.println("Failed to send email: " + e);
}
```

## License

See LICENSE file.