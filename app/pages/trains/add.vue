<template>
    <div class="container">
        <!-- <SuccessFailure :msg="successFailure.msg" :status="successFailure.status" /> -->
        <form class="form pb-5 pt-5 mt-5 shadow-lg" @submit.prevent="handleSubmit()">
            <trainInfo />
            <trainSchedule />
            <div class="row justify-content-around">
                <div class="col-9">
                    <div class="row justify-content-center mt-3">
                        <div class="col-11">
                            <button type="submit" class="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>
import useBaseUrl from '~~/composables/environment';
import {useTrainInfo,useTrainSchedule,useEmptyObjectProperties} from '~~/composables/data';

const {data:trainInfoData} = useTrainInfo();
const {data:trainScheduleData} = useTrainSchedule();
// const successFailure = reactive({
//     status:"",
//     msg:""
// })



const handleSubmit = async ()=>{
    delete trainInfoData.id
    delete trainScheduleData.id
    trainScheduleData.value.trainNo = trainInfoData.value.trainNo
    console.log(trainInfoData.value)
    console.log(trainScheduleData.value)
    
    const {data:res1,pending:pen1,error:err1} =await useFetch(useBaseUrl()+"/trainInfo",{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify(trainInfoData.value)
    })
     const {data:res2,pending:pen2,error:err2} = await useFetch(useBaseUrl()+"/trainSchedule",{
        method:'POST',
        headers:{
            'content-Type':'application/json'
        },
        body:JSON.stringify(trainScheduleData.value)
    })

    if(res1.value && res2.value){
        console.log("res1",res1)
        console.log("res2",res2)
        // successFailure.status = "success"
        // successFailure.msg = "Data Added successfully"
       
        useEmptyObjectProperties(trainInfoData.value)
        useEmptyObjectProperties(trainScheduleData.value)
    }
    else{
        // successFailure.status = "failure"
        // successFailure.msg = err1.value || err2.value   
    }

}
</script>

