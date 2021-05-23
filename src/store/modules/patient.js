const state = {
    patientData: {}
};

const getters = {
    getPatientData: state => state.patientData,
};

const actions = {
    setPatientData({ commit }, data) {
        commit("SET_PATIENT_DATA", data);
    }
};

const mutations = {
    SET_PATIENT_DATA(state, data) {
        state.patientData = data
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
