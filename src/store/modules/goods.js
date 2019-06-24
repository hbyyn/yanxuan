import {api, request} from '../../ajax'
const state = {

};

const mutations = {

};

const actions = {
    async getCateDetailAction(context, {id}){
        let result = await request.get(api.HOME_CATE_DETAIL_API, {id});
        console.log(result);
    }
};

export default {
    namespaced: true,
    state,
    mutations,
    actions
}