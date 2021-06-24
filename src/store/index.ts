import { createStore } from 'vuex'

export default createStore({
  state: {
      selectedPages: []
  },
  
  mutations: {
      PUSH_SELECTED_PAGE(state, page_id) {
          const index = state.selectedPages.indexOf(page_id);
          if (index > -1) {
              state.selectedPages.splice(index, 1)
          } else {
              state.selectedPages.push(page_id)
          }
      },

      CLEAR_SELECTED_PAGES(state) {
          state.selectedPages = []
      }
  },

  actions: {
  },

  modules: {
  }
})
