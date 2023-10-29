<template>
    <div class="row justify-content-center">
        <div class="col-9">
            <div class="row justify-content-center mt-5">
                <div class="col-12 col-md-11">
                    <h2>Train Info</h2>
                </div>
            </div>
            <div class="row justify-content-around">
                <div class="col-md-3 mt-3">
                    <dynamicInput inputType="number" labelName="trainNo" inputName="Train No" v-model="info.trainNo"  />
                </div>
                <div class="col-md-3 mt-3">
                    <dynamicInput inputType="text" labelname="trainName" inputName="Train Name"  v-model="info.trainName" />
                </div>
                <div class="col-md-3 mt-3">
                    <dynamicInput inputType="text" labelName="days" inputName="Days" v-model="info.days" />
                </div>
            </div>
            <div class="row justify-content-around">
                <div class="col-md-3 mt-3">
                    <dynamicInput inputType="text" labelName="sourceStationName" inputName="Source station Name" v-model="info.sourceStationName" />
                </div>
                <div class="col-none col-md-3"></div>
                <div class="col-md-3 mt-3">
                    <dynamicInput inputType="text" labelName="destinationStationName" inputName="Destination station Name" v-model="info.destinationStationName" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup>
import {useTrainInfo} from '~~/composables/data';

const props = defineProps(['trainInfo'])
const trainInfo = props.trainInfo

const {data:info} = useTrainInfo();

if(trainInfo){
    info.value.trainNo = trainInfo.trainNo ? trainInfo.trainNo : null,
    info.value.trainName = trainInfo.trainName ? trainInfo.trainName : "",
    info.value.sourceStationName = trainInfo.sourceStationName ? trainInfo.sourceStationName : "",
    info.value.destinationStationName = trainInfo.destinationStationName ? trainInfo.destinationStationName : "",
    info.value.days = trainInfo.days ? trainInfo.days : "",
    info.value.id = trainInfo.id ? trainInfo.id : ""
 }
 else{
    info.value.trainNo = null,
    info.value.trainName =  "",
    info.value.sourceStationName = "",
    info.value.destinationStationName = "",
    info.value.days = "",
    info.value.id =  ""
 }
 

</script>

