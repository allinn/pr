export default {
    registerCoach(state, payload) {
        state.coaches.push(payload);
    },
    setCoaches(state, payload) {
        state.coaches = payload;
    },
    setFetchTimestamp(state) {
        state.lastFetch = new Date().getTime();
    }

//  setUser(state,payload)
/*
    {
        state.token = payload.token;
        state.userId = payload.userId;
        
    }
*/

};