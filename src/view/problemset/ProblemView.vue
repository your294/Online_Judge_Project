<template>
    <div class="row">
        <div class="col">
            <div class="card">
                <div class="card-body">Question</div>
            </div>
        </div>
        <div class="col">
            <div class="card">
                <div class="card-body">
                    <CodeEditor/>
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script setup lang="ts">
import CodeEditor from '@/components/CodeEditor.vue';
</script>