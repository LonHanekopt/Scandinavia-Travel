<template>
    <div id="hotel" ref="hotel" class="hotel">

    </div>
</template>

<script>
export default {
    props: ['type', 'destination'],
    mounted() {
        if (this.type === 'list') {
            const script = document.createElement('script');
            let scriptsource = ''

            switch (this.destination) {
                case 'Sweden':
                    scriptsource = `https://tp.media/content?currency=sek&trs=317751&shmarker=509924&type=compact&host=search.hotellook.com&locale=en&limit=10&powered_by=true&nobooking=&id=8889&categories=center&primary=%23ff8e00&special=%23e0e0e0&promo_id=4026&campaign_id=101`
                    break;
                case 'Finland':
                    scriptsource = `https://tp.media/content?currency=sek&trs=317751&shmarker=509924&type=compact&host=search.hotellook.com&locale=en&limit=10&powered_by=true&nobooking=&id=2547&categories=center&primary=%23ff8e00&special=%23e0e0e0&promo_id=4026&campaign_id=101`
                    break;
                case 'Denmark':
                    scriptsource = `https://tp.media/content?currency=sek&trs=317751&shmarker=509924&type=compact&host=search.hotellook.com&locale=en&limit=10&powered_by=true&nobooking=&id=1410&categories=center&primary=%23ff8e00&special=%23e0e0e0&promo_id=4026&campaign_id=101`
                    break;
                case 'Norway':
                    scriptsource = `https://tp.media/content?currency=sek&trs=317751&shmarker=509924&type=compact&host=search.hotellook.com&locale=en&limit=10&powered_by=true&nobooking=&id=9166&categories=tophotels&primary=%23ff8e00&special=%23e0e0e0&promo_id=4026&campaign_id=101`
                    break;
                default:
                    break;
            }

            script.src = scriptsource;
            script.async = true;
            script.charset = 'utf-8';
            this.$refs['hotel'].appendChild(script);
        } else if (this.type === 'search') {
            const script = document.createElement('script');
            script.src = 'https://tp.media/content?currency=sek&trs=317751&shmarker=509924&search_host=search.hotellook.com&locale=en&powered_by=true&draggable=true&disable_zoom=false&show_logo=false&scrollwheel=true&color=%2321f166&contrast_color=%23ffffff&width=1000&height=500&lat=59.332604&lng=18.065243&zoom=14&radius=60&stars=0&rating_from=0&rating_to=10&promo_id=4285&campaign_id=101'
            script.async = true;
            script.charset = 'utf-8';
            this.$refs['hotel'].appendChild(script);
        }

    }
}
</script>

<style scoped></style>