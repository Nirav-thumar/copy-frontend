<template>
        <div class="row mt-3 mb-3 justify-content-center">
            <div class="col-9">
                <div class="row justify-content-center mt-3">
                    <div class="col-12 col-md-11">
                        <h2>Train Schedule</h2>
                    </div>
                </div>
                <div class="row   justify-content-around">
                    <div class="col-md-5 mt-3">
                        <dynamicInput inputType="number" labelName="sn" inputName="SN" v-model="schedule.sn" />
                    </div>
                    <div class="col-md-5 mt-3">
                        <dynamicInput inputType="text" labelName="stationCode" inputName="Station Code"  v-model="schedule.stationCode" />
                    </div>
                    <div class="col-md-5 mt-3">
                        <dynamicInput inputType="text" labelName="stationName" inputName="Station Name" v-model="schedule.stationName" />
                    </div>
                    <div class="col-md-5 mt-3">
                        <dynamicInput inputType="number" labelName="routeNumber" inputName="Route Number" v-model="schedule.routeNumber" />
                    </div>
                </div>
                <div class="row   justify-content-around">
                    <div class="col-md-5 mt-3">
                        <dynamicInput inputType="number" labelName="a1" inputName="1A" v-model="schedule.a1" />
                    </div>
                    <div class="col-md-5 mt-3">
                        <dynamicInput inputType="number" labelName="a2" inputName="2A" v-model="schedule.a2" />
                    </div>
                    <div class="col-md-5 mt-3">
                        <dynamicInput inputType="number" labelName="a3" inputName="3A" v-model="schedule.a3" />
                    </div>
                    <div class="col-md-5 mt-3">
                        <dynamicInput inputType="number" labelName="sl" inputName="SL" v-model="schedule.sl" />
                    </div>
                </div>
                <div class="row mt-4  justify-content-around">
                    <div class="col-3">
                        <dynamicInput inputType="time" labelName="arrivalTime" inputName="Arrival Time" v-model="schedule.arrivalTime" />
                    </div>
                    <div class="col-3">
                        <dynamicInput inputType="time" labelName="departureTime" inputName="Departure Time" v-model="schedule.departureTime" />
                    </div>
                    <div class="col-3">
                        <dynamicInput inputType="number" labelName="distance" inputName="Distance" v-model="schedule.distance" />
                    </div>
                </div>
            </div>
        </div>
</template>


<script setup>
import {useTrainSchedule} from '~~/composables/data'

const {data:schedule} = useTrainSchedule();


const props = defineProps(['trainSchedule'])
const trainSchedule = props.trainSchedule



 if(trainSchedule){
        schedule.value.sn=trainSchedule.sn ? trainSchedule.sn :"",
        schedule.value.trainNo=trainSchedule.trainNo ? trainSchedule.trainNo :null,
        schedule.value.stationCode=trainSchedule.stationCode?trainSchedule.stationCode :"",
        schedule.value.a1 = trainSchedule.a1 ? trainSchedule.a1: null,
        schedule.value.a2 = trainSchedule.a2 ? trainSchedule.a2 :null,
        schedule.value.a3 = trainSchedule.a3 ? trainSchedule.a3 :null,
        schedule.value.sl = trainSchedule.sl ? trainSchedule.sl :null,
        schedule.value.stationName =trainSchedule.stationName ? trainSchedule.stationName :"",
        schedule.value.routeNumber = trainSchedule.routeNumber ? trainSchedule.routeNumber : "",
        schedule.value.arrivalTime = trainSchedule.arrivalTime ? trainSchedule.arrivalTime :"",
        schedule.value.departureTime = trainSchedule.departureTime ? trainSchedule.departureTime : "",
        schedule.value.distance = trainSchedule.distance ? trainSchedule.distance: "",
        schedule.value.id = trainSchedule.id ? trainSchedule.id : null
 }
 else{
     schedule.value.sn="",
        schedule.value.trainNo=null,
        schedule.value.stationCode="",
        schedule.value.a1 = null,
        schedule.value.a2 = null,
        schedule.value.a3 = null,
        schedule.value.sl = null,
        schedule.value.stationName = "",
        schedule.value.routeNumber =  "",
        schedule.value.arrivalTime =  "",
        schedule.value.departureTime = "",
        schedule.value.distance =  "",
        schedule.value.id =  null

 }


</script>

