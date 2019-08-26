export interface SearchResult {
    track_id: number;
    track_name: string;
    artist_name: string;
    cover: string;
}
export interface SortByOption {
    key: number;
    value: string;
}

export interface Track {
    track_id: number;
    track_duration: number;
    track_name: string;
    album: Album;
    artist_name: string;
}

export interface Album {
    name: string;
    cover_small: string;
    cover_medium: string;
    cover_big: string;
    cover_xl: string;
}
