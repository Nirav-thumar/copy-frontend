<template>
  <div class="container shadow-lg mt-3 p-4">

    <!-- Train Info -->
    <div class="row pt-3 pb-3">
      <div class="col-10">
        <h3>Train Info</h3>
      </div>
    </div>
    <div class="row justify-content-between">
        <div class="col-3">
          <span class="color-blue fs-5">Train No  : </span>
           <span class="train-color fs-5">{{trainInfo.trainNo}}</span>
        </div>
        <div class="col-4">
          <span class="color-blue fs-5">Train Name  : </span>
           <span class="train-color fs-5">{{trainInfo.trainName }}</span>
        </div>
        <div class="col-3">
          <span class="color-blue fs-5">Days : </span>
           <span class="train-color fs-5">{{ trainInfo.days }}</span>
        </div>
    </div>
    <div class="row justify-content-between">
      <div class="col-4">
        <span class="color-blue fs-5">Source : </span>
          <span class="train-color fs-5">{{trainInfo.sourceStationName}}</span>
      </div>
      <div class="col-4">
        <span class="color-blue fs-5">Destination : </span>
          <span class="train-color fs-5">{{trainInfo.destinationStationName}}</span>
      </div>
    </div>
    <hr>
<!-- train schedule  -->
    <div class="row pt-3 pb-3">
      <div class="col-11">
        <h3>Train Schedule</h3>
      </div>
      <div class="col-1">
        <NuxtLink :to="`/trains/${trainInfo.trainNo}/add`" class="btn btn-primary">ADD</NuxtLink>
      </div>
    </div>

    <div class="row mt-4 shadow-sm p-3" v-for="(trainSchedule,index) in trainSchedules" :key="index">
      <div class="col-10">
        <div class="row justify-content-between ">
          <div class="col-3">
            <span class="color-blue fs-5">SN : </span>
              <span class="train-color fs-5">{{trainSchedule.sn}}</span>
          </div>
          <div class="col-3">
            <span class="color-blue fs-5">Station Code : </span>
              <span class="train-color fs-5">{{trainSchedule.stationCode}}</span>
          </div>
          <div class="col-3">
            <span class="color-blue fs-5">Route Number : </span>
              <span class="train-color fs-5">{{ trainSchedule.routeNumber }}</span>
          </div>
        </div>         
        <div class="row justify-content-between ">
          <div class="col-2">
            <span class="color-blue fs-5">1A : </span>
              <span class="train-color fs-5">{{trainSchedule.a1}}</span>
          </div>
          <div class="col-2">
            <span class="color-blue fs-5">2A : </span>
              <span class="train-color fs-5">{{ trainSchedule.a2 }}</span>
          </div>
          <div class="col-2">
            <span class="color-blue fs-5">3A : </span>
              <span class="train-color fs-5">{{trainSchedule.a3}}</span>
          </div>
          <div class="col-2">
            <span class="color-blue fs-5">SL : </span>
              <span class="train-color fs-5">{{ trainSchedule.sl}}</span>
          </div>
        </div>
        <div class="row justify-content-between ">
          <div class="col-4">
            <span class="color-blue fs-5">Station Name : </span>
            <span class="train-color fs-5">{{trainSchedule.stationName}}</span>
          </div>
          <div class="col-4">
            <span class="color-blue fs-5">Distance : </span>
            <span class="train-color fs-5">{{ trainSchedule.distance}}</span>
          </div>
        </div>
        <div class="row justify-content-between ">
          <div class="col-4">
            <span class="color-blue fs-5">Arrival Time : </span>
              <span class="train-color fs-5">{{trainSchedule.arrivalTime}}</span>
          </div>
          <div class="col-4">
            <span class="color-blue fs-5">Departure Time : </span>
              <span class="train-color fs-5">{{ trainSchedule.departureTime}}</span>
          </div>
        </div>
      </div>
      <div class="col-1 d-flex justify-content-center align-items-center">
        <NuxtLink :to="`/trains/${trainSchedule.trainNo}/update?sn=${trainSchedule.sn}`" class="btn btn-primary">Update</NuxtLink>
      </div>
      <div class="col-1 d-flex justify-content-center align-items-center">
        <button class="btn btn-danger">Delete</button>
      </div>
    </div>


  </div>
</template>

<script setup>
let route = useRoute()
let trainNo = route.params.trainNo;

let trainInfoUrl = computed(() => {
  return `http://localhost:3006/trainInfo?trainNo=${trainNo}`
})
let trainScheduleUrl = computed(() => {
  return `http://localhost:3006/trainSchedule?trainNo=${trainNo}`
})


// get TrainInfo data for dispaly
let { data , pending1, error1, refresh1 } = await useFetch(trainInfoUrl, {
  watch: [trainInfoUrl]
});
let { 0: trainInfo} = data.value;

// get trainSchedule data for display
let { data: trainSchedules, pending2, error2, refresh2 } = await useFetch(trainScheduleUrl, {
  watch: [trainScheduleUrl]
})

</script>

<style>
  .color-blue {
    color: #0404e7fd;
  }

  .train-color {
    color: #8b8d90;
  }
</style>

