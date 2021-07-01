<template>
    <!-- Filters: Category -->
    <fieldset class="margin-bottom-md">
        <legend class="text-sm margin-bottom-sm">Category</legend>
        <ul class="flex flex-column gap-xxxs">
            <li>
                <input value="personal" class="checkbox" type="checkbox" id="personal">
                <label class="text-sm margin-left-xxs" for="personal">Personal</label>
            </li>
            <li>
                <input value="business" class="checkbox" type="checkbox" id="business">
                <label class="text-sm margin-left-xxs" for="business">Business</label>
            </li>
        </ul>
    </fieldset>

    <!-- Filters: Type -->
    <fieldset>
        <legend class="text-sm margin-bottom-sm">Type</legend>
        <ul class="flex flex-column gap-xxxs">
            <li>
                <input value="page" class="checkbox" type="checkbox" id="Page">
                <label class="text-sm margin-left-xxs" for="Page">Page</label>
            </li>
            <li>
                <input value="faqs" class="checkbox" type="checkbox" id="faqs">
                <label class="text-sm margin-left-xxs" for="faqs">FAQs</label>
            </li>
            <li>
                <input value="post" class="checkbox" type="checkbox" id="post">
                <label class="text-sm margin-left-xxs" for="post">Post</label>
            </li>
        </ul>
    </fieldset>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>
