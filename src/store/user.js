import { defineStore } from "pinia";
import { uuid as v4 } from "uuid"

export const useUserStore = defineStore('users', {
    state: () => {
      return {
        users: [],
      }
    },
    actions: {
      create(user) {
        this.users.push({
          id: uuid(),
          ...user,
        });
      },
      delete(id) {
        this.users = this.users.filter((user) => user.id !== id)
      }
    },
    getters: {
      userName(state) {
        const sortable = [...state.users];
        return sortable.sort((a, b) => {
            return a.name.localeCompare(b.name)
        })
      }
    }
})