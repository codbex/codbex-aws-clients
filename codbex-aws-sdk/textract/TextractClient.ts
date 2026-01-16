import { AnalyzeDocumentCommandInput } from './CommandInputs';
import { AnalyzeDocumentCommandOutput } from './CommandOutputs';
import { BaseClient } from '../BaseClient';

export class TextractClient extends BaseClient {

    constructor() {
        super('textract/handlers');
    }

    public analyzeDocument(commandInput: AnalyzeDocumentCommandInput): AnalyzeDocumentCommandOutput {
        return this.executeCommand('node analyzeDocument.js', commandInput);
    }

}