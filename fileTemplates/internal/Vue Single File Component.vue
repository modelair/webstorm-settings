<template>
    <flex>
    #[[$END$]]#
    </flex>
</template>

<script>
const name = '${COMPONENT_NAME}'
const props = []
const mixins = []

export default {
    name,
    props,
    mixins
}
</script>

<style lang="scss" type="text/scss" rel="stylesheet/scss">
    @import "../style/mixins";
    @mixin component {
        
    }
    .${COMPONENT_NAME} {
        @include component;
    }
</style>