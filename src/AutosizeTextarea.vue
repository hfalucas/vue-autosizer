<template>
<textarea class="v-autosize-textarea" v-bind="$attrs" v-on="listeners" :value="value"></textarea>
</template>

<script>
export default {
    name: 'AutosizeTextarea',

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
                this.resize(event)
            }

            return { ...this.$listeners, input }
        }
    },

    mounted () {
        this.$nextTick(_ => {
            this.$el.setAttribute('style', `height: ${this.$el.scrollHeight}px`)
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
            target.style.height = '1px'
            target.style.height = `${target.scrollHeight}px`
        }
    }
}
</script>
