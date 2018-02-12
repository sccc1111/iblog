<template>
    <h1>
    <a name="hello-world" href="#hello-world">
        Hello world!
    </a>
    </h1>
    <anchored-heading :level="1">Hello world!</anchored-heading>
</template>

<script>
    export default {
        methods: {
            handleStart() {
                this.$Modal.info({
                    title: 'Bravo',
                    content: 'Now, enjoy the convenience of iView.'
                });
            }
        }
    };
</script>