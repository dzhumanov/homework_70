export interface Contact {
    name: string;
    phone: number;
    email: string;
    photo: string;
}

export interface ContactsList{
    [contactId:string]: Contact;
}