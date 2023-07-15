<template>
  <div id="tool-edit-commisstion" class="data-list-container">

    <template>
 
        <div class="vx-row">

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-3/12 mb-base">
                <div class="centerx labelx mb-4">
                    <vs-button type="filled" @click.prevent="addItem" class="mt-5 block">Thêm Cấp</vs-button>
                </div>  

                <div class="centerx labelx mb-4 relative" v-for="(item, index) in items" :key="item.lvl">
                    <span class="closeItem" @click="deleteItem(index)"></span>
                    <vs-input type="number" class="w-full" icon-pack="feather" icon="icon-x" icon-after :label="`% Cấp ${index + 1}`" vs-placeholder="Nombre" v-model="item.value" />
                    <p><b>$ 10 = {{ (10 / 100) * item.value }}</b></p>
                </div>

                <div class="centerx labelx mb-4">
                    <vs-button type="filled" @click.prevent="saveItem" class="mt-5 block">Đồng ý</vs-button>
                </div>  
                
            </div>
        
        </div>


        
    </template>  
  </div>
  
</template>

<script>

import AuthenticationService from '@/services/AuthenticationService'

export default {
    data() {
        return {
            items: [{
                id: 1,
                value: ''
            }],
        }
    },
    methods: {
        
        deleteItem(index) {
            this.items.splice(index, 1);
        },

        addItem(){
            //this.html +='Cấp 1<input style="width: 100%"/>'
            this.items.push({
                id: 1,
                value: ''
            });      
        },

        saveItem(){
            AuthenticationService.saveRateCommission(this.items)
            .then((res) => {
                return this.$vs.notify({
                    text: 'Đã lưu',
                    iconPack: 'feather',
                    icon: 'icon-check',
                    color: 'success'
                })
            })
        },

        getItem(){
            AuthenticationService.getRateCommission()
            .then((res) => {
                this.items = res.data.data
            })
        }
    },

    mounted() {
        this.getItem()
    },
}
</script>

<style scoped>
.closeItem{
    position: absolute;
    height: 20px;
    width: 20px;
    cursor: pointer;
    right: 8px;
    top: 30px;
    z-index: 999;
}
</style>