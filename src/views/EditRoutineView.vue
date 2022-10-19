<template>
  <d-layout>
    <template v-slot:title>
      Edit Routine
    </template>
    <template v-slot:sidebar>
      <v-list class="side-bar d-flex flex-column align-center" height="100%">
        <v-list-item>
          <h2>Name: </h2>
        </v-list-item>
        <v-list-item>
          <v-text-field v-model="name"/>
        </v-list-item>
      </v-list>
    </template>
    <template v-slot:content>
      <v-card v-for="cycle in cycles"
              :key="cycle.order" elevation="1"
              class="justify-center rounded-xl my-5">
        <v-card-title class="justify-center card-title">
          <v-text-field v-model="cycle.name"></v-text-field>
        </v-card-title>
        <v-card-text class="card-content">

          <!--<div class="d-flex flex-column"
               v-for="exercise in exercises[cycle.id]"
               :key="exercise.order">
            <div class="d-flex justify-space-between">
              <v-select class="align-self-center" dense
                        label="Exercise" outlined
                        :items="getPossibleExercises(cycle.id)"
                        v-model="exercise.exercise.id"/>
              <div class="d-flex justify-space-between" style="width: 20%">
                <v-text-field type="number" class="mx-2"
                              v-model="exercise.duration"
                              label="Seconds"/>
                <v-text-field type="number" class="mx-2"
                              v-model="exercise.repetitions"
                              label="Repetitions"/>
              </div>
            </div>
          </div>-->

          <div class="d-flex flex-column"
               v-for="exercise in cycle.exercises"
               :key="exercise.order">
            <v-card-title class="justify-center card-title">
              <v-text-field v-model="cycle.name"></v-text-field>
            </v-card-title>
            <v-select class="align-self-center" dense
                      label="Exercise" outlined
                      :items="getPossibleExercises(cycle.id)"
                      v-model="exercise.exercise.id"/>
            <div class="d-flex justify-space-between" style="width: 20%">
              <v-text-field type="number" class="mx-2"
                            v-model="exercise.duration"
                            label="Seconds"/>
              <!--                <p class="mx-2">{{ exercise.duration }}s</p>-->
              <v-text-field type="number" class="mx-2"
                            v-model="exercise.repetitions"
                            label="Repetitions"/>
              <!--                <p class="mx-2">{{ exercise.repetitions }} repeats</p>-->
            </div>
          </div>

          <v-layout justify-center>
            <v-btn text
                   @click="addNewExerciseToCycle(cycle)">
              <h3>Add New Exercise</h3>
            </v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-card v-for="newCycle in newCycles" :key="newCycle.order" elevation="1" class="justify-center rounded-xl my-5">
        <v-card-title class="justify-center card-title">
          <v-text-field v-model="newCycle.name"></v-text-field>
        </v-card-title>
        <!--        NEW CYCLES-->
        <v-card-text class="card-content">
          <div class="d-flex flex-column" v-for="exercise in newCycle.exercises" :key="exercise.order">
            <div class="d-flex justify-space-between">
              <v-select class="align-self-center" dense label="Exercise" outlined :items="getPossibleExercisesNew(cycle.id)" v-model="exercise.exercise.id"></v-select>
              <div class="d-flex justify-space-between" style="width: 20%">
                <v-text-field type="number" class="mx-2" v-model="exercise.duration" label="Seconds"></v-text-field>
                <!--                <p class="mx-2">{{ exercise.duration }}s</p>-->
                <v-text-field type="number" class="mx-2" v-model="exercise.repetitions" label="Repetitions"></v-text-field>
                <!--                <p class="mx-2">{{ exercise.repetitions }} repeats</p>-->
              </div>
            </div>
          </div>
          <v-layout justify-center>
            <v-btn text @click="addNewExerciseToNewCycle(newCycle.order)">
              <h3>Add New Exercise</h3>
            </v-btn>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-card elevation="1" class="justify-center rounded-xl my-5" @click="addNewCycle()">
        <v-card-title class="justify-center card-title">
          Add New Cycle
        </v-card-title>
      </v-card>
      <div class="d-flex justify-center">
        <v-btn rounded class="mx-auto" width="40%" color="#C8C8C8" to="/routines">
          CANCEL
        </v-btn>
        <v-btn width="40%" class="mx-auto" rounded color="#F8C256" @click="saveChanges()" :loading="loadingSave" :disabled="loadingSave">SAVE</v-btn>
      </div>
    </template>
  </d-layout>
</template>

<script>
import detailedLayout from "@/components/detailedLayout";
import {useRoutineStore} from "@/stores/RoutineStore";
import {useCycleStore} from "@/stores/CycleStore";
import {useExerciseStore} from "@/stores/ExerciseStore";
import {mapActions} from "pinia";

