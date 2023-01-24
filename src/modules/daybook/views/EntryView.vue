
<template>
    <template v-if="entry">
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{ day }}</span>
                <span class="mx-1 fs-3">{{ month }}</span>
                <span class="mx-2 fs-4 fw-light">{{ year }}</span>
            </div>
            <div>
                <button class="btn btn-danger mx-2">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>

                <button class="btn btn-warning mx-2">
                    Subir
                    <i class="fa fa-upload"></i>
                </button>

            </div>

        </div>

            <hr>

            <div class="d-flex flex-column px-3 h-50">
                <textarea 
                    v-model="entry.text"
                    placeholder="¿Que sucedio hoy?">
                    
                </textarea>
            </div>

            <img class="img-thumbnail" src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" alt="image">
    </template>

    <Fab
       icon="fa-save"
       @onClick="saveEntry"
    />


</template>

<script>
import {defineAsyncComponent} from 'vue'
import { mapActions, mapGetters} from 'vuex'
import getDayMonthYear from '@/modules/daybook/helpers/getDayMonthYear';
export default {


    props:{
        id:{
            type: String,
            required:true
        }

    },

    components:{
        Fab: defineAsyncComponent(()=>import('@/modules/daybook/components/FloatinActionButtom.vue'))
    },

    data:()=>{
        return {
            entry:null
        }
    },

    computed:{
        ...mapGetters('journal',['getEntryById']),
        

        day(){
            const {day} = getDayMonthYear(this.entry.date)
            return day
        },
        month(){
            const {month} = getDayMonthYear(this.entry.date)
            return month
        },
        year(){
            const {year} = getDayMonthYear(this.entry.date)
            return year
        }
    },


    methods:{
        ...mapActions('journal',['updateEntry']),

        loadEntry(){

            let entry;

            if(this.id === 'new'){
                entry = {
                    text:'',
                    date: new Date().getTime()
                }
            }else{
                entry = this.getEntryById(this.id)
                if(!entry) return this.$router.push({name:'no-entry'})
    
                this.entry = entry;
               console.log(entry)
            }

        },

        async saveEntry(){
            this.updateEntry( this.entry )
        }
    },

    created(){
        this.loadEntry()
        // console.log(this.id)
    },

    watch:{
        id( value, oldValue){
            console.log({value,oldValue})
        }
    }


}
</script>

<style lang="scss" scoped>

    textarea{
        font-size: 20px;
        border: none;
        height: 100%;

        &:hover{
            outline: none;
        }
    }

    img{
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
    }

</style>