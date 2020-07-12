export class Job {
    id!: string;
    type!: string;
    url!: string;
    created_at!: Date; 
    company!: string;
    company_url!: string;
    location!: string;
    title!: string;
    description!: string;
    how_to_apply!: string;
    company_logo!: string;
    isMarked?: boolean;

    constructor() {
        this.id = '',
        this.type = '';
        this.url = '';
        this.created_at = new Date();
        this.company = '';
        this.company_url = '';
        this.location = '';
        this.title = '';
        this.description = '';
        this.how_to_apply = '';
        this.company_logo = '';
        this.isMarked = false;
    }
}