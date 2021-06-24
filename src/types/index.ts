export interface User {
    username: String
}

export interface Category {
    id: Number,
    title: String,
    children?: Category
}

export interface Page {
    id: Number,
    title: String
}
