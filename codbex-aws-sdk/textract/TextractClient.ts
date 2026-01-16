import { AnalyzeDocumentCommandInput } from './CommandInputs';
import { AnalyzeDocumentCommandOutput } from './CommandOutputs';
import { BaseClient, BaseConfiguration } from '../BaseClient';

export class TextractClient extends BaseClient {

    constructor(configuration?: BaseConfiguration) {
        super('textract/handlers', configuration);
    }

    public analyzeDocument(commandInput: AnalyzeDocumentCommandInput): AnalyzeDocumentCommandOutput {
        return this.executeCommand('node analyzeDocument.js', commandInput);
    }

}