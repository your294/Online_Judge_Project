<template>
    <div>
        <div ref="editor" class="monaco-editor"></div>
    </div>
</template>

<script setup lang="ts">
import * as monaco from 'monaco-editor'
import { ref, watch, Ref, onMounted } from 'vue';
import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import jsonWorker from 'monaco-editor/esm/vs/language/json/json.worker?worker'
import cssWorker from 'monaco-editor/esm/vs/language/css/css.worker?worker'
import htmlWorker from 'monaco-editor/esm/vs/language/html/html.worker?worker'
import tsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

self.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'json') {
      return new jsonWorker()
    }
    if (label === 'css' || label === 'scss' || label === 'less') {
      return new cssWorker()
    }
    if (label === 'html' || label === 'handlebars' || label === 'razor') {
      return new htmlWorker()
    }
    if (label === 'typescript' || label === 'javascript') {
      return new tsWorker()
    }
    return new editorWorker()
  }
}

const editor: Ref<monaco.editor.IStandaloneCodeEditor | undefined> = ref();

const emit = defineEmits(['update:code'])

const props = defineProps({
    code: {
        type: String,
        default: "function hello() {\n\talert('Hello world!');\n}",
    }
});

// 在初始化完DOM节点后渲染基本的编辑器
onMounted(() => {
    initEditor();
})

function initEditor() {
    const element: Element = document.getElementsByClassName("monaco-editor")[0];
    const htmlElement: HTMLElement = <HTMLElement>element;
    editor.value = monaco.editor.create(htmlElement, {
        value: props.code,
        language: 'typescript',
        theme: 'vs-dark'
    });
    // // 监听编辑器内容变化事件
    // editor.value.onDidChangeModelContent(() => {
    //     emit('update:code', editor.value?.getValue())
    // })
}

// watch(() => editor.value?.getValue(), (code, newCode) => {
//     if (newCode !== undefined) {
//         editor.value?.setValue(newCode);
//     }
   
// })


</script>

<style scoped>
.monaco-editor {
    width: 500px;
    height: 500px;
}
</style>