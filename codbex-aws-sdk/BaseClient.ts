import { Command } from '@aerokit/sdk/platform';
import { Configurations } from '@aerokit/sdk/core';

export interface BaseConfiguration {
    readonly accessKeyId?: string;
    readonly secretAccessKey?: string;
    readonly region?: string;
}

export class BaseClient {

    private readonly handlersPath;
    private readonly accessKeyId;
    private readonly secretAccessKey;
    private readonly region;

    constructor(workingDirectory: string, configuration?: BaseConfiguration) {
        this.handlersPath = workingDirectory;
        this.accessKeyId = configuration?.accessKeyId ?? this.getEnvironmentVariable('AWS_ACCESS_KEY_ID');
        this.secretAccessKey = configuration?.secretAccessKey ?? this.getEnvironmentVariable('AWS_SECRET_ACCESS_KEY');
        this.region = configuration?.region ?? this.getEnvironmentVariable('AWS_REGION');
    }

    protected executeCommand(extCommand: string, commandInput: any): any {
        const commandResult = Command.execute(extCommand, {
            workingDirectory: `/target/dirigible/repository/root/registry/public/codbex-aws-sdk/${this.handlersPath}`,
        }, {
            AWS_ACCESS_KEY_ID: this.accessKeyId,
            AWS_SECRET_ACCESS_KEY: this.secretAccessKey,
            AWS_REGION: this.region,
            COMMAND_INPUT: JSON.stringify(commandInput)
        });

        return JSON.parse(commandResult.standardOutput);
    }

    protected getEnvironmentVariable(name: string, defaultValue?: string): string {
        const value = Configurations.get(name, defaultValue);
        if (value === undefined && defaultValue === undefined) {
            throw new Error(`Provide the '${name}' environment variable`);
        } else if (value === undefined) {
            return defaultValue as string;
        }
        return value;
    }
}
