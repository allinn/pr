export default {
    requests(state, ) {
        // const coachId = rootGetters.userId;
        return state.requests.filter(req => req.coachId === 0);
    },
    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
    }
};