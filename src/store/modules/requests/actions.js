import axios from "axios";

export default {
    async contactCoach(context, payload) {
        const newRequest = {
            userEmail: payload.email,
            message: payload.message
        };


        await axios.post(`http://localhost:8080/user/request/` + payload.coachId, newRequest)
            .then((Data) => newRequest.id = Data.data);



        context.commit('addRequest', newRequest);
    },
    async fetchRequests(context) {
        const coachId = 0;
        const response = await axios.get(`http://localhost:8080/user/request/` + coachId);

        //        console.log(response.data);

        const requests = [];

        for (var i = 0; i < 1; i++) {
            const request = {
                id: response.data.id,
                coachId: response.data.receiver,
                userEmail: response.data.email,
                message: response.data.message
            };
            console.log(request);
            requests.push(request);
        }

        context.commit('setRequests', requests);
    }
};