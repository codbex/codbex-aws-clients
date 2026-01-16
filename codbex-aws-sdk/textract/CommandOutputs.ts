export declare const BlockType: {
    readonly CELL: "CELL";
    readonly KEY_VALUE_SET: "KEY_VALUE_SET";
    readonly LAYOUT_FIGURE: "LAYOUT_FIGURE";
    readonly LAYOUT_FOOTER: "LAYOUT_FOOTER";
    readonly LAYOUT_HEADER: "LAYOUT_HEADER";
    readonly LAYOUT_KEY_VALUE: "LAYOUT_KEY_VALUE";
    readonly LAYOUT_LIST: "LAYOUT_LIST";
    readonly LAYOUT_PAGE_NUMBER: "LAYOUT_PAGE_NUMBER";
    readonly LAYOUT_SECTION_HEADER: "LAYOUT_SECTION_HEADER";
    readonly LAYOUT_TABLE: "LAYOUT_TABLE";
    readonly LAYOUT_TEXT: "LAYOUT_TEXT";
    readonly LAYOUT_TITLE: "LAYOUT_TITLE";
    readonly LINE: "LINE";
    readonly MERGED_CELL: "MERGED_CELL";
    readonly PAGE: "PAGE";
    readonly QUERY: "QUERY";
    readonly QUERY_RESULT: "QUERY_RESULT";
    readonly SELECTION_ELEMENT: "SELECTION_ELEMENT";
    readonly SIGNATURE: "SIGNATURE";
    readonly TABLE: "TABLE";
    readonly TABLE_FOOTER: "TABLE_FOOTER";
    readonly TABLE_TITLE: "TABLE_TITLE";
    readonly TITLE: "TITLE";
    readonly WORD: "WORD";
};

export declare const TextType: {
    readonly HANDWRITING: "HANDWRITING";
    readonly PRINTED: "PRINTED";
};

export declare const RelationshipType: {
    readonly ANSWER: "ANSWER";
    readonly CHILD: "CHILD";
    readonly COMPLEX_FEATURES: "COMPLEX_FEATURES";
    readonly MERGED_CELL: "MERGED_CELL";
    readonly TABLE: "TABLE";
    readonly TABLE_FOOTER: "TABLE_FOOTER";
    readonly TABLE_TITLE: "TABLE_TITLE";
    readonly TITLE: "TITLE";
    readonly VALUE: "VALUE";
};

export declare const EntityType: {
    readonly COLUMN_HEADER: "COLUMN_HEADER";
    readonly KEY: "KEY";
    readonly SEMI_STRUCTURED_TABLE: "SEMI_STRUCTURED_TABLE";
    readonly STRUCTURED_TABLE: "STRUCTURED_TABLE";
    readonly TABLE_FOOTER: "TABLE_FOOTER";
    readonly TABLE_SECTION_TITLE: "TABLE_SECTION_TITLE";
    readonly TABLE_SUMMARY: "TABLE_SUMMARY";
    readonly TABLE_TITLE: "TABLE_TITLE";
    readonly VALUE: "VALUE";
};

export declare const SelectionStatus: {
    readonly NOT_SELECTED: "NOT_SELECTED";
    readonly SELECTED: "SELECTED";
};

export interface AnalyzeDocumentCommandOutput {
    DocumentMetadata?: {
        Pages?: number | undefined;
    };

    Blocks?: ({
        BlockType?: (typeof BlockType)[keyof typeof BlockType];
        Confidence?: number;
        Text?: string;
        TextType?: (typeof TextType)[keyof typeof TextType];
        RowIndex?: number;
        ColumnIndex?: number;
        RowSpan?: number;
        ColumnSpan?: number;
        Geometry?: {
            BoundingBox?: {
                Width?: number;
                Height?: number;
                Left?: number;
                Top?: number;
            };
            Polygon?: ({
                X?: number | undefined;
                Y?: number | undefined;
            })[];
            RotationAngle?: number;
        };
        Id?: string;
        Relationships?: ({
            Type?: (typeof RelationshipType)[keyof typeof RelationshipType];
            Ids?: string[];
        })[];
        EntityTypes?: ((typeof EntityType)[keyof typeof EntityType])[];
        SelectionStatus?: (typeof SelectionStatus)[keyof typeof SelectionStatus];
        Page?: number;
        Query?: {
            Text: string;
            Alias?: string;
            Pages?: string[];
        };
    })[];

    HumanLoopActivationOutput?: {
        HumanLoopArn?: string;
        HumanLoopActivationReasons?: string[];
        HumanLoopActivationConditionsEvaluationResults?: string
    };

    AnalyzeDocumentModelVersion?: string | undefined;
}