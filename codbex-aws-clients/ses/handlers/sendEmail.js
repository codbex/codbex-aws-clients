import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';


(async function main() {
    const commandInput = JSON.parse(process.env.COMMAND_INPUT);

    const client = new SESClient();
    const command = new SendEmailCommand(commandInput);
    const result = await client.send(command);

    console.log(JSON.stringify(result));
})();