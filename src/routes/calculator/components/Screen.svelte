<script lang=ts>
    export let value: string;
    export let small: boolean = false;
    $: fontSize = value.length > 20 ? 'small' : `s-${value.length}`;
</script>

<main>
    <div class={`screen ${fontSize}` }>
        <span class:small>{value}</span>
    </div>
</main>

<style>
    .screen{
        display: flex;
        background-color: aliceblue;
        width: 190px;
        flex: 1;
        justify-content: flex-end;
        align-items: center;
        padding: 10px 5px;
        font-size: 30px;
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        overflow: hidden;
    }
    .s-14 {font-size: 1.5rem;}
    .s-15 {font-size: 1.35rem;}
    .s-16 {font-size: 1.25rem;}
    .s-17 {font-size: 1.15rem;}
    .s-18 {font-size: 1.07rem;}
    .s-19 {font-size: 1.0rem;}
    .s-20 {font-size: 0.93rem;}

    .small{
        font-size: 0.6rem;
    }
</style>