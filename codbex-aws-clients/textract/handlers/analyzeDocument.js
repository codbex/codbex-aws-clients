import {
    TextractClient,
    AnalyzeDocumentCommand
} from '@aws-sdk/client-textract';

(async function main() {
    const commandInput = JSON.parse(process.env.COMMAND_INPUT);

    const client = new TextractClient();
    const command = new AnalyzeDocumentCommand(commandInput);
    const result = await client.send(command);

    console.log(JSON.stringify(result));
})();