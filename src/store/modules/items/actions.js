import axios from "axios";

export default {
    async registerCoach(context, data) {
        //const userId = context.rootGetters.userId;
        const coachData = {
            id: [],
            firstName: data.first,
            lastName: data.last,
            description: data.desc,
            hourlyRate: data.rate,
            areas: data.areas
        };

        const response = await axios.put('http://localhost:8080/user/coach/', coachData)
            .then((Data) => coachData.id = Data.data);

        await console.log(response.data);

        // const responseData = await response.json();

        context.commit('registerCoach', {
            ...coachData,
        });

    },
    async loadCoaches(context, payload) {
        if (!payload.forceRefresh && !context.getters.shouldUpdate) {
            return;
        }

        const response = await axios.get(`http://localhost:8080/user/coach/`);
        const responseData = await response.data;

        console.log(responseData);

        const coaches = [];

        for (const key in responseData) {
            const coach = {
                id: key,
                firstName: responseData[key].firstName,
                lastName: responseData[key].lastName,
                description: responseData[key].description,
                hourlyRate: responseData[key].hourlyRate,
                areas: responseData[key].areas
            };
            coaches.push(coach);
        }

        context.commit('setCoaches', coaches);
        context.commit('setFetchTimestamp');
    }
};