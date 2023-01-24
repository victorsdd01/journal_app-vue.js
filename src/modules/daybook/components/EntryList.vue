import { defineAasyncComponent } from 'vue';
<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
        <input 
            type="text"
            class="form-control"
            placeholder="Buscar entrada"
            v-model="term"
        >
    </div>

    <div class="entry-scrollarea">
        
            <EntryItem
                v-for="entry in entriesByTerm" 
                :key="entry.id"
                :entry="entry"
                
            />
        
    </div>
  </div>
</template>

<script>

import {defineAsyncComponent} from 'vue'
import {mapGetters } from 'vuex'
export default {

    props:{

    },

    components:{
        EntryItem: defineAsyncComponent(() => import('@/modules/daybook/components/EntryItem.vue'))
    },

    computed:{
        // desestructuro el mapGetters, accedo  al modulo en el que esta, y llamo al getter que quiero.
        ...mapGetters('journal',['getEntryByTerms']),
        entriesByTerm(){
            return this.getEntryByTerms(this.term)
        }
    },

    data () {
        return {
            term:''
        }
    }

}
</script>


<style lang="scss" scoped>

    input{
        height: 40px;
    }
    .entry-list-container{
         
         border-right: 1px solid #2c3e50;
         height: calc(100vh - 56px);
    }

    .entry-scrollarea{
        margin-top: 20px;
        height: calc( 100vh - 120px );
        overflow: scroll;
    }
</style>
