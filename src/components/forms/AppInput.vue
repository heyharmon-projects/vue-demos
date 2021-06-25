<template>
    <div class="form-input">
        <label v-if="label" class="form-label margin-bottom-xxs" for="input-name">{{ label }}</label>
        <input
            :type="type"
            :value="modelValue"
            :placeholder="placeholder"
            @input="$emit('update:modelValue', $event.target.value)"
            class="form-control width-100%"
        >
        <p v-if="hint" class="text-xs color-contrast-medium margin-top-xxs">{{ hint }}</p>
    </div>
</template>

<script>
export default {
    setup() {

    },

    props: {
        modelValue: {
            type: [String, Number],
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String,
            default: ''
        },
        hint: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
</style>
