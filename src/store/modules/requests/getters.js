export default {

    admin_requests_question(state, ) {
        return state.admin_requests.filter(req => req.type === 'question');
    },

    admin_requests_notice(state, ) {
        return state.admin_requests.filter(req => req.type === 'notice');
    },

    requests_question(state, ) {
        // const coachId = rootGetters.userId;
        //return state.requests.filter(req => req.coachId === 0);
        return state.requests;
    },

    hasRequests(_, getters) {
        return getters.requests && getters.requests.length > 0;
    },

 


};