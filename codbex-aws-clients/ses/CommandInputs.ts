export interface SendEmailCommandInput {
    Source: string;
    Destination: {
        ToAddresses?: string[];
        BccAddresses?: string[];
        CcAddresses?: string[];
    };
    Message: {
        Subject?: {
            Data: string;
            Charset?: string;
        };
        Body?: {
            Text?: {
                Data: string;
                Charset?: string;
            };
            Html?: {
                Data: string;
                Charset?: string;
            };
        };
    };
    ReplyToAddresses?: string[];
    ReturnPath?: string;
    SourceArn?: string;
    ReturnPathArn?: string;
    Tags?: ({
        Name: string;
        Value: string;
    })[];
    ConfigurationSetName?: string;
}
