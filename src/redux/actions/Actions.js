export function requestPostsAction() {
    return { type: 'REQUESTED_POSTS' };
}

export function requestPostsSuccessAction(data) {
    return { type: 'REQUESTED_POSTS_SUCCESS', data: data };
}

export function requestPostsErrorAction() {
    return { type: 'REQUESTED_POSTS_FAILED' };
}

export function requestUserAction(id) {
    return { type: 'REQUESTED_USER', userId: id };
}

export function requestUserSuccessAction(data) {
    return { type: 'REQUESTED_USER_SUCCESS', data: data };
}

export function requestUserErrorAction() {
    return { type: 'REQUESTED_USER_FAILED' };
}

export function requestCommentsAction(id) {
    return { type: 'REQUESTED_COMMENTS', postId: id };
}

export function requestCommentsSuccessAction(data) {
    return { type: 'REQUESTED_COMMENTS_SUCCESS', data: data };
}

export function requestCommentsErrorAction() {
    return { type: 'REQUESTED_COMMENTS_FAILED' };
}

export function requestCommentsDeleteAction(id) {
    return { type: 'REQUESTED_COMMENTS_DELETED', postId: id };
}

export function avatarAction(image) {
    return { type: 'SET_AVATAR', image};
}