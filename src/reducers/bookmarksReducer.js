import { bookmark_add, bookmark_del, bookmark_mov, bookmark_upd, bookmarks_init } from "./types";

export const bookmarksReducer = (state = {}, action) => {
    switch (action.type) {
        case bookmarks_init:
            return action.payload;

        case bookmark_add:     
            break;
    

        case bookmark_del:
            break;

        case bookmark_mov:
            break;

        case bookmark_upd:
            break;

        default:
            return new Error(`"${action.type}" not implemented`);
    }
}

