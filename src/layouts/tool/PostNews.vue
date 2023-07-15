<template>
  <div id="list-tool-setting" class="data-list-container">

    <template>
        <form>
        
            <div class="vx-row">

            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
                    <div class="centerx labelx mb-4">
                        <vs-input style="width: 100%" label="Tiêu đề" placeholder="Tiêu đề" v-model="title" @keypress="sanitizeTitle"/>
                    </div>  
                    <p>
                        Đường dẫn: {{ slug }}
                    </p>
                    <div class="centerx labelx mb-4">
                        <vs-input style="width: 100%" label="Path" placeholder="Đường dẫn gốc" v-model="path"/>
                    </div>

                    <div class="centerx labelx">
                        <p>Ảnh tiêu đề</p>
                        <vs-upload action="news/upload/post" @on-success="successUpload" />
                    </div> 

                    <vs-switch color="success" v-model="publicNews" @change="plublicPostNews">
                        <span slot="on">Xuất bản</span>
                        <span slot="off">Không</span>
                    </vs-switch> 
            </div>
            <div class="vx-col w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 mb-base">
                    <div class="centerx labelx">
                        <p>Thư viện</p>
                        <vs-upload action="news/upload/post" @on-success="successUpload" />
                    </div>  
            </div>
            </div>
            

            <quill-editor v-model="content"></quill-editor>

            <vs-button type="filled" @click.prevent="submitForm" class="mt-5 block">Đăng</vs-button>

        </form>
    </template>  
  </div>
  
</template>

<script>
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  data() {
    return {
        publicNews: true,
        title: '',
        content: `...`,
    }
  },
  components: {
    quillEditor,
  },
  computed:{
        slug() {
            var slug = this.sanitizeTitle(this.title);
            return location.host + '/' +slug;
        }
  },
  methods: {
        successUpload(){
            //this.$vs.notify({color:'success',title:'Upload Success',text:'Lorem ipsum dolor sit amet, consectetur'})
        },
        submitForm() {
            this.$validator.validateAll().then(result => {
                if(result) {
                // if form have no errors
                    this.$vs.notify({color:'success',title:'Đăng bài',text:'Thành công'})
                }else{
                // form have errors
                }
            })
        },
        plublicPostNews(){
            this.publicNews ? this.publicNews = false : this.publicNews = true
        },
        sanitizeTitle(title) {
        var slug = "";
        // Change to lower case
        var titleLower = title.toLowerCase();
        // Letter "e"
        slug = titleLower.replace(/e|é|è|ẽ|ẻ|ẹ|ê|ế|ề|ễ|ể|ệ/gi, 'e');
        // Letter "a"
        slug = slug.replace(/a|á|à|ã|ả|ạ|ă|ắ|ằ|ẵ|ẳ|ặ|â|ấ|ầ|ẫ|ẩ|ậ/gi, 'a');
        // Letter "o"
        slug = slug.replace(/o|ó|ò|õ|ỏ|ọ|ô|ố|ồ|ỗ|ổ|ộ|ơ|ớ|ờ|ỡ|ở|ợ/gi, 'o');
        // Letter "u"
        slug = slug.replace(/u|ú|ù|ũ|ủ|ụ|ư|ứ|ừ|ữ|ử|ự/gi, 'u');
        // Letter "d"
        slug = slug.replace(/đ/gi, 'd');
        // Letter ","
        slug = slug.replace(/,/gi, '');
        // Trim the last whitespace
        slug = slug.replace(/\s*$/g, '');
        // Change whitespace to "-"
        slug = slug.replace(/\s+/g, '-');
        
        return slug;
    }
  },
}
</script>