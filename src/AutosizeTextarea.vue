<template>
<textarea class="v-autosize-textarea" v-bind="$attrs" v-on="listeners" :value="value" :style="styles"></textarea>
</template>

<script>
export default {
    name: 'AutosizeTextarea',

    props: {
        value: {
            required: true
        }
    },

    data: () => ({
        styles: {}
    }),

    computed: {
        /**
         * Forward all parent event listeners and override
         * the input listener default behavior
         *
         * @return {Object}
         */
        listeners () {
            const input = (event) => {
                this.resize(event)
                this.$emit('input', event.target.value)
            }

            return { ...this.$listeners, input }
        }
    },

    mounted () {
        this.$nextTick(_ => {
            this.styles = { 'height': `${this.$el.scrollHeight}px` }
        })
    },

    methods: {
        /**
         * Updates the textarea height
         *
         * @param  {Object} event.target
         * @return {void}
         */
        resize ({ target }) {
            target.style.height = 'auto'
            target.style.height = `${target.scrollHeight}px`
        }
    }
}
</script>
