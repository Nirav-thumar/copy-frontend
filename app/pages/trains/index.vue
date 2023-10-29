<template>
  <div>

    <!-- serach form Data -->
    <div class="pt-5 pb-5 bg-info">
      <div class="w-50 m-auto">
        <Search />
      </div>
    </div>

    <!-- add new trainschedule add button -->
    <div class="row mt-3 justify-content-end m-0">
      <div class="col-12">
        <div class="row justify-content-end">
          <div class="col-1 justify-content-end py-2">
            <NuxtLink :to="`/trains/add`" class="text-decoration-none text-white btn btn-primary"> Add </NuxtLink>
          </div>
        </div>
      </div>
    </div>



    <!-- Display Data row -->
    <div class="row train-color justify-content-center">

      <div class="col-11">
        <div v-for="(train, index) in trainInfo" :key="index" class="shadow">
          <div class="card mb-3 mt-2">
            <div class="row g-0 justify-content-between">
              <div class="col-8">
                <div class="card-body">
                  <div class="d-flex flex-column">
                    <div class="d-flex justify-content-between">
                      <div>
                        <span class="color-blue fs-5">Train No : </span>
                        <span class="train-color fs-5">  {{ train.trainNo }}</span>                      
                      </div>
                      <div>
                        <span class="color-blue fs-5">Train Name : </span>
                        <span class="train-color fs-5"> {{ train.trainName }}</span>   
                      </div>
                      <div>
                        <span class="color-blue fs-5">Day : </span>
                        <span class="train-color fs-5"> {{ train.days}}</span> 
                      </div>
                    </div>
                    <div class="d-flex justify-content-between mt-3">
                      <div>
                        <span class="color-blue fs-5">Source : </span>
                        <span class="train-color fs-5"> {{ train.sourceStationName}}</span> 
                      </div>
                      <div>
                        <span class="color-blue fs-5">Destination : </span>
                        <span class="train-color fs-5"> {{ train.destinationStationName}}</span> 
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3 d-flex align-items-center justify-content-around">
                <div>
                  <NuxtLink :to="`/trains/${train.trainNo}`" class="btn btn-success">View</NuxtLink>
                </div>
                <div>
                  <NuxtLink :to="`/trains/${train.trainNo}/update`" class="btn btn-primary">Update</NuxtLink>
                </div>
                <div>
                  <!-- <button class="btn btn-danger" @click="deleteTrain(train.trainNo)" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete</button> -->
                  <button class="btn btn-danger" @click="deleteTrain(train.trainNo)">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 text-danger" id="exampleModalLabel">Delete</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Are you sure you want to delete  Address?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" @click="conformDelete()">Delete</button>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>

<script setup>

import useBaseUrl from '~~/composables/environment';
import {useFetchAll} from '~~/composables/fetch.js'

// added for environment variable
let route = useRoute();
let searchUrl = useBaseUrl() + "/trainInfo";
let deleteTrainInfoUrl;
let deleteTrainScheduleUrl;


// for getting updated url and based on change url
let url = computed(() => {
  if (route.query.source && route.query.destination && route.query.day) {
    return (
      searchUrl +
      `?sourceStationName=${route.query.source}&destinationStationName=${route.query.destination}&days=${route.query.day}`
    );
  }
  else if (route.query.source && route.query.destination) {
    return (
      searchUrl +
      `?sourceStationName=${route.query.source}&destinationStationName=${route.query.destination}`
    );
  }
  else {
    return searchUrl;
  }
});


// for handling data when search button click either on home page or train index page
const {
  data: trainInfo,
  pending,
  error,
} = await useFetch(url, {
  watch: [url],
});


// Delete functinality for Train Info and train Schedule

// const deleteTrain = (trainNo) => {
//     deleteTrainInfoUrl = computed(()=>{
//                         return `${useBaseUrl()}/trainInfo?trainNo=${trainNo}` 
//     })
//     deleteTrainScheduleUrl = computed(()=>{
//                         return `${useBaseUrl()}/trainSchedule?trainNo=${trainNo}` 
//   })
// }

//  let conformDelete = async () =>{
//  console.log('delete called start')
//   const {data:res1,pending:pen1,error:err1} = await useFetch(deleteTrainInfoUrl,{
//     method:'DELETE'     
//   }) 
//   const {data:res2,pending:pen2,error:err2} = await useFetch(deleteTrainScheduleUrl,{
//     method:'DELETE'     
//   }) 
//     console.log('delete called end')

   
//  }



</script>
