export declare const FeatureType: {
    readonly FORMS: "FORMS";
    readonly LAYOUT: "LAYOUT";
    readonly QUERIES: "QUERIES";
    readonly SIGNATURES: "SIGNATURES";
    readonly TABLES: "TABLES";
};

export declare const ContentClassifier: {
    readonly FREE_OF_ADULT_CONTENT: "FreeOfAdultContent";
    readonly FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION: "FreeOfPersonallyIdentifiableInformation";
};

export interface AnalyzeDocumentCommandInput {
    Document?: {
        Bytes?: Uint8Array;
        S3Object?: {
            Bucket?: string | undefined;
            Name?: string | undefined;
            Version?: string | undefined;
        };
    };
    FeatureTypes?: (typeof FeatureType)[keyof typeof FeatureType][];
    HumanLoopConfig?: {
        HumanLoopName?: string;
        FlowDefinitionArn?: string;
        DataAttributes?: {
            ContentClassifiers?: (typeof ContentClassifier)[keyof typeof ContentClassifier];
        };
    };
    QueriesConfig?: {
        Queries?: {
            Text?: string;
            Alias?: string;
            Pages?: string[];
        };
    };
    AdaptersConfig?: {
        Adapters?: ({
            AdapterId?: string;
            Pages?: string[];
            Version?: string;
        })[];
    };
}