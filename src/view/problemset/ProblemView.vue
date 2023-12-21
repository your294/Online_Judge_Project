<template>
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">Question</div>
            </div>
        </div>
        <div class="col">
            <div class="card" data-bs-theme="dark">
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
                    <CodeEditor/>
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
import { ref } from 'vue';

const lang = ref("C++");
</script>

<style scoped>
.interval {
    margin: 0 20px 0 20px;
}
</style>