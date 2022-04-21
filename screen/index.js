import { ref, onMounted, onUnmounted, computed } from 'vue'
let windowWidth = ref(window.innerWidth)
onMounted(()=> windowWidth.addEventListener('resize',(e)=>{
    e.preventDefault();
    windowWidth.value = window.innerWidth
}))
onUnmounted(()=> windowWidth.addEventListener('resize',(e)=>{
    e.preventDefault();
    windowWidth.value = window.innerWidth
    
}))
const type = computed(() => {
    if (windowWidth.value < 640) return 'mob'
    else if (widthWin.value >= 640 && windowWidth.value <= 767) return 'sm'
    else if(widthWin.value >= 768 && windowWidth.value <= 1023) return 'md'
    else if(widthWin.value >= 1024) return 'lg'
    return null
  })
const width = computed(() => windowWidth.value)
export default {width, type}
///const width, const computed
// if (windowWidth.value < 550) return 'xs'
//     if (windowWidth.value >= 550 && windowWidth.value < 1200) return 'md'
//     if (windowWidth.value >= 1200) return 'lg'
//     return null; // This is an unreachable line, simply to keep eslint happy.