export default {
  name: "EditRoutineView",
  components: {
    DLayout: detailedLayout,
  },
  data() {
    return {
      id: this.$route.params.id,
      loading: false,
      name: '',
      detail: '',
      date: '',
      score: '',
      isPublic: true,
      difficulty: '',
      metadata: '',
      user: {
        username: '',
      },
      cycles: [],
      originalCycles: [],
      originalExercises: {},
      exercises: {},
      allUserExercises: [],
      newCycles: [],
      deleted: [],
      loadingSave: false,
    }
  },
  methods: {
    ...mapActions(useRoutineStore, {
      $getRoutine: 'get',
      $updateRoutine: 'modify',
    }),
    ...mapActions(useCycleStore, {
      $getCycles: 'getAll',
      $getCycleExercises: 'getAllCycleExercises',
    }),
    ...mapActions(useExerciseStore, {
      $getExercises: 'getAll',
    }),
    async getRoutine() {
      this.loading = true;
      try {
        const res = await this.$getRoutine({id: this.id});
        this.id = res.id;
        this.name = res.name;
        this.detail = res.detail;
        this.date = res.date;
        this.score = res.score;
        this.isPublic = res.isPublic;
        this.difficulty = res.difficulty;
        this.metadata = res.metadata;
        this.user = res.user;
        await this.getCycles();
        this.cycles.sort((a, b) => a.order - b.order);
        await this.getUserExercises();
      } catch (error) {
        console.log(error);
        // TODO error handling
      } finally {
        this.loading = false;
      }
    },
    async getCycles() {
      try {
        const res = await this.$getCycles(this.id);
        for (const contentKey in res.content) {
          this.cycles.push(res.content[contentKey]);
          this.originalCycles.push(res.content[contentKey]);
          await this.getExercises(res.content[contentKey].id);
        }
      } catch (error) {
        console.log(error);
        // TODO error handling
      }
    },
    async getExercises(cycleId) {
      try {
        this.exercises[cycleId] = [];
        this.originalExercises[cycleId] = [];
        const res = await this.$getCycleExercises(cycleId);
        for (const contentKey in res.content) {
          this.exercises[cycleId].push(res.content[contentKey]);
          this.originalExercises[cycleId].push(res.content[contentKey]);
        }
        this.exercises[cycleId].sort((a, b) => a.order - b.order);
      } catch (error) {
        console.log(error);
        // TODO error handling
      }
    },
    async getUserExercises() {
      try {
        const res = await this.$getExercises();
        for (const contentKey in res.content) {
          this.allUserExercises.push(res.content[contentKey]);
        }
      } catch (error) {
        console.log(error);
        // TODO error handling
      }
    },
    getPossibleExercises() {
      const possibleExercises = [];
      for (const exercise of this.allUserExercises) {
        let isPossible = true;
        if (isPossible) {
          possibleExercises.push({
            text: exercise.name,
            value: exercise.id,
          });
        }
      }
      return possibleExercises;
    },
    getPossibleExercisesNew() {
      const possibleExercises = [];
      for (const exercise of this.allUserExercises) {
        let isPossible = true;
        if (isPossible) {
          possibleExercises.push({
            text: exercise.name,
            value: exercise.id,
          });
        }
      }
      return possibleExercises;
    },
    addNewCycle() {
      let order = this.cycles.length + this.newCycles.length + 1;
      this.cycles.push({
        name: 'nuevo ciclo',
        order: order,
        exercises: []
      });
    },
    addNewExerciseToCycle(myCycle) {
      let order = this.cycles.length + this.newCycles.length + 1;
      myCycle.exercises.push({
        exercise: {
          id: 0,
          name: 'nueva',
        },
        duration: 0,
        order: order,
        repetitions: 0,
      });


      // this.exercises[myCycle.id].push({
      //   exercise: {
      //     id: 0,
      //     name: '',
      //   },
      //   duration: 0,
      //   repetitions: 0,
      //   order: this.exercises[myCycle.id].length + 1,
      // });
    },
    addNewExerciseToNewCycle(order) {
      let cycle = this.newCycles.find(cycle => cycle.order === order);
      let exOrder = cycle.exercises.length;
      cycle.exercises.push({
        exercise: {
          id: 0,
          name: '',
        },
        duration: 0,
        repetitions: 0,
        order: exOrder,
      });
    },
    async saveChanges() {
      this.loadingSave = true;
      try {
        await this.$updateRoutine({
          id: this.id,
          name: this.name,
          detail: this.detail,
          isPublic: this.isPublic,
          difficulty: this.difficulty,
          metadata: this.metadata,
          category: this.category,
        });
        await this.updateCycles();
      } catch (error) {
        console.log(error);
        // TODO error handling
      } finally {
        this.loadingSave = false;
      }
    },
    async updateCycles() {
      // Do something
    }
  },
  async created() {
    await this.getRoutine(this.$route.params.id)
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
</style>