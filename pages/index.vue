<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="6" md="5">
      <v-card :elevation="1">
        <v-card-title class="headline"> Checklist </v-card-title>
        <v-card-text>
          <v-btn color="grey lighten-1" rounded depressed class="mx-2"
            >Pending</v-btn
          >
          <v-btn rounded depressed class="mx-2" @click="competed"
            >Completed</v-btn
          >
          <v-list flat dense>
            <v-list-item-group v-model="selected" multiple>
              <v-list-item v-for="(data, i) in getChecklist" :key="i">
                <template #default="{ active }">
                  <v-list-item-action>
                    <v-checkbox
                      :input-value="active"
                      color="primary"
                    ></v-checkbox>
                  </v-list-item-action>

                  <v-list-item-content>
                    <v-list-item-title
                      :class="{ selected: _c_is_selected(i) }"
                      >{{ data }}</v-list-item-title
                    >
                  </v-list-item-content>
                </template>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
        <v-card-actions class="px-5">
          <v-text-field
            v-model.trim="item_name"
            label="Add an item here"
            flat
            solo
            dense
            @keypress.enter="add_new_item"
          ></v-text-field>
          <v-spacer />
          <v-btn color="primary" rounded @click="add_new_item">
            Add Item
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      item_name: '',
      selected: [],
    }
  },
  computed: {
    ...mapGetters('todo', ['getChecklist']),
  },
  methods: {
    ...mapActions('todo', ['add', 'markAsCompleted']),
    add_new_item() {
      if (this.item_name === '') {
        return false
      }
      const payload = this.item_name
      this.add(payload).then(() => {
        this.item_name = ''
      })
    },
    _c_is_selected(row) {
      const selected = [...this.selected]
      return selected.includes(row)
    },
    competed() {
      const payload = [...this.selected]
      this.markAsCompleted(payload).then(() => {
        this.selected = []
      })
    },
  },
}
</script>
