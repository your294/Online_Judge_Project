<template>
    <div class="row">
        <div class="col">
            <div class="card card-interval" data-bs-theme="dark">
                <div class="card-body" id="questionContent">
                    Question

                </div>
            </div>
        </div>
        <div class="col">
            <div class="card card-interval" data-bs-theme="dark">
                <div class="row">
                    <div class="dropdown interval" data-bs-theme="dark">
                        <button class="btn btn-sm btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {{ lang }}
                        </button>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" @click="lang='C++'">C++</a></li>
                            <li><a class="dropdown-item" @click="lang='Java'">Java</a></li>
                            <li><a class="dropdown-item" @click="lang='JavaScript'">JavaScript</a></li>
                            <li><a class="dropdown-item" @click="lang='TypeScript'">TypeScript</a></li>
                            <li><a class="dropdown-item" @click="lang='Python3'">Python3</a></li>
                        </ul>
                    </div>
                </div>
                <div class="card-body">
                    <CodeEditor :config="{code: Code,language: lang}" v-model="Code"/>
                    <div class="row justify-content-end">
                        <div class="col-auto">
                            <button type="button" class="btn btn-light btn-sm">execute</button>
                        </div>
                        <div class="col-auto">
                            <button type="button" class="btn btn-primary btn-sm">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script setup lang="ts">
import CodeEditor from '@/components/CodeEditor.vue';
import axios  from 'axios'
import { onMounted, ref } from 'vue';
import { Marked }  from 'marked'

const lang = ref("typescript");
const Code = ref("function hello() {\n\talert('Hello world!');\n}")



// 组件初始化渲染且已经创建DOM节点
onMounted(() => {
    let question: string = " ";
    getTestProblemData().then((data) => {
        question = <string>data;
        renderMarkdown(question);
    });
})

/**
 * 同步请求测试的题目描述数据
 */
function getTestProblemData() {
    return new Promise((resolve, reject) => {
        const problemId: number = 1;
        const uri: string = 'http://localhost:8080/api/problems/' + problemId;
        axios.get(uri)
            .then((response) => {
                resolve(response.data);
            })
            .catch((e) => {
                console.error(e);
                reject("");
            })
    })
}

function renderMarkdown(question: string) {
    const marked = new Marked({
        gfm: true
    });
    document.getElementById('questionContent')!.innerHTML = 
       <string>marked.parse(question) 
}
</script>

<style scoped>
.interval {
    margin: 0 20px 0 20px;
}

.card-interval {
    margin: 5px 0 0 0;
}

.card {
    height: 100%;
}

.card-body {
    height: 100%;
}


</style>