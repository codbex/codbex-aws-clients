import { SendEmailCommandInput } from './CommandInputs';
import { SendEmailCommandOutput } from './CommandOutputs';
import { BaseClient } from '../BaseClient';

export class TextractClient extends BaseClient {

    constructor() {
        super('ses/handlers');
    }

    public sendEmail(commandInput: SendEmailCommandInput): SendEmailCommandOutput {
        return this.executeCommand('node sendEmail.js', commandInput);
    }

}