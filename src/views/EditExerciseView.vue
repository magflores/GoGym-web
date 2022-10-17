<template>
  <d-layout>
    <template v-slot:title>
      Edit exercise
    </template>
    <template v-slot:sidebar>
      <v-list class="side-bar d-flex flex-column align-center" height="100%">
        <v-list-item>
          <h2>Name: </h2>
        </v-list-item>
        <v-list-item>
          <v-text-field v-model="name" :error="nameError" :error-messages="nameErrorMessage"/>
        </v-list-item>
      </v-list>
      <v-list class="side-bar d-flex flex-column align-center">
        <v-list-item>
          <v-btn class="form-font" text @click="deleteExercise()" :loading="deleteLoading" :disabled="disableButtons">
            <v-icon>mdi-delete</v-icon>
            <div>Delete</div>
          </v-btn>
        </v-list-item>
      </v-list>
    </template>
    <template v-slot:content>
      <div style="min-height: 75vh">
        <v-card elevation="1" class="justify-center rounded-xl my-5">
          <v-card-title class="justify-center card-title">
            Exercise info
          </v-card-title>
          <v-card-text class="card-content">
            <v-textarea v-model="detail" name="input-7-1" auto-grow outlined persistent-hint :error="detailError"
                        :error-messages="detailErrorMessage"></v-textarea>
          </v-card-text>
        </v-card>
        <v-layout justify-center>
          <router-link to="/routines" class="routerLink">
            <v-btn rounded style="margin-right: 30px" width="300" color="#C8C8C8" :loading="cancelLoading"
                   @click="cancel()" :disabled="disableButtons">
              CANCEL
            </v-btn>
          </router-link>
          <v-btn width="300" rounded color="#F8C256" @click="save()" :loading="saveLoading" :disabled="disableButtons">
            SAVE
          </v-btn>
        </v-layout>
      </div>
    </template>
  </d-layout>
</template>

<script>
import {useExerciseStore} from "@/stores/ExerciseStore";
import {mapActions} from "pinia";
import detailedLayout from "@/components/detailedLayout";

export default {
  name: "EditExerciseView",
  components: {
    DLayout: detailedLayout,
  },
  data() {
    return {
      items: ['Easy', 'Intermediate', 'Hard'],
      items2: ['Aerobic', 'Relax', 'no se si es por aca je'],
      model: '',
      model2: '',
      search: '',
      example: 'hola',
      id: this.$route.params.id,
      name: '',
      type: '',
      detail: '',
      date: '',
      metadata: '',
      deleteLoading: false,
      saveLoading: false,
      cancelLoading: false,
      disableButtons: false,
      nameError: false,
      detailError: false,
      detailErrorMessage: '',
      nameErrorMessage: '',
      newexercise: false,
    }
  },
  methods: {
    ...mapActions(useExerciseStore, {
      $getExercise: 'get',
      $modifyExercise: 'modify',
      $deleteExercise: 'delete',
      $createExercise: 'create'
    }),
    async getExercise() {
      try {
        const exercise = await this.$getExercise({id: this.id});
        this.setExerciseInfo(exercise);
      } catch (error) {
        console.log(error);
      }
    },
    setExerciseInfo(newInfo) {
      this.name = newInfo.name;
      this.id = newInfo.id;
      this.type = newInfo.type;
      this.detail = newInfo.detail;
      this.date = newInfo.date;
      this.metadata = newInfo.metadata;
    },
    async modifyExercise() {
      await this.$modifyExercise({
        id: this.id,
        name: this.name,
        type: this.type,
        detail: this.detail,
        metadata: this.metadata
      });
    },
    async createExercise() {
      await this.$createExercise({
        name: this.name,
        type: 'exercise',
        detail: this.detail,
        metadata: (this.metadata === '') ? null : this.type,
      });
    },
    async deleteExercise() {
      await this.$deleteExercise({id: this.id});
    },
    async delete() {
      this.disableButtons = true;
      try {
        this.deleteLoading = true;
        await this.deleteExercise();
        this.$router.go(-1);
      } catch (error) {
        console.log(error)
        // TODO error handling??
      } finally {
        this.deleteLoading = false;
        this.disableButtons = false;
      }
    },
    async save() {
      this.detailError = false;
      this.nameError = false;
      this.detailErrorMessage = '';
      this.nameErrorMessage = '';
      this.disableButtons = true;
      try {
        this.saveLoading = true;
        if (this.newexercise) {
          await this.createExercise();
        } else {
          await this.modifyExercise();
        }
      } catch (error) {
        for (const detailsKey in error.details) {
          if (error.details[detailsKey].toLowerCase().includes('name')) {
            this.nameError = true;
            this.nameErrorMessage = error.details[detailsKey];
          }
          if (error.details[detailsKey].toLowerCase().includes('detail')) {
            this.detailError = true;
            this.detailErrorMessage = error.details[detailsKey];
          }
        }
      } finally {
        this.saveLoading = false;
        this.disableButtons = false;
      }
    },
    cancel() {
      this.$router.go(-1);
    }
  },
  async created() {
    if (this.$route.params.id)
      await this.getExercise();
    else
      this.newexercise = true;
  }
}
</script>

<style scoped>
.card-title {
  background-color: #F8C256;
}

.card-content {
  background-color: #FFEFCE;
}

.side-bar {
  background-color: #F5F3F3;
}

.routerLink {
  text-decoration: none;
}
</style>