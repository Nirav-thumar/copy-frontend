<template>
    <!-- search data-->
    <form @submit.prevent="handleSubmit">
    
      <div class="input-group shadow">
        <div class="form-floating">
          <input type="text" class="form-control" list="sourceDatalist" id="floatingSource" placeholder="Source" v-model="searchData.source" required/>
          <label for="floatingSource" class="form-label">Source</label>
          <datalist id="sourceDatalist">
            <option :value="opt" v-for="(opt,index) in uniqueSource" :key="index">{{opt}}</option>
          </datalist>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" list="destinationDatalist" id="floatingDestination" placeholder="Destination" v-model="searchData.destination" required>
          <label for="floatingDestination" class="form-label">Destination</label>
          <datalist id="destinationDatalist">
            <option :value="opt" v-for="(opt,index) in uniqueDestination" :key="index">{{opt}}</option>
          </datalist>
        </div>
        <div class="form-floating">
          <input type="text" class="form-control" list="dayDatalist" id="floatingDay" placeholder="Day" v-model="searchData.day">
          <label for="floatingDay" class="form-label">Day</label>
          <datalist id="dayDatalist">
            <option :value="opt" v-for="(opt,index) in uniqueDay" :key="index">{{opt}}</option>
          </datalist>
        </div>
        <div>
            <button type="submit" class="btn btn-primary p-3">Search</button>
        </div>
      </div>
    </form>
    
</template>

<script setup>
import useBaseUrl from '~~/composables/environment';

let searchData = reactive({
  source: "",
  destination: "",
  day: "",
});

let url = useBaseUrl() + "/trainInfo"

// get data for suggetstion
const {
  data:trainInfo,
  pending,
  error,
} = await useFetch(url)

let source = trainInfo.value.map(item=>item.sourceStationName) 
let destination = trainInfo.value.map(item=>item.destinationStationName) 
let uniqueDay = ['Monday','Tuesday','Wednesday','Thursday','Friday','saturday','Sunday']
let uniqueSource = new Set(source)
let uniqueDestination = new Set(destination)

// handle form Data
const handleSubmit =()=>{
  if(uniqueSource.has(searchData.source) && uniqueDestination.has(searchData.destination) && uniqueDay.includes(searchData.day)){
    navigateTo(`/trains?source=${searchData.source}&destination=${searchData.destination}&day=${searchData.day}`)
  }
  else if(uniqueSource.has(searchData.source) && uniqueDestination.has(searchData.destination)){
    navigateTo(`/trains?source=${searchData.source}&destination=${searchData.destination}`)
  }

}
</script>