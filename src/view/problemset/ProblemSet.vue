<template>
    <div>
        <form class="row g-3">
            <label for="inputId" class="col-sm-1 col-form-label col-form-label-sm">题目ID</label>
            <div class="col-sm-1">
                <input v-model="ID" type="text" id="inputId" class="form-control" placeholder="1">
            </div>
            <label for="inputName" class="col-sm-1 col-form-label col-form-label-sm">题名</label>
            <div class="col-sm-3">
                <input v-model="Name" type="text" class="form-control" placeholder="两数之和">
            </div>
            <div class="col-auto">
                <button @click.stop.prevent="SearchByIdOrName(ID, Name)" type="submit" class="btn btn-primary">Search</button>
            </div>
        </form>
        <table class="table table-striped" data-bs-theme="dark">
            <thead>
                <th scope="col">状态</th>
                <th scope="col">题目</th>
                <th scope="col">题解</th>
                <th scope="col">通过率</th>
                <th scope="col">难度</th>
            </thead>
            <tbody>
                <tr v-for="problem in problem_array">
                    <td :class="getClassForPass(problem.state)">{{ problem.state === true ? "Pass" : "" }}</td>
                    <td>
                        <router-link :to="problem.link">{{ problem.name }}</router-link>
                    </td>
                    <td>{{ problem.resolve }}</td>
                    <td>{{ problem.pass }}</td>
                    <td :class="getClassForDifficulty(problem.difficulty)">{{ problem.difficulty }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue';

const ID = ref(1);
const Name = ref("两数之际")

interface problem {
    state: boolean,
    name: string,
    link: string | object,
    resolve: number,
    pass: string,
    difficulty: string
}

let problem_array: Ref<problem[]> = ref([
    {
        state: true,
        name: "2828.判别首字母大小",
        link: {name: "problemView"},
        resolve: 119,
        pass: "86.1%",
        difficulty: "困难"
    },
    {
        state: false,
        name: "1.两数之和",
        link: "https://leetcode.cn/problems/two-sum/",
        resolve: 23380,
        pass: "53.1%",
        difficulty: "简单"
    },
    {
        state: false,
        name: "2.三数之和",
        link: "https://leetcode.cn/problems/two-sum/",
        resolve: 13380,
        pass: "47.1%",
        difficulty: "中等"
    },
    {
        state: false,
        name: "1.两数之和",
        link: "https://leetcode.cn/problems/two-sum/",
        resolve: 23380,
        pass: "53.1%",
        difficulty: "简单"
    },
    {
        state: true,
        name: "2828.判别首字母大小",
        link: "https://leetcode.cn/problems/check-if-a-string-is-an-acronym-of-words/?envType=daily-question&envId=2023-12-20",
        resolve: 119,
        pass: "86.1%",
        difficulty: "简单"
    },
])

function getClassForDifficulty(difficulty: string) {
    return {
        'table-danger': difficulty === '困难',
        'table-warning': difficulty === '中等',
        'table-info': difficulty === '简单',
    }
}

function getClassForPass(pass: boolean) {
    return {
        'success': pass === true
    };
}

/**
 * from the backend to get the problemList
 * 
 */
function getProblemList() {
    return null;
}


function SearchByIdOrName(id: number, name: string) {
    console.log(id + name);
    return null;
}




</script>


<style scoped>

.success {
    color: rgba(106,197,119);
}

</style>