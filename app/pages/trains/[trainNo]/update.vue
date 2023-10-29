<template>
        <div class="container">
            <div class="row border border-1 mt-5 py-5 shadow">
                <div class="col-12">
                    <form action="" class="form" @submit.prevent="handleSubmit">
                        <TrainInfo  v-if="show"  :trainInfo="trainInfo"/>
                        <TrainSchedule v-else  :trainSchedule="trainSchedule"/>
                        <div class="row mt-4 justify-content-end ">
                            <div class="col-10 p-0">
                                <button type="submit" class="btn btn-primary">Update</button>
                            </div>
                        </div>
                    </form>                
                 </div>
            </div>
        </div>    
</template>
 
 
<script setup>
   const route = useRoute();
   let trainNo = route.params.trainNo
   let sn = route.query.sn;
   let show = computed(()=>{
        if(sn)
            return false
        else
            return true
   })
   

let trainInfoUrl = computed(() => {
  return `http://localhost:3006/trainInfo?trainNo=${trainNo}`
})
let trainScheduleUrl = computed(() => {
  return `http://localhost:3006/trainSchedule?trainNo=${trainNo}&sn=${sn}`
})


// get data for show in trainInfo form 

let { data:trainInfos , pending1, error1, refresh1 } = await useFetch(trainInfoUrl, {
  watch: [trainInfoUrl]
});
let { 0: trainInfo} = trainInfos.value;


// get data for show in trainSchedule form
let { data: trainSchedules, pending2, error2, refresh2 } = await useFetch(trainScheduleUrl, {
  watch: [trainScheduleUrl]
})
  let { 0: trainSchedule} = trainSchedules.value;

// submit and update data on 
const handleSubmit = async ()=>{
    delete trainInfoData.id
    delete trainScheduleData.id
    trainScheduleData.value.trainNo = trainInfoData.value.trainNo
    console.log(trainInfoData.value)
    console.log(trainScheduleData.value)
    
    const {data:res1,pending:pen1,error:err1} =await useFetch(useBaseUrl()+"/trainInfo",{
        method:'PUT',
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
 
