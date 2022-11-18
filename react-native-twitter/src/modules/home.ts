import { configureStore, createSlice } from "@reduxjs/toolkit";

type HomeState = {
    userProfileImage: string,
    userName: string,
    userId: string,
    isCelebrity: boolean,
    tweetBody: string,
    tweetState: TweetState,
    isExpanded: boolean,
    isLike: boolean,
    isRetweet: boolean,
    commentCount: number,
    retweetCount: number,
    likeCount: number
}

enum TweetState {
    Liked,
    Retweeted,
    None
}

const initialState: HomeState = {
    userProfileImage: 'https://picsum.photos/id/1/200/',
    userName: 'Nan',
    userId: 'Nan',
    isCelebrity: false,
    tweetBody: '',
    tweetState: TweetState.None,
    isExpanded: false,
    isLike: false,
    isRetweet: false,
    commentCount: 0,
    retweetCount: 0,
    likeCount: 0 
}

const name = 'home';

const homeSlice = createSlice({
    name,
    initialState,
    reducers: {
        like: (state) => {
            state.isLike = state.isLike != true;
        },
        retweet: state => {
            state.isRetweet = state.isRetweet != true;
        },
        comment: state => { },
    },
});

const store = configureStore({ 
    reducer: {
      home: homeSlice.reducer,
    }
});

export const { like, retweet, comment } = homeSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;