export declare const events: {
    events: {
        bet_allowed: boolean;
        bettable: boolean;
        chart_time_period: null;
        created: string;
        description: null;
        display_order: number;
        end_date: null;
        full_slug: string;
        hidden: boolean;
        id: string;
        inplay_enabled: boolean;
        modified: string;
        name: string;
        parent_id: string;
        seo_description: null;
        short_name: null;
        slug: string;
        special_rules: null;
        start_date: string;
        start_datetime: string;
        state: string;
        type: {
            domain: string;
            scope: string;
        };
    }[];
    pagination: {
        next_page: string;
    };
};
export declare const market_boxing: {
    markets: ({
        bet_delay: number;
        cashout_enabled: boolean;
        categories: string[];
        category: string;
        complete: boolean;
        contract_selections: null;
        created: string;
        description: string;
        display_order: number;
        display_type: string;
        event_id: string;
        hidden: boolean;
        id: string;
        info: {
            reason: string;
        };
        inplay_enabled: boolean;
        market_type: {
            name: string;
            param?: undefined;
        };
        modified: string;
        name: string;
        slug: string;
        state: string;
        winner_count: number;
    } | {
        bet_delay: number;
        cashout_enabled: boolean;
        categories: string[];
        category: string;
        complete: boolean;
        contract_selections: null;
        created: string;
        description: string;
        display_order: number;
        display_type: string;
        event_id: string;
        hidden: boolean;
        id: string;
        info: {
            reason: string;
        };
        inplay_enabled: boolean;
        market_type: {
            name: string;
            param: string;
        };
        modified: string;
        name: string;
        slug: string;
        state: string;
        winner_count: number;
    })[];
};
//# sourceMappingURL=sample.d.ts.map