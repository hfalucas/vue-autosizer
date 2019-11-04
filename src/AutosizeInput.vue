<template>
<label class="v-autosize-input__container">
    <div v-text="value" class="v-autosize-input__shadow" tabindex="-1"></div>
    <input type="text" ref="input" v-bind="$attrs" :value="value" v-on="listeners" class="v-autosize-input__field">
</label> <!-- end v-autosize-input__container -->
</template>

<script>
export default {
    name: 'AutosizeInput',

    inheritAttrs: false,

    props: {
        value: {
            required: true
        }
    },

    computed: {
        /**
         * Forward all parent event listeners and override
         * the input listener default behavior
         *
         * @return {Object}
         */
        listeners () {
            const input = (event) => {
                this.$emit('input', event.target.value)
            }

            return { ...this.$listeners, input }
        }
    }
}
</script>

