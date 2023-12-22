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

// const cardHeight = document.querySelector('.card')!.getBoundingClientRect().height;
// console.log("cardHeight" + cardHeight);
// const card_body: HTMLElement = <HTMLElement>document.querySelector('.card-body');
// card_body.style.height = `${cardHeight}`;

const editor: Ref<monaco.editor.IStandaloneCodeEditor | null> = ref(null);


const props = defineProps({
    code: {
        type: String,
        default: "function hello() {\n\talert('Hello world!');\n}",
    },
    language: {
      type: String,
      default: 'typescript'
    }
});

// 在初始化完DOM节点后渲染基本的编辑器
onMounted(() => {
    initEditor();
})
// 留下props.code留着等父组件传递
const code = ref(props.code);
// 防止循环监听事件
let isUpdatingCode = false;

function initEditor() {
    const element: Element = document.getElementsByClassName("monaco-editor")[0];
    const htmlElement: HTMLElement = <HTMLElement>element;
    editor.value = monaco.editor.create(htmlElement, {
        value: props.code,
        language: props.language,
        theme: 'vs-dark'
    });

    // 监听编辑器内容变化事件
    editor.value.onDidChangeModelContent(() => {
      if (!isUpdatingCode) {
        code.value = editor.value!.getValue();
      }
    })
}

watch(() => props.code, (newCode) => {
  if (editor && newCode !== editor.value!.getValue()) {
    isUpdatingCode = true;
    editor.value?.setValue(newCode || '');
    isUpdatingCode = false;
  }
})



</script>

<!-- 这里100%的高度貌似很小，需要最小高度加以限制 -->
<style scoped>
.monaco-editor {
    width: 500px;
    height: 100%;
    min-height: 900px;
}
</style>