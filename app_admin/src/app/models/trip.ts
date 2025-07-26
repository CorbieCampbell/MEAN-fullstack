export interface Trip {
    // Internal primary key in MongoDB
    _id: string,
    // Specific fields for the data
    code: string,
    name: string,
    length: string,
    start: Date,
    resort: string,
    perPerson: string,
    image: string,
    description: string
}