export interface Pokemon {
    name: string;
    sprites: {
        front_default: string;
    };
    moves: {
        move: {
            name: string;
            url: string;
        };
    }[];
}

export interface SearchFormError {
    field: string;
    msg: string;
}