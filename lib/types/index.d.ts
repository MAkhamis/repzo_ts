export interface Params {
    [key: string]: any;
}
export interface Data {
    [key: string]: any;
}
export interface Options {
    env?: "staging" | "local" | "production";
    headers?: {
        [key: string]: string;
    };
}
export interface Headers {
    "api-key": string;
    "Content-Type": string;
    Accept: string;
    [key: string]: string;
}
export declare namespace Service {
    namespace Client {
        interface Financials {
            credit_limit?: number;
        }
        type JobType = 0 | 1 | 2 | 3 | 4 | 5 | 6;
        interface JobObject {
            type: JobType[];
            description: string;
            tag: string;
            product_id?: string;
            form_id?: string;
            is_required?: boolean;
            category_id?: string;
            order?: number;
            company_namespace: string[];
        }
        interface ShelfshareTarget {
            msl: string;
            contracted_checkout: number;
            contracted_shelf_length: number;
            total_category_length: number;
        }
        interface RepTarget {
            rep: string;
            target: number;
            classification: string;
        }
        interface ClientSchema {
            _id: string;
            local_name?: string;
            tags?: string[];
            cell_phone?: string;
            city?: string;
            client_code?: string;
            contact_name?: string;
            contact_title?: string;
            country?: string;
            disabled?: boolean;
            formatted_address?: string;
            lat?: number;
            lng?: number;
            location_verified?: boolean;
            name: string;
            phone?: string;
            state?: string;
            zip?: string;
            assigned_to?: string[];
            last_location_update?: number;
            credit_limit?: number;
            tax_number?: string;
            sync_id?: string;
            rep_targets?: RepTarget[];
            shelf_share_targets?: ShelfshareTarget[];
            profile_pic?: string;
            logo?: string;
            website?: string;
            email?: string;
            comment?: string;
            parent_client_id?: string;
            target_visit?: number;
            geofencing_radius?: number;
            price_tag?: string;
            jobs?: JobObject[];
            status?: string;
            job_category?: string[];
            availability_msl?: string[];
            territory?: string;
            sv_priceList?: string;
            assigned_media?: string[];
            assigned_products?: string[];
            assigned_product_groups?: string;
            verifiedUntil?: number;
            financials?: Financials;
            customFields?: {
                [key: string]: any;
            };
            paymentTerm?: string;
            speciality?: string[];
            company_namespace: string[];
            channel?: string;
            isChain?: boolean;
            chain?: string;
            teams?: string[];
            payment_type: "cash" | "credit";
            integration_meta?: {
                [key: string]: any;
            };
            integrated_client_balance?: number;
            createdAt: string;
            updatedAt: string;
            __v: number;
        }
        interface ClientBody {
            name?: string;
            local_name?: string;
            tags?: string[];
            cell_phone?: string;
            city?: string;
            client_code?: string;
            contact_name?: string;
            contact_title?: string;
            country?: string;
            disabled?: boolean;
            formatted_address?: string;
            lat?: number;
            lng?: number;
            location_verified?: boolean;
            phone?: string;
            state?: string;
            zip?: string;
            assigned_to?: string[];
            last_location_update?: number;
            credit_limit?: number;
            tax_number?: string;
            sync_id?: string;
            rep_targets?: RepTarget[];
            shelf_share_targets?: ShelfshareTarget[];
            profile_pic?: string;
            logo?: string;
            website?: string;
            email?: string;
            comment?: string;
            parent_client_id?: string;
            target_visit?: number;
            geofencing_radius?: number;
            price_tag?: string;
            jobs?: JobObject[];
            status?: string;
            job_category?: string[];
            availability_msl?: string[];
            territory?: string;
            sv_priceList?: string;
            assigned_media?: string[];
            assigned_products?: string[];
            assigned_product_groups?: string;
            verifiedUntil?: number;
            financials?: Financials;
            customFields?: {
                [key: string]: any;
            };
            paymentTerm?: string;
            speciality?: string[];
            company_namespace?: string[];
            channel?: string;
            isChain?: boolean;
            chain?: string;
            teams?: string[];
            payment_type?: "cash" | "credit";
            integration_meta?: {
                [key: string]: any;
            };
            integrated_client_balance?: number;
        }
        type PopulatedKeys = "tags" | "reps" | "assigned_to" | "sv_priceList" | "paymentTerm" | "job_category" | "msl" | "chain" | "channel" | "status" | "product" | "assigned_products" | "assigned_product_groups" | "speciality" | "teams";
        export namespace Find {
            type Params = DefaultPaginationQueryParams & {
                from_updatedAt?: number;
                to_updatedAt?: number;
                from_createdAt?: number;
                to_createdAt?: number;
                createdAt?: number;
                updatedAt?: number;
                name?: string;
                search?: string;
                disabled?: boolean;
                active?: boolean;
                tags?: string[] | string;
                _id?: string[] | string;
                assigned_to?: string[] | string;
                availability_msl?: string[] | string;
                status?: string[] | string;
                CLIENT_TAGS?: string[] | string;
                AREA_TAGS?: string[] | string;
                isChain?: boolean;
                chain?: string[] | string;
                channel?: string[] | string;
                city?: string[] | string;
                client_code?: string[] | string;
                country?: string[] | string;
                location_verified?: boolean;
                state?: string[] | string;
                sv_priceList?: string[] | string;
                assigned_media?: string[] | string;
                assigned_products?: string[] | string;
                teams?: string[] | string;
                integrated_client_balance?: number;
                tax_number?: string;
                speciality?: string[] | string;
                assigned_product_groups?: string[] | string;
                populatedKeys?: PopulatedKeys[];
            };
            interface Result extends DefaultPaginationResult {
                data: ClientSchema[];
            }
        }
        export namespace Get {
            type ID = string;
            interface Params {
                populatedKeys: PopulatedKeys[];
            }
            type Result = ClientSchema;
        }
        export namespace Create {
            interface Body extends ClientBody {
                name: string;
            }
            type Result = ClientSchema;
        }
        export namespace Update {
            type ID = string;
            interface Body extends ClientBody {
                _id?: string;
                createdAt?: string;
                updatedAt?: string;
                __v?: number;
            }
            type Result = ClientSchema;
        }
        export namespace Remove {
            type ID = string;
            type Result = ClientSchema;
        }
        export {};
    }
}
export interface DefaultPaginationQueryParams {
    per_page?: number;
    page?: number;
    sort?: "name" | "client_code" | "createdAt" | "updatedAt";
    sortPageOrder?: "asc" | "dsc";
}
export interface DefaultPaginationResult {
    total_result: number;
    current_count: number;
    total_pages: number;
    current_page: number;
    per_page: number;
    first_page_url: string;
    last_page_url: string;
    next_page_url: string | null;
    prev_page_url: string | null;
    path: string;
    data: any[];
}
