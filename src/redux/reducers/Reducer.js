const initialState = {
    posts: [],
    isPostsSuccess: false,
    isPostsFailed: false,

    user: {},
    isUserSuccess: false,
    isUserFailed: false,

    comments: [],
    isCommentsSuccess: false,
    isCommentsFailed: false,

    avatar: '',

    isLoading: false
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REQUESTED_POSTS':
            return {
                ...state,
                isPostsSuccess: false,
                isPostsFailed: false,
                isLoading: true
            }
        case 'REQUESTED_POSTS_SUCCESS':
            return {
                ...state,
                posts: action.data,
                isPostsSuccess: true,
                isLoading: false
            }
        case 'REQUESTED_POSTS_FAILED':
            return {
                ...state,
                isPostsFailed: true,
                isLoading: false
            }
        case 'REQUESTED_USER':
            return {
                ...state,
                isUserSuccess: false,
                isUserFailed: false,
                isLoading: true
            }
        case 'REQUESTED_USER_SUCCESS':
            return {
                ...state,
                user: action.data,
                isUserSuccess: true,
                isLoading: false
            }
        case 'REQUESTED_USER_FAILED':
            return {
                ...state,
                isUserFailed: true,
                isLoading: false
            }
        case 'REQUESTED_COMMENTS':
            return {
                ...state,
                isCommentsSuccess: false,
                isCommentsFailed: false,
                isLoading: true
            }
        case 'REQUESTED_COMMENTS_SUCCESS':
            return {
                ...state,
                comments: state.comments?.length ? [...state.comments, ...action.data] : action.data,
                isCommentsSuccess: true,
                isCommentsFailed: false,
                isLoading: false
            }
        case 'REQUESTED_COMMENTS_FAILED':
            return {
                ...state,
                isCommentsSuccess: false,
                isCommentsFailed: true,
                isLoading: false
            }
        case 'REQUESTED_COMMENTS_DELETED':
            return {
                ...state,
                comments: state.comments.filter(comment => comment.postId !== action.postId),
            }
        case 'SET_AVATAR':
            return {
                ...state,
                avatar: action.image
            }
        default:
                return state
    }
}