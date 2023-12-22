<template>
    <div @keydown="handleKeyDown">
        <div ref="editor" class="monaco-editor"></div>
    </div>
</template>

<script setup lang="ts">
import * as monaco from 'monaco-editor'
import { ref, watch, Ref, onMounted, onBeforeUnmount } from 'vue';
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

// const emit = defineEmits(['updateSave'])


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

// 在组件销毁前清理编辑器
onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.dispose();
  }
});

function initEditor() {
    const element: Element = document.getElementsByClassName("monaco-editor")[0];
    const htmlElement: HTMLElement = <HTMLElement>element;
    editor.value = monaco.editor.create(htmlElement, {
        value: props.code,
        language: props.language,
        theme: 'vs-dark'
    });
}

function handleKeyDown(event: any) {
  if (event.ctrlKey && event.key === 's') {
    // emit("updateSave", editor.value?.getValue())
    event.preventDefault(); // 阻止默认保存行为

    if (editor) {
      // 在这里执行保存操作，你可以调用相应的保存函数或者触发保存操作
      saveChanges();
    }
  }


}

function saveChanges() {
  if (editor) {
    const currentCode = editor.value?.getValue();
    const modifiedCode = modifyCode(currentCode); // Your logic to modify the code

    editor.value?.setValue(modifiedCode);
  }
}

function modifyCode(code: string | undefined) {
  // Your logic to modify the code
  // For example, appending a comment at the end of the code
  return code + '\n// Modification done after saving';
}


</script>

<!-- 这里100%的高度貌似很小，需要最小高度加以限制 -->
<style scoped>
.monaco-editor {
    width: 500px;
    height: 100%;
    min-height: 900px;
}
</style>