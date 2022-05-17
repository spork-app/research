export default {
    state: {
        researchLoading: false,
    },
    getters: {
        topics: (state, getters, rootGetters) => rootGetters.features?.research ?? [],
        research: (state, getters, rootGetters) => rootGetters.features?.research ?? [],
        researchLoading: state => state.researchLoading,
    },
    mutations: {
        setResearch(state, value) {
            state.research = value;
        },
        setResearchLoading(state, value) {
            state.researchLoading = value;
        }
    },
    actions: {
        async search({ state, commit }, { search, url }) {
            commit('setResearchLoading', true);
            const { data } = await axios.get(url ?? buildUrl('/api/feature-list', {
                q: search,
            }));

            commit('setResearch', data);
            commit('setResearchLoading', false);
        },
        async duplicateResearch({ dispatch }, { name, settings, feature, slug }) {
            await axios.post(buildUrl('/api/feature-list'), {
                name: name + ' - Duplicate', settings, feature, slug
            });
            dispatch('getFeatureLists', {});
        }
    },
};

