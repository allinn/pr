export default {

    admin_requests(state, ) {
        return state.admin_requests;
    },



    requests(state, ) {
        // const coachId = rootGetters.userId;
        //return state.requests.filter(req => req.coachId === 0);
        return state.requests;
    },
    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
    }
};