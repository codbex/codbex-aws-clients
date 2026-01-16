import { SendEmailCommandInput } from './CommandInputs';
import { SendEmailCommandOutput } from './CommandOutputs';
import { BaseClient, BaseConfiguration } from '../BaseClient';

export class SESClient extends BaseClient {

    constructor(configuration?: BaseConfiguration) {
        super('ses/handlers', configuration);
    }

    public sendEmail(commandInput: SendEmailCommandInput): SendEmailCommandOutput {
        return this.executeCommand('node sendEmail.js', commandInput);
    }

}