export interface IBook {
    title: string;
    author: string;
    description?: string;
    publishDate?: Date;
    pages?: number;
    genre?: string;
    createdAt?: Date;
    imageUrl?: string;
    downloadUrl?: string;
}
