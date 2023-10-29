<template>
    <div class="container">
        <div class="row border border-1 mt-5 py-5 shadow">
            <div class="col-12">
                <form class="form" @submit.prevent="handleSubmit">
                    <trainSchedule />
                    <div class="row mt-4 justify-content-end ">
                        <div class="col-10 p-0">
                            <button type="submit" class="btn btn-primary">Add</button>
                        </div>
                    </div>
                </form>                
            </div>
        </div>
    </div>
</template>        