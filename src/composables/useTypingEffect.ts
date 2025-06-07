import { ref, onMounted, onUnmounted } from 'vue'

/**
 * Essa composable vai ser utilizada para textos que podem possuir um efeito de digitação
 */
export function useTypingEffect(fullText: string, pause = 1500, speed = 50, deleteSpeed = 30) {
    const displayedText = ref('')
    let isDeleting = false
    let charIndex = 0
    let timeoutId: number

    const typeEffect = () => {
        if (!isDeleting) {
            displayedText.value = fullText.slice(0, charIndex++)
            if (charIndex > fullText.length) {
                isDeleting = true
                timeoutId = window.setTimeout(typeEffect, pause)
                return
            }
        } else {
            displayedText.value = fullText.slice(0, charIndex--)
            if (charIndex < 0) {
                isDeleting = false
                timeoutId = window.setTimeout(typeEffect, 500)
                return
            }
        }
        timeoutId = window.setTimeout(typeEffect, isDeleting ? deleteSpeed : speed)
    }

    onMounted(() => {
        typeEffect()
    })

    onUnmounted(() => {
        clearTimeout(timeoutId)
    })

    return {
        displayedText
    }
}