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
}
